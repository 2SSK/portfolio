import { Button } from "@/components/ui/button";

export default function ResumePage() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-start p-6">
      <iframe
        src="/resume_new.pdf"
        title="PDF Viewer"
        className="w-[60%] h-[90%]"
      />
      <div className="flex gap-4 mt-4">
        <Button>Upload</Button>
        <Button variant="destructive">Delete</Button>
      </div>
    </div>
  );
}
