import nodemailer from 'nodemailer'

export function getMailer() {
  if (!process.env.SMTP_HOST) return null
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: false,
    auth:
      process.env.SMTP_USER && process.env.SMTP_PASS
        ? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
        : undefined,
  })
}

export async function sendNotification(subject, text) {
  const transporter = getMailer()
  if (!transporter || !process.env.ALERT_EMAIL) return
  await transporter.sendMail({
    from: process.env.SMTP_FROM || 'noreply@customcar.local',
    to: process.env.ALERT_EMAIL,
    subject,
    text,
  })
}
