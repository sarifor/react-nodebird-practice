import Counter from './useState/Counter';
import Info2 from './useState/Info2';
import ShowMyName from './useEffect/mounted-or-updated/ShowMyName';
import Baby from './useEffect/mounted/Baby';
import Timer from './useEffect/updated/Timer';
import HideTimer from './useEffect/cleanup/HideTimer';
/*
  모듈 import할 때 대소문자 주의! 안 그럼 아래와 같은 에러 남:
  Module not found: Error: Cannot find file: 'showMyName.js' does not match the corresponding name on disk: '.\src\useEffect\mounted-or-updated\ShowMyName.js'.
  Failed to compile.
*/

function App() {
  return (
    <div>
      <h2>Counter - by useState</h2>
      <Counter />

      <h2>Info2 - by useState x2</h2>
      <Info2 />

      <h2>ShowMyName - by useEffect(when mounted or updated)</h2>
      <ShowMyName />

      <h2>Baby - by useEffect(when mounted)</h2>
      <Baby />

      <h2>Timer - by useEffect(when updated)</h2>
      <Timer />

      <h2>HideTimer - by useEffect(when unmounted)</h2>
      <HideTimer />
    </div>
  );
}

export default App;
