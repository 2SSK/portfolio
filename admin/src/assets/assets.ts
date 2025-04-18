import image from "./anime-pfp.jpg";
import wallpaper from "./wallpaper.jpg";
import coflowPreview from "./college-preview.png";
import jobPortalPreview from "./jobPortPreview.png";
import collegePreview from "./college-preview.png";
import textEditorPreview from "./texteditor-preview.png";

export const assets = {
  image,
  resume: "./resume_new.pdf",
  wallpaper,
};

export const Bio = {
  name: "Saurav Singh Karmwar",
  image: image,
  title: "Software Engineer",
  description: `<p>Hello! I'm Saurav, a third year undergraduate and software engineer, set to graduate in April 2026. I am actively seeking internships and full-time opportunities. <br/>
  My experties lies in Full-Stack Web-Development and DevOps. I have experience in product development. My resume provides further details about my skills and experience.<br/>
  I would greatly appreciate any suitable openings or referrals you could consider me for.
  </p>`,
};

export const Socials = [
  {
    title: "GitHub",
    link: "https://github.com/2SSK/",
  },
  {
    title: "Twitter",
    link: "https://x.com/_2SSK/",
  },
  {
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/2ssk/",
  },
  {
    title: "Leetcode",
    link: "https://leetcode.com/u/2SSK/",
  },
];

export const languages = [
  "c",
  "c++",
  "Golang",
  "Python",
  "Bash Scripting",
  "JavaScript",
  "TypeScript",
  "Markdown",
];

export const tools = [
  "Linux",
  "NeoVim",
  "VSCode",
  "Vercel",
  "Render",
  "Postman",
  "Compass",
];

export const frameworks = [
  "Reactjs",
  "Nextjs",
  "Nodejs",
  "Expressjs",
  "GoFiber",
];

export const databases = ["MySQL", "mongoDB", "POSTGRESQL"];

export const Projects = [
  {
    iamge: coflowPreview,
    title: "Coflow",
    description:
      "A collaborative platform empowering teams to ideate, plan, and innovate seamlessly on a virtual canvas.",
    github: "https://github.com/2SSK/CoFlow.git",
    link: "https://co-flow-sauravsinghkarmwars-projects.vercel.app/",
  },

  {
    iamge: jobPortalPreview,
    title: "JobFinder",
    description:
      "A modern job portal application built with React, TypeScript, Node.js and MongoDB.",
    github: "https://github.com/2SSK/jobPortal",
    link: "https://indeed-frontend.vercel.app/",
  },
  {
    iamge: collegePreview,
    title: "College Portal",
    description:
      "Built a dynamic college website with multiple pages using ReactJS and TailwindCSS.",
    github: "https://github.com/2SSK/react-college-website.git",
    link: "https://react-college-website.vercel.app/",
  },
  {
    iamge: textEditorPreview,
    title: "TextEditor GUI",
    description:
      "Built a lightweight and functional text editor built using C++ and the FLTK library. This project demonstrates clean, modular design and effective use of modern C++ features for creating GUI-based applications.",
    github: "https://github.com/2SSK/text_editor.git",
    link: "https://github.com/2SSK/text_editor.git",
  },
];

export const Experience = [
  {
    company: "Internshala",
    companyUrl: "https://internshala.com/",
    position: "Web Development Intern",
    startDate: "Mar 2025",
    endDate: "Jun 2025",
    description:
      "Worked as a web development intern, where I developed a full-stack web application using ReactJS and NodeJS. I also gained experience in deploying applications on Render.",
  },
];
