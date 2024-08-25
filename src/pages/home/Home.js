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
import { Loading } from "../../components/Loading";

export const Home = () => {
  useScrollTop();

  const [recomData, setRecomData] = useState();
  const [isLoading, setIsLoading] = useState(true);

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
        setIsLoading(false);
        setRecomData(item);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  // console.log(recomData);

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
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {" "}
          <Box
            maxW={500}
            w="100%"
            mx="auto"
            boxShadow={"rgb(232, 234, 246) 0px 0px 5px 5px;"}
            padding={"70px 0 "}
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
              bgColor="#178254"
              borderRadius="25px"
              colorScheme="#fff"
            >
              <Link to={routes.search}>
                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Search2Icon color="#fff" marginRight="10px" />
                  <Text fontSize="md" color="#fff">
                    빠른 정보 찾기
                  </Text>
                </Box>
              </Link>
            </Button>

            <Box w={"500px"} h={"100%"} overflow={"hidden"}>
              <Box
                className="section_1"
                w={"120%"}
                h={"100px"}
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
                padding={"20px"}
                margin={"20px 0 50px 0"}
              >
                <Swiper slidesPerView={"4.2"} spaceBetween={"15px"} loop={true}>
                  <SwiperSlide>
                    <Box w={"90px"} h={"90px"}>
                      <Link to={routes.normal}>
                        <Box
                          w={"90px"}
                          h={"90px"}
                          border={"1px solid #a5b9b0"}
                          borderRadius={"50%"}
                          padding={"21px 24px"}
                          marginBottom={"5px"}
                        >
                          <GiCampingTent
                            color="#178254"
                            fontSize={"40px"}
                            opacity={0.6}
                          />
                        </Box>
                        <Text
                          textAlign={"center"}
                          fontSize={"14px"}
                          fontWeight={"600"}
                          color={"#423F3E"}
                        >
                          일반 야영장
                        </Text>
                      </Link>
                    </Box>
                  </SwiperSlide>
                  <SwiperSlide>
                    <Box w={"90px"} h={"90px"}>
                      <Link to={routes.gram}>
                        <Box
                          w={"90px"}
                          h={"90px"}
                          border={"1px solid #a5b9b0"}
                          borderRadius={"50%"}
                          padding={"21px 26px"}
                          marginBottom={"5px"}
                        >
                          <GiBarracksTent
                            color="#178254"
                            fontSize={"36px"}
                            opacity={0.6}
                          />
                        </Box>
                        <Text
                          textAlign={"center"}
                          fontSize={"14px"}
                          fontWeight={"600"}
                          color={"#423F3E"}
                        >
                          글램핑
                        </Text>
                      </Link>
                    </Box>
                  </SwiperSlide>
                  <SwiperSlide>
                    <Box w={"90px"} h={"90px"}>
                      <Link to={routes.caravan}>
                        <Box
                          w={"90px"}
                          h={"90px"}
                          border={"1px solid #a5b9b0"}
                          borderRadius={"50%"}
                          padding={"28px"}
                          marginBottom={"5px"}
                        >
                          <FaCaravan
                            color="#178254"
                            fontSize={"35px"}
                            opacity={0.6}
                          />
                        </Box>
                        <Text
                          textAlign={"center"}
                          fontSize={"14px"}
                          fontWeight={"600"}
                          color={"#423F3E"}
                        >
                          카라반
                        </Text>
                      </Link>
                    </Box>
                  </SwiperSlide>
                  <SwiperSlide>
                    <Box w={"90px"} h={"90px"}>
                      <Link to={routes.car}>
                        <Box
                          w={"90px"}
                          h={"90px"}
                          border={"1px solid #a5b9b0"}
                          borderRadius={"50%"}
                          padding={"26px 28px"}
                          marginBottom={"5px"}
                        >
                          <FaCar
                            color="#178254"
                            fontSize={"34px"}
                            opacity={0.6}
                          />
                        </Box>
                        <Text
                          textAlign={"center"}
                          fontSize={"14px"}
                          fontWeight={"600"}
                          color={"#423F3E"}
                        >
                          자동차 야영장
                        </Text>
                      </Link>
                    </Box>
                  </SwiperSlide>
                  <SwiperSlide>
                    <Box w={"90px"} h={"120px"}>
                      <Link to={routes.pet}>
                        <Box
                          w={"90px"}
                          h={"90px"}
                          border={"1px solid #a5b9b0"}
                          borderRadius={"50%"}
                          padding={"26px 28px"}
                          marginBottom={"5px"}
                        >
                          <SiDatadog
                            color="#178254"
                            fontSize={"34px"}
                            opacity={0.6}
                          />
                        </Box>
                        <Text
                          textAlign={"center"}
                          fontSize={"14px"}
                          fontWeight={"600"}
                          color={"#423F3E"}
                        >
                          반려동물 동반
                        </Text>
                      </Link>
                    </Box>
                  </SwiperSlide>
                </Swiper>
              </Box>
            </Box>
            {/* section_1 */}

            <Box
              className="section_2"
              maxW={"500px"}
              w={"100%"}
              padding={"10px"}
            >
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
                rowGap={"35px"}
                columnGap={"10px"}
              >
                {recomData?.map((data) => (
                  <Box
                    key={data.contentId}
                    w={"240px"}
                    h={"260px"}
                    overflow={"hidden"}
                  >
                    <Box w={"240px"} h={"260px"}>
                      <Link to={`/detail/${data.contentId}`}>
                        <Box w={"100%"} h={"200px"}>
                          <Image
                            w={"95%"}
                            h={"95%"}
                            objectFit={"cover"}
                            borderRadius={"20px"}
                            src={data.firstImageUrl}
                            alt={data.facltNm}
                          />

                          <Text
                            color={"#000"}
                            fontSize={"15px"}
                            fontWeight={"500"}
                            marginTop={"10px"}
                            textAlign={"left"}
                          >
                            {data.facltNm}
                          </Text>
                          <Text
                            color={"gray.600"}
                            fontWeight={"300"}
                            fontSize={"14px"}
                            letterSpacing={"-1px"}
                            textAlign={"left"}
                          >
                            {data.addr1}
                          </Text>
                        </Box>
                      </Link>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
            <TopBtn />
          </Box>
        </>
      )}
    </>
  );
};
