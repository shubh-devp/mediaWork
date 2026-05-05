const nodemailer = require("nodemailer");

exports.sendContact = async (req, res) => {
  try {
    const { name, email, service, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: "Name, email, and message are required.",
      });
    }

    if (!process.env.SMTP_HOST) {
      console.log("📧 Contact form submission:", {
        name,
        email,
        service,
        message,
      });

      return res.json({
        success: true,
        message: "Message received (dev mode – no email sent).",
      });
    }

 
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });


    await transporter.sendMail({
      from: `"MediaWorks Contact" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL || process.env.SMTP_USER,
      subject: `New Inquiry from ${name} — ${service || "General"}`,
      html: `
        <h2>New Contact Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Service:</strong> ${service || "Not specified"}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    return res.json({
      success: true,
      message: "Your message has been sent!",
    });

  } catch (err) {
    console.error(" Email Error:", err);

    return res.status(500).json({
      success: false,
      error: "Failed to send email. Please try again.",
    });
  }
};
