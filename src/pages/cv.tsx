import React from "react";
import Education from '@/components/dev-profile/Education'
import Employment from '@/components/dev-profile/Employment'

const CV = () => {
    return ( <>
        <div className='container mx-auto items-center mt-[50px] px-[15px]'>
            
        {/* <div className="title font-medium text-[20px]">
        CV here
      </div> */}

        <div className="title font-medium text-[20px]">
        Education
      </div>
      <Education />
      <div className="work-experience mt-[30px]">
      </div>


      <div className="title font-medium text-[20px]">
      Employment
      </div>
      <Employment />

      </div>

      
    </> );
}
 
export default CV;