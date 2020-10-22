import { AppContext } from "./AppContext";
import React, { useContext } from "react";
import styled from "styled-components";


const Buttonscontainer = styled.div`

    & button {
        border: none;
        background-color: red;
        font-family: inherit;
        padding: 7px;
        cursor: pointer;
        color: #fff;
        margin: 15px 0 0 0;
        border-radius: 5px;
    }
    & button:disabled {
        opacity: 0.2;
        cursor: default;
    }

`

function Nextbutton(props) {
    const {text,disabled} = props;
    const context = useContext(AppContext);
    const {step ,updateSteps} = context;
    return (
        <Buttonscontainer>
           <button onClick={ (e) => updateSteps(step + 1) }  disabled={disabled}  >{text}</button>
        </Buttonscontainer>
    );
}

export default Nextbutton;