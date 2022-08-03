// import data
import { testimonial } from '../data';
import TestimonialSlider from './TestimonialSlider';

const Testimonial = () => {
  const { image, title } = testimonial;
  return (
    <section className="section">
      <div className="container flex flex-col lg:flex-row lg:gap-x-10 gap-y-2">
        <div className="lg:max-w-[50%]">
          {/* title */}
          <h2 className="title mb-9">{title}</h2>
          {/* testimonial slider */}
          <TestimonialSlider />
        </div>
        <div>
          <img src={image.type} alt={title} />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
