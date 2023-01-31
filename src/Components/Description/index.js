import {
  DescriptionWrapper,
  TitleWrapper,
  MainWrapper,
  ContentWrapper,
  Title,
  Content,
  ButtonWrapper
} from './index.styles';
import Button from '../Button';

function Description({onClickExample}) {
  return (
    <DescriptionWrapper>
      <TitleWrapper>
        <Title>my mandalart</Title>
      </TitleWrapper>
      <MainWrapper>
        <Content>'manda' + 'la' (to achieve a goal)</Content> +
        <Content>art (art of achieving the goal)</Content>
      </MainWrapper>
      <ContentWrapper>a useful way to set goals and organize your way to achieve them
      <br />
      popularized by baseball player Shohei Ohtani mentioned it as the secret to success</ContentWrapper>
      <br />
      <ButtonWrapper>
        <Button customClass='example-modal' onClick={onClickExample}>
        Ohtani's Mandalart
        </Button>
      </ButtonWrapper>
      <ContentWrapper>
      1. first write your main goal in the middle
      <br />
      2. fill in the remaining 8 squares with ideas/goals related to the central goal
      <br />
      3. fill in the specifics needed to accomplish each sub-goal
      </ContentWrapper>
    </DescriptionWrapper>
  );
}

export default Description;
