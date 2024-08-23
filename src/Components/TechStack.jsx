import { technologies } from "../Constants";
const TechStack = () => {
  return (
    <section className="sect-techstack min-h-14 py-5">
      <div className="">
        <div className="stack-inner-header overflow-hidden pt-3  pb-4 text-center text-[26px] font-bold leading-4 text-white">
          My Tech Stack
        </div>
        <div className="stack-inner-header text-center text-[17px] text-white">
          Technologies I’ve been working with recently
        </div>
        <div className="cont-tech-icons flex flex-wrap items-center justify-center gap-x-24 gap-y-16 p-32">
          {technologies.map((item, i) => (
            <div key={i}>
              <img src={item.icon} className="w-[80px]" alt="" />
              <p className="text-center text-white">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
