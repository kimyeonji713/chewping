import { Box, Img, Text, useColorModeValue } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { detailList } from "../../api";
import { Link, useLocation } from "react-router-dom";
import { BsTelephone } from "react-icons/bs";
import { Loading } from "../../components/Loading";
import { PageTitle } from "../../components/PageTitle";

export const Detail = () => {
  const [detailData, setDetailData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const pointColor = useColorModeValue("#178254", "#FFAD60");
  const pointColor_2 = useColorModeValue("#423F3E", "#fff");
  const bg = useColorModeValue("#fdfdfd", "#293347");
  const fontColor = useColorModeValue("#423F3E", "#fff");
  const subBg = useColorModeValue("fff", "#53668d");

  useEffect(() => {
    (async () => {
      try {
        const {
          response: {
            body: {
              items: { item },
            },
          },
        } = await detailList();

        setDetailData(item);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  let location = useLocation();

  const idData = detailData?.filter(
    (data) => `/detail/${data.contentId}` === location.pathname
  );

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Box
          maxW={"500px"}
          w={"100%"}
          mx={"auto"}
          minHeight={"1100px"}
          bgColor={bg}
          position={"relative"}
        >
          {idData?.map((data) => (
            <Box key={data.contentId}>
              <PageTitle title={data.facltNm} />
              <Box w={"100%"} h={"350px"}>
                {data.firstImageUrl ? (
                  <Img
                    w={"100%"}
                    h={"100%"}
                    src={data.firstImageUrl}
                    alt={data.facltNm}
                  />
                ) : (
                  <Img
                    w={"100%"}
                    h={"100%"}
                    src="https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-for-website-design-or-mobile-app-no-photo-available_87543-11093.jpg?size=626&ext=jpg"
                    alt={data.facltNm}
                  />
                )}
              </Box>
              <Box
                w={"100%"}
                h={"800px"}
                bgColor={bg}
                borderRadius={"30px 30px 0 0 "}
                position={"absolute"}
                bottom={"0"}
                left={"0"}
              >
                <Box className="desc" padding={"20px"}>
                  <Text
                    fontSize={"20px"}
                    fontWeight={"700"}
                    letterSpacing={"-2px"}
                    marginBottom={"3px"}
                  >
                    {data.facltNm}
                  </Text>
                  <Text marginBottom={"10px"} fontSize={"14px"}>
                    {data.addr1}
                  </Text>

                  <Text
                    display={"flex"}
                    alignItems={"center"}
                    marginBottom={"5px"}
                    fontSize={"15px"}
                  >
                    <BsTelephone />
                    <Text marginLeft={"10px"} fontSize={"15px"}>
                      {data.tel}
                    </Text>
                  </Text>

                  <Box className="option" marginTop={"15px"}>
                    <Text
                      marginBottom={"15px"}
                      fontSize={"16px"}
                      fontWeight={"600"}
                    >
                      소개글
                    </Text>
                    {data.intro ? (
                      <Text fontSize={"15px"} fontWeight={"300"}>
                        {data.intro}
                      </Text>
                    ) : (
                      <Text fontSize={"15px"} fontWeight={"300"}>
                        없음
                      </Text>
                    )}

                    <Text
                      marginTop={"20px"}
                      fontSize={"15px"}
                      fontWeight={"600"}
                    >
                      외부시설
                    </Text>
                    <Text
                      marginTop={"5px"}
                      fontSize={"14px"}
                      fontWeight={"300"}
                    >
                      {data.posblFcltyCl}
                    </Text>

                    <Text
                      marginTop={"15px"}
                      fontSize={"15px"}
                      fontWeight={"600"}
                    >
                      내부시설
                    </Text>
                    <Text
                      marginTop={"5px"}
                      fontSize={"14px"}
                      fontWeight={"300"}
                    >
                      {data.sbrsCl}
                    </Text>

                    <Text
                      marginTop={"15px"}
                      fontSize={"15px"}
                      fontWeight={"600"}
                    >
                      주변 이용 시설
                    </Text>
                    <Text
                      marginTop={"5px"}
                      fontSize={"14px"}
                      fontWeight={"300"}
                    >
                      {data.posblFcltyCl}
                    </Text>

                    <Text
                      marginTop={"15px"}
                      fontSize={"15px"}
                      fontWeight={"600"}
                    >
                      반려동물 동반 여부
                    </Text>
                    <Text
                      marginTop={"5px"}
                      fontSize={"14px"}
                      fontWeight={"300"}
                    >
                      {data.animalCmgCl}
                    </Text>

                    <Text
                      marginTop={"15px"}
                      fontSize={"15px"}
                      fontWeight={"600"}
                    >
                      #키워드
                    </Text>
                    <Text
                      marginTop={"5px"}
                      fontSize={"14px"}
                      fontWeight={"300"}
                    >
                      {data.lctCl}
                    </Text>
                    <Link to={data.homepage}>
                      <Box
                        className="button"
                        w="480px"
                        h="50px"
                        margin="20px -7px 0 -7px"
                        bgColor={pointColor}
                        borderRadius="25px"
                        colorScheme="#fff"
                        display={"flex"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        position={"absolute"}
                        bottom={"30px"}
                        left={"18px"}
                      >
                        <Text fontSize="md" fontWeight={"600"} color={"#fff"}>
                          예약하러가기
                        </Text>
                      </Box>
                    </Link>
                  </Box>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      )}
    </>
  );
};
