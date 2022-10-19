import React from "react";

import { Column, Row, Text, Line } from "components";

const SettingsPage = () => {
  return (
    <>
      <Column className="bg-gray_900 font-inter justify-end mx-[auto] lg:pt-[14px] xl:pt-[16px] 2xl:pt-[19px] 3xl:pt-[22px] lg:px-[14px] xl:px-[16px] 2xl:px-[19px] 3xl:px-[22px] w-[100%]">
        <Column className="items-center lg:ml-[14px] xl:ml-[16px] 2xl:ml-[19px] 3xl:ml-[22px] 3xl:mt-[11px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] pl-[4px] w-[99%]">
          <Row className="items-center justify-between w-[100%]">
            <Text className="font-normal not-italic lg:text-[35px] xl:text-[40px] 2xl:text-[45px] 3xl:text-[54px] text-white_A700 w-[auto]">
              NAME
            </Text>
            <Text className="font-normal not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[19px] 3xl:text-[22px] text-white_A700 w-[auto]">
              Create Pricing About Us Support Sign In Settings
            </Text>
          </Row>
        </Column>
        <Row className="lg:ml-[14px] xl:ml-[16px] 2xl:ml-[19px] 3xl:ml-[22px] mr-[auto] lg:mt-[20px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[25%]">
          <Text className="font-normal lg:mt-[59px] xl:mt-[67px] 2xl:mt-[76px] 3xl:mt-[91px] not-italic lg:text-[17px] xl:text-[20px] 2xl:text-[22px] 3xl:text-[27px] text-white_A700 w-[auto]">
            Log In Details
          </Text>
          <Line className="bg-gray_901 2xl:h-[1066px] 3xl:h-[1279px] lg:h-[829px] xl:h-[948px] lg:ml-[154px] xl:ml-[176px] 2xl:ml-[198px] 3xl:ml-[237px] w-[3px]" />
        </Row>
      </Column>
    </>
  );
};

export default SettingsPage;
