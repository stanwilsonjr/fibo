import React from "react";
import { motion } from "framer-motion";


import styled from "styled-components";



exports.Card = styled(motion.section)
  .attrs({ 
    initial:{ opacity: 0, y: 10  },    
    animate: { opacity: 1, y: 0  },
    exit:{ opacity: 0, y: -10 },
    transition:{ duration: 1 }
  })`
  background-color: #fff;
  margin: 0 0 20px 0;
  padding: 15px 25px;
  border-radius: 20px;
  font-family: Inter, sans-serif;
  font-weight: 300;
  display: flex;
  box-shadow: 0 25px 50px -12px rgba(0,0,0,.25)!important;
  box-sizing: border-box;

  flex-direction: column;
  & .inputcontainer {
    max-width: 300px;
  }
  & h2{
    font-weight: 800;
    font-family: 'Inter', serif;
    font-size: 1.5rem;
    line-height: 1.5rem;
    margin: 15px 0;
  }
  @media only screen 
  and (min-device-width: 320px) 
  and (max-device-width: 480px)
  and (-webkit-min-device-pixel-ratio: 2) {

 
  }
`;

 


exports.Input = styled.div`
  width: 100%;
  max-width: 400px;
  font-family: Inter, sans-serif;
  font-weight: 300;
  & input {
    width: 100%;
    min-height: 30px;
    margin: 0 0 5px 0;
    padding: 5px;
    border-radius: 2px;
    -webkit-appearance: none;
    outline: none;
    box-sizing: border-box;
 
    border: #222 solid 1px;
  }
  & textarea{
    border-radius: 2px;
    -webkit-appearance: none;
    outline: none;
    padding: 5px;
    box-sizing: border-box;
  }
  @media only screen 
  and (min-device-width: 320px) 
  and (max-device-width: 480px)
  and (-webkit-min-device-pixel-ratio: 2) {
     width: 100%;
  }
  & textarea {
    width: 100%;
    min-height: 200px;
    margin: 0;
    font-family: Inter, sans-serif;
    font-weight: 300;
    padding: 5px;
    box-sizing: border-box;
  }
`;