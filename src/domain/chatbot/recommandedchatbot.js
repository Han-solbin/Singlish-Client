import React from "react";
import styled from "styled-components";
import { PATH, COLOR } from "../../constants";
import { Title2, Body2 } from "../../atoms/text";
import { useNavigate } from "react-router-dom";

const RecommandedChatbot = ({ id, name, profile, imgUrl, description }) => {
  const navigate = useNavigate();
  const handleChatbotDetailPage = () => {
    navigate(PATH.CHATBOTDETAIL + "/" + id);
  };
  return (
    <Container onClick={handleChatbotDetailPage}>
      <RowContainer>
        <ColumnContainer>
          <Tag>
            <Body2 color={COLOR.GRAY300} margin={"0"}>
              {"오늘의 추천"}
            </Body2>
          </Tag>
          <Title2 color={COLOR.WHITE} margin={"0"}>
            {name}
          </Title2>
          <Body2 color={COLOR.GRAY100} margin={"0"}>
            {profile}
          </Body2>
        </ColumnContainer>
        <ImgContainer src={imgUrl}></ImgContainer>
      </RowContainer>
      <Body2 color={COLOR.GRAY300} margin={"0"}>
        {description}
      </Body2>
    </Container>
  );
};
export default RecommandedChatbot;

const Tag = styled.span`
  background-color: ${COLOR.GRAY900};
  height: auto;
  width: auto;
  padding: 0.25rem 0.75rem;
  border-radius: 0.75rem;
  margin: auto auto 0.5rem 0rem;
`;

const ImgContainer = styled.img`
  display: flex;
  width: 72px;
  height: 72px;
  flex-direction: column;
  aligh-items: left;
  justify-content: flex-start;
  border-radius: 1.25rem;
  margin: auto;
`;

const ColumnContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-contents: flex-start;
  margin: auto;
`;

const RowContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-contents: space-between;
  align-items: center;
`;

const Container = styled.button`
  display: ${(props) => (props.activated == true ? "none" : "flex")};
  border: none;
  height: auto;
  width: 100%;
  flex-direction: column;
  text-align: left;
  padding: 0.75rem 1rem 0.75rem 1rem;
  background-color: #454a55;
  border-radius: 1.25rem;
`;
