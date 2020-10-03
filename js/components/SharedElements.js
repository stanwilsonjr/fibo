import React from "react";
import styled from "styled-components";



exports.Card = styled.section`
  border: 1px solid #333;
  margin: 20px 0;
  padding: 15px 25px;
  border-radius: 10px;
  font-family: Inter, sans-serif;
  display: flex;
  flex-direction: column;
  & .inputcontainer {
    max-width: 300px;
  }
`;


exports.Input = styled.div`
  width: 300px;
  & input {
    width: 100%;
    min-height: 30px;
    margin: 0 0 5px 0;
    padding: 0;
  }

  & textarea {
    width: 100%;
    min-height: 200px;
    margin: 0;
  }
`;