import React from "react";

import { Column, Row, Text, Stack, Line, Img } from "components";

const AccountPage = () => {
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
        <Stack className="lg:h-[315px] xl:h-[360px] 2xl:h-[405px] 3xl:h-[485px] lg:mb-[341px] xl:mb-[390px] 2xl:mb-[439px] 3xl:mb-[527px] 3xl:pl-[11px] lg:pl-[7px] xl:pl-[8px] 2xl:pl-[9px] w-[85%]">
          <Column className="absolute right-[0] top-[0] w-[91%]">
            <Text className="font-normal lg:ml-[304px] xl:ml-[348px] 2xl:ml-[391px] 3xl:ml-[469px] not-italic lg:text-[35px] xl:text-[40px] 2xl:text-[45px] 3xl:text-[54px] text-white_A700 w-[auto]">
              Analytics
            </Text>
            <Row className="justify-between xl:mt-[105px] 2xl:mt-[119px] 3xl:mt-[142px] lg:mt-[92px] w-[100%]">
              <Text className="font-normal mb-[4px] not-italic lg:text-[29px] xl:text-[33px] 2xl:text-[38px] 3xl:text-[45px] text-white_A700 w-[auto]">
                Floor Price
              </Text>
              <Text className="font-normal my-[2px] not-italic lg:text-[29px] xl:text-[33px] 2xl:text-[38px] 3xl:text-[45px] text-white_A700 w-[auto]">
                Volume
              </Text>
              <Text className="font-normal mt-[4px] not-italic lg:text-[29px] xl:text-[33px] 2xl:text-[38px] 3xl:text-[45px] text-white_A700 w-[auto]">
                Unique Owners
              </Text>
            </Row>
            <Row className="justify-end ml-[auto] lg:mt-[36px] xl:mt-[41px] 2xl:mt-[46px] 3xl:mt-[56px] w-[53%]">
              <Text className="font-normal lg:mb-[4px] 2xl:mb-[5px] xl:mb-[5px] 3xl:mb-[6px] not-italic lg:text-[47px] xl:text-[54px] 2xl:text-[60px] 3xl:text-[73px] text-white_A700 w-[auto]">
                6.6K
              </Text>
              <Text className="font-normal lg:ml-[250px] xl:ml-[286px] 2xl:ml-[322px] 3xl:ml-[386px] lg:mt-[4px] 2xl:mt-[5px] xl:mt-[5px] 3xl:mt-[6px] not-italic lg:text-[47px] xl:text-[54px] 2xl:text-[60px] 3xl:text-[73px] text-white_A700 w-[auto]">
                6.6K
              </Text>
            </Row>
          </Column>
          <Stack className="absolute bottom-[0] lg:h-[110px] xl:h-[126px] 2xl:h-[142px] 3xl:h-[170px] left-[1%] w-[31%]">
            <Stack className="absolute lg:h-[110px] xl:h-[126px] 2xl:h-[142px] 3xl:h-[170px] w-[100%]">
              <Stack className="absolute lg:h-[110px] xl:h-[126px] 2xl:h-[142px] 3xl:h-[170px] w-[100%]">
                <Column className="absolute bottom-[0] inset-x-[0] items-center mx-[auto] w-[96%]">
                  <Line className="bg-black_900 h-[1px] w-[99%]" />
                  <Row className="w-[100%]">
                    <Column className="w-[8%]">
                      <div className="bg-black_900 lg:h-[3px] 2xl:h-[4px] xl:h-[4px] 3xl:h-[5px] ml-[3px] w-[3%]"></div>
                      <Text className="font-normal mt-[1px] not-italic xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-black_900 w-[auto]">
                        0
                      </Text>
                    </Column>
                    <Column className="w-[8%]">
                      <div className="bg-black_900 lg:h-[3px] 2xl:h-[4px] xl:h-[4px] 3xl:h-[5px] ml-[2px] w-[3%]"></div>
                      <Text className="font-normal mt-[1px] not-italic xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-black_900 w-[auto]">
                        1
                      </Text>
                    </Column>
                    <Column className="w-[8%]">
                      <div className="bg-black_900 lg:h-[3px] 2xl:h-[4px] xl:h-[4px] 3xl:h-[5px] ml-[2px] w-[3%]"></div>
                      <Text className="font-normal mt-[1px] not-italic xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-black_900 w-[auto]">
                        2
                      </Text>
                    </Column>
                    <Column className="w-[8%]">
                      <div className="bg-black_900 lg:h-[3px] 2xl:h-[4px] xl:h-[4px] 3xl:h-[5px] ml-[2px] w-[3%]"></div>
                      <Text className="font-normal mt-[1px] not-italic xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-black_900 w-[auto]">
                        3
                      </Text>
                    </Column>
                    <Column className="w-[8%]">
                      <div className="bg-black_900 lg:h-[3px] 2xl:h-[4px] xl:h-[4px] 3xl:h-[5px] ml-[3px] w-[3%]"></div>
                      <Text className="font-normal mt-[1px] not-italic xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-black_900 w-[auto]">
                        4
                      </Text>
                    </Column>
                    <Column className="w-[8%]">
                      <div className="bg-black_900 lg:h-[3px] 2xl:h-[4px] xl:h-[4px] 3xl:h-[5px] ml-[2px] w-[3%]"></div>
                      <Text className="font-normal mt-[1px] not-italic xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-black_900 w-[auto]">
                        5
                      </Text>
                    </Column>
                    <Column className="w-[8%]">
                      <div className="bg-black_900 lg:h-[3px] 2xl:h-[4px] xl:h-[4px] 3xl:h-[5px] ml-[2px] w-[3%]"></div>
                      <Text className="font-normal mt-[1px] not-italic xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-black_900 w-[auto]">
                        6
                      </Text>
                    </Column>
                    <Column className="w-[8%]">
                      <div className="bg-black_900 lg:h-[3px] 2xl:h-[4px] xl:h-[4px] 3xl:h-[5px] ml-[2px] w-[3%]"></div>
                      <Text className="font-normal mt-[1px] not-italic xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-black_900 w-[auto]">
                        7
                      </Text>
                    </Column>
                    <Column className="w-[8%]">
                      <div className="bg-black_900 lg:h-[3px] 2xl:h-[4px] xl:h-[4px] 3xl:h-[5px] ml-[2px] w-[3%]"></div>
                      <Text className="font-normal mt-[1px] not-italic xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-black_900 w-[auto]">
                        8
                      </Text>
                    </Column>
                    <Column className="w-[8%]">
                      <div className="bg-black_900 lg:h-[3px] 2xl:h-[4px] xl:h-[4px] 3xl:h-[5px] ml-[2px] w-[3%]"></div>
                      <Text className="font-normal mt-[1px] not-italic xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-black_900 w-[auto]">
                        9
                      </Text>
                    </Column>
                    <Column className="justify-end lg:pr-[16px] xl:pr-[18px] 2xl:pr-[20px] 3xl:pr-[25px] w-[8%]">
                      <div className="bg-black_900 lg:h-[3px] 2xl:h-[4px] xl:h-[4px] 3xl:h-[5px] ml-[4px] w-[11%]"></div>
                      <Text className="font-normal mt-[3px] not-italic xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-black_900 w-[auto]">
                        10
                      </Text>
                    </Column>
                    <Column className="lg:h-[21px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[33px] justify-end lg:pr-[15px] xl:pr-[17px] 2xl:pr-[20px] 3xl:pr-[24px] lg:w-[20px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[32px]">
                      <div className="bg-black_900 lg:h-[3px] 2xl:h-[4px] xl:h-[4px] 3xl:h-[5px] ml-[3px] w-[14%]"></div>
                      <Text className="font-normal mt-[3px] not-italic xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-black_900 w-[auto]">
                        11
                      </Text>
                    </Column>
                    <Column className="items-end justify-end w-[2%]">
                      <div className="bg-black_900 lg:h-[3px] 2xl:h-[4px] xl:h-[4px] 3xl:h-[5px] mr-[1px] w-[13%]"></div>
                      <Text className="font-normal mt-[3px] not-italic xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-black_900 w-[auto]">
                        12
                      </Text>
                    </Column>
                  </Row>
                </Column>
                <Row className="absolute items-center left-[0] top-[0] w-[4%]">
                  <Column className="pr-[1px] pt-[1px] w-[94%]">
                    <Row className="justify-evenly mt-[3px] w-[100%]">
                      <Text className="font-normal not-italic xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-black_900 w-[auto]">
                        80
                      </Text>
                      <div className="bg-black_900 2xl:h-[1px] xl:h-[1px] lg:h-[1px] 3xl:h-[2px] mt-[3px] w-[20%]"></div>
                    </Row>
                    <Row className="justify-evenly mt-[4px] w-[100%]">
                      <Text className="font-normal not-italic xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-black_900 w-[auto]">
                        60
                      </Text>
                      <div className="bg-black_900 2xl:h-[1px] xl:h-[1px] lg:h-[1px] 3xl:h-[2px] lg:mt-[4px] 2xl:mt-[5px] xl:mt-[5px] 3xl:mt-[6px] w-[20%]"></div>
                    </Row>
                    <Row className="justify-evenly lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] w-[100%]">
                      <Text className="font-normal not-italic xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-black_900 w-[auto]">
                        40
                      </Text>
                      <div className="bg-black_900 2xl:h-[1px] xl:h-[1px] lg:h-[1px] 3xl:h-[2px] lg:mt-[4px] 2xl:mt-[5px] xl:mt-[5px] 3xl:mt-[6px] w-[19%]"></div>
                    </Row>
                    <Row className="justify-evenly lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] w-[100%]">
                      <Text className="font-normal not-italic xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-black_900 w-[auto]">
                        20
                      </Text>
                      <div className="bg-black_900 2xl:h-[1px] xl:h-[1px] lg:h-[1px] 3xl:h-[2px] lg:mt-[4px] 2xl:mt-[5px] xl:mt-[5px] 3xl:mt-[6px] w-[20%]"></div>
                    </Row>
                    <Row className="items-end justify-evenly ml-[auto] lg:mt-[4px] 2xl:mt-[5px] xl:mt-[5px] 3xl:mt-[6px] w-[87%]">
                      <Text className="font-normal not-italic xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-black_900 w-[auto]">
                        0
                      </Text>
                      <div className="bg-black_900 2xl:h-[1px] xl:h-[1px] lg:h-[1px] 3xl:h-[2px] mb-[3px] xl:mt-[5px] lg:mt-[5px] 2xl:mt-[6px] 3xl:mt-[8px] w-[23%]"></div>
                    </Row>
                  </Column>
                  <Line className="bg-black_900 xl:h-[109px] 2xl:h-[122px] 3xl:h-[147px] lg:h-[95px] w-[1px]" />
                </Row>
              </Stack>
              <Img
                src="images/img_group.svg"
                className="absolute xl:h-[109px] 2xl:h-[122px] 3xl:h-[147px] lg:h-[95px] inset-x-[0] mx-[auto] top-[3%] w-[95%]"
                alt="Group"
              />
            </Stack>
            <Img
              src="images/img_group_24X371.svg"
              className="absolute lg:h-[18px] xl:h-[21px] 2xl:h-[23px] 3xl:h-[28px] inset-x-[0] mx-[auto] top-[3%] w-[96%]"
              alt="Group One"
            />
          </Stack>
        </Stack>
      </Column>
    </>
  );
};

export default AccountPage;
