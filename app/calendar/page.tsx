import Breadcrumb from "@/components/Common/Breadcrumb";
import React from 'react';

const Calendar = () => {
  return (
    
    <>
      <script data-cfasync="false" data-tockify-script="embed" src="https://public.tockify.com/browser/embed.js"></script>
      <Breadcrumb
      
        pageName="Calendar"
        description="Take a look at all the events our chapter is holding!"
      />
      
        <h2 className="text-3xl font-bold mb-8 text-center text-black dark:text-white">
          Keep up with all of our events!
        </h2>
        <div data-tockify-component="calendar" data-tockify-calendar="pranav.krishnan" ></div>
        <div
          className="flex justify-center items-center"
          style={{ paddingBottom: "24px" }}
        >

       
</div>
    </>
    
  );
};

export default Calendar;
