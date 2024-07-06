import React from "react";
import Clock from "./03-04-state/03-04-01-class-component-state/use-function-arg-in-setState/Clock";
import Clock2 from "./03-04-state/03-04-01-class-component-state/use-function-arg-in-setState/Clock2";

function App() {
  return (
    <div>
      <h2>Clock - setState에 함수 인자 사용</h2>
      <Clock />

      <h2>Clock2 - setState에 객체 인자 사용</h2>
      <Clock2 />
    </div>
  );
}

export default App;
