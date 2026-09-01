const nodemailer = require('nodemailer');
const sgMail = require('@sendgrid/mail');

const RECIPIENT = process.env.ENQUIRY_TO_EMAIL || 'business@brandmindz.com';

const escapeHtml = (value = '') => String(value)
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;')
  .replace(/'/g, '&#039;');

const sendEnquiryMail = async ({ enquiryId, stage, data }) => {
  const from = process.env.MAIL_FROM || RECIPIENT;
  const subject = `[Brand Mindz enquiry #${enquiryId}] Step ${stage} of 3 completed`;
  const rows = Object.entries(data)
    .filter(([, value]) => value !== undefined && value !== null && String(value).trim() !== '')
    .map(([key, value]) => `<tr><th align="left" style="padding:6px 12px 6px 0">${escapeHtml(key)}</th><td>${escapeHtml(value)}</td></tr>`)
    .join('');
  const html = `<h2>Contact form progress: step ${stage} of 3</h2><p>Enquiry ID: ${enquiryId}</p><table>${rows}</table>`;
  const text = `Contact form progress: step ${stage} of 3\nEnquiry ID: ${enquiryId}\n\n${Object.entries(data).map(([key, value]) => `${key}: ${value || '-'}`).join('\n')}`;

  if (process.env.SENDGRID_API_KEY) {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    await sgMail.send({ to: RECIPIENT, from, subject, text, html });
    return;
  }

  if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: String(process.env.SMTP_SECURE).toLowerCase() === 'true',
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
    });
    await transporter.sendMail({ to: RECIPIENT, from, subject, text, html });
    return;
  }

  throw new Error('Email is not configured. Set SENDGRID_API_KEY or SMTP_HOST/SMTP_USER/SMTP_PASS.');
};

module.exports = { sendEnquiryMail };
