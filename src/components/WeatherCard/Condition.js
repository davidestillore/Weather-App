import React from "react";
import styled from "@emotion/styled";

const Condition = ({ Tempt, Condition }) => {
  const Temp = styled.h1`
    font-family: "Fira Sans", sans-serif;
    font-size: 2rem;
    font-weight: 900;
  `;

  const State = styled.h3`
    font-family: "Merriweather", sans-serif;
    font-size: 1.2rem;
  `;
  return (
    <>
      <Temp>{Tempt} °C</Temp>
      <State>{Condition}</State>
    </>
  );
};

export default Condition;
