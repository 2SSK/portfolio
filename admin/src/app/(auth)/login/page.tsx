import { Metadata } from "next";
import LoginForm from "./LoginForm";

export const metadata: Metadata = {
  title: "Login",
};

export default function page() {
  return (
    <div className="max-w-sm h-fit mx-auto mt-48 space-y-6 p-6 border rounded-lg bg-secondary flex flex-col items-center">
      <h2 className="text-3xl font-semibold">Login</h2>
      <LoginForm />
    </div>
  );
}
