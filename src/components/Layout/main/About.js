import React from 'react';

export default function About() {
  return (
    <section id="about" className="lg:min-h-full lg:my-12">
      <div className="lg:w-1/2 mx-auto">
        <h2 data-aos="fade-up" data-aos-delay="200">
          About Us
        </h2>

        <p
          data-aos="fade-up"
          data-aos-delay="300"
          className="text-center text-lg lg:text-xl "
        >
          Stustle is a service company that brings comfort to your doorstep by
          relieving you of some daily tasks ranging from food delivery, domestic
          chores, market shopping, assignments and tech services.
        </p>
      </div>
    </section>
  );
}
