"use client";

import Lottie from "react-lottie";
import loginAnimation from "../../../public/login-animation.json"; // Corrected import
import FormLogin from "./_components/form-login";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: loginAnimation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export default function page() {
  return (
    <div className="h-screen w-screen grid grid-cols-5">
      <section
        id="greeting-pic"
        className="col-span-3 h-full bg-green-100 flex items-center"
      >
        <Lottie options={defaultOptions} height={400} width={400} />
      </section>
      <FormLogin />
    </div>
  );
}
