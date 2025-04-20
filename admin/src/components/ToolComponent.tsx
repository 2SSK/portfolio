import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface ToolComponentProps {
  label: string;
  tools: string[];
}

const ToolComponent = ({ label, tools }: ToolComponentProps) => {
  return (
    <div className="w-full max-w-xs h-auto md:min-h-116 flex flex-col justify-between border border-gray-800 rounded-md p-4">
      <div className="flex flex-col gap-2">
        <span className="text-center font-semibold text-xl text-blue-500">
          {label}
        </span>
        {tools.map((tool, index) => (
          <div
            key={index}
            className="inline-flex items-center justify-between gap-4 text-base hover:bg-secondary border border-gray-800 rounded-md px-2 py-1"
          >
            <span>{tool}</span>
            <span className="text-red-400 cursor-pointer">x</span>
          </div>
        ))}
      </div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" className="w-full mt-4">
            Add
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add new tool</DialogTitle>
          </DialogHeader>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="title" className="text-right">
              Title
            </Label>
            <Input id="title" placeholder="add tool" className="col-span-3" />
          </div>
          <DialogFooter>
            <Button type="submit">Add</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ToolComponent;
