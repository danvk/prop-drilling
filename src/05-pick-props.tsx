import * as React from "react";
import _ from "lodash";

interface AppState {
  leftThing: string;
  rightThing: string;
  a: number;
  b: number;
  onSetA: (a: number) => void;
  onSetB: (b: number) => void;
}

export default function App() {
  const [a, setA] = React.useState(0);
  const [b, setB] = React.useState(1);

  const appState: AppState = {
    a,
    b,
    onSetA: setA,
    onSetB: setB,
    leftThing: "I'm on the left",
    rightThing: "I'm on the right"
  };

  return (
    <div className="root">
      <h1>Prop Drilling</h1>
      <div className="columns" style={{ display: "flex" }}>
        <LeftColumn {..._.pick(appState, leftColumnProps)} />
        <RightColumn {..._.pick(appState, rightColumnProps)} />
      </div>
    </div>
  );
}

const abCounterProps = ["a", "b", "onSetA", "onSetB"] as const;
type ABCounterProps = Pick<AppState, typeof abCounterProps[number]>;

function ABCounter({ a, onSetA, b, onSetB }: ABCounterProps) {
  return (
    <>
      <Counter name="a" val={a} onSetVal={onSetA} />
      <br />
      <Counter name="b" val={b} onSetVal={onSetB} />
    </>
  );
}

const leftColumnProps = [...abCounterProps, "leftThing"] as const;
type LeftColumnProps = Pick<AppState, typeof leftColumnProps[number]>;

function LeftColumn(props: LeftColumnProps) {
  return (
    <div className="left" style={{ paddingRight: 10 }}>
      <h2>{props.leftThing}</h2>
      <ABCounter {..._.pick(props, abCounterProps)} />
    </div>
  );
}

const rightColumnProps = [...abCounterProps, "rightThing"] as const;
type RightColumnProps = Pick<AppState, typeof rightColumnProps[number]>;

function RightColumn(props: RightColumnProps) {
  return (
    <div className="right">
      <h2>{props.rightThing}</h2>
      <ABCounter {..._.pick(props, abCounterProps)} />
    </div>
  );
}

interface CounterProps {
  name: string;
  val: number;
  onSetVal: (val: number) => void;
}

function Counter({ name, val, onSetVal }: CounterProps) {
  return (
    <>
      {name}:{" "}
      <input
        type="number"
        style={{ width: "3em" }}
        value={val}
        onChange={(e) => onSetVal(+e.target.value)}
      />
    </>
  );
}
