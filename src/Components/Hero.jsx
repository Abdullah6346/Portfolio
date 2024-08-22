const Hero = () => {
  return (
    <section>
      <div className="cont-main-hero grid h-[60vh] grid-cols-2 items-center justify-items-center py-24 laptop:grid-cols-1 laptop:py-0">
        <div className="cont-heading gradient-text !text-left text-[40px] text-white laptop:order-2 laptop:text-[30px]">
          Hi<span className="inner-hero-text !text-white">👋</span>,{" "}
          <div className="inner-hero-text">My Name is </div>
          <div className="inner-name-cont gradient-text text-gradient !text-left">
            Abdullah MG
          </div>
          <div className="inner-hero text">A Full Stack Developer</div>
        </div>
        <div className="cont-image w-[30%] laptop:hidden laptop:w-[56%]">
          <img src="/image.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
