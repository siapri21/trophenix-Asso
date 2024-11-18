import React from 'react';

const Parrains = () => {
  return (
    <section className="bg-white py-12 px-6 text-center mt-16 flex flex-col items-center">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">

        <div className="md:w-1/2 w-full md:ml-6 text-center md:text-left">
          {/* <h2 className="text-3xl md:text-4xl font-bold text-center mt-4">Lorem Ipsum</h2> */}
          <h3 className="text-lg text-gray-600 leading-relaxed text-center mt-4">
            Ils ont brillé sur le terrain, aujourd'hui ils accompagnent la nouvelle génération
          </h3>
        </div>



        <div className="md:w-1/2 w-full mb-6 md:mb-0 flex justify-center mt-14">
          <img
            src="/asserts/img/about.png"
            alt="Happy people celebrating"
            className="w-full rounded-lg md:w-72"
          />
        </div>
      </div>



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

      <div className="mt-20 max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        <iframe
          src="https://www.youtube-nocookie.com/embed/hkSnuqwXTKk"
          title="YouTube video player"
          className="w-96 rounded-lg"
        ></iframe>
      </div>













    </section>
  );
};

export default Parrains;
