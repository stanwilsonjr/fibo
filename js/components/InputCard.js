import React, { useContext } from "react";
import { AppContext } from "./AppContext";
import { Card,Input } from "./SharedElements";
import Nextbutton from './NextButton';

export default function Inputcard() {
  const context = useContext(AppContext);

  return (
    <Card>
      <h2>What do you want to learn?</h2>
      <Input>
        <input
          placeholder="Add title"
          type="text"
          value={context.state.title}
          onChange={(e) => {
            context.setState({ ...context.state, title: e.currentTarget.value });
          }}
        />
        <textarea
          value={context.state.desc}
          placeholder="Add Description"
          onChange={(e) => {
            context.setState({ ...context.state, desc: e.currentTarget.value });
          }}
        />
      </Input>
      <Nextbutton   disabled={context.state.title === '' ||  context.state.desc === '' } text="Schedule Plan"  />
    </Card>
  );
}
