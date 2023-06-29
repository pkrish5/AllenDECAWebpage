import Image from "next/image";

const Section = ({ title, description, imageSrc, alt }) => (
  <div className="mb-12 md:flex">
    <div className="md:w-1/2 md:mr-8">
      <Image src={imageSrc} alt={alt} width={500} height={400} />
    </div>
    <div className="md:w-1/2">
      <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
        {title}
      </h3>
      <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
        {description}
      </p>
    </div>
  </div>
);

const AboutSectionOne = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <Section
          title="Who Are We"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          imageSrc="/images/about/whoarewe.jpeg"
          alt="Who Are We Image"
        />
        <Section
          title="Our Mission"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
          imageSrc="/images/about/DecaMissionStatement.png"
          alt="Our Mission Image"
        />
        <Section
          title="Our Accomplishments"
          description="Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt consectetur adipiscing elit setim."
          imageSrc="/images/about/Communityservice.jpeg"
          alt="Our Accomplishments Image"
        />
      </div>
    </section>
  );
};

export default AboutSectionOne;