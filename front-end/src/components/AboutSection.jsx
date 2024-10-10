import React from 'react';

const About = () => (
  <div className="flex-shrink-0 w-[1440px] h-[854px] bg-[#f4a77a]/[.15]">
    <div className="panel_image_content flex flex-shrink-0 items-center pt-[var(--sds-size-space-1600)] pr-[var(--sds-size-space-1600)] pb-[var(--sds-size-space-1600)] pl-[var(--sds-size-space-1600)] p-16 w-[1230px] h-[611.948px] opacity-[0.8]">
      {/* Image parent avec URL */}
      <div className="relative flex-shrink-0 w-[554px] h-[412px] rounded-[30px] bg-[/asserts/img/man-woman-running-track-side-view.jpg)] bg-cover bg-no-repeat">
        {/* Image enfant avec URL */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[23.875rem] h-[21.8125rem] rounded-[30px] border-2 border-[#e95b41] bg-[url('https://example.com/child-image.jpg')] bg-cover bg-no-repeat">
        </div>
      </div>

      {/* Contenu du texte */}
      <div className="text_content_flow flex flex-col flex-shrink-0 items-start w-[545px] h-[411px] min-w-[18.75rem] ml-8">
        <div className="flex flex-col flex-shrink-0 justify-between items-center pt-[var(--sds-size-space-150)] pb-[var(--sds-size-space-150)] py-1 px-0 w-[17.5rem] h-[3.8125rem] rounded-[30px]">
          <div className="a-propos self-stretch text-[#2f4858] text-center font-['Inter'] text-[3.5625rem] font-semibold leading-[120%]">
            A-Propos
          </div>
        </div>
        <div className="flex flex-col items-start gap-2.5 self-stretch">
          <div className="flex justify-center items-center self-stretch h-[9.75rem]">
            <div className="flex justify-center items-start w-[545px] h-[9.75rem] text-[#2f4858] font-['var(--Display-Medium-Font)'] text-[var(--Display-Medium-Size)] leading-[var(--Display-Medium-Line-Height)]">
              Excepteur efficient emerging, minim veniam anim aute carefully
            </div>
          </div>
        </div>
        <div className="flex flex-shrink-0 justify-center items-center self-stretch h-[8.9375rem] text-[#2f4858] font-['var(--sds-typography-body-font-family)'] text-[var(--sds-typography-body-size-medium)] font-[var(--sds-typography-body-font-weight-regular)] leading-[140%]">
          Body text for your whole article or post. Body text for your whole article or post. Body text for your whole article or post. We’ll put in some lorem. Body text for your whole article or post.
        </div>
      </div>
    </div>

    {/* Bouton en bas */}
    <div className="flex justify-center items-center p-4 w-[14.25rem] h-[4.0625rem] rounded-[0.625rem] bg-[#ff9a61] mt-8 mx-auto">
      <div className="button_text text-[#2f4858] font-['Roboto'] text-xl font-medium leading-[100%]">
        Button Text
      </div>
    </div>
  </div>
);

export default About;
