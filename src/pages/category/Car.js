import { useEffect } from "react";
import { scrollList } from "../../api";
import { useState } from "react";
import { Box, Image, Text, useColorModeValue } from "@chakra-ui/react";
import InfiniteScroll from "react-infinite-scroll-component";
import { TopBtn } from "../../components/TopBtn";
import { useScrollTop } from "../../lib/useScrollTop";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { routes } from "../../routes";
import { Loading } from "../../components/Loading";

export const Car = () => {
  useScrollTop();

  const [scrollData, setScrollData] = useState();
  const [resultData, setResultData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const pointColor = useColorModeValue("#178254", "#FFAD60");
  const pointColor_2 = useColorModeValue("#423F3E", "#93653a");
  const fontColor = useColorModeValue("#423F3E", "#fff");

  const subBg = useColorModeValue("fff", "#53668d");
  const bg = useColorModeValue("#f9f9f9", "#293347");
  const boderStyle = useColorModeValue(
    "1px solid #a5b9b0",
    "1px solid #FFAD60"
  );

  useEffect(() => {
    (async () => {
      try {
        const {
          response: { body },
        } = await scrollList(1);

        const {
          response: {
            body: {
              items: { item },
            },
          },
        } = await scrollList(1);

        // console.log(item);
        setScrollData(item);
        setResultData(body);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  // console.log(basedData);
  // console.log(resultData);

  const base = scrollData?.filter((data) => data.induty === "자동차야영장");

  const fetchData = async () => {
    try {
      let page = (resultData.pageNo += 1);
      console.log(page);
      if (resultData.pageNo <= resultData.totalCount) {
        const {
          response: {
            body: {
              items: { item },
            },
          },
        } = await scrollList(page);
        setScrollData(scrollData.concat(item));
      } else {
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Box maxW={"500px"} w={"100%"} mx={"auto"} bgColor={bg}>
          {scrollData && (
            <InfiniteScroll
              dataLength={scrollData.length}
              next={fetchData}
              hasMore={true}
            >
              <Box w={"100%"} padding={"10px"}>
                <Box
                  w={"100%"}
                  h={"50px"}
                  display={"flex"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  margin={"0 0 10px 0"}
                  padding={"5px"}
                >
                  <Link to={routes.caravan}>
                    <Box color={fontColor} opacity={"0.7"} cursor={"pointer"}>
                      <FaChevronLeft />
                    </Box>
                  </Link>
                  <Text
                    marginLeft={"10px"}
                    color={fontColor}
                    marginTop={"20px"}
                    marginBottom={"20px"}
                    fontSize={"20px"}
                    fontWeight={"700"}
                    opacity={"0.7"}
                  >
                    자동차 야영장
                  </Text>
                  <Link to={routes.pet}>
                    <Box color={fontColor} opacity={"0.7"} cursor={"pointer"}>
                      <FaChevronRight />
                    </Box>
                  </Link>
                </Box>
                {base?.map((data) => (
                  <Box
                    key={data.contentId}
                    w={"100%"}
                    h={"180px"}
                    marginBottom={"20px"}
                    display={"flex"}
                    borderRadius={"20px"}
                    bgColor={subBg}
                  >
                    <Link to={`/detail/${data.contentId}`}>
                      <Box
                        w={"100%"}
                        h={"180px"}
                        marginBottom={"20px"}
                        display={"flex"}
                        borderRadius={"20px"}
                        bgColor={subBg}
                        cursor={"pointer"}
                      >
                        <Image
                          src={data?.firstImageUrl}
                          w={"40%"}
                          display={"block"}
                          borderRadius={"20px"}
                        />

                        <Box padding={"15px"}>
                          <Text
                            fontSize={"16px"}
                            fontWeight={"700"}
                            color={fontColor}
                          >
                            {data?.facltNm}
                          </Text>
                          <Text
                            marginTop={"15px"}
                            fontSize={"14px"}
                            color={fontColor}
                            opacity={"0.8"}
                          >
                            {data.featureNm.slice(0, 100) + "..."}
                          </Text>
                        </Box>
                      </Box>
                    </Link>
                  </Box>
                ))}
              </Box>
            </InfiniteScroll>
          )}
          <TopBtn />
        </Box>
      )}
    </>
  );
};
