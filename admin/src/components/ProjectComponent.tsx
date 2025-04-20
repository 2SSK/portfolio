"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ImageUp } from "lucide-react";
import Image, { StaticImageData } from "next/image";

interface ProjectComponentProps {
  image: StaticImageData;
  title: string;
  description: string;
  github: string;
  link: string;
}

const ProjectComponent = ({
  projects,
}: {
  projects: ProjectComponentProps[];
}) => {
  return (
    <>
      {projects.map((project, index) => (
        <Card key={index} className="w-[350px] h-fit">
          <CardHeader>
            <CardTitle>Project</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid w-full items-center gap-4">
              {/* Preview Image */}
              <div className="relative w-full h-56 rounded-md overflow-hidden group cursor-pointer">
                <Image
                  src={project.image}
                  alt="Profile"
                  fill
                  className="object-cover transition-all"
                />
                <div className="absolute inset-0 bg-gray-300/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <ImageUp className="w-6 h-6 text-black" />
                </div>
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  className="absolute inset-0 opacity-0 cursor-pointer"
                />
              </div>

              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="title">Title</Label>
                <Input id="title" value={project.title} onChange={() => {}} />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={project.description}
                  className="h-28"
                  onChange={() => {}}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="github">GitHub</Label>
                <Input id="github" value={project.github} onChange={() => {}} />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="link">Link</Label>
                <Input id="link" value={project.link} onChange={() => {}} />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="destructive">Delete</Button>
            <Button>Update</Button>
          </CardFooter>
        </Card>
      ))}
    </>
  );
};

export default ProjectComponent;
