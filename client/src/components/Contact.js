import React, { useState } from 'react'; import './Contact.css'; 
const SERVICES = ['Film Production', 'Sound Design', 'Music Composition', 'Post Production', 'Other']; 
const EMPTY = { name: '', email: '', service: '', message: '' };
function validate(form) { 
const e = {}; if (!form.name.trim()) e.name = 'Name required';
if (!form.email.trim()) e.email = 'Email required';
else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Invalid email'; 
if (!form.message.trim()) e.message = 'Message required'; 
return e; 
} export default function Contact() 
{ const [form, setForm] = useState(EMPTY); const [errors, setErrors] = useState({});
const [status, setStatus] = useState('idle');
const [apiMsg, setApiMsg] = useState(''); 
const handleChange = e => { const { name, value } = e.target; setForm(f => ({ ...f, [name]: value })); 
if (errors[name]) setErrors(er => ({ ...er, [name]: '' })); };
const handleSubmit = async e => { e.preventDefault(); const errs = validate(form); 
if (Object.keys(errs).length) { 
setErrors(errs); return; } setStatus('loading'); 
try { const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form), }); 
const data = await res.json(); 
if (!res.ok) throw new Error(data.error || 'Something went wrong.'); 
setStatus('success'); 

setApiMsg(data.message); setForm(EMPTY);
} catch (err) { 
setStatus('error'); setApiMsg(err.message); } };
if (status === 'success') { return ( <section className="contact" id="contact">
    <div className="container">
        <div className="contact-layout">
            <ContactInfo />
            <div className="contact-form-wrap">
                <div className="form-success">
                    <div className="success-mark">✓</div>
                    <h3>Message sent.</h3>
                    <p>{apiMsg || "We'll get back to you within one business day."}</p> <button className="btn-outline" onClick={()=> setStatus('idle')}> Send another message </button>
                </div>
            </div>
        </div>
    </div>
</section> ); } return ( <section className="contact" id="contact">
    <div className="container">
        <div className="contact-layout">
            <ContactInfo />
            <div className="contact-form-wrap reveal" style={{ transitionDelay: '0.12s' }}> {status === 'error' && ( <div className="form-status error" role="alert">⚠ {apiMsg}</div> )} <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    <div className="form-grid">
                        <div className="field"> <label htmlFor="name">Full Name *</label> <input id="name" name="name" type="text" value={form.name} onChange={handleChange} placeholder="Arjun Sharma" className={errors.name ? 'invalid' : '' } /> {errors.name && <span className="field-error">{errors.name}</span>} </div>
                        <div className="field"> <label htmlFor="email">Email Address *</label> <input id="email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@company.com" className={errors.email ? 'invalid' : '' } /> {errors.email && <span className="field-error">{errors.email}</span>} </div>
                    </div>
                    <div className="field"> <label htmlFor="service">Service</label> <select id="service" name="service" value={form.service} onChange={handleChange}>
                            <option value="">Select a service…</option> {SERVICES.map(s => <option key={s}>{s}</option>)}
                        </select> </div>
                    <div className="field"> <label htmlFor="message">Project Details *</label> <textarea id="message" name="message" rows={5} value={form.message} onChange={handleChange} placeholder="Tell us about your project, timeline, and goals…" className={errors.message ? 'invalid' : '' } /> {errors.message && <span className="field-error">{errors.message}</span>} </div> <button type="submit" className="btn-primary form-submit" disabled={status==='loading' }> {status === 'loading' ? <><span className="spinner" /> Sending…</> : 'Send Message'} </button>
                </form>
            </div>
        </div>
    </div>
</section> ); } function ContactInfo() { return ( <div className="contact-text reveal"> <span className="eyebrow">Get in Touch</span>
    <h2 className="section-title">Let's Work<br /><em>Together</em></h2>
    <p className="contact-desc"> Tell us about your project. We'll get back within one business day with our thoughts and availability. </p>
    <div className="contact-meta"> {[ ['Location', 'Lower Parel, Mumbai 400013'], ['Email', <a href="mailto:studio@mediaworks.com">studio@mediaworks.com</a>], ['Phone', <a href="tel:+912268001234">+91 22 6800 1234</a>], ['Hours', 'Mon–Sat, 10 am–7 pm IST'], ].map(([label, value]) => ( <div key={label} className="meta-item"> <span className="meta-label">{label}</span> <span className="meta-value">{value}</span> </div> ))} </div>
</div> ); }