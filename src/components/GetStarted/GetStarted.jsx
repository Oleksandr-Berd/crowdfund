import * as SC from "./GetStartedStyled"
const GetStarted = ({toggleProject}) => {
  return (
    <SC.GetStartedConStyled id="getStarted">
      <SC.GetStartedContentCon>
        <SC.GetStartedTitleStyled>Mastercraft Bamboo Monitor Riser</SC.GetStartedTitleStyled>
        <SC.GetStartedContentStyled>
          A beautifully handcrafted monitor stand to reduce neck and eye strain.
        </SC.GetStartedContentStyled>
      </SC.GetStartedContentCon>
      <SC.GetStartedBtnsCon>
        <SC.GetStartedBackBtnStyled type="button" onClick={toggleProject}>Back this project</SC.GetStartedBackBtnStyled>
        <SC.GetStartedBookmark></SC.GetStartedBookmark>
      </SC.GetStartedBtnsCon>
    </SC.GetStartedConStyled>
  );
};

export default GetStarted;
