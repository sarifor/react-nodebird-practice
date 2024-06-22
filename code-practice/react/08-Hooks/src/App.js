import Counter from './useState/Counter';
import Info from './useEffect/Info';

function App() {
  return (
    <div>
      <h2>Counter - by useState</h2>
      <Counter />

      <h2>Info - by useEffect</h2>
      <Info />
    </div>
  );
}

export default App;
