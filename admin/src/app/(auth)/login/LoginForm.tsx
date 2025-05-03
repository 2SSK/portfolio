"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { LoginResponse, loginUser } from "@/actions/userActions";
import { useRouter } from "next/navigation";
import { useUser } from "@/components/UserProvider";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { setLoggedIn } = useUser();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response: LoginResponse = await loginUser({ email, password });
    if (response.success) {
      setLoggedIn(true);
      router.push("/");
    } else {
      console.error("Login failed", response.message);
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
          required
          className="w-80"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <span className="mt-2 text-sm text-muted-foreground">
        don&apos;t have a account?{" "}
        <a href="/register" className="underline text-blue-500 cursor-pointer">
          register
        </a>
      </span>

      <Button type="submit" className="mt-4 w-full">
        Login
      </Button>
    </form>
  );
};

export default LoginForm;
