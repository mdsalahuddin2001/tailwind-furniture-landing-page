import { features } from '../data';

const FeatureSecond = () => {
  const { title, subtitle, image } = features.feature2;
  return (
    <section className="section">
      <div className="container flex flex-col lg:flex-row lg:gap-x-24">
        {/* texts */}
        <div className="flex-1 flex flex-col justify-end">
          <h2 className="title">{title}</h2>
          <p className="subtitle">{subtitle}</p>
        </div>
        {/* image */}
        <div className="flex-1">
          <img src={image.type} alt="img" />
        </div>
      </div>
    </section>
  );
};

export default FeatureSecond;
