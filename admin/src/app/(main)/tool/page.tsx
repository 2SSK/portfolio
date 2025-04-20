import ToolComponent from "@/components/ToolComponent";
import { tools } from "@/assets/assets";

export default function ToolPage() {
  return (
    <div className="w-full h-full flex items-start justify-start gap-10 p-10">
      <ToolComponent label="Programming Languages" tools={tools.languages} />
      <ToolComponent label="Softwares" tools={tools.software} />
      <ToolComponent label="Frameworks" tools={tools.frameworks} />
      <ToolComponent label="Databases" tools={tools.databases} />
    </div>
  );
}
