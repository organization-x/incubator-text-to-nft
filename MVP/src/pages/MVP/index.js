import React from "react";
import { Column, Text, Img, Stack } from "components";
const MVPPage = () => {
  return (
    <>
    <form action="/Walletpost" method="post" 
              className="form">
      <Column className="bg-gray_900 font-inter items-center mx-[auto] lg:p-[22px] xl:p-[25px] 2xl:p-[28px] 3xl:p-[34px] w-[100%]">
        <Text className="font-normal not-italic lg:text-[35px] xl:text-[40px] 2xl:text-[45px] 3xl:text-[54px] text-white_A700 w-[auto]">
          NAME
        </Text>
        <Text className="font-normal lg:mt-[100px] xl:mt-[115px] 2xl:mt-[129px] 3xl:mt-[155px] not-italic lg:text-[17px] xl:text-[20px] 2xl:text-[22px] 3xl:text-[27px] text-white_A700 w-[auto]">
          Contract Address
        </Text>
          <Column className="items-center lg:mb-[138px] xl:mb-[158px] 2xl:mb-[178px] 3xl:mb-[213px] lg:mt-[36px] xl:mt-[41px] 2xl:mt-[46px] 3xl:mt-[56px] w-[46%]">
          <span id="AddressPrompt" style={{'position': 'relative'}}>
          <input id='address' name="address" type="text" style={{  'position': 'absolute', 'background-color': '#17171B', 'border-color' : '#17171B', 'color' : 'white', 'width' : '95%', 'left' : '2%', 'font-size' : '16px', 'height' : '20px', 'top' : '25%'}}/>
          <Img
            src="images/img_prompt.svg"
            className="lg:h-[39px] xl:h-[45px] 2xl:h-[50px] 3xl:h-[60px] w-[100%]"
            alt="Prompt"
            style={{'height': '50px', 'top' : '0', 'left' : '0'}}
          />
          </span>
          <Text className="font-normal 2xl:mt-[104px] 3xl:mt-[125px] lg:mt-[81px] xl:mt-[93px] not-italic lg:text-[17px] xl:text-[20px] 2xl:text-[22px] 3xl:text-[27px] text-white_A700 w-[auto]">
            Wallet Address Private Key
          </Text>
          <span id="AddressPrompt" style={{'position': 'relative'}}>
          <input id='key' name="key"  type="text" style={{  'position': 'absolute', 'background-color': '#17171B', 'border-color' : '#17171B', 'color' : 'white', 'width' : '95%', 'left' : '2%', 'font-size' : '16px', 'top' : '60%', 'height' : '20px'}}/>
          <Img
            src="images/img_prompt.svg"
            className="lg:h-[39px] xl:h-[45px] 2xl:h-[50px] 3xl:h-[60px] lg:mt-[34px] xl:mt-[39px] 2xl:mt-[44px] 3xl:mt-[53px] w-[100%]"
            alt="Prompt One"
          />
          </span>
          <Stack className="lg:h-[51px] xl:h-[58px] 2xl:h-[65px] 3xl:h-[78px] xl:mt-[103px] 2xl:mt-[116px] 3xl:mt-[139px] lg:mt-[90px] w-[40%]">
            <button id="connect" type="submit"> 
            <Stack className="absolute lg:h-[51px] xl:h-[58px] 2xl:h-[65px] 3xl:h-[78px] w-[100%]" style={{'top':'1%'}}>
              <div className="absolute bg-bluegray_800 lg:h-[51px] xl:h-[58px] 2xl:h-[65px] 3xl:h-[78px] inset-x-[13%] w-[74%]"></div>
              <div className="absolute bg-bluegray_801 lg:h-[51px] xl:h-[58px] 2xl:h-[65px] 3xl:h-[78px] right-[0] rounded-radius50 lg:w-[50px] xl:w-[57px] 2xl:w-[64px] 3xl:w-[77px]"></div>
              <div className="absolute bg-bluegray_801 lg:h-[51px] xl:h-[58px] 2xl:h-[65px] 3xl:h-[78px] left-[0] rounded-radius50 lg:w-[50px] xl:w-[57px] 2xl:w-[64px] 3xl:w-[77px]"></div>
            </Stack>
            <Text className="absolute font-normal h-[max-content] inset-[0] justify-center m-[auto] not-italic lg:text-[26px] xl:text-[30px] 2xl:text-[34px] 3xl:text-[41px] text-white_A700 w-[max-content]">
              Connect
            </Text>
            </button>
          </Stack>
          </Column>
      </Column>
      </form>
    </>
  );
};

export default MVPPage;
 {/* */}
