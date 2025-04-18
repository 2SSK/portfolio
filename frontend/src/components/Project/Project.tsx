import Link from "./Link";

import coflowPreview from "/images/projects/coflow-preview.png";
import collegePreview from "/images/projects/college-preview.png";
import textEditorPreview from "/images/projects/texteditor-preview.png";
import jobportalPreview from "/images/projects/jobportal_preview.png";

export default function Project() {
  return (
    <div className="mt-4 md:ml-10 flex flex-col gap-4">
      <span className="md:hidden text-2xl font-bold text-[#bb9af7] mt-4">
        Projects:
      </span>
      <Link
        image={coflowPreview}
        github="https://github.com/2SSK/CoFlow.git"
        href="https://co-flow-sauravsinghkarmwars-projects.vercel.app/"
        title="Coflow"
        description="A collaborative platform empowering teams to ideate, plan, and innovate seamlessly on a virtual canvas."
      />
      <Link
        image={jobportalPreview}
        github="https://github.com/2SSK/jobPortal.git"
        href="https://indeed-frontend.vercel.app/"
        title="JobPortal"
        description="A job portal website that connects job seekers with employers, providing a platform for job listings, applications, and recruitment."
      />
      <Link
        image={collegePreview}
        github="https://github.com/2SSK/react-college-website.git"
        href="https://react-college-website.vercel.app/"
        title="CollegePortal"
        description="Built a dynamic college website with multiple pages using ReactJS and TailwindCSS."
      />
      <Link
        image={textEditorPreview}
        github="https://github.com/2SSK/text_editor.git"
        href="https://github.com/2SSK/text_editor.git"
        title="TextEditor GUI"
        description="Built a lightweight and functional text editor built using C++ and the FLTK library. This project demonstrates clean, modular design and effective use of modern C++ features for creating GUI-based applications."
      />
    </div>
  );
}
