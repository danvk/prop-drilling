import * as React from "react";

export default function App() {
  const [a, setA] = React.useState(0);
  const [b, setB] = React.useState(1);
  return (
    <div className="root">
      <h1>Prop Drilling</h1>
      <div className="columns" style={{ display: "flex" }}>
        <LeftColumn
          a={a}
          onSetA={setA}
          b={b}
          onSetB={setB}
          leftThing="I'm on the left"
        />
        <RightColumn
          a={a}
          onSetA={setA}
          b={b}
          onSetB={setB}
          rightThing="I'm on the right"
        />
      </div>
    </div>
  );
}

interface LeftColumnProps {
  a: number;
  onSetA: (a: number) => void;
  b: number;
  onSetB: (a: number) => void;
  leftThing: string;
}

function LeftColumn({ a, onSetA, b, onSetB, leftThing }: LeftColumnProps) {
  return (
    <div className="left" style={{ paddingRight: 10 }}>
      <h2>{leftThing}</h2>
      <ABCounter a={a} onSetA={onSetA} b={b} onSetB={onSetB} />
    </div>
  );
}

interface RightColumnProps {
  a: number;
  onSetA: (a: number) => void;
  b: number;
  onSetB: (a: number) => void;
  rightThing: string;
}

function RightColumn({ a, onSetA, b, onSetB, rightThing }: RightColumnProps) {
  return (
    <div className="right">
      <h2>{rightThing}</h2>
      <ABCounter a={a} onSetA={onSetA} b={b} onSetB={onSetB} />
    </div>
  );
}

interface ABCounterProps {
  a: number;
  onSetA: (a: number) => void;
  b: number;
  onSetB: (b: number) => void;
}

function ABCounter({ a, onSetA, b, onSetB }: ABCounterProps) {
  return (
    <>
      <Counter name="a" val={a} onSetVal={onSetA} />
      <br />
      <Counter name="b" val={b} onSetVal={onSetB} />
    </>
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
