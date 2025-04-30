import { Metadata } from "next";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Login",
};

export default function page() {
  return (
    <div className="max-w-lg h-fit mx-auto mt-16 space-y-6 p-6 border rounded-lg bg-secondary flex flex-col items-center">
      <h2 className="text-3xl font-semibold">Login</h2>
      <form action="">
        <div className="space-y-2">
          <Label htmlFor="userid">UserId</Label>
          <Input
            id="userid"
            name="userid"
            required
            className="w-80"
            placeholder="Enter your userid"
          />
        </div>
        <div className="space-y-2 mt-4">
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            name="password"
            required
            className="w-80"
            placeholder="Enter your password"
          />
        </div>

        <Button className="mt-10 w-full">Login</Button>
      </form>
    </div>
  );
}
