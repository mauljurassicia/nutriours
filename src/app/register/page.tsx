"use client";

import Lottie from "react-lottie";
import registerAnimation from "../../../public/register-envelop.json";
import FormRegister from "./_components/form-register";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: registerAnimation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export default function page() {
  return (
    <div className="h-screen w-screen grid grid-cols-5">
      <section
        id="login-form"
        className="col-span-2 h-full flex flex-col space-y-4 justify-center"
      >
        <FormRegister />
      </section>
      <section
        id="greeting-pic"
        className="col-span-3 h-full bg-green-100 flex items-center"
      >
        <Lottie options={defaultOptions} height={400} width={400} />
      </section>
    </div>
  );
}
