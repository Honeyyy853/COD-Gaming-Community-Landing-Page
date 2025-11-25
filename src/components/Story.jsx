import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

// Testimonials data array
const testimonials = [
  {
    name: "GhostRider",
    quote:
      "Playing COD isn’t just about kills — it’s about mindset. Every clutch moment defines who you are on the battlefield. Respect your squad, dominate your enemies.",
    imageUrl: "/public/img/S1.jpg",
    stats: { kd: "3.8 KD", fb: "210 Wins" },
  },
  {
    name: "NovaStrike",
    quote:
      "Sniping is art. You stay calm when the chaos begins, line up your shot, and pull the trigger with precision. One bullet, one down,that’s the rule.",
    imageUrl: "/public/img/S2.avif",
    stats: { kd: "4.6 KD", fb: "150 Headshots" },
  },
  {
    name: "ViperQueen",
    quote:
      "COD isn’t just a game,it’s strategy, timing, and team synergy. I live for those intense 1v3 clutch moments that make the whole squad scream.",
    imageUrl: "/public/img/S3.jpg",
    stats: { kd: "3.2 KD", fb: "180 MVPs" },
  },
  {
    name: "ReaperX",
    quote:
      "Started from public lobbies, now leading ranked squads. COD taught me that consistency beats talent — aim sharp, think smarter, move faster.",
    imageUrl: "/public/img/S4.jpg",
    stats: { kd: "4.1 KD", fb: "230 Wins" },
  },
  {
    name: "ToxicAce",
    quote:
      "Every COD session is war. You don’t wait for the perfect moment you create it. My motto? No mercy, no hesitation.",
    imageUrl: "/public/img/S5.jpg",
    stats: { kd: "3.9 KD", fb: "276 Headshots" },
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardRef = useRef(null);
  const robotRef = useRef(null);

  // Auto-rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Rotate every 5 seconds

    // Cleanup function
    return () => {
      clearInterval(interval);
    };
  }, []);

  useGSAP(() => {
    // Animate testimonial card on scroll
    gsap.fromTo(
      cardRef.current,
      {
        opacity: 0,
        x: -50,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: true,
        },
      }
    );

    // Animate robot graphic on scroll
    gsap.fromTo(
      robotRef.current,
      {
        opacity: 0,
        x: 50,
        scale: 0.95,
      },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: robotRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: true,
        },
      }
    );
  });

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section
      id="testimonials"
      className="relative min-h-screen w-full bg-black text-[#dfdff2] overflow-hidden pt-10 md:pt-16 pb-20 md:pb-32"
    >
      <div className="container mx-auto px-3 md:px-6 lg:px-10">
        {/* Headings */}
        <div className="relative z-10 mb-6 md:mb-4">
          {/* <p className="font-general text-sm uppercase text-[#dfdff2] mb-3 md:text-[10px]">
            Check Our Best Gamers
          </p> */}
          <AnimatedTitle
            title="About our gamers"
            containerClass="mt-2 !text-left"
          />
        </div>

        <div className="relative flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12 lg:gap-20">
          {/* Testimonial Card */}
          <div
            ref={cardRef}
            className="relative z-20 w-full md:w-[45%] lg:w-[500px] flex-shrink-0"
          >
            <div className="relative bg-black/70 backdrop-blur-md border border-white/20 rounded-xl p-6 md:p-8 lg:p-10 overflow-hidden shadow-2xl transition-opacity duration-500">
              {/* Quote Icon */}
              {/* <div className="absolute top-6 right-6 w-14 h-14 md:w-16 md:h-16 bg-purple-500/30 rounded-lg flex items-center justify-center border border-purple-500/50">
                <span className="text-2xl md:text-3xl font-bold text-white font-zentry">
                  "
                </span>
              </div> */}

              {/* Profile Picture and Name */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-white/30 flex-shrink-0">
                  <img
                    src={currentTestimonial.imageUrl}
                    alt={currentTestimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="pt-2">
                  <h3 className="text-xl md:text-2xl font-bold text-orange-500 font-robert-medium">
                    {currentTestimonial.name}
                  </h3>
                </div>
              </div>

              {/* Testimonial Text */}
              <p className="text-[#dfdff2] text-sm md:text-base font-circular-web mb-8 pr-8 leading-relaxed">
                {currentTestimonial.quote}
              </p>

              {/* Statistics */}
              <div className="flex flex-wrap gap-3 mb-8">
                <div className="bg-black/80 border border-white/20 rounded-lg px-5 py-2.5">
                  <span className="text-white font-bold text-sm md:text-base font-robert-medium">
                    {currentTestimonial.stats.kd}
                  </span>
                </div>
                <div className="bg-black/80 border border-white/20 rounded-lg px-5 py-2.5">
                  <span className="text-white font-bold text-sm md:text-base font-robert-medium">
                    {currentTestimonial.stats.fb}
                  </span>
                </div>
              </div>

              {/* View Details Button */}
              {/* <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2 font-robert-medium text-sm md:text-base uppercase tracking-wide">
                VIEW DETAILS
                <span className="text-xl">►</span>
              </button> */}

              {/* Carousel Indicators */}
              <div className="flex justify-center gap-2 mt-6">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "bg-orange-500 w-8"
                        : "bg-white/30 hover:bg-white/50"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Robot/Character Graphic */}
          <div
            ref={robotRef}
            className="relative w-full md:w-[35%] flex-1 h-[400px] md:h-[600px] lg:h-[700px]"
          >
            <div className="relative w-full h-full flex items-center justify-center">
              <img
                src="/public/img/feature.jpg"
                alt="Gaming Character"
                className="absolute inset-0 w-full h-full object-contain object-center"
                // style={{
                //   filter:
                //     "brightness(0.6) contrast(1.3) drop-shadow(0 0 30px rgba(139, 92, 246, 0.4))",
                // }}
              />
              {/* Purple glow effects for robot eyes/joints */}
              {/* <div className="absolute inset-0 bg-gradient-to-br from-purple-500/15 via-transparent to-transparent pointer-events-none"></div> */}

              {/* <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl"></div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
