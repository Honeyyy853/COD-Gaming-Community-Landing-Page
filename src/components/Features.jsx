import { useState, useRef } from "react";
import { TiLocationArrow } from "react-icons/ti";

export const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      ref={itemRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

export const BentoCard = ({ src, title, description, isComingSoon }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoverOpacity, setHoverOpacity] = useState(0);
  const hoverButtonRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!hoverButtonRef.current) return;
    const rect = hoverButtonRef.current.getBoundingClientRect();

    setCursorPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => setHoverOpacity(1);
  const handleMouseLeave = () => setHoverOpacity(0);

  return (
    <div className="relative size-full">
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute left-0 top-0 size-full object-cover object-center"
      />
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-[#dfdff2]">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {description && (
            <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
          )}
        </div>

        {isComingSoon && (
          <div
            ref={hoverButtonRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="border-hsla relative flex w-fit cursor-pointer items-center gap-1 overflow-hidden rounded-full bg-black px-5 py-2 text-xs uppercase text-white/20"
          >
            {/* Radial gradient hover effect */}
            <div
              className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
              style={{
                opacity: hoverOpacity,
                background: `radial-gradient(100px circle at ${cursorPosition.x}px ${cursorPosition.y}px, #656fe288, #00000026)`,
              }}
            />
            <TiLocationArrow className="relative z-20" />
            <p className="relative z-20">coming soon</p>
          </div>
        )}
      </div>
    </div>
  );
};

const Features = () => (
  <section className="bg-black pb-10 md:pb-16">
    <div className="container mx-auto px-3 md:px-10">
      <div className="px-5 py-32">
        <p className="font-circular-web text-lg text-[#dfdff2]">
          What Makes This Game Epic
        </p>
        <p className="max-w-md font-circular-web text-lg text-[#dfdff2] opacity-50">
          Discover the features that make every mission more immersive. From
          realistic visuals to strategic gameplay, every detail hits different.
          Gear up and experience gaming at its finest.
        </p>
      </div>

      <BentoTilt className="bento-tilt_1 relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
        <BentoCard
          src="videos/feature1.mp4"
          title={<>Realistic Graphics & Visual Effects</>}
          description="COD delivers cinematic visuals with ultra-realistic environments, detailed weapons, and immersive sound effects — from gunfire echoes to footsteps — making you feel like you're on the battlefield."
        />
      </BentoTilt>

      <div className="grid h-[135vh] w-full grid-cols-2 grid-rows-3 gap-7">
        <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
          <BentoCard
            src="/public/videos/feature2.mp4"
            title={<>Iconic Characters</>}
            description="Features memorable heroes like Captain Price, Ghost, and Soap."
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
          <BentoCard
            src="/public/videos/feature3.mp4"
            title={<>Advanced Weapons & Customization</>}
            description="Build your dream loadout with scopes, grips, camos, and more for perfect precision."
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
          <BentoCard
            src="/public/videos/feature4.mp4"
            title={<>Massive, Dynamic Maps</>}
            description="From tight urban areas to vast deserts — explore, strategize, and survive anywhere."
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_2">
          <div className="flex size-full flex-col justify-between bg-[#00ff66] p-5 shadow-[0_0_25px_#00ff66]">
            <h1 className="bento-title special-font max-w-56 text-black drop-shadow-[0_0_10px_#00ff66]">
              More coming soon.
            </h1>
          </div>
        </BentoTilt>

        <BentoTilt className="bento-tilt_2">
          <BentoCard
            src="/public/videos/feature5.mp4"
            title={<>Multiplayer & Battle Royale Action</>}
            description="Experience fast-paced multiplayer modes and large-scale Battle Royale arenas where every move, shot, and strategy matters."
          />
        </BentoTilt>
      </div>
    </div>
  </section>
);

export default Features;
