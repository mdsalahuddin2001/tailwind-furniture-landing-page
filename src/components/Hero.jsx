// import data
import { hero } from '../data';
import Stats from './Stats';
const Hero = () => {
  const { title, subtitle, buttonText } = hero;
  return (
    <section className="h-full max-h-[850px] w-full bg-hero bg-right lg:bg-center bg-cover bg-no-repeat text-white pt-[225px] pb-[254px] relative mb-12 lg:mb-28">
      <div className="container text-center">
        {/* title */}
        <h1 className="text-2xl lg:text-[64px] lg:leading-tight lg:max-w-[900px] mx-auto font-semibold text-white mb-7">
          {title}
        </h1>
        {/* subtitle */}
        <h2 className="mb-7 lg:mb-16 max-w-2xl mx-auto lg:text-xl text-white">
          {subtitle}
        </h2>
        {/* button */}
        <button className="px-12 lg:px-24 py-4 lg:py-6 mb-36 lg:mb-48 text-xl rounded-md bg-[rgba(255,255,255,0.4)] transition hover:bg-[rgba(255,255,255,0.6)] backdrop-blur-md">
          {buttonText}
        </button>
        {/* stats */}
        <div className="-top-[70px] relative">
          <Stats />
        </div>
      </div>
    </section>
  );
};

export default Hero;
