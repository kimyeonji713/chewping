import { Box, Button, flexbox, grid, Image, Img, Text } from "@chakra-ui/react";
import { useScrollTop } from "../../lib/useScrollTop";
import { useEffect, useState } from "react";
import { basedList } from "../../api";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Search2Icon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { routes } from "../../routes";

export const Home = () => {
  // useScrollTop();

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

  console.log(baseData);

  const campaign = [
    {
      id: 0,
      name: 1,
      imgUrl:
        "https://postfiles.pstatic.net/MjAyMzA1MDlfMzAg/MDAxNjgzNjA2OTM4MjU2.XAyjyQK658MlQVeyXEnPQ4WKaK2Q-BuU5OvJmIbFmkwg.lcixpFoBRlhE2sEijwTIKwNqZys6Fm76ol_297ciTywg.PNG.gocamping_official/%E3%85%8D%E3%85%8D%E3%85%8D_%EC%9D%B8%EC%8A%A4%ED%83%80%ED%88%B0_1%ED%8E%B8_%EB%B8%94%EB%A1%9C%EA%B7%B8%EC%9A%A9_%EB%A9%94%EC%9D%B8%EC%BB%B7.png?type=w966",
    },
    {
      id: 1,
      name: 2,
      imgUrl:
        "https://postfiles.pstatic.net/MjAyMzA1MDlfMTM1/MDAxNjgzNjA2OTk5NDY5.LSYLt-XCp1tJGrwqH6OkDa1fBiLONBx5EzmkCE4gTvsg.S9nLjGuGO5AYaeHfMsCA90ootlXeqnvYxgnu45dsdtcg.PNG.gocamping_official/2-2._%EA%B3%A0%EC%BA%A0%ED%95%91_%ED%8C%A8%EB%B0%80%EB%A6%AC_%EB%B6%88%EB%A9%8D%EC%9D%B4_2.png?type=w966",
    },
    {
      id: 2,
      name: 3,
      imgUrl:
        "https://postfiles.pstatic.net/MjAyMzA1MDlfNCAg/MDAxNjgzNjA3MDYxNzIx.up2d2Z0Z_0bRNjHpXx7QOQ_e9HUQoakCQyZ_P6z02V0g.yut8hj93e-Rm1AAzdTMNoFu_bpEd-ZLYTUoNPf-NVCAg.PNG.gocamping_official/1-2._%EA%B3%A0%EC%BA%A0%ED%95%91_%ED%8C%A8%EB%B0%80%EB%A6%AC_%EB%A8%B9%EB%83%A5%EC%9D%B4_2.png?type=w966",
    },
    {
      id: 3,
      name: 4,
      imgUrl:
        "https://postfiles.pstatic.net/MjAyMzA1MDlfNTIg/MDAxNjgzNjA3MTI4NjQ1.ALc64tlGocI8XQs1XteS1l4uhs0PhxZkmgcF4ImvYVkg.lEmCwmG5gouBdGbmGctKccq_dPHqxzwthVptBP0OZ7Qg.PNG.gocamping_official/3-2._%EA%B3%A0%EC%BA%A0%ED%95%91_%ED%8C%A8%EB%B0%80%EB%A6%AC_%ED%85%9C%ED%86%A0%EB%A6%AC_2.png?type=w966",
    },
  ];

  return (
    <Box maxW={500} w="100%" mx="auto">
      <Box w="100%" h={350} backgroundColor="#75A47F">
        <Image w="100%" h={350} src={campaign.imgUrl}></Image>
      </Box>

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
        {baseData?.map((data) => (
          <Button
            key={data.contentId}
            w={"240px"}
            h={"250px"}
            bgColor={"#fff"}
            colorScheme="green"
          >
            <Box w={"240px"} h={"250px"}>
              <Link to={`/detail/${data.contentId}`}>
                <Box>
                  <Image
                    w={"100%"}
                    objectFit={"cover"}
                    borderRadius={"20px"}
                    src={data.firstImageUrl}
                    alt={data.facltNm}
                  />

                  <Text color={"#000"} fontSize={"18px"} marginTop={"10px"}>
                    {data.facltNm}
                  </Text>
                  <Text color={"gray.600"} marginTop={"5px"} fontSize={"md"}>
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
{
  /* <Swiper
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
          <Box maxW="500px" mx="auto" w="100%" h="400px">
            <Image w="100%" src={camData.imgUrl} alt="고캠핑" />
          </Box>
        </SwiperSlide>
      ))}
    </Swiper> */
}
