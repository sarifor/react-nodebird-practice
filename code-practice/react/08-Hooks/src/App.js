import Counter from './useState/Counter';
import Info from './useEffect/Info';
import Info2 from './useState/Info2';

function App() {
  return (
    <div>
      <h2>Counter - by useState</h2>
      <Counter />

      <h2>Info2 - by useState x2</h2>
      <Info2 />

      <h2>Info - by useEffect</h2>
      <Info />
    </div>
  );
}

export default App;
