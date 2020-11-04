import { AppContext } from "./AppContext";
import React, { useContext } from "react";
import styled from "styled-components";


const Buttonscontainer = styled.div`
    max-width: 100%;
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: space-between;
    margin-top: 15px;
    & button {
        border: none;
        background-color: orange;
        font-family: inherit;
        font-size: 15px;
        padding: 7px;
        cursor: pointer;
        color: #fff;
        margin:  0;
        font-weight: 500;
        
    }
    & .back-button{
        display: ${(props) =>  (props.step == 0)? "none" : 'inline-flex' };
        align-items: center;
        &:hover{
            cursor: pointer;
        }
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
        <Buttonscontainer step={step}>
           <a className="back-button"  onClick={ (e) => updateSteps(step - 1) } > 
                <span className="material-icons">navigate_before</span>
                Back
            </a>
           <button onClick={ (e) => updateSteps(step + 1) }  disabled={disabled}  >{text}</button>
        </Buttonscontainer>
    );
}

export default Nextbutton;