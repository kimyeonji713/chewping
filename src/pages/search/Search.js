import { Box, Button, Input, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { FiSearch } from "react-icons/fi";

export const Search = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    (async () => {
      try {
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const onSearchResult = (data) => {
    const { keyword } = data; //사용자가 넣은 값
  };
  return (
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
            border: "none",
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
    </Box>
  );
};
