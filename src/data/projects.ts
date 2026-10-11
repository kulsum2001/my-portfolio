// ADD NEW PROJECTS HERE: copy one block, edit it, save. That's it.
// Screenshots go in /public/projects/ (leave `image` empty to show a gradient placeholder).
// A link is shown only when it is filled in, so leave `live` or `github` empty if you don't have one.

export type Project = {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  image?: string; // e.g. "/projects/formmetrics.png"
};

export const projects: Project[] = [
  {
    title: "FormMetrics",
    description:
      "Full-stack form builder and analytics platform. Drag-and-drop editing with conditional logic, shareable links and QR codes, a quiz mode with automatic scoring, and a dashboard with charts and CSV export.",
    tech: [
      "React",
      "Django REST Framework",
      "PostgreSQL",
      "JWT",
      "Docker",
      "GitHub Actions",
      "Render",
    ],
    github: "https://github.com/kulsum2001/FormMetrics",
    live: "https://formmetrics.onrender.com",
    image: "",
  },
  {
    title: "VeriVault",
    description:
      "Document management system that fingerprints every file with SHA-256 so you can verify it hasn't been altered. Includes a public verification page, two-factor authentication, sharing, search and version history.",
    tech: [
      "Django",
      "REST API",
      "SHA-256",
      "TOTP 2FA",
      "Gunicorn",
      "WhiteNoise",
      "Render",
    ],
    github: "https://github.com/kulsum2001/VeriVault",
    live: "https://verivault-w30w.onrender.com",
    image: "",
  },
  {
    title: "GDM Risk Prediction App",
    description:
      "Web app that predicts gestational diabetes risk with an XGBoost model (89% accuracy) and explains each result with SHAP. Includes user accounts, prediction history, a dashboard, PDF reports and email alerts. A related paper was published at ECTST-2025.",
    tech: ["Flask", "XGBoost", "SHAP", "Resend API", "Gunicorn", "Render"],
    github: "https://github.com/kulsum2001/gdm-prediction-app",
    live: "https://gdm-prediction-app.onrender.com",
    image: "",
  },
  {
    title: "Community Feedback System",
    description:
      "Web-based system where users submit feedback and administrators manage it, with secure login, file uploads and email notifications.",
    tech: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Passport.js",
      "Multer",
      "Nodemailer",
    ],
    github: "https://github.com/kulsum2001/community-feedback-system",
    live: "https://community-feedback-system.onrender.com/",
    image: "",
  },
];
