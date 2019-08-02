import React from "react";
import styled from "styled-components";
import Headline from "./Headline";

const SpaceDiv = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SpaceH2 = styled.h2`
  font-size: 1.7rem;
  margin: 15px 0;
`;

const SpaceH3 = styled.h3`
  font-size: 0.8rem;
`;

const SpaceImg = styled.img`
  max-width: 600px;
  border-radius: 10%;
  box-shadow: 0 0 15px white;
  margin: 30px 0;
`;

const SpaceP = styled.p`
  font-size: 1.2rem;
  padding: 15px;
  border-top: 1px dashed white;
  border-bottom: 1px dashed white;
  margin: 15px 0;
`;

const APOD = function(props) {
  return (
    <SpaceDiv>
      <Headline />
      <SpaceH2>{props.title}</SpaceH2>
      <SpaceH3>{props.date}</SpaceH3>
      <SpaceImg src={props.url} alt="NASA Pic Of The Day" />
      <SpaceP>{props.explanation}</SpaceP>
      <p className="copyRight">{props.copyright}</p>
    </SpaceDiv>
  );
};
export default APOD;
