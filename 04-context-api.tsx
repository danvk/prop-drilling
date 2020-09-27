import * as React from "react";
import "./styles.css";

const ABContext = React.createContext<ABCounterProps>({
  a: 0,
  b: 0,
  onSetA(a) {},
  onSetB(b) {}
});

export default function App() {
  const [a, setA] = React.useState(0);
  const [b, setB] = React.useState(1);
  const context = { a, b, onSetA: setA, onSetB: setB };

  return (
    <div className="root">
      <h1>Prop Drilling</h1>
      <ABContext.Provider value={context}>
        <div className="columns" style={{ display: "flex" }}>
          <LeftColumn leftThing="I'm on the left" />
          <RightColumn rightThing="I'm on the right" />
        </div>
      </ABContext.Provider>
    </div>
  );
}

interface LeftColumnProps {
  leftThing: string;
}

function LeftColumn({ leftThing }: LeftColumnProps) {
  return (
    <div className="left" style={{ paddingRight: 10 }}>
      <h2>{leftThing}</h2>
      <ABCounter />
    </div>
  );
}

interface RightColumnProps {
  rightThing: string;
}

function RightColumn({ rightThing }: RightColumnProps) {
  return (
    <div className="right">
      <h2>{rightThing}</h2>
      <ABCounter />
    </div>
  );
}

interface ABCounterProps {
  a: number;
  onSetA: (a: number) => void;
  b: number;
  onSetB: (b: number) => void;
}

function ABCounter(props: {}) {
  const { a, b, onSetA, onSetB } = React.useContext(ABContext);
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
