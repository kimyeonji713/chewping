import {
  Box,
  Button,
  Image,
  Input,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FiSearch } from "react-icons/fi";
import { useScrollTop } from "../../lib/useScrollTop";
import { searchList } from "../../api";
import { Loading } from "../../components/Loading";
import { Link } from "react-router-dom";
import { PageTitle } from "../../components/PageTitle";

export const Search = () => {
  useScrollTop();

  const [searchData, setSearchData] = useState();
  const [srcollresultData, setScrollResultData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [cityData, setCityData] = useState();
  const [resultData, setCityResultData] = useState();

  const pointColor = useColorModeValue("#178254", "#fff");
  const searchColor = useColorModeValue("#000", "#fff");
  const bg = useColorModeValue("#fff", "#1a202c");
  const boderStyle = useColorModeValue(
    "1px solid #a5b9b0",
    "1px solid #FFAD60"
  );

  useEffect(() => {
    (async () => {
      try {
        const {
          response: { body },
        } = await searchList(1);

        const {
          response: {
            body: {
              items: { item },
            },
          },
        } = await searchList(1);

        setSearchData(item);
        setScrollResultData(body);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSearchResult = (data) => {
    const { keyword } = data; //사용자가 넣은 값
    console.log(keyword);
    // const city = searchData.filter((v) => v.doNm === keyword);

    const city = searchData.filter((v) => v.addr1.includes(keyword));

    setCityData(city);

    // setCityResultData(result);
  };
  console.log(resultData);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Box maxW={"500px"} w={"100%"} minH={"100vh"} mx={"auto"} bgColor={bg}>
          <PageTitle title={"검색"} />

          <Box w={"100%"} padding={"150px 40px 80px 40px"}>
            <Text fontSize={"45px"} fontWeight={"400"} color={pointColor}>
              어디로
            </Text>
            <Text fontSize={"45px"} fontWeight={"600"} color={pointColor}>
              떠나고 싶으신가요?
            </Text>
          </Box>
          <Box
            as="form"
            display=" flex"
            justifyContent="space-between"
            alignItems="center"
            padding={"10px"}
            onSubmit={handleSubmit(onSearchResult)}
          >
            <Input
              width="100%"
              borderBottom={boderStyle}
              marginLeft="25px"
              padding="15px 10px"
              color={pointColor}
              fontSize="16px"
              variant="flushed"
              {...register("keyword", {
                required: "검색내용을 입력해 주세요",
              })}
              type="text"
              placeholder="어디로 떠나고 싶으신가요? ex) 강원도"
              _placeholder={{ color: "inherit" }}
            />
            <Button
              bgColor={bg}
              color={pointColor}
              marginRight={"20px"}
              cursor={"pointer"}
              fontSize={"18px"}
            >
              <FiSearch />
            </Button>
          </Box>
          <Text marginLeft={"45px"} color={pointColor}>
            {errors?.keyword?.message}
          </Text>

          <>
            {isLoading ? (
              <Loading />
            ) : (
              <>
                {cityData && (
                  <Box>
                    <Text
                      fontWeight="700"
                      marginBottom="14px"
                      color={searchColor}
                      marginLeft={"35px"}
                      marginTop={"20px"}
                    >
                      검색 결과
                    </Text>
                    {cityData?.length === 0 ? (
                      <Box padding="40px">
                        <Text>검색결과 없음</Text>
                      </Box>
                    ) : (
                      <>
                        <Box
                          style={{ padding: "10px 40px", position: "relative" }}
                        >
                          <Box
                            display={"grid"}
                            gridTemplateColumns={"repeat(2, 1fr)"}
                            rowGap={"35px"}
                            columnGap={"10px"}
                          >
                            {cityData.map((city) => (
                              <Box key={city.contentId} w={"100%"} h={"260px"}>
                                <Box w={"100%"} h={"260px"}>
                                  <Link to={`/detail/${city.contentId}`}>
                                    <Box w={"100%"} h={"200px"}>
                                      {city.firstImageUrl ? (
                                        <Image
                                          w={"95%"}
                                          h={"95%"}
                                          objectFit={"cover"}
                                          borderRadius={"20px"}
                                          src={city.firstImageUrl}
                                          alt={city.facltNm}
                                        />
                                      ) : (
                                        <Image
                                          w={"95%"}
                                          h={"95%"}
                                          objectFit={"cover"}
                                          borderRadius={"20px"}
                                          src="https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-for-website-design-or-mobile-app-no-photo-available_87543-11093.jpg?size=626&ext=jpg"
                                          alt={city.facltNm}
                                        />
                                      )}

                                      <Text
                                        fontSize={"15px"}
                                        fontWeight={"500"}
                                        marginTop={"10px"}
                                        textAlign={"left"}
                                        letterSpacing={"-1px"}
                                      >
                                        {city.facltNm}
                                      </Text>
                                      <Text
                                        fontWeight={"300"}
                                        fontSize={"14px"}
                                        letterSpacing={"-1px"}
                                        textAlign={"left"}
                                      >
                                        {city.addr1}
                                      </Text>
                                    </Box>
                                  </Link>
                                </Box>
                              </Box>
                            ))}
                          </Box>
                        </Box>
                      </>
                    )}
                  </Box>
                )}
              </>
            )}
          </>
        </Box>
      )}
    </>
  );
};
