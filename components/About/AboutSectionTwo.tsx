const OfficerCard = ({ name, position, description, imageSrc, alt }) => (
  <div className="mb-8 md:w-2/3">
    <div className="bg-white dark:bg-black shadow-md rounded-lg p-6">
      <div className="flex items-center mb-4">
        <div className="w-30 h-40 rounded-lg overflow-hidden">
          <img src={imageSrc} alt={alt} className="w-full h-full object-cover" />
        </div>
        <div className="ml-4">
          <h4 className="text-lg font-bold text-black dark:text-white">{name}</h4>
          <p className="text-base font-medium text-body-color">{position}</p>
        </div>
      </div>
      <p className="text-sm text-body-color">{description}</p>
    </div>
  </div>
);

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
      <h1 className="mb-8 text-2xl font-bold text-center text-black dark:text-white">Our 2023-24 Officer Team</h1>
      <br></br>
        <div className="grid gap-8 md:grid-cols-3">
          <OfficerCard
            name="Yash Nayak"
            position="President"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            imageSrc="https://media.licdn.com/dms/image/C4E03AQGL0d9dCwproA/profile-displayphoto-shrink_800_800/0/1614904229695?e=2147483647&v=beta&t=djOvKGR88Pb7JCTUFhxps82ft4NrC8t4I7Ytpfq7di0"
            alt="John Doe"
          />
          <OfficerCard
            name="Aadi Jadia"
            position="VP of Community Service "
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            imageSrc="https://image13.photobiz.com/9048/3_20180601100200_22858587_large.jpg"
            alt="Jane Smith"
          />
          <OfficerCard
            name="David Johnson"
            position="Treasurer"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            imageSrc="data:image/jpeg;base64,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"
            alt="David Johnson"
          />
          {/* Add more OfficerCard components for additional team members */}
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
