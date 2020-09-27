import * as React from "react";

export default function App() {
  const [a, setA] = React.useState(0);
  const [b, setB] = React.useState(1);
  return (
    <div className="root">
      <h1>Prop Drilling</h1>
      <div className="columns" style={{ display: "flex" }}>
        <div className="left" style={{ paddingRight: 10 }}>
          <h2>I'm on the left</h2>
          <Counter name="a" val={a} onSetVal={setA} />
          <br />
          <Counter name="b" val={b} onSetVal={setB} />
        </div>
        <div className="right">
          <h2>I'm on the right</h2>
          <Counter name="a" val={a} onSetVal={setA} />
          <br />
          <Counter name="b" val={b} onSetVal={setB} />
        </div>
      </div>
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
