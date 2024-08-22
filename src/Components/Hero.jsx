const Hero = () => {
  return (
    <div>
      <div className="cont-main-hero grid h-[60vh] grid-cols-2 items-center justify-items-center py-24">
        <div className="cont-heading gradient-text cursor-pointer !text-left text-[40px] text-white">
          Hi<span className="inner-hero-text !text-white">👋</span>,{" "}
          <div className="inner-hero-text">My Name is </div>
          <div className="inner-name-cont gradient-text text-gradient !text-left">
            Abdullah MG
          </div>
          <div className="inner-hero text">A Full Stack Developer</div>
        </div>
        <div className="cont-image w-[30%]">
          <img src="/image.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
