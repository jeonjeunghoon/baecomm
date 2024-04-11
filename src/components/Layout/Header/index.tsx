import styled from "styled-components";

type Props = {
  hasTitle: boolean;
};

export default function Header({ hasTitle }: Props) {
  return <Container>{hasTitle && <Title>배컴 SHOP</Title>}</Container>;
}

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  padding: 12px 60px;
  background: ${({ theme }) => theme.colors.gradient};
`;

const Title = styled.h1`
  color: white;
`;
