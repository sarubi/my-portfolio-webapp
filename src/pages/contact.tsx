import React from "react";
const Contact = () => {
    return ( <>
        <div className='container mx-auto items-center mt-[50px] px-[15px]'>
        <div className="title font-medium text-[20px]">
        Contact
      </div>
      <p> Email: <a className="text-blue-600 hover:underline" href="mailto:sarubi@coli.uni-saarland.de">sarubi (at) coli.uni-saarland.de</a> </p>
      <p>Phone: +49 (681) 302 4177</p> 
      <p>Address: </p>
      <p className="indent-10">Saarland University,</p>
      <p className="indent-10"> Sarubi Thillainathan</p>
      <p className="indent-10"> Campus C7.2, Room 2.08 </p>
      <p className="indent-10"> 66123 Saarbrücken</p>


        </div>
    </> );
}
 
export default Contact;