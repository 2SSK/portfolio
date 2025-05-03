"use client";
import { Bio } from "@/assets/assets";
import BioForm from "@/components/BioForm";

import { useUser } from "@/components/UserProvider";
import { redirect } from "next/navigation";

export default function BioPage() {
  const { loggedIn } = useUser();

  const bioData = {
    name: Bio.name,
    title: Bio.title,
    description: Bio.description,
    image: Bio.image.src,
  };

  if (!loggedIn) {
    redirect("/login");
  }

  return (
    <div className="max-w-xl h-fit mx-auto mt-16 space-y-6 p-6 border rounded-lg bg-secondary">
      <BioForm defaultValues={bioData} />
    </div>
  );
}
