import { useEffect } from "react";
import { scrollList } from "../../api";
import { useState } from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import InfiniteScroll from "react-infinite-scroll-component";
import { TopBtn } from "../../components/TopBtn";
import { useScrollTop } from "../../lib/useScrollTop";

export const Gram = () => {
  useScrollTop();

  const [scrollData, setScrollData] = useState();
  const [resultData, setResultData] = useState();

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
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  // console.log(basedData);
  // console.log(resultData);

  const base = scrollData?.filter((data) => data.induty === "글램핑");

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
    <Box
      maxW={"500px"}
      w={"100%"}
      mx={"auto"}
      bgColor={"#f1f1f1"}
      boxShadow={"rgb(232, 234, 246) 0px 0px 5px 5px;"}
    >
      {scrollData && (
        <InfiniteScroll
          dataLength={scrollData.length}
          next={fetchData}
          hasMore={true}
        >
          <Box w={"100%"} padding={"10px"}>
            <Text
              marginLeft={"10px"}
              color={"#423F3E"}
              marginTop={"20px"}
              marginBottom={"20px"}
              fontSize={"20px"}
              fontWeight={"700"}
              opacity={"0.7"}
            >
              글램핑
            </Text>
            {base?.map((data) => (
              <Box
                key={data.contentId}
                w={"100%"}
                h={"180px"}
                marginBottom={"20px"}
                display={"flex"}
                borderRadius={"20px"}
                bgColor={"#fff"}
                overflow={"hidden"}
              >
                <Image
                  src={data?.firstImageUrl}
                  w={"40%"}
                  display={"block"}
                  borderRadius={"20px"}
                />

                <Box padding={"15px"}>
                  <Text fontSize={"16px"} fontWeight={"700"} color={"#423F3E"}>
                    {data?.facltNm}
                  </Text>
                  <Text
                    marginTop={"15px"}
                    fontSize={"14px"}
                    color={"#423F3E"}
                    opacity={"0.8"}
                  >
                    {data.featureNm.slice(0, 100) + "..."}
                  </Text>
                </Box>
              </Box>
            ))}
          </Box>
        </InfiniteScroll>
      )}
      <TopBtn />
    </Box>
  );
};
