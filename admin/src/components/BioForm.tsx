"use client";

import { useState, useTransition, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { UserRoundPen } from "lucide-react";

export default function BioForm({
  defaultValues,
}: {
  defaultValues: {
    name: string;
    title: string;
    description: string;
    image: string;
  };
}) {
  const [previewUrl, setPreviewUrl] = useState(defaultValues.image);
  const [isPending, startTransition] = useTransition();
  const formRef = useRef<HTMLFormElement>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  const handleSubmit = (formData: FormData) => {
    startTransition(async () => {
      // This is where you’ll call your server action
      // await updateBioWithImage(formData);

      console.log("FormData submitted (mock):");
      for (const [key, val] of formData.entries()) {
        console.log(key, val);
      }

      // formRef.current?.reset();
    });
  };

  return (
    <form
      ref={formRef}
      action={handleSubmit}
      className="space-y-6 flex flex-col items-center justify-center"
    >
      {/* Image Upload + Preview */}
      <div className="relative w-64 h-64 rounded-full overflow-hidden group cursor-pointer">
        <Image
          src={previewUrl}
          alt="Profile"
          fill
          className="object-cover transition-all"
        />
        <div className="absolute inset-0 bg-gray-500/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <UserRoundPen className="w-6 h-6 text-gray-700" />
        </div>
        <input
          type="file"
          name="image"
          accept="image/*"
          className="absolute inset-0 opacity-0 cursor-pointer"
          onChange={handleImageChange}
        />
      </div>

      {/* Name */}
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          name="name"
          defaultValue={defaultValues.name}
          required
          className="w-96"
        />
      </div>

      {/* Title */}
      <div className="space-y-2">
        <Label htmlFor="title">Title</Label>
        <Input
          id="title"
          name="title"
          defaultValue={defaultValues.title}
          required
          className="w-96"
        />
      </div>

      {/* Description */}
      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          name="description"
          defaultValue={defaultValues.description}
          className="w-96 h-36"
          required
        />
      </div>

      <Button type="submit" disabled={isPending} className="w-full">
        {isPending ? "Saving..." : "Update"}
      </Button>
    </form>
  );
}
