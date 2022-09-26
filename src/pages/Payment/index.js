import React from "react";

import { Column, Text, Img, Stack } from "components";

const PaymentPage = () => {
  return (
    <>
      <Column className="bg-gray_900 font-inter items-center mx-[auto] lg:p-[22px] xl:p-[25px] 2xl:p-[28px] 3xl:p-[34px] w-[100%]">
        <Text className="font-normal not-italic lg:text-[35px] xl:text-[40px] 2xl:text-[45px] 3xl:text-[54px] text-white_A700 w-[auto]">
          NAME
        </Text>
        <Text className="font-normal lg:mt-[182px] xl:mt-[208px] 2xl:mt-[234px] 3xl:mt-[281px] not-italic lg:text-[17px] xl:text-[20px] 2xl:text-[22px] 3xl:text-[27px] text-white_A700 w-[auto]">
          Wallet Address Private Key
        </Text>
        <Img
          src="images/img_prompt.svg"
          className="lg:h-[39px] xl:h-[45px] 2xl:h-[50px] 3xl:h-[60px] lg:mt-[60px] xl:mt-[68px] 2xl:mt-[77px] 3xl:mt-[92px] w-[46%]"
          alt="Prompt"
        />
        <Stack className="lg:h-[51px] xl:h-[58px] 2xl:h-[65px] 3xl:h-[78px] lg:mb-[138px] xl:mb-[158px] 2xl:mb-[178px] 3xl:mb-[213px] lg:mt-[158px] xl:mt-[181px] 2xl:mt-[203px] 3xl:mt-[244px] w-[18%]">
          <Stack className="absolute lg:h-[51px] xl:h-[58px] 2xl:h-[65px] 3xl:h-[78px] w-[100%]">
            <div className="absolute bg-bluegray_800 lg:h-[51px] xl:h-[58px] 2xl:h-[65px] 3xl:h-[78px] inset-x-[13%] w-[74%]"></div>
            <div className="absolute bg-bluegray_801 lg:h-[51px] xl:h-[58px] 2xl:h-[65px] 3xl:h-[78px] right-[0] rounded-radius50 lg:w-[50px] xl:w-[57px] 2xl:w-[64px] 3xl:w-[77px]"></div>
            <div className="absolute bg-bluegray_801 lg:h-[51px] xl:h-[58px] 2xl:h-[65px] 3xl:h-[78px] left-[0] rounded-radius50 lg:w-[50px] xl:w-[57px] 2xl:w-[64px] 3xl:w-[77px]"></div>
          </Stack>
          <Text className="absolute font-normal h-[max-content] inset-[0] justify-center m-[auto] not-italic lg:text-[26px] xl:text-[30px] 2xl:text-[34px] 3xl:text-[41px] text-white_A700 w-[max-content]">
            Connect
          </Text>
        </Stack>
      </Column>
    </>
  );
};

export default PaymentPage;
