import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const timelineRef = useRef(null);

  const AboutCard = ({ sun, topic, desc }) => (
    <div className="timeline-item relative mb-8 pl-8">
      <div className="absolute left-0 w-4 h-4 bg-blue-500 rounded-full mt-2"></div>
      <h3 className="text-xl font-semibold mb-2">
        {sun}: {topic}
      </h3>
      <p className="text-gray-600 md:max-w-xl max-w-sm">{desc}</p>
    </div>
  );

  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: timelineRef.current,
        start: "top center",
        end: "bottom center",
        scrub: 1,
      },
    });

    timeline.from(".timeline-item", {
      opacity: 0,
      y: 50,
      stagger: 0.5,
    });
  }, []);

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
      <div ref={timelineRef} className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200 hidden md:block "></div>
        <AboutCard
          sun={2010}
          topic="Founded"
          desc="Sajan Investment was established with a vision to transform businesses."
        />
        <div className="timeline-item relative mb-8 pl-8">
          <div className="absolute left-0 w-4 h-4 bg-blue-500 rounded-full mt-2"></div>
          <h3 className="text-xl font-semibold mb-2">2015: Expansion</h3>
          <p className="text-gray-600">
            We expanded our services and team to meet growing demand.
          </p>
        </div>
        <div className="timeline-item relative mb-8 pl-8">
          <div className="absolute left-0 w-4 h-4 bg-blue-500 rounded-full mt-2"></div>
          <h3 className="text-xl font-semibold mb-2">2020: Global Reach</h3>
          <p className="text-gray-600">
            Sajan Investment now serves clients worldwide, driving innovation
            globally.
          </p>
        </div>
        <AboutCard
          sun={2010}
          topic="Personalized Financial Planning"
          desc="Our customized financial plans are designed to meet your unique needs and objectives, ensuring a secure and prosperous financial future."
        />
        <AboutCard
          sun={2010}
          topic="Comprehensive Portfolio Management"
          desc="We provide expert management of your investment portfolio to maximize returns and minimize risks, helping you achieve your financial goals."
        />
        <AboutCard
          sun={2010}
          topic="Dedicated Client Support"
          desc="Our team is available around the clock to provide support and answer any questions you may have, ensuring a seamless investment experience."
        />
        <AboutCard
          sun={2010}
          topic="Market Insights and Analysis"
          desc="Stay informed with our detailed market insights and analysis, helping you make well-informed investment decisions."
        />
      </div>
    </div>
  );
};

export default About;
