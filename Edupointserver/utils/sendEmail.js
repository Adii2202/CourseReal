import { createTransport } from "nodemailer";

export const sendEmail = async (to, subject, text) => {
  const transporter = createTransport({
    host: "13.201.104.94", // Public IP of your EC2 instance
    port: 2500, // Port your SMTP server is listening on
    secure: false, // Set to true if using SSL/TLS
    tls: {
      rejectUnauthorized: false, // This is for testing, in production, handle this properly
    },
  });

  await transporter.sendMail({
    to,
    subject,
    text,
    from: "myid@gmail.com",
  });
};
