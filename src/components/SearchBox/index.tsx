import { ChangeEvent, KeyboardEvent, useState } from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";

import Input from "../common/Input";
import Button from "../common/Button";
import Text from "../common/Text";

import { START_PAGE, pageState, searchWordState } from "../../state";

export default function SearchBox() {
  const [value, setValue] = useState("");
  const setSearchWordState = useSetRecoilState(searchWordState);
  const setPage = useSetRecoilState(pageState);

  const changeValue = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const storeSearchWordWithClick = () => {
    setSearchWordState(value);
    setPage(START_PAGE);
  };

  const storeSearchWordWithEnter = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== "Enter") return;

    setSearchWordState(value);
    setPage(START_PAGE);
  };

  return (
    <Container>
      <Input
        value={value}
        placeholder='검색할 상품을 입력하세요'
        onChange={changeValue}
        onKeyDown={storeSearchWordWithEnter}
      />
      <ButtonWrapper>
        <Button variant='secondary' stretch onClick={storeSearchWordWithClick}>
          <Text size='small' weight='bold' color='white'>
            검색
          </Text>
        </Button>
      </ButtonWrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonWrapper = styled.div`
  display: flex;
  height: 28px;
`;