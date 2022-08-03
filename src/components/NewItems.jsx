// import data
import { newInStore } from '../data';
import NewItemsSlider from './NewItemsSlider';

const NewItems = () => {
  const { title, subtitle, link, icon } = newInStore;
  return (
    <section className="section relative overflow-hidden lg:min-h-[540px]">
      <div className="container flex flex-col lg:flex-row">
        {/* texts */}
        <div className="flex flex-col items-baseline gap-x-6 mb-6 lg:mb-0">
          <h2 className="title lg:max-w-[245px] lg:mt-7 lg:mb-20">{title}</h2>
          <p className="lg:max-w-[245px] lg:mb-12">{subtitle}</p>
          <div className="flex items-center">
            <a
              href="#"
              className="text-accent font-bold transition-all duration-300 hover:mr-1"
            >
              {link}
            </a>
            <div className="text-3xl text-accent font-bold">{icon}</div>
          </div>
        </div>
        {/* product slider */}
        <div className="lg:max-w-[800px] xl:max-w-[900px] lg:absolute lg:-right-0">
          <NewItemsSlider />
        </div>
      </div>
    </section>
  );
};

export default NewItems;
