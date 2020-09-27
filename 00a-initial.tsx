import * as React from "react";

export default function App() {
  const [a, setA] = React.useState(0);
  return (
    <div className="root">
      <h1>Prop Drilling</h1>
      <div className="columns" style={{ display: "flex" }}>
        <LeftColumn a={a} onSetA={setA} leftThing="I'm on the left" />
        <RightColumn a={a} onSetA={setA} rightThing="I'm on the right" />
      </div>
    </div>
  );
}

interface LeftColumnProps {
  a: number;
  onSetA: (a: number) => void;
  leftThing: string;
}

function LeftColumn({ a, onSetA, leftThing }: LeftColumnProps) {
  return (
    <div className="left" style={{ paddingRight: 10 }}>
      <h2>{leftThing}</h2>
      <ACounter a={a} onSetA={onSetA} />
    </div>
  );
}

interface RightColumnProps {
  a: number;
  onSetA: (a: number) => void;
  rightThing: string;
}

function RightColumn({ a, onSetA, rightThing }: RightColumnProps) {
  return (
    <div className="right">
      <h2>{rightThing}</h2>
      <ACounter a={a} onSetA={onSetA} />
    </div>
  );
}

interface ACounterProps {
  a: number;
  onSetA: (a: number) => void;
}

function ACounter({ a, onSetA }: ACounterProps) {
  return (
    <>
      a:{" "}
      <input
        type="number"
        style={{ width: "3em" }}
        value={a}
        onChange={(e) => onSetA(+e.target.value)}
      />
    </>
  );
}
