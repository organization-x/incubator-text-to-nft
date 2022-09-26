import React from "react";

import { Column, Row, Text, Img, Stack } from "components";

const PostGenerationwoPreviewPage = () => {
  return (
    <>
      <Column className="bg-gray_900 font-inter items-end justify-end mx-[auto] lg:p-[14px] xl:p-[16px] 2xl:p-[19px] 3xl:p-[22px] w-[100%]">
        <Column className="items-center 3xl:mt-[11px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] w-[98%]">
          <Row className="items-center justify-between w-[100%]">
            <Text className="font-normal not-italic lg:text-[35px] xl:text-[40px] 2xl:text-[45px] 3xl:text-[54px] text-white_A700 w-[auto]">
              NAME
            </Text>
            <Text className="font-normal not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[19px] 3xl:text-[22px] text-white_A700 w-[auto]">
              Create Pricing About Us Support Sign In Settings
            </Text>
          </Row>
          <Img
            src="images/img_prompt.svg"
            className="lg:h-[39px] xl:h-[45px] 2xl:h-[50px] 3xl:h-[60px] 3xl:mt-[101px] lg:mt-[65px] xl:mt-[75px] 2xl:mt-[84px] w-[83%]"
            alt="Prompt"
          />
          <Img
            src="images/img_previewimages_428X1295.svg"
            className="lg:h-[318px] xl:h-[363px] 2xl:h-[408px] 3xl:h-[490px] 2xl:mt-[106px] 3xl:mt-[128px] lg:mt-[82px] xl:mt-[94px] w-[89%]"
            alt="PreviewImages"
          />
        </Column>
        <Row className="justify-end lg:mb-[3px] 2xl:mb-[4px] xl:mb-[4px] 3xl:mb-[5px] 3xl:mt-[110px] lg:mt-[71px] xl:mt-[82px] 2xl:mt-[92px] w-[59%]">
          <Stack className="lg:h-[35px] xl:h-[40px] 2xl:h-[45px] 3xl:h-[54px] w-[30%]">
            <Column className="absolute bg-bluegray_801 inset-x-[10%] items-center justify-end lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[9px] w-[80%]">
              <Text className="font-normal lg:mt-[4px] 2xl:mt-[5px] xl:mt-[5px] 3xl:mt-[6px] not-italic lg:text-[17px] xl:text-[20px] 2xl:text-[22px] 3xl:text-[27px] text-white_A700 w-[auto]">
                More Images
              </Text>
            </Column>
            <div className="absolute bg-bluegray_801 lg:h-[35px] xl:h-[40px] 2xl:h-[45px] 3xl:h-[54px] right-[0] rounded-radius2582 w-[20%]"></div>
            <div className="absolute bg-bluegray_801 lg:h-[35px] xl:h-[40px] 2xl:h-[45px] 3xl:h-[54px] left-[0] rounded-radius2582 w-[20%]"></div>
          </Stack>
          <Stack className="lg:h-[46px] xl:h-[52px] 2xl:h-[59px] 3xl:h-[70px] lg:ml-[275px] xl:ml-[315px] 2xl:ml-[354px] 3xl:ml-[425px] lg:mt-[28px] xl:mt-[33px] 2xl:mt-[37px] 3xl:mt-[44px] w-[27%]">
            <Column className="absolute bg-bluegray_800 inset-x-[13%] items-center lg:p-[13px] xl:p-[15px] 2xl:p-[17px] 3xl:p-[20px] w-[74%]">
              <Text className="font-normal mb-[1px] not-italic lg:text-[17px] xl:text-[20px] 2xl:text-[22px] 3xl:text-[27px] text-white_A700 w-[auto]">
                Continue
              </Text>
            </Column>
            <div className="absolute bg-bluegray_801 lg:h-[46px] xl:h-[52px] 2xl:h-[59px] 3xl:h-[70px] right-[0] rounded-radius305 w-[26%]"></div>
            <div className="absolute bg-bluegray_801 lg:h-[46px] xl:h-[52px] 2xl:h-[59px] 3xl:h-[70px] left-[0] rounded-radius305 w-[26%]"></div>
            <Stack className="absolute lg:h-[46px] xl:h-[52px] 2xl:h-[59px] 3xl:h-[70px] w-[100%]">
              <Stack className="absolute lg:h-[46px] xl:h-[52px] 2xl:h-[59px] 3xl:h-[70px] w-[100%]">
                <div className="absolute bg-bluegray_800 lg:h-[46px] xl:h-[52px] 2xl:h-[59px] 3xl:h-[70px] inset-x-[13%] w-[74%]"></div>
                <div className="absolute bg-bluegray_801 lg:h-[46px] xl:h-[52px] 2xl:h-[59px] 3xl:h-[70px] right-[0] rounded-radius305 w-[26%]"></div>
                <div className="absolute bg-bluegray_801 lg:h-[46px] xl:h-[52px] 2xl:h-[59px] 3xl:h-[70px] left-[0] rounded-radius305 w-[26%]"></div>
              </Stack>
              <Text className="absolute font-normal h-[max-content] inset-[0] justify-center m-[auto] not-italic lg:text-[23px] xl:text-[27px] 2xl:text-[30px] 3xl:text-[36px] text-white_A700 w-[max-content]">
                Continue
              </Text>
            </Stack>
          </Stack>
        </Row>
      </Column>
    </>
  );
};

export default PostGenerationwoPreviewPage;
