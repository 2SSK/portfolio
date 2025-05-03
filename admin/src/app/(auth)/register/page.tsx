import { Metadata } from "next";
import RegisterForm from "./RegisterForm";

export const metadata: Metadata = {
  title: "Register",
};

export default function page() {
  return (
    <div className="max-w-sm h-fit mx-auto mt-16 space-y-6 p-6 border rounded-lg bg-secondary flex flex-col items-center">
      <h2 className="text-3xl font-semibold">Register</h2>
      <RegisterForm />
    </div>
  );
}
