import { Bio } from "@/assets/assets";
import BioForm from "@/components/BioForm";

export default async function HomePage() {
  const bioData = {
    name: Bio.name,
    title: Bio.title,
    description: Bio.description,
    image: Bio.image.src,
  };

  return (
    <div className="max-w-xl h-fit mx-auto mt-16 space-y-6 p-6 border rounded-lg bg-secondary">
      <BioForm defaultValues={bioData} />
    </div>
  );
}
