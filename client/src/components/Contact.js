import React, { useState } from 'react';
import './Contact.css';

const SERVICES = ['Film Production', 'Sound Design', 'Music Composition', 'Post Production', 'Other'];
const EMPTY = { name: '', email: '', service: '', message: '' };

const API_URL = import.meta.env.VITE_API_URL || '';

function validate(form) {
  const e = {};
  if (!form.name.trim()) e.name = 'Name required';
  if (!form.email.trim()) e.email = 'Email required';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Invalid email';
  if (!form.message.trim()) e.message = 'Message required';
  return e;
}

export default function Contact() {
  const [form, setForm]     = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');
  const [apiMsg, setApiMsg] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
    if (errors[name]) setErrors(er => ({ ...er, [name]: '' }));
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const errs = validate(form);
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }

    setStatus('loading');

    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const text = await res.text();

      if (!text) {
        throw new Error("Empty response from server");
      }

      let data;
      try {
        data = JSON.parse(text);
      } catch (err) {
        console.error("Invalid JSON:", text);
        throw new Error("Server returned invalid response");
      }

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus('success');
      setApiMsg(data.message);
      setForm(EMPTY);

    } catch (err) {
      console.error("Frontend error:", err);
      setStatus('error');
      setApiMsg(err.message);
    }
  };

  if (status === 'success') {
    return (
      <section className="contact" id="contact">
        <div className="container">
          <div className="contact-layout">
            <ContactInfo />
            <div className="contact-form-wrap">
              <div className="form-success">
                <div className="success-mark">✓</div>
                <h3>Message sent.</h3>
                <p>{apiMsg || "We'll get back to you within one business day."}</p>
                <button className="btn-outline" onClick={() => setStatus('idle')}>
                  Send another message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-layout">
          <ContactInfo />

          <div className="contact-form-wrap">
            {status === 'error' && (
              <div className="form-status error">⚠ {apiMsg}</div>
            )}

            <form onSubmit={handleSubmit} noValidate>
              <div className="form-grid">
                <div className="field">
                  <label>Full Name *</label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                  />
                  {errors.name && <span className="field-error">{errors.name}</span>}
                </div>

                <div className="field">
                  <label>Email *</label>
                  <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                  />
                  {errors.email && <span className="field-error">{errors.email}</span>}
                </div>
              </div>

              <div className="field">
                <label>Service</label>
                <select name="service" value={form.service} onChange={handleChange}>
                  <option value="">Select...</option>
                  {SERVICES.map(s => <option key={s}>{s}</option>)}
                </select>
              </div>

              <div className="field">
                <label>Message *</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                />
                {errors.message && <span className="field-error">{errors.message}</span>}
              </div>

              <button disabled={status === 'loading'}>
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactInfo() {
  return (
    <div>
      <h2>Contact Us</h2>
      <p>We'll reply within 24 hours.</p>
    </div>
  );
}