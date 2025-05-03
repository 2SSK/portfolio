import { Metadata } from "next";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { LoginResponse, loginUser, User } from "@/actions/userActions";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Login",
};

export default function page() {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    // Perform login action here
    const user: User = {
      email: email as string,
      password: password as string,
    };

    try {
      const response: LoginResponse = loginUser(user);

      if (response.success) {
        redirect("/dashboard");
      } else {
        console.error("Login failed", response.message);
      }
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  return (
    <div className="max-w-sm h-fit mx-auto mt-16 space-y-6 p-6 border rounded-lg bg-secondary flex flex-col items-center">
      <h2 className="text-3xl font-semibold">Register</h2>
      <form action="">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            name="email"
            required
            className="w-80"
            placeholder="Enter your email"
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
        <span className="mt-2 text-sm text-muted-foreground">
          already have an account?{" "}
          <a href="/login" className="underline text-blue-500 cursor-pointer">
            login
          </a>
        </span>

        <Button className="mt-4 w-full">Register</Button>
      </form>
    </div>
  );
}
