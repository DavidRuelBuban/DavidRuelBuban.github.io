import { Link } from "react-router-dom";

import hero1 from "../assets/hero1.webp";
import hero2 from "../assets/hero2.webp";
import hero3 from "../assets/hero3.webp";
import hero4 from "../assets/hero4.webp";

const carouselImages = [hero1, hero2, hero3, hero4];

const Hero = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-24 items-center">
      <div>
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl">
          Unwind, Indulge, and Elevate Your Everyday Moments in Luxurious Style.
        </h1>
        <p className="mt-8 max-w-xl text-lg text-justify leading-8">
          Welcome to CozyCraze Boutique, where comfort meets style in every snug
          corner! Discover a curated collection of handpicked comfort items
          designed to transform your space into a haven of relaxation. From
          sumptuous mattresses to plush throws and beyond, we specialize in
          bringing you the coziest essentials for a life of unparalleled
          comfort.
        </p>
        <div className="mt-10">
          <Link to="/products" className="btn btn-primary">
            Our Products
          </Link>
        </div>
      </div>
      <div className="cally h-[28rem]">
        {carouselImages.map((image) => (
          <div key={image} className="carousel-item">
            <img
              src={image}
              className="rounded-box h-full w-80 object-cover"
              alt="carousel"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
