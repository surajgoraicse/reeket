// app/login/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { FaFacebookF, FaGoogle } from "react-icons/fa";

export default function LoginPage() {
  const [mobile, setMobile] = useState("");

  return (
    <div className="min-h-screen flex">
      {/* ===== DESKTOP LAYOUT ===== */}
      <div className="hidden md:flex w-full">
        {/* Left Image */}
        <div className="w-1/2 relative">
          <Image
            src="https://images.bewakoof.com/web/rm-login-desk-v2.jpg"
            alt="Promo"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Right Form */}
        <div className="w-1/2 flex items-center justify-center">
          <div className="w-full max-w-md p-10">
            <LoginForm mobile={mobile} setMobile={setMobile} />
          </div>
        </div>
      </div>

      {/* ===== MOBILE LAYOUT ===== */}
      <div className="md:hidden relative w-full h-screen">
        {/* Background Image */}
        <Image
          src="https://images.bewakoof.com/web/rm-login-desk-v2.jpg"
          alt="Promo"
          fill
          className="object-cover"
          priority
        />

        {/* Form at bottom */}
        <div className="fixed bottom-0 left-0 w-full bg-white rounded-t-2xl p-6 shadow-lg">
          <LoginForm mobile={mobile} setMobile={setMobile} />
        </div>
      </div>
    </div>
  );
}

// Extracted form as a component
function LoginForm({
  mobile,
  setMobile,
}: {
  mobile: string;
  setMobile: (val: string) => void;
}) {
  return (
    <>
      <h2 className="text-lg font-semibold">Login / Signup</h2>
      <p className="text-sm text-gray-500 mb-4">
        Join us now to be a part of our family.
      </p>

      {/* Mobile Number Input */}
      <div className="flex items-center border rounded-md overflow-hidden mb-4">
        <span className="px-3 text-gray-600">+91</span>
        <Input
          type="tel"
          placeholder="Enter Mobile Number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
        />
      </div>

      <Button className="w-full">Continue</Button>

      {/* Divider */}
      <div className="flex items-center my-6">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="mx-2 text-gray-500 text-sm">OR</span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>

      {/* Social Buttons */}
      <div className="grid grid-cols-2 gap-4">
        <Button variant="outline" className="w-full border-gray-300">
          <FaGoogle size={20} color="red" />
          Google
        </Button>
        <Button variant="outline" className="w-full border-gray-300">
          <FaFacebookF size={20} color="blue" />
          Facebook
        </Button>
      </div>

      {/* Terms */}
      <p className="text-xs text-gray-500 mt-6 text-center">
        By creating an account or logging in, you agree with our{" "}
        <Link href="/terms" className="underline">
          T&amp;C
        </Link>{" "}
        and{" "}
        <Link href="/privacy" className="underline">
          Privacy Policy
        </Link>
        .
      </p>
    </>
  );
}
