import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });

  return (
    <div className="min-h-screen w-full overflow-hidden">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <p className="font-general text-sm uppercase md:text-[10px]">
          Welcome to Henry gaming
        </p>

        <AnimatedTitle
          title="Play Call of Duty: Black Ops 6 on console, PC and cloud with Xbox Game Pass."
          containerClass="mt-5 !text-black text-center"
        />

        <div className="about-subtext">
          <p>“The battlefield never sleeps.
            Every shot echoes a choice.
            Only the brave return.”</p>
          <p className="text-gray-500">
            In a world torn by chaos, every bullet writes history.
            Allies fall, enemies rise, and legends are forged in fire.
            This isn’t just war — it’s survival, honor, and destiny.
          </p>
        </div>
      </div>

      <div className="h-dvh w-full" id="clip">
        <div className="mask-clip-path about-image">
          <img
            src="img/about.png"
            alt="Background"
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;