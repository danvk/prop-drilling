import * as React from "react";

export default function App() {
  const [a, setA] = React.useState(0);
  const [b, setB] = React.useState(1);
  const [c, setC] = React.useState(2);
  const vals = { a, b, c };
  const handleSetVal = (which: "a" | "b" | "c", val: number) =>
    (which === "a" ? setA : which === "b" ? setB : setC)(val);
  return (
    <div className="root">
      <h1>Prop Drilling</h1>
      <div className="columns" style={{ display: "flex" }}>
        <LeftColumn
          vals={vals}
          onSetVal={handleSetVal}
          leftThing="I'm on the left"
        />
        <RightColumn
          vals={vals}
          onSetVal={handleSetVal}
          rightThing="I'm on the right"
        />
      </div>
    </div>
  );
}

interface LeftColumnProps extends ABCounterProps {
  leftThing: string;
}

function LeftColumn({ vals, onSetVal, leftThing }: LeftColumnProps) {
  return (
    <div className="left" style={{ paddingRight: 10 }}>
      <h2>{leftThing}</h2>
      <ABCounter vals={vals} onSetVal={onSetVal} />
    </div>
  );
}

interface RightColumnProps extends ABCounterProps {
  rightThing: string;
}

function RightColumn({ vals, onSetVal, rightThing }: RightColumnProps) {
  return (
    <div className="right">
      <h2>{rightThing}</h2>
      <ABCounter vals={vals} onSetVal={onSetVal} />
    </div>
  );
}

interface ABCounterProps {
  vals: { a: number; b: number; c: number };
  onSetVal: (which: "a" | "b" | "c", val: number) => void;
}

function ABCounter({ vals: { a, b, c }, onSetVal }: ABCounterProps) {
  return (
    <>
      <Counter name="a" val={a} onSetVal={(v) => onSetVal("a", v)} />
      <br />
      <Counter name="b" val={b} onSetVal={(v) => onSetVal("b", v)} />
      <br />
      <Counter name="c" val={c} onSetVal={(v) => onSetVal("c", v)} />
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
