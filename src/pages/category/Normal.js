import { useEffect } from "react";
import { scrollList } from "../../api";
import { useState } from "react";
import { Box, Image, Text, useColorModeValue } from "@chakra-ui/react";
import InfiniteScroll from "react-infinite-scroll-component";
import { TopBtn } from "../../components/TopBtn";
import { useScrollTop } from "../../lib/useScrollTop";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import { routes } from "../../routes";
import { Loading } from "../../components/Loading";
import { PageTitle } from "../../components/PageTitle";

export const Normal = () => {
  useScrollTop();

  const [scrollData, setScrollData] = useState();
  const [resultData, setResultData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const fontColor = useColorModeValue("#423F3E", "#fff");
  const subBg = useColorModeValue("fff", "#53668d");
  const bg = useColorModeValue("#fff", "#1a202c");

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

  const normalBase = scrollData?.filter((data) => data.induty === "일반야영장");

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
        // console.log(page);
        setScrollData(scrollData.concat(item));
      } else {
      }
    } catch (error) {
      console.log(error);
    }
  };

  // console.log(normalBase);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Box maxW={"500px"} mx={"auto"} bgColor={bg}>
          <PageTitle title={"일반 야영장"} />

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
                  justifyContent={"center"}
                  alignItems={"center"}
                  margin={"0 0 10px 0"}
                  position={"relative"}
                >
                  <Text
                    color={fontColor}
                    marginTop={"20px"}
                    marginBottom={"20px"}
                    fontSize={"20px"}
                    fontWeight={"700"}
                    opacity={"0.7"}
                  >
                    일반 야영장
                  </Text>
                  <Link to={routes.gram}>
                    <Box
                      position={"absolute"}
                      top={"17px"}
                      right={"5px"}
                      color={fontColor}
                      opacity={"0.7"}
                      cursor={"pointer"}
                    >
                      <FaChevronRight />
                    </Box>
                  </Link>
                </Box>
                {normalBase?.map((data) => (
                  <Box
                    key={data.contentId}
                    w={"100%"}
                    h={"180px"}
                    marginBottom={"20px"}
                    display={"flex"}
                    borderRadius={"20px"}
                    bgColor={subBg}
                  >
                    <Link
                      to={`/detail/${data.contentId}`}
                      state={{ id: data.contentId }}
                    >
                      <Box
                        w={"100%"}
                        h={"180px"}
                        marginBottom={"20px"}
                        display={"flex"}
                        borderRadius={"20px"}
                        bgColor={subBg}
                        cursor={"pointer"}
                      >
                        {data.firstImageUrl ? (
                          <Image
                            src={data?.firstImageUrl}
                            alt={data.facltNm}
                            w={"40%"}
                            display={"block"}
                            borderRadius={"20px"}
                          />
                        ) : (
                          <Image
                            w={"40%"}
                            display={"block"}
                            borderRadius={"20px"}
                            src="https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-for-website-design-or-mobile-app-no-photo-available_87543-11093.jpg?size=626&ext=jpg"
                            alt={data.facltNm}
                          />
                        )}

                        <Box padding={"15px"}>
                          <Text
                            fontSize={"16px"}
                            fontWeight={"700"}
                            color={fontColor}
                          >
                            {data?.facltNm}
                          </Text>
                          {data.featureNm ? (
                            <Text
                              marginTop={"15px"}
                              fontSize={"14px"}
                              color={fontColor}
                              opacity={"0.8"}
                            >
                              {data.featureNm.slice(0, 100) + "..."}
                            </Text>
                          ) : (
                            <Text
                              marginTop={"15px"}
                              fontSize={"14px"}
                              color={fontColor}
                              opacity={"0.8"}
                            >
                              없음
                            </Text>
                          )}
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
