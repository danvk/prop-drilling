import * as React from "react";

export default function App() {
  const [a, setA] = React.useState(0);
  const [b, setB] = React.useState(1);
  return (
    <div className="root">
      <h1>Prop Drilling</h1>
      <div className="columns" style={{ display: "flex" }}>
        <LeftColumn leftThing="I'm on the left">
          <Counter name="a" val={a} onSetVal={setA} />
          <br />
          <Counter name="b" val={b} onSetVal={setB} />
        </LeftColumn>
        <RightColumn rightThing="I'm on the right">
          <Counter name="a" val={a} onSetVal={setA} />
          <br />
          <Counter name="b" val={b} onSetVal={setB} />
        </RightColumn>
      </div>
    </div>
  );
}

interface LeftColumnProps {
  leftThing: string;
  children: React.ReactNode;
}

function LeftColumn({ leftThing, children }: LeftColumnProps) {
  return (
    <div className="left" style={{ paddingRight: 10 }}>
      <h2>{leftThing}</h2>
      {children}
    </div>
  );
}

interface RightColumnProps {
  rightThing: string;
  children: React.ReactNode;
}

function RightColumn({ rightThing, children }: RightColumnProps) {
  return (
    <div className="right">
      <h2>{rightThing}</h2>
      {children}
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
