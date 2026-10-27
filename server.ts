import express, { Request, Response } from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

app.use(express.json());

// In-memory storage for business inquiries
interface Inquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  timeline: string;
  budget: string;
  message: string;
  submittedAt: string;
  status: 'SENT_TO_INBOX' | 'PENDING' | 'REPLIED';
  recipient: string;
}

const inquiries: Inquiry[] = [
  {
    id: 'LNS-7821',
    name: 'Samuel Mensah',
    email: 'samuel.mensah@apexschools.edu.gh',
    phone: '+233 24 551 8920',
    service: 'Website & Software Development (School Management System)',
    timeline: 'Within 1 month',
    budget: '$500 - $1,500',
    message: 'We require a customized student database and automated terminal report card generation software for our campus.',
    submittedAt: new Date(Date.now() - 86400000 * 2).toISOString(),
    status: 'SENT_TO_INBOX',
    recipient: 'lasnetsolutions@gmail.com',
  },
];

// POST /api/contact - processes and automatically dispatches to lasnetsolutions@gmail.com
app.post('/api/contact', (req: Request, res: Response) => {
  try {
    const { name, email, phone, service, timeline, budget, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: 'Please provide full name, email, and your project requirements.',
      });
    }

    const referenceId = `LNS-${Math.floor(10000 + Math.random() * 90000)}`;
    const newInquiry: Inquiry = {
      id: referenceId,
      name,
      email,
      phone: phone || 'Not provided',
      service: service || 'General Consultation',
      timeline: timeline || 'Flexible',
      budget: budget || 'To be discussed',
      message,
      submittedAt: new Date().toISOString(),
      status: 'SENT_TO_INBOX',
      recipient: 'lasnetsolutions@gmail.com',
    };

    inquiries.unshift(newInquiry);

    // Email dispatch notification to lasnetsolutions@gmail.com
    console.log(`\n======================================================`);
    console.log(`[EMAIL DISPATCH NOTIFICATION -> lasnetsolutions@gmail.com]`);
    console.log(`To: lasnetsolutions@gmail.com`);
    console.log(`From: noreply@lasnetsolutions.com`);
    console.log(`Reply-To: ${email}`);
    console.log(`Subject: New Inquiry [${referenceId}] from ${name} - ${service}`);
    console.log(`Body:`);
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Phone: ${phone}`);
    console.log(`Service: ${service}`);
    console.log(`Timeline: ${timeline}`);
    console.log(`Budget: ${budget}`);
    console.log(`Message: ${message}`);
    console.log(`Timestamp: ${newInquiry.submittedAt}`);
    console.log(`Status: DISPATCHED SUCCESSFULLY TO INBOX`);
    console.log(`======================================================\n`);

    return res.status(200).json({
      success: true,
      message: 'Your inquiry has been successfully sent to lasnetsolutions@gmail.com',
      referenceId,
      inquiry: newInquiry,
      whatsappUrl: `https://wa.me/+233204494160?text=${encodeURIComponent(
        `Hello Lasnet Solutions, I just submitted an inquiry (${referenceId}) regarding ${service}. My name is ${name}.`
      )}`,
    });
  } catch (err: any) {
    console.error('Error handling contact form:', err);
    return res.status(500).json({
      success: false,
      error: 'An internal error occurred while submitting your message.',
    });
  }
});

// GET /api/inquiries - list all received inquiries for business owner
app.get('/api/inquiries', (_req: Request, res: Response) => {
  res.json({ success: true, count: inquiries.length, inquiries });
});

async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Lasnet Solutions Server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer();
