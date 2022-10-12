import React from "react";

import { Column, Text, Img, Stack } from "components";

const SignInPage = () => {
  return (
    <>
      <Column className="bg-gray_900 font-inter items-center mx-[auto] lg:p-[22px] xl:p-[25px] 2xl:p-[28px] 3xl:p-[34px] w-[100%]">
        <Text className="font-normal not-italic lg:text-[35px] xl:text-[40px] 2xl:text-[45px] 3xl:text-[54px] text-white_A700 w-[auto]">
          NAME
        </Text>
        <Text className="font-normal lg:mt-[64px] xl:mt-[73px] 2xl:mt-[82px] 3xl:mt-[99px] not-italic lg:text-[35px] xl:text-[40px] 2xl:text-[45px] 3xl:text-[54px] text-white_A700 w-[auto]">
          Sign In
        </Text>
        <Text className="font-normal lg:mt-[52px] xl:mt-[60px] 2xl:mt-[67px] 3xl:mt-[81px] not-italic lg:text-[17px] xl:text-[20px] 2xl:text-[22px] 3xl:text-[27px] text-white_A700 w-[auto]">
          Email
        </Text>
        <Column className="items-center lg:mb-[136px] xl:mb-[155px] 2xl:mb-[175px] 3xl:mb-[210px] lg:mt-[22px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[34px] w-[46%]">
          <Img
            src="images/img_prompt.svg"
            className="lg:h-[39px] xl:h-[45px] 2xl:h-[50px] 3xl:h-[60px] w-[100%]"
            alt="Prompt"
          />
          <Text className="font-normal lg:mt-[33px] xl:mt-[38px] 2xl:mt-[42px] 3xl:mt-[51px] not-italic lg:text-[17px] xl:text-[20px] 2xl:text-[22px] 3xl:text-[27px] text-white_A700 w-[auto]">
            Password
          </Text>
          <Img
            src="images/img_prompt.svg"
            className="lg:h-[39px] xl:h-[45px] 2xl:h-[50px] 3xl:h-[60px] lg:mt-[22px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[34px] w-[100%]"
            alt="Prompt One"
          />
          <Stack className="lg:h-[51px] xl:h-[58px] 2xl:h-[65px] 3xl:h-[78px] lg:mt-[114px] xl:mt-[130px] 2xl:mt-[146px] 3xl:mt-[176px] w-[40%]">
            <Column className="absolute bg-bluegray_800 inset-x-[13%] items-center justify-end xl:p-[10px] 2xl:p-[11px] 3xl:p-[13px] lg:p-[8px] w-[74%]">
              <Text className="font-normal lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] not-italic lg:text-[26px] xl:text-[30px] 2xl:text-[34px] 3xl:text-[41px] text-white_A700 w-[auto]">
                Sign In
              </Text>
            </Column>
            <div className="absolute bg-bluegray_801 lg:h-[51px] xl:h-[58px] 2xl:h-[65px] 3xl:h-[78px] right-[0] rounded-radius50 lg:w-[50px] xl:w-[57px] 2xl:w-[64px] 3xl:w-[77px]"></div>
            <div className="absolute bg-bluegray_801 lg:h-[51px] xl:h-[58px] 2xl:h-[65px] 3xl:h-[78px] left-[0] rounded-radius50 lg:w-[50px] xl:w-[57px] 2xl:w-[64px] 3xl:w-[77px]"></div>
          </Stack>
        </Column>
      </Column>
    </>
  );
};

export default SignInPage;
