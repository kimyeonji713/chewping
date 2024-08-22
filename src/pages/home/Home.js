import { Box, Button, flexbox, grid, Image, Img, Text } from "@chakra-ui/react";
import { useScrollTop } from "../../lib/useScrollTop";
import { useEffect, useState } from "react";
import { basedList, recomList } from "../../api";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Search2Icon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { routes } from "../../routes";
import "swiper/css";

export const Home = () => {
  // useScrollTop();

  const [recomData, setRecomData] = useState();

  useEffect(() => {
    (async () => {
      try {
        const {
          response: {
            body: {
              items: { item },
            },
          },
        } = await recomList();

        // console.log(item);
        setRecomData(item);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  console.log(recomData);

  const campaign = [
    {
      id: 0,
      name: 1,
      imgUrl:
        "https://cdn.sobangnews.kr/news/photo/202310/23486_21709_3545.png",
    },
    {
      id: 1,
      name: 2,
      imgUrl:
        "https://www.seoulnutri.co.kr/upload/editor/20210716/202107161222304781.jpg",
    },
    {
      id: 2,
      name: 3,
      imgUrl:
        "https://www.seoulnutri.co.kr/upload/editor/20210716/202107161222412011.jpg",
    },
    {
      id: 3,
      name: 4,
      imgUrl:
        "https://www.seoulnutri.co.kr/upload/editor/20210716/202107161222494361.jpg",
    },
    {
      id: 4,
      name: 5,
      imgUrl:
        "https://www.seoulnutri.co.kr/upload/editor/20210716/202107161222578711.jpg",
    },
    {
      id: 5,
      name: 6,
      imgUrl:
        "https://www.seoulnutri.co.kr/upload/editor/20210716/202107161223065741.jpg",
    },
  ];

  return (
    <Box maxW={500} w="100%" mx="auto">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
      >
        {campaign?.map((camData) => (
          <SwiperSlide key={camData.id}>
            <Box maxW="500px" mx="auto" w="100%" h="500px">
              <Image
                w="100%"
                objectFit={"cover"}
                src={camData.imgUrl}
                alt="캠핑안전수칙"
              />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* 메인베너 */}

      <Button
        w="480px"
        h="50px"
        margin="20px 10px"
        bgColor="#75A47F"
        borderRadius="25px"
        colorScheme="#fff"
      >
        <Link to={routes.search}>
          <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
            <Search2Icon color="#fff" marginRight="10px" />
            <Text fontSize="md" color="#fff">
              빠른 정보 찾기
            </Text>
          </Box>
        </Link>
      </Button>

      {/* 검색버튼 */}
      <Box
        w={"100%"}
        display={"grid"}
        gridTemplateColumns={"repeat(2, 1fr)"}
        rowGap={"20px"}
        columnGap={"20px"}
        padding={"10px"}
      >
        {recomData?.map((data) => (
          <Button
            key={data.contentId}
            w={"240px"}
            h={"250px"}
            bgColor={"#fff"}
            overflow={"hidden"}
          >
            <Box w={"240px"} h={"250px"}>
              <Link to={`/detail/${data.contentId}`}>
                <Box w={"100%"} h={"150px"}>
                  <Image
                    w={"100%"}
                    h={"100%"}
                    objectFit={"cover"}
                    borderRadius={"20px"}
                    src={data.firstImageUrl}
                    alt={data.facltNm}
                  />

                  <Text
                    color={"#000"}
                    fontSize={"18px"}
                    marginTop={"10px"}
                    textAlign={"left"}
                  >
                    {data.facltNm}
                  </Text>
                  <Text
                    color={"gray.600"}
                    marginTop={"5px"}
                    fontSize={"15px"}
                    textAlign={"left"}
                  >
                    {data.addr1}
                  </Text>
                </Box>
              </Link>
            </Box>
          </Button>
        ))}
      </Box>
    </Box>
  );
};
