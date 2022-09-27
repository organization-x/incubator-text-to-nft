import React from "react";

import { Column, Row, Text, Img, Stack } from "components";

const SupportPage = () => {
  return (
    <>
      <Column className="bg-gray_900 font-inter items-center mx-[auto] lg:p-[14px] xl:p-[16px] 2xl:p-[19px] 3xl:p-[22px] w-[100%]">
        <Row className="items-center justify-between 3xl:mt-[11px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] w-[98%]">
          <Text className="font-normal not-italic lg:text-[35px] xl:text-[40px] 2xl:text-[45px] 3xl:text-[54px] text-white_A700 w-[auto]">
            NAME
          </Text>
          <Text className="font-normal not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[19px] 3xl:text-[22px] text-white_A700 w-[auto]">
            Create Pricing About Us Support Sign In Settings
          </Text>
        </Row>
        <Img
          src="images/img_prompt.svg"
          className="lg:h-[39px] xl:h-[45px] 2xl:h-[50px] 3xl:h-[60px] lg:mt-[207px] xl:mt-[237px] 2xl:mt-[266px] 3xl:mt-[320px] w-[82%]"
          alt="Prompt"
        />
        <Stack className="lg:h-[46px] xl:h-[52px] 2xl:h-[59px] 3xl:h-[70px] lg:mb-[271px] xl:mb-[310px] 2xl:mb-[348px] 3xl:mb-[418px] xl:mt-[105px] 2xl:mt-[118px] 3xl:mt-[141px] lg:mt-[91px] w-[16%]">
          <Stack className="absolute lg:h-[46px] xl:h-[52px] 2xl:h-[59px] 3xl:h-[70px] right-[0] w-[87%]">
            <div className="absolute bg-bluegray_800 lg:h-[46px] xl:h-[52px] 2xl:h-[59px] 3xl:h-[70px] left-[0] w-[85%]"></div>
            <div className="absolute bg-bluegray_801 lg:h-[46px] xl:h-[52px] 2xl:h-[59px] 3xl:h-[70px] right-[0] rounded-radius305 w-[29%]"></div>
          </Stack>
          <div className="absolute bg-bluegray_801 lg:h-[46px] xl:h-[52px] 2xl:h-[59px] 3xl:h-[70px] left-[0] rounded-radius305 w-[26%]"></div>
          <Text className="absolute font-normal h-[max-content] inset-[0] justify-center m-[auto] not-italic lg:text-[26px] xl:text-[30px] 2xl:text-[34px] 3xl:text-[41px] text-white_A700 w-[max-content]">
            Search
          </Text>
        </Stack>
      </Column>
    </>
  );
};

export default SupportPage;
