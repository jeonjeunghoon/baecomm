import styled from "styled-components";
import Button from "../common/Button";
import Text from "../common/Text";
import CustomLink from "../common/CustomLink";

type Props = {
  title: string;
  label: string;
  withLink?: boolean;
  to?: string;
  handleButtonClick?: () => void;
};

export default function Error({
  title,
  label,
  withLink = false,
  to = "",
  handleButtonClick,
}: Props) {
  return (
    <Container>
      <Text size='large' weight='bolder'>
        {title}
      </Text>
      {withLink ? (
        <CustomLink variant='secondary' to={to}>
          {label}
        </CustomLink>
      ) : (
        <Button onClick={handleButtonClick}>
          <TextWrapper>
            <Text size='medium' color='white' weight='bold' stretch>
              {label}
            </Text>
          </TextWrapper>
        </Button>
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
  height: 100%;
`;

const TextWrapper = styled.div`
  display: flex;
  width: 120px;
`;
