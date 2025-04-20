import { Socials } from "@/assets/assets";
import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function SocialPage() {
  return (
    <div className="flex flex-wrap p-4 gap-4">
      {Socials.map((social, index) => (
        <Card key={index} className="w-[350px] h-fit">
          <CardHeader>
            <CardTitle>Social Link</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="title">Title</Label>
                <Input id="title" value={social.title} />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="link">Link</Label>
                <Input id="link" value={social.link} />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="destructive">Delete</Button>
            <Button>Update</Button>
          </CardFooter>
        </Card>
      ))}

      <Card className="w-[350px] h-fit">
        <CardHeader>
          <CardTitle>Create Social Link</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="title">Title</Label>
              <Input id="title" placeholder="Add Title" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="link">Link</Label>
              <Input id="link" placeholder="Add Url" />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button className="w-full">Add</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
