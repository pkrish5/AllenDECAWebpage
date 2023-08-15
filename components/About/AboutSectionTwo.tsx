import yash from "../../public/images/officers/yash-nayak-headshot.png";
import aadi from "../../public/images/officers/aadi-jadia-headshot.png";
import ethan from "../../public/images/officers/ethan-walling-headshot.png";
import ishaam from "../../public/images/officers/ishaan-gupra-headshot.png";
import rashmi from "../../public/images/officers/rashmi-ravindran-headshot.png";
import jaivel from "../../public/images/officers/jaivel-italia-headshot.png";
import preeti from "../../public/images/officers/preeti-makam-headshot.png";
import rayna from "../../public/images/officers/rayna-shah-headshot.png";
import hannah from "../../public/images/officers/hannah-peters-headshot.png";

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
            description=""
            imageSrc={yash}
            alt="Yash Nayak"
          />
          <OfficerCard
            name="Aadi Jadia"
            position="VP of Community Service"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            imageSrc={aadi}
            alt="Aadi Jadia"
          />
          <OfficerCard
            name="Ethan Walling"
            position="VP of Community Service "
            description=""
            imageSrc={ethan}
            alt="David Johnson"

          />
         <OfficerCard
            name="Ethan Walling"
            position="VP of Community Service "
            description=""
            imageSrc={ethan}
            alt="David Johnson"

          />
        
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
