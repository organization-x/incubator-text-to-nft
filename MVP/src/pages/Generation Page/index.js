import React from "react";

import { Column, Text, Img, Stack } from "components";

const Generation = () => {
  return (
    <>
    <form action="/Promptpost" method="post" 
              className="form">
      <Column className="bg-gray_900 font-inter mx-[auto] lg:p-[22px] xl:p-[25px] 2xl:p-[28px] 3xl:p-[34px] w-[100%]">
        <Text className="font-normal xl:ml-[11px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] not-italic lg:text-[35px] xl:text-[40px] 2xl:text-[45px] 3xl:text-[54px] text-white_A700 w-[auto]">
          NAME
        </Text>
        <Column className="items-center lg:mb-[315px] xl:mb-[360px] 2xl:mb-[405px] 3xl:mb-[487px] xl:ml-[11px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] xl:mr-[103px] 2xl:mr-[116px] 3xl:mr-[139px] lg:mr-[90px] 3xl:mt-[112px] lg:mt-[72px] xl:mt-[83px] 2xl:mt-[93px] 2xl:pl-[102px] 3xl:pl-[123px] lg:pl-[80px] xl:pl-[91px] w-[90%]">
          <Text className="font-normal not-italic lg:text-[23px] xl:text-[27px] 2xl:text-[30px] 3xl:text-[36px] text-white_A700 w-[auto]">
Prompt          
</Text>
          <span id="AddressPrompt" style={{'position': 'relative'}}>
          <input id="prompt" name="prompt" type="text" style={{  'position': 'absolute', 'background-color': '#17171B', 'border-color' : '#17171B', 'color' : 'white', 'width' : '95%', 'left' : '2%', 'font-size' : '16px', 'top' : '72.5%', 'height' : '20px'}}/>
          <Img
            src="images/img_prompt.svg"
            className="lg:h-[39px] xl:h-[45px] 2xl:h-[50px] 3xl:h-[60px] 3xl:mt-[118px] lg:mt-[77px] xl:mt-[88px] 2xl:mt-[99px] w-[100%]"
            alt="Prompt"
          />
          </span>
          <br></br>
          <br></br>

          <Text className="font-normal not-italic lg:text-[23px] xl:text-[27px] 2xl:text-[30px] 3xl:text-[36px] text-white_A700 w-[auto]">
Number of images          
</Text>
          <span id="AddressPrompt" style={{'position': 'relative'}}>
          <input id="prompt" name="number" type="text" style={{  'position': 'absolute', 'background-color': '#17171B', 'border-color' : '#17171B', 'color' : 'white', 'width' : '95%', 'left' : '2%', 'font-size' : '16px', 'top' : '72.5%', 'height' : '20px'}}/>
          <Img
            src="images/img_prompt.svg"
            className="lg:h-[39px] xl:h-[45px] 2xl:h-[50px] 3xl:h-[60px] 3xl:mt-[118px] lg:mt-[77px] xl:mt-[88px] 2xl:mt-[99px] w-[100%]"
            alt="Prompt"
          />
          </span>
          <Stack className="lg:h-[51px] xl:h-[58px] 2xl:h-[65px] 3xl:h-[78px] 3xl:mt-[105px] lg:mt-[68px] xl:mt-[77px] 2xl:mt-[87px] w-[22%]">
          <button id="Generate">
            <Stack className="absolute lg:h-[51px] xl:h-[58px] 2xl:h-[65px] 3xl:h-[78px] w-[100%]" >
              <div className="absolute bg-bluegray_800 lg:h-[51px] xl:h-[58px] 2xl:h-[65px] 3xl:h-[78px] inset-x-[13%] w-[74%]"></div>
              <div className="absolute bg-bluegray_801 lg:h-[51px] xl:h-[58px] 2xl:h-[65px] 3xl:h-[78px] right-[0] rounded-radius50 lg:w-[50px] xl:w-[57px] 2xl:w-[64px] 3xl:w-[77px]"></div>
              <div className="absolute bg-bluegray_801 lg:h-[51px] xl:h-[58px] 2xl:h-[65px] 3xl:h-[78px] left-[0] rounded-radius50 lg:w-[50px] xl:w-[57px] 2xl:w-[64px] 3xl:w-[77px]"></div>
            </Stack>
            <Text style={{"top":"50%"}} className="absolute font-normal h-[max-content] inset-[0] justify-center m-[auto] not-italic lg:text-[26px] xl:text-[30px] 2xl:text-[34px] 3xl:text-[41px] text-white_A700 w-[max-content]">
              Generate
            </Text>
          </button>
          </Stack>
        </Column>
      </Column>
      </form>
    </>
  );
};

export default Generation;


// let i =0
// while(i<1){
//   i = i+1
//     window.location.reload();
// }