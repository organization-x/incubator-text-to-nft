import React from "react";

import { Column, Row, Text, Img, Stack, List } from "components";

const GenerationPagePage = () => {
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
        <Text className="font-normal 3xl:mt-[112px] lg:mt-[72px] xl:mt-[83px] 2xl:mt-[93px] not-italic lg:text-[23px] xl:text-[27px] 2xl:text-[30px] 3xl:text-[36px] text-white_A700 w-[auto]">
          Tag line here
        </Text>
        <Img
          src="images/img_prompt.svg"
          className="lg:h-[39px] xl:h-[45px] 2xl:h-[50px] 3xl:h-[60px] 3xl:mt-[118px] lg:mt-[77px] xl:mt-[88px] 2xl:mt-[99px] w-[82%]"
          alt="Prompt"
        />
        <Stack className="lg:h-[51px] xl:h-[58px] 2xl:h-[65px] 3xl:h-[78px] 3xl:mt-[105px] lg:mt-[68px] xl:mt-[77px] 2xl:mt-[87px] w-[18%]">
          <Stack className="absolute lg:h-[51px] xl:h-[58px] 2xl:h-[65px] 3xl:h-[78px] w-[100%]">
            <div className="absolute bg-bluegray_800 lg:h-[51px] xl:h-[58px] 2xl:h-[65px] 3xl:h-[78px] inset-x-[13%] w-[74%]"></div>
            <div className="absolute bg-bluegray_801 lg:h-[51px] xl:h-[58px] 2xl:h-[65px] 3xl:h-[78px] right-[0] rounded-radius50 lg:w-[50px] xl:w-[57px] 2xl:w-[64px] 3xl:w-[77px]"></div>
            <div className="absolute bg-bluegray_801 lg:h-[51px] xl:h-[58px] 2xl:h-[65px] 3xl:h-[78px] left-[0] rounded-radius50 lg:w-[50px] xl:w-[57px] 2xl:w-[64px] 3xl:w-[77px]"></div>
          </Stack>
          <Text className="absolute font-normal h-[max-content] inset-[0] justify-center m-[auto] not-italic lg:text-[26px] xl:text-[30px] 2xl:text-[34px] 3xl:text-[41px] text-white_A700 w-[max-content]">
            Generate
          </Text>
        </Stack>
        <Text className="font-normal 2xl:mt-[101px] 3xl:mt-[122px] lg:mt-[79px] xl:mt-[90px] not-italic lg:text-[23px] xl:text-[27px] 2xl:text-[30px] 3xl:text-[36px] text-white_A700 w-[auto]">
          Featured Collections
        </Text>
        <List
          className="lg:gap-[105px] xl:gap-[121px] 2xl:gap-[136px] 3xl:gap-[163px] grid grid-cols-6 min-h-[auto] lg:mt-[49px] xl:mt-[56px] 2xl:mt-[63px] 3xl:mt-[76px] w-[92%]"
          orientation="horizontal"
        >
          <Stack className="2xl:h-[103px] 3xl:h-[124px] lg:h-[80px] xl:h-[92px] lg:mt-[4px] 2xl:mt-[5px] xl:mt-[5px] 3xl:mt-[6px] w-[100%]">
            <Stack className="absolute 3xl:h-[106px] lg:h-[69px] xl:h-[78px] 2xl:h-[88px] right-[0] top-[0] 3xl:w-[105px] lg:w-[68px] xl:w-[77px] 2xl:w-[87px]">
              <Img
                src="images/img_imagepopup.svg"
                className="absolute lg:h-[60px] xl:h-[68px] 2xl:h-[77px] 3xl:h-[92px] right-[0] top-[0] lg:w-[59px] xl:w-[67px] 2xl:w-[76px] 3xl:w-[91px]"
                alt="ImagePopUp"
              />
              <Img
                src="images/img_imagepopup.svg"
                className="absolute bottom-[0] lg:h-[60px] xl:h-[68px] 2xl:h-[77px] 3xl:h-[92px] left-[0] lg:w-[59px] xl:w-[67px] 2xl:w-[76px] 3xl:w-[91px]"
                alt="ImagePopUp One"
              />
            </Stack>
            <Img
              src="images/img_imagepopup.svg"
              className="absolute bottom-[0] lg:h-[60px] xl:h-[68px] 2xl:h-[77px] 3xl:h-[92px] left-[0] lg:w-[59px] xl:w-[67px] 2xl:w-[76px] 3xl:w-[91px]"
              alt="ImagePopUp Two"
            />
          </Stack>
          <Stack className="2xl:h-[103px] 3xl:h-[124px] lg:h-[80px] xl:h-[92px] lg:mt-[4px] 2xl:mt-[5px] xl:mt-[5px] 3xl:mt-[6px] w-[100%]">
            <Stack className="absolute 3xl:h-[106px] lg:h-[69px] xl:h-[78px] 2xl:h-[88px] right-[0] top-[0] 3xl:w-[105px] lg:w-[68px] xl:w-[77px] 2xl:w-[87px]">
              <Img
                src="images/img_imagepopup.svg"
                className="absolute lg:h-[60px] xl:h-[68px] 2xl:h-[77px] 3xl:h-[92px] right-[0] top-[0] lg:w-[59px] xl:w-[67px] 2xl:w-[76px] 3xl:w-[91px]"
                alt="ImagePopUp One"
              />
              <Img
                src="images/img_imagepopup.svg"
                className="absolute bottom-[0] lg:h-[60px] xl:h-[68px] 2xl:h-[77px] 3xl:h-[92px] left-[0] lg:w-[59px] xl:w-[67px] 2xl:w-[76px] 3xl:w-[91px]"
                alt="ImagePopUp One One"
              />
            </Stack>
            <Img
              src="images/img_imagepopup.svg"
              className="absolute bottom-[0] lg:h-[60px] xl:h-[68px] 2xl:h-[77px] 3xl:h-[92px] left-[0] lg:w-[59px] xl:w-[67px] 2xl:w-[76px] 3xl:w-[91px]"
              alt="ImagePopUp Two One"
            />
          </Stack>
          <Stack className="2xl:h-[103px] 3xl:h-[124px] lg:h-[80px] xl:h-[92px] lg:mb-[4px] 2xl:mb-[5px] xl:mb-[5px] 3xl:mb-[6px] w-[100%]">
            <Stack className="absolute 3xl:h-[106px] lg:h-[69px] xl:h-[78px] 2xl:h-[88px] right-[0] top-[0] 3xl:w-[105px] lg:w-[68px] xl:w-[77px] 2xl:w-[87px]">
              <Img
                src="images/img_imagepopup.svg"
                className="absolute lg:h-[60px] xl:h-[68px] 2xl:h-[77px] 3xl:h-[92px] right-[0] top-[0] lg:w-[59px] xl:w-[67px] 2xl:w-[76px] 3xl:w-[91px]"
                alt="ImagePopUp Two"
              />
              <Img
                src="images/img_imagepopup.svg"
                className="absolute bottom-[0] lg:h-[60px] xl:h-[68px] 2xl:h-[77px] 3xl:h-[92px] left-[0] lg:w-[59px] xl:w-[67px] 2xl:w-[76px] 3xl:w-[91px]"
                alt="ImagePopUp One Two"
              />
            </Stack>
            <Img
              src="images/img_imagepopup.svg"
              className="absolute bottom-[0] lg:h-[60px] xl:h-[68px] 2xl:h-[77px] 3xl:h-[92px] left-[0] lg:w-[59px] xl:w-[67px] 2xl:w-[76px] 3xl:w-[91px]"
              alt="ImagePopUp Two Two"
            />
          </Stack>
          <Stack className="2xl:h-[103px] 3xl:h-[124px] lg:h-[80px] xl:h-[92px] lg:mb-[4px] 2xl:mb-[5px] xl:mb-[5px] 3xl:mb-[6px] w-[100%]">
            <Stack className="absolute 3xl:h-[106px] lg:h-[69px] xl:h-[78px] 2xl:h-[88px] right-[0] top-[0] 3xl:w-[105px] lg:w-[68px] xl:w-[77px] 2xl:w-[87px]">
              <Img
                src="images/img_imagepopup.svg"
                className="absolute lg:h-[60px] xl:h-[68px] 2xl:h-[77px] 3xl:h-[92px] right-[0] top-[0] lg:w-[59px] xl:w-[67px] 2xl:w-[76px] 3xl:w-[91px]"
                alt="ImagePopUp Three"
              />
              <Img
                src="images/img_imagepopup.svg"
                className="absolute bottom-[0] lg:h-[60px] xl:h-[68px] 2xl:h-[77px] 3xl:h-[92px] left-[0] lg:w-[59px] xl:w-[67px] 2xl:w-[76px] 3xl:w-[91px]"
                alt="ImagePopUp One Three"
              />
            </Stack>
            <Img
              src="images/img_imagepopup.svg"
              className="absolute bottom-[0] lg:h-[60px] xl:h-[68px] 2xl:h-[77px] 3xl:h-[92px] left-[0] lg:w-[59px] xl:w-[67px] 2xl:w-[76px] 3xl:w-[91px]"
              alt="ImagePopUp Two Three"
            />
          </Stack>
          <Stack className="2xl:h-[103px] 3xl:h-[124px] lg:h-[80px] xl:h-[92px] my-[3px] w-[100%]">
            <Stack className="absolute 3xl:h-[106px] lg:h-[69px] xl:h-[78px] 2xl:h-[88px] right-[0] top-[0] 3xl:w-[105px] lg:w-[68px] xl:w-[77px] 2xl:w-[87px]">
              <Img
                src="images/img_imagepopup.svg"
                className="absolute lg:h-[60px] xl:h-[68px] 2xl:h-[77px] 3xl:h-[92px] right-[0] top-[0] lg:w-[59px] xl:w-[67px] 2xl:w-[76px] 3xl:w-[91px]"
                alt="ImagePopUp Four"
              />
              <Img
                src="images/img_imagepopup.svg"
                className="absolute bottom-[0] lg:h-[60px] xl:h-[68px] 2xl:h-[77px] 3xl:h-[92px] left-[0] lg:w-[59px] xl:w-[67px] 2xl:w-[76px] 3xl:w-[91px]"
                alt="ImagePopUp One Four"
              />
            </Stack>
            <Img
              src="images/img_imagepopup.svg"
              className="absolute bottom-[0] lg:h-[60px] xl:h-[68px] 2xl:h-[77px] 3xl:h-[92px] left-[0] lg:w-[59px] xl:w-[67px] 2xl:w-[76px] 3xl:w-[91px]"
              alt="ImagePopUp Two Four"
            />
          </Stack>
          <Stack className="2xl:h-[103px] 3xl:h-[124px] lg:h-[80px] xl:h-[92px] my-[3px] w-[100%]">
            <Stack className="absolute 3xl:h-[106px] lg:h-[69px] xl:h-[78px] 2xl:h-[88px] right-[0] top-[0] 3xl:w-[105px] lg:w-[68px] xl:w-[77px] 2xl:w-[87px]">
              <Img
                src="images/img_imagepopup.svg"
                className="absolute lg:h-[60px] xl:h-[68px] 2xl:h-[77px] 3xl:h-[92px] right-[0] top-[0] lg:w-[59px] xl:w-[67px] 2xl:w-[76px] 3xl:w-[91px]"
                alt="ImagePopUp Five"
              />
              <Img
                src="images/img_imagepopup.svg"
                className="absolute bottom-[0] lg:h-[60px] xl:h-[68px] 2xl:h-[77px] 3xl:h-[92px] left-[0] lg:w-[59px] xl:w-[67px] 2xl:w-[76px] 3xl:w-[91px]"
                alt="ImagePopUp One Five"
              />
            </Stack>
            <Img
              src="images/img_imagepopup.svg"
              className="absolute bottom-[0] lg:h-[60px] xl:h-[68px] 2xl:h-[77px] 3xl:h-[92px] left-[0] lg:w-[59px] xl:w-[67px] 2xl:w-[76px] 3xl:w-[91px]"
              alt="ImagePopUp Two Five"
            />
          </Stack>
        </List>
        <Row className="justify-between 3xl:mb-[109px] lg:mb-[71px] xl:mb-[81px] 2xl:mb-[91px] lg:mt-[11px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[93%]">
          <Text className="font-normal lg:mt-[4px] 2xl:mt-[5px] xl:mt-[5px] 3xl:mt-[6px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-white_A700 w-[auto]">
            Collection Name
          </Text>
          <Text className="font-normal lg:mt-[4px] 2xl:mt-[5px] xl:mt-[5px] 3xl:mt-[6px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-white_A700 w-[auto]">
            Collection Name
          </Text>
          <Text className="font-normal lg:mb-[4px] 2xl:mb-[5px] xl:mb-[5px] 3xl:mb-[6px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-white_A700 w-[auto]">
            Collection Name
          </Text>
          <Text className="font-normal lg:mb-[4px] 2xl:mb-[5px] xl:mb-[5px] 3xl:mb-[6px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-white_A700 w-[auto]">
            Collection Name
          </Text>
          <Text className="font-normal my-[3px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-white_A700 w-[auto]">
            Collection Name
          </Text>
          <Text className="font-normal my-[3px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-white_A700 w-[auto]">
            Collection Name
          </Text>
        </Row>
      </Column>
    </>
  );
};

export default GenerationPagePage;
