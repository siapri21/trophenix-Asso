import React from 'react';
import imageSrc from '/asserts/img/36.png'; // Assurez-vous que le chemin de l'image est correct

const About = () => {
  return (
    <section className="bg-white py-12 px-6 text-center mt-16 flex flex-col items-center">
      {/* First Section: Text and Skewed Image */}
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:ml-6 text-left">
          <p className="text-lg text-gray-600">
            There are many variations of passages of Lorem Ipsum available...
          </p>
        </div>
        <div className="relative w-full md:w-1/2 mb-6 md:mb-0">
          <img
            src="/asserts/img/131.png"
            alt="Group of people"
            className="h-60 transform skew-x-12 rounded-lg"
          />
        </div>
      </div>

      {/* Second Section: Image on the Left, Text on the Right */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 w-full mb-6 md:mb-0 flex justify-center mt-14">
          <img
            src="/asserts/img/about.png"
            alt="Happy people celebrating"
            className="w-full rounded-lg"
          />
        </div>

        <div className="md:w-1/2 w-full md:ml-6 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-center mt-4">Lorem Ipsum</h2>
          <p className="text-lg text-gray-600 leading-relaxed text-center mt-4">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected humour, or
            randomised words which don't look even slightly believable.
          </p>
        </div>
      </div>

      {/* Third Section: Grey Square and Blue Rectangle with Text */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center mt-20" style={{ marginLeft: '15%', marginRight: '15%' }}>
        <div className="text-gray-700 text-center md:text-left flex-1">
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected humour,
            or randomised words which don't look even slightly believable.
          </p>
        </div>

        <div className="relative flex-1 flex justify-center items-center">
          <div className="bg-gray-300 w-64 h-48 rounded-md relative"></div>
          <div className="absolute bg-blue-300 w-52 h-10 rounded-md transform -translate-x-32 translate-y-12 flex items-center justify-center">
            <span className="text-white font-bold">Your Word</span>
          </div>
        </div>
      </div>


       {/* Third Section: Grey Square and Blue Rectangle with Text */}
       <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center mt-20" style={{ marginLeft: '15%', marginRight: '15%' }}>
       
        <div className="relative flex-1 flex justify-center items-center">
          <div className="bg-gray-300 w-64 h-48 rounded-md relative"></div>
          <div className="absolute bg-blue-300 w-52 h-10 rounded-md transform -translate-x-32 translate-y-12 flex items-center justify-center">
            <span className="text-white font-bold">Your Word</span>
          </div>
        </div>

        <div className="text-[#2f4858] text-center md:text-left flex-1">
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected humour,
            or randomised words which don't look even slightly believable.
          </p>
        </div>

      </div>

       {/* Third Section: Grey Square and Blue Rectangle with Text */}
       <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center mt-20" style={{ marginLeft: '15%', marginRight: '15%' }}>
        <div className="text-[#2f4858] text-center md:text-left flex-1">
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected humour,
            or randomised words which don't look even slightly believable.
          </p>
        </div>

        <div className="relative flex-1 flex justify-center items-center">
          <div className="bg-gray-300 w-64 h-48 rounded-md relative"></div>
          <div className="absolute bg-blue-300 w-52 h-10 rounded-md transform -translate-x-32 translate-y-12 flex items-center justify-center">
            <span className="text-white font-bold">Your Word</span>
          </div>
        </div>
      </div>

      {/* First New Section: Scrolling Citation */}
      <div className="mt-20 bg-orange-500 py-6 w-full overflow-hidden">
  <div className="animate-scroll whitespace-nowrap">
    <p className="text-lg text-white inline-block px-4">
      "L'avenir est incertain, vis dans le présent et profite de la vie tout en étant épanoui."
    </p>
    <p className="text-lg text-white inline-block px-4">
      "L'avenir est incertain, vis dans le présent et profite de la vie tout en étant épanoui."
    </p>
    
    {/* Repeating the text ensures continuous scrolling */}
  </div>
</div>



      <div className="relative w-full  mt-10">
        <h1 className="text-3xl font-bold text-[#2f4858]">Nos missions</h1>
       {/* Second New Section: Image on Left, Text on Right */}
      <div className="mt-20 max-w-7xl mx-auto flex flex-col md:flex-row items-center" style={{ marginLeft: '5%', marginRight: '5%' }}>
        
        {/* Left Image */}
        <div className="md:w-1/2 w-full mb-6 md:mb-0">
          <img
            src="/asserts/img/116.png"
            alt="Descriptive Image"
            className="w-full rounded-lg"
          />
        </div>

        {/* Right Text */}
        <div className="md:w-1/2 w-full md:ml-6 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2f4858]">Your Title Here</h2>
          <p className="text-lg text-[#2f4858] leading-relaxed mt-4">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. 
          </p>
        </div>
      </div>


      
      {/* Second New Section: Image on Left, Text on Right */}
      <div className="mt-20 max-w-7xl mx-auto flex flex-col md:flex-row items-center" style={{ marginLeft: '5%', marginRight: '5%' }}>
       

        {/* Right Text */}
        <div className="md:w-1/2 w-full md:ml-6 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl  text-[#2f4858] font-bold">Your Title Here</h2>
          <p className="text-lg text-[#2f4858] leading-relaxed mt-4">
           It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. 
          </p>
        </div>

         {/* Left Image */}
         <div className="md:w-1/2 w-full mb-6 md:mb-0">
          <img
            src="/asserts/img/116.png"
            alt="Descriptive Image"
            className="w-full rounded-lg"
          />
        </div>
      </div>


      
      {/* Second New Section: Image on Left, Text on Right */}
      <div className="mt-20 max-w-7xl mx-auto flex flex-col md:flex-row items-center" style={{ marginLeft: '5%', marginRight: '5%' }}>
        {/* Left Image */}
        <div className="md:w-1/2 w-full mb-6 md:mb-0">
          <img
            src="/asserts/img/116.png"
            alt="Descriptive Image"
            className="w-full rounded-lg"
          />
        </div>

        {/* Right Text */}
        <div className="md:w-1/2 w-full md:ml-6 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2f4858]">Your Title Here</h2>
          <p className="text-lg text-[#2f4858] leading-relaxed mt-4">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. 
          </p>
        </div>
      </div>


      </div>


    </section>
  );
};

export default About;
