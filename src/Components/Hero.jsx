import { useRef, useEffect } from "react";
import gsap from "gsap";

const Hero = () => {
  const h11 = useRef();
  const h12 = useRef();
  const h13 = useRef();
  const myimageref = useRef();
  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(h11.current, {
      x: "-100%",
      delay: 0.8,
      opacity: 0,
      duration: 2,
      ease: "Power3.easeOut",
    })
      .from(
        h12.current,
        {
          x: "-100%",
          delay: 0.5,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<",
      )
      .from(
        h13.current,
        {
          x: "-100%",
          delay: 0.1,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<",
      )
      .from(
        myimageref.current,
        {
          x: "200%",
          delay: 0.5,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<",
      );
  }, []);

  return (
    <section className="overflow-x-hidden">
      <div className="cont-main-hero grid min-h-screen grid-cols-2 items-center justify-items-center laptop:min-h-96 laptop:grid-cols-1 laptop:py-0">
        <div className="cont-heading gradient-text mdesktop:text-[1.5rem] !text-left text-[3rem] text-white laptop:order-2 laptop:text-[30px]">
          Hi<span className="inner-hero-text !text-white">👋</span>,{" "}
          <div className="inner-hero-text" ref={h11}>
            My Name is{" "}
          </div>
          <div
            ref={h12}
            className="inner-name-cont !gradient-text text-gradient !text-left"
          >
            Abdullah MG
          </div>
          <div ref={h13} className="inner-hero text">
            A Full Stack Developer
          </div>
        </div>
        <div className="cont-image w-[35%] laptop:hidden laptop:w-[56%]">
          <img ref={myimageref} src="round_img_frame.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
