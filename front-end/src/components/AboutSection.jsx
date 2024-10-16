import React from 'react';
import { Link } from 'react-router-dom';

const About = () => (
  <section className="flex-shrink-0  bg-[#f4a77a]/[.15] flex justify-center items-center" >
    <div className="panel_image_content flex flex-shrink-0 items-center pt-[var(--sds-size-space-1600)] 
    pr-[var(--sds-size-space-1600)] pb-[var(--sds-size-space-1600)] pl-[var(--sds-size-space-1600)] 
    p-16 w-[1230px] h-[611.948px] opacity-[0.8] flex justify-center items-center"style={{ marginLeft: '10%', marginRight: '10%' }} >
      {/* Image parent avec URL */}
      <div className="relative flex-shrink-0 w-[554px] h-[412px] bg-cover bg-no-repeat">
        <img src="/asserts/img/2148342044.jpg" className="absolute top-0 left-0 w-full h-full object-cover rounded-[30px]" />

        {/* Image enfant avec URL depuis le dossier public */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[23.875rem]
         h-[21.8125rem] rounded-[30px] bg-cover bg-no-repeat mt-44">
          <img src="/asserts/img/2149966761.jpg" alt="" className="w-[23.875rem] h-[21.8125rem] rounded-[30px] border-2 border-[#e95b41]" />
        </div>
      </div>

      {/* Contenu du texte */}
      <div className="text_content_flow flex flex-col flex-shrink-0 items-start w-[545px] h-[411px] min-w-[18.75rem] ml-8">
        <div className="flex flex-col flex-shrink-0 justify-between items-center
         pt-[var(--sds-size-space-150)] pb-[var(--sds-size-space-150)] py-1 px-0 w-[17.5rem] h-[3.8125rem] rounded-[30px] mb-4">
          <h1 className="a-propos self-stretch text-[#2f4858] text-center font-['Inter'] text-[3.5625rem] font-semibold leading-[120%]">
            A-Propos
          </h1>
        </div>

        {/* Conteneur du texte */}
        <div className="flex flex-col items-center">
          {/* Titre (h6) avec une marge inférieure réduite */}
          <div className="flex justify-center items-center self-stretch h-auto mb-2">
            <h6 className="flex justify-center items-start text-center w-[545px] text-[#2f4858]
             font-['var(--Display-Medium-Font)'] text-[var(--Display-Medium-Size)] leading-[var(--Display-Medium-Line-Height)]">
              Excepteur efficient emerging, minim veniam anim aute carefully
            </h6>
          </div>

          {/* Paragraphe (p) centré et espacement ajusté */}
          <p className="flex justify-center items-center self-stretch text-center text-[#2f4858]
           font-['var(--sds-typography-body-font-family)'] text-[var(--sds-typography-body-size-medium)] 
           font-[var(--sds-typography-body-font-weight-regular)] leading-[140%] mb-4 p-10">
            Body text for your whole article or post. Body text for your whole article or post.
            Body text for your whole article or post. We’ll put in some lorem. Body text for 
            your whole article or post.
          </p>
        </div>

        {/* Bouton en bas */}
      <Link to="/a-propos">
      <button className="flex justify-center items-center p-4  ml-32
        rounded bg-[#ff9a61] mt-8 mx-auto text-[#2f4858] font-['Roboto'] text-xl font-medium"> 
          Button Text
        </button>
      </Link>
      </div>
    </div>
  </section>
);

export default About;
