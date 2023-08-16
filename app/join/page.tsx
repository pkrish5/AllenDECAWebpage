import Breadcrumb from "@/components/Common/Breadcrumb";

const JoinClub = () => {
  return (
    <>
      <Breadcrumb
        pageName="Join"
        description="Become a part of Allen's DECA chapter"
      />

      <section className="pt-[120px] pb-[120px]">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center text-black dark:text-white">Join Our Family</h2>

          <div className="mx-auto max-w-lg">
            <p className="text-lg text-center text-body-color mb-8">
              We start accepting new members at the start at the beginning of each school year and distribute the membership form at our first few meetings. Please join our remind and follow our socials to keep up to date with all of our events
            </p>
          </div>

          <div className="flex items-center justify-center mt-12">
            <a
              href="https://www.remind.com/join/allendecas"
              className="flex items-center justify-center px-6 py-3 text-base font-medium rounded-md bg-primary text-white hover:bg-primary-dark transition-colors"
            >
              Remind for Seniors 
            </a>
          </div>
          <div className="flex items-center justify-center mt-12">
            <a
              href="https://www.remind.com/join/allendecaj"
              className="flex items-center justify-center px-6 py-3 text-base font-medium rounded-md bg-primary text-white hover:bg-primary-dark transition-colors"
            >
              Remind for Juniors 
            </a>
          </div>
          <div className="flex items-center justify-center mt-12">
            <a
              href="https://www.remind.com/join/egdfa6"
              className="flex items-center justify-center px-6 py-3 text-base font-medium rounded-md bg-primary text-white hover:bg-primary-dark transition-colors"
            >
              Remind for Sophmores 
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default JoinClub;