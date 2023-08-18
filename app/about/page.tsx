import AboutSectionOne from "@/components/About/AboutSectionOne";
import Officers from "@/components/About/OfficerTeam";
import Breadcrumb from "@/components/Common/Breadcrumb";

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Page"
        description=""
      />
      {/* <AboutSectionOne /> */}
      <Officers />
    </>
  );
};

export default AboutPage;
