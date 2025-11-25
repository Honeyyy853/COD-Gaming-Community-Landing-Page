import { useRef } from "react";

export const VideoPreview = ({ children }) => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  return (
    <section
      ref={sectionRef}
      className="absolute z-50 size-full overflow-hidden rounded-lg transition-transform duration-500 ease-in-out hover:scale-105"
      style={{
        perspective: "none", 
      }}
    >
      <div
        ref={contentRef}
        className="origin-center rounded-lg"
        style={{
          transformStyle: "flat", 
        }}
      >
        {children}
      </div>
    </section>
  );
};

export default VideoPreview;
