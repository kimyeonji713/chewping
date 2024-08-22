import { Box, Button, Image, Text } from "@chakra-ui/react";
import { useScrollTop } from "../../lib/useScrollTop";
import { useEffect, useState } from "react";
import { recomList } from "../../api";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Search2Icon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { routes } from "../../routes";
import { FaCar, FaCaravan, FaMap } from "react-icons/fa";
import { GiBarracksTent, GiCampingTent } from "react-icons/gi";
import { SiDatadog } from "react-icons/si";
import { TopBtn } from "../../components/TopBtn";
import "swiper/css";

export const Home = () => {
  useScrollTop();

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
    <Box
      maxW={500}
      w="100%"
      mx="auto"
      boxShadow={"rgb(232, 234, 246) 0px 0px 5px 5px;"}
    >
      <Swiper
        className="main_banner"
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
        className="search"
        w="480px"
        h="50px"
        margin="30px 10px"
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

      <Box
        className="section_2"
        w={"100%"}
        h={"100px"}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        padding={"20px"}
        margin={"0px 0 50px 0"}
      >
        <Button
          w={"70px"}
          h={"70px"}
          bgColor={"#F5DAD2"}
          position={"relative"}
          colorScheme="pink"
        >
          <Link to={routes.normal}>
            <GiCampingTent color="#423F3E" fontSize={"30px"} />
            <Text
              position={"absolute"}
              bottom={"-25px"}
              left={"-3px"}
              textAlign={"center"}
              fontSize={"14px"}
              color={"#423F3E"}
            >
              일반 야영장
            </Text>
          </Link>
        </Button>
        <Button w={"70px"} h={"70px"} bgColor={"#F5DAD2"} colorScheme="pink">
          <Link to={routes.gram}>
            <GiBarracksTent color="#423F3E" fontSize={"30px"} />
            <Text
              position={"absolute"}
              bottom={"-25px"}
              left={"14px"}
              textAlign={"center"}
              fontSize={"14px"}
              color={"#423F3E"}
            >
              글램핑
            </Text>
          </Link>
        </Button>
        <Button w={"70px"} h={"70px"} bgColor={"#F5DAD2"} colorScheme="pink">
          <Link to={routes.caravan}>
            <FaCaravan color="#423F3E" fontSize={"30px"} />
            <Text
              position={"absolute"}
              bottom={"-25px"}
              left={"14px"}
              textAlign={"center"}
              fontSize={"14px"}
              color={"#423F3E"}
            >
              카라반
            </Text>
          </Link>
        </Button>
        <Button w={"70px"} h={"70px"} bgColor={"#F5DAD2"} colorScheme="pink">
          <Link to={routes.car}>
            <FaCar color="#423F3E" fontSize={"30px"} />
            <Text
              position={"absolute"}
              bottom={"-25px"}
              left={"-12px"}
              textAlign={"center"}
              fontSize={"14px"}
              color={"#423F3E"}
            >
              자동차 야영장
            </Text>
          </Link>
        </Button>
        <Button w={"70px"} h={"70px"} bgColor={"#F5DAD2"} colorScheme="pink">
          <Link to={routes.pet}>
            <SiDatadog color="#423F3E" fontSize={"30px"} />
            <Text
              position={"absolute"}
              bottom={"-25px"}
              left={"-8px"}
              textAlign={"center"}
              fontSize={"14px"}
              color={"#423F3E"}
            >
              반려동물 동반
            </Text>
          </Link>
        </Button>
      </Box>

      <Box className="section_2" maxW={"500px"} w={"100%"} padding={"10px"}>
        <Text
          marginLeft={"10px"}
          marginBottom={"10px"}
          fontSize={"22px"}
          fontWeight={"900"}
        >
          추천 캠핑장
        </Text>
        <Box
          display={"grid"}
          gridTemplateColumns={"repeat(2, 1fr)"}
          rowGap={"20px"}
          columnGap={"10px"}
        >
          {recomData?.map((data) => (
            <Button
              key={data.contentId}
              w={"240px"}
              h={"260px"}
              bgColor={"#fff"}
              overflow={"hidden"}
            >
              <Box w={"240px"} h={"260px"}>
                <Link to={`/detail/${data.contentId}`}>
                  <Box w={"100%"} h={"200px"}>
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
                      fontSize={"16px"}
                      marginTop={"10px"}
                      textAlign={"left"}
                    >
                      {data.facltNm}
                    </Text>
                    <Text
                      color={"gray.600"}
                      marginTop={"8px"}
                      fontSize={"14px"}
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
      <TopBtn />
    </Box>
  );
};
