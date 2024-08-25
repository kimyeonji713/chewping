import { Box, Button, Input, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FiSearch } from "react-icons/fi";
import { useScrollTop } from "../../lib/useScrollTop";
import { searchList } from "../../api";
import { Loading } from "../../components/Loading";

export const Search = () => {
  useScrollTop();

  const [searchData, setSearchData] = useState();
  const [srcollresultData, setScrollResultData] = useState();
  const [searchResult, setSearchResultData] = useState();
  const [isLoading, setIsLoading] = useState(true);

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

        // console.log(item);
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
    const result = searchData.filter((v) => v?.doNm?.inculdes(keyword));

    setSearchResultData(result);
  };

  console.log(searchData);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Box
          maxW={"500px"}
          w={"100%"}
          minH={"100vh"}
          mx={"auto"}
          boxShadow={"rgb(232, 234, 246) 0px 0px 5px 5px;"}
        >
          <Box w={"100%"} padding={"150px 40px 80px 40px"}>
            <Text fontSize={"45px"} fontWeight={"400"} color={"#647b71"}>
              어디로
            </Text>
            <Text fontSize={"45px"} fontWeight={"600"} color={"#647b71"}>
              떠나고 싶으신가요?
            </Text>
          </Box>
          <form
            style={{
              display: " flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
            onSubmit={handleSubmit(onSearchResult)}
          >
            <Input
              style={{
                borderBottom: "1px solid #647b71",
                width: "100%",
                marginLeft: "25px",
                padding: "15px 0",
                color: "#647b71",
                fontSize: "16px",
              }}
              {...register("keyword", {
                required: "검색내용을 입력해 주세요",
              })}
              type="text"
              placeholder="어디로 떠나고 싶으신가요?"
            />
            <Button bgColor={"#fff"} color={"#647b71"} marginRight={"20px"}>
              <FiSearch />
            </Button>
          </form>
          <Text>{errors?.keyword?.message}</Text>

          <>
            {isLoading ? (
              <Loading />
            ) : (
              <>
                {searchResult && (
                  <Box>
                    {searchResult?.length === 0 ? (
                      <Box padding="40px">
                        <Text>검색결과 없음</Text>
                      </Box>
                    ) : (
                      <>
                        <Box style={{ padding: "40px", position: "relative" }}>
                          <Text
                            fontWeight="700"
                            marginBottom="14px"
                            color={"#000"}
                          >
                            검색 결과
                          </Text>
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
