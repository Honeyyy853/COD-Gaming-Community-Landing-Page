import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";

const ImageClipBox = ({ src, clipClass }) => (
  <div className={clipClass}>
    <img src={src} />
  </div>
);

const Footer = () => {
  return (
    <div className="my-10 min-h-96 w-full overflow-hidden px-10">
      <div className="relative rounded-lg bg-black py-24 text-[#dfdff2] sm:overflow-hidden">
        <div className="flex flex-col items-center text-center">
          <p className="mb-10 font-general text-[10px] uppercase">
            Join Henry Community
          </p>

          <AnimatedTitle
            title="let&#39;s build the new era of gaming  together."
            className="special-font !md:text-[6.2rem] w-full Venite Adoremus !text-5xl !font-black !leading-[.9]"
          />

          <Button title="contact us" containerClass="mt-10 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
