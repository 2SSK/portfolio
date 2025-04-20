import { Experience } from "@/assets/assets";

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

export default function ExperiencePage() {
  return (
    <div className="flex flex-wrap p-4 gap-4">
      {Experience.map((exp, index) => (
        <Card key={index} className="w-[350px] h-fit">
          <CardHeader>
            <CardTitle>Experience</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="company">Company</Label>
                <Input id="company" value={exp.company} />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="company_url">Company Url</Label>
                <Input id="company_url" value={exp.companyUrl} />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={exp.description}
                  className="h-28"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="position">Position</Label>
                <Input id="position" value={exp.position} />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="start_date">StartDate</Label>
                <Input id="start_date" value={exp.startDate} />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="end_date">End Date</Label>
                <Input id="end_date" value={exp.endDate} />
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
          <CardTitle>Experience</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="company">Company</Label>
              <Input id="company" placeholder="enter company name" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="company_url">Company Url</Label>
              <Input id="company_url" placeholder="enter company page url" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                placeholder="Describe your role & experience"
                className="h-28"
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="position">Position</Label>
              <Input id="position" placeholder="enter your position" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="start_date">StartDate</Label>
              <Input
                id="start_date"
                placeholder="enter start date, e.g: Mar 2025"
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="end_date">End Date</Label>
              <Input
                id="end_date"
                placeholder="enter end date, e.g: Mar 2025"
              />
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
