import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";

const Home = () => {
  const headerRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    gsap.from(headerRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
    });

    gsap.from(ctaRef.current, {
      opacity: 0,
      y: 30,
      duration: 1,
      delay: 0.5,
      ease: "power3.out",
    });
  }, []);

  return (
    <div className="container mx-auto px-4 py-16">
      <header ref={headerRef} className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-800 mb-4 gap-4">
          Expert Investment
          <br /> Consulting Services.
        </h1>
        <p className="text-xl text-gray-600 p-4">
          We provide tailored investment strategies to help you achieve your
          financial goals.
        </p>
      </header>
      <div ref={ctaRef} className="text-center">
        <Link
          to="/services"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 inline-block"
        >
          Explore Our Services
        </Link>
      </div>
    </div>
  );
};

export default Home;
