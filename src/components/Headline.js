import React from "react";
import styled from "styled-components";

const SpaceHeader = styled.h1`
  font-size: 2rem;
  padding: 15px;
  border: 1px dashed white;
  margin: 30px 0;
`;

const Headline = function() {
  return (
    <SpaceHeader>
      Please enjoy the following content, courtesy of NASA's Photo of the Day
      API
    </SpaceHeader>
  );
};
export default Headline;
