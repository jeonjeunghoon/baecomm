import styled from "styled-components";

type Props = {
  hasTitle?: boolean;
};

export default function Header({ hasTitle = true }: Props) {
  return <Container>{hasTitle && <Title>배컴 SHOP</Title>}</Container>;
}

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 12px 60px;
  background: ${({ theme }) => theme.colors.gradient};
`;

const Title = styled.h1`
  color: white;
`;
