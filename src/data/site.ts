// Edit your personal details here.

export const site = {
  name: "Sakina Kulsum",
  role: "Full-Stack Developer",
  typingLines: [
    "Full-Stack Developer",
    "React & Django Developer",
    "Python & REST API Developer",
  ],
  tagline:
    "I build and ship full-stack web apps, from secure APIs to clean interfaces.",
  about:
    "I'm a full-stack developer with an MCA from Visvesvaraya Technological University (CGPA 8.98). I enjoy building complete web applications, from React interfaces and REST APIs to secure authentication and deployment. My projects include FormMetrics, a form builder with analytics; VeriVault, a document vault that verifies file integrity; and a gestational diabetes risk prediction app, with a related paper published at ECTST-2025. I'm looking for a full-stack developer role where I can keep building and learning.",
  email: "sakinakulsum82@gmail.com",
  github: "https://github.com/kulsum2001",
  linkedin: "https://www.linkedin.com/in/sakinakulsum/",
  resume: "/resume.pdf", // the PDF lives at public/resume.pdf
  skills: {
    Frontend: ["HTML5", "CSS3", "JavaScript", "React.js", "Recharts"],
    Backend: [
      "Python",
      "Django",
      "Django REST Framework",
      "Flask",
      "REST API Design",
    ],
    "Auth & Security": ["JWT", "TOTP 2FA", "SHA-256 hashing", "Rate Limiting"],
    Databases: ["PostgreSQL", "SQL"],
    "DevOps & Deployment": ["Docker", "GitHub Actions (CI/CD)", "Gunicorn", "Render"],
    Tools: ["Git", "GitHub", "VS Code", "Postman"],
  } as Record<string, string[]>,
  experience: [
    {
      title: "Python AI/ML Developer Intern",
      org: "Dotch Endeavors",
      period: "Nov 2024 - Jan 2025",
      detail:
        "Built an NLP classification model reaching 92.07% accuracy on Amazon Alexa reviews, including data preprocessing and feature engineering, and validated the results with exploratory data analysis and cross-validation.",
    },
    {
      title: "Published Research Paper",
      org: "ECTST-2025",
      period: "Aug 2025",
      detail: "\"Leveraging ML for Early Prediction of Gestational Diabetes Mellitus\".",
    },
    {
      title: "Master of Computer Applications (MCA)",
      org: "Visvesvaraya Technological University",
      period: "Feb 2024 - Nov 2025",
      detail: "CGPA: 8.98",
    },
    {
      title: "Bachelor of Computer Applications (BCA)",
      org: "Maharani Science College for Women",
      period: "Jul 2019 - Sep 2022",
      detail: "CGPA: 8.69",
    },
  ],
};
