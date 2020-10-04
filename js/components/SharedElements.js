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
  border: 1px solid #333;
  width: calc(100% - 300px);
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