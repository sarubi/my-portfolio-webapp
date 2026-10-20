import React, { useEffect, useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import Education from '@/components/dev-profile/Education'
import Employment from '@/components/dev-profile/Employment'
import Awards from '@/components/dev-profile/Awards'
import Service from '@/components/dev-profile/Service'
import Talks from '@/components/dev-profile/Talks'
import { CV_PATH } from '@/data/cv'

const CV = () => {
    // The QR code uses the site's own address, so it works on any domain
    const [cvUrl, setCvUrl] = useState('');
    useEffect(() => {
        setCvUrl(window.location.origin + CV_PATH);
    }, []);

    return ( <>
        <div className='container mx-auto items-center mt-[50px] px-[15px]'>

        <div className="cv-download flex flex-wrap items-center justify-between gap-[20px] bg-[#F5F0E8] dark:bg-[#313134] p-4 rounded-[10px]">
          <div>
            <div className="title font-medium text-[20px]">
            Curriculum Vitae
            </div>
            <p className="mb-[10px]">Download my full CV, or scan the QR code.</p>
            <a
              className="inline-block bg-[#805ad5] hover:bg-[#6b46c1] text-white font-medium px-4 py-2 rounded-md"
              href={CV_PATH} target="_blank" rel="noreferrer"
            >
              📄 Download CV
            </a>
          </div>
          {cvUrl && (
            <div className="bg-white p-2 rounded-md">
              <QRCodeSVG value={cvUrl} size={120} />
            </div>
          )}
        </div>

        <div className="title font-medium text-[20px] mt-[30px]">
        Education
      </div>
      <Education />
      <div className="work-experience mt-[30px]">
      </div>


      <div className="title font-medium text-[20px]">
      Employment
      </div>
      <Employment />

      <div className="title font-medium text-[20px] mt-[30px]">
      Awards &amp; Honors
      </div>
      <Awards />

      <div className="title font-medium text-[20px] mt-[30px]">
      Talks &amp; Tutorials
      </div>
      <Talks />

      <div className="title font-medium text-[20px] mt-[30px]">
      Service &amp; Mentoring
      </div>
      <Service />

      </div>

      
    </> );
}
 
export default CV;
