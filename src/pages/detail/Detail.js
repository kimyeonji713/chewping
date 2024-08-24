import { Box, Img, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { basedList } from "../../api";
import { Link, useLocation } from "react-router-dom";
import { BsTelephone } from "react-icons/bs";
import { IoHomeOutline } from "react-icons/io5";

export const Detail = () => {
  const [baseData, setBaseData] = useState();

  useEffect(() => {
    (async () => {
      try {
        const {
          response: {
            body: {
              items: { item },
            },
          },
        } = await basedList();

        // console.log(item);
        setBaseData(item);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  // console.log(baseData);

  // const {
  //   state: { id },
  // } = useLocation();

  // let location = useLocation();
  // console.log(location);

  // console.log(id);

  const idData = baseData?.filter((data) => data.contentId === "100002");

  return (
    <Box
      maxW={"500px"}
      w={"100%"}
      mx={"auto"}
      minHeight={"1000px"}
      bgColor={"#f1f1f1"}
      boxShadow={"rgb(232, 234, 246) 0px 0px 5px 5px;"}
      padding={"70px 0 0 0"}
      position={"relative"}
    >
      {idData?.map((data) => (
        <Box key={data.contentId}>
          <Box w={"100%"} h={"300px"}>
            <Img
              w={"100%"}
              h={"100%"}
              src={data.firstImageUrl}
              alt="캠핑장"
            ></Img>
          </Box>
          <Box
            w={"100%"}
            h={"660px"}
            bgColor={"#fff"}
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

              <Box className="option" marginTop={"30px"}>
                <Text
                  marginBottom={"15px"}
                  fontSize={"16px"}
                  fontWeight={"600"}
                >
                  소개글
                </Text>
                <Text fontSize={"15px"} fontWeight={"300"}>
                  {data.intro}
                </Text>

                <Text marginTop={"20px"} fontSize={"15px"} fontWeight={"600"}>
                  외부시설
                </Text>
                <Text marginTop={"5px"} fontSize={"14px"} fontWeight={"300"}>
                  {data.posblFcltyCl}
                </Text>

                <Text marginTop={"15px"} fontSize={"15px"} fontWeight={"600"}>
                  내부시설
                </Text>
                <Text marginTop={"5px"} fontSize={"14px"} fontWeight={"300"}>
                  {data.sbrsCl}
                </Text>

                <Text marginTop={"15px"} fontSize={"15px"} fontWeight={"600"}>
                  반려동물 동반 여부
                </Text>
                <Text marginTop={"5px"} fontSize={"14px"} fontWeight={"300"}>
                  {data.animalCmgCl}
                </Text>

                <Text marginTop={"15px"} fontSize={"15px"} fontWeight={"600"}>
                  #키워드
                </Text>
                <Text marginTop={"5px"} fontSize={"14px"} fontWeight={"300"}>
                  {data.lctCl}
                </Text>
                <Link to={data.homepage}>
                  <Box
                    className="button"
                    w="480px"
                    h="50px"
                    margin="20px -7px 0 -7px"
                    bgColor="#178254"
                    borderRadius="25px"
                    colorScheme="#fff"
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <Text fontSize="md" fontWeight={"600"} color="#fff">
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
  );
};
