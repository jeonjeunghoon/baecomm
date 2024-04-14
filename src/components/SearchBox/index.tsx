import { ChangeEvent, KeyboardEvent, useState } from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";

import Input from "../common/Input";
import Button from "../common/Button";

import { pageState, searchWordState } from "../../state";
import { START_PAGE } from "../../constants/product";

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
          검색
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
