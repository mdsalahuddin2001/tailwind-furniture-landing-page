import { products } from '../data';
import ProductsSlider from './ProductsSlider';
const Products = () => {
  const { title, subtitle } = products;

  return (
    <section className="section text-center">
      <div className="container">
        <div>
          <h2 className="title">{title}</h2>
          <p className="max-w-[639px] mx-auto mb-12 lg:mb-16">{subtitle}</p>
        </div>
        <ProductsSlider />
      </div>
    </section>
  );
};

export default Products;
