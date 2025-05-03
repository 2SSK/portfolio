"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { registerUser } from "@/actions/userActions";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await registerUser({ email, password });
    if (response.success) {
      router.push("/login");
    } else {
      console.error("Registration failed", response.message);
      alert(response.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          name="email"
          value={email}
          required
          className="w-80"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="space-y-2 mt-4">
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          id="password"
          name="password"
          value={password}
          required
          className="w-80"
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <span className="mt-2 text-sm text-muted-foreground">
        already have an account?{" "}
        <a href="/login" className="underline text-blue-500 cursor-pointer">
          login
        </a>
      </span>

      <Button type="submit" className="mt-4 w-full">
        Register
      </Button>
    </form>
  );
};

export default RegisterForm;
