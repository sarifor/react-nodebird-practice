import CheckScreen from './what-is-Hooks/rules/at-the-top-level/succeeded/CheckScreen';
import Counter from './useState/Counter';
import Info2 from './useState/Info2';
import ShowMyName from './useEffect/mounted-or-updated/ShowMyName';
import Baby from './useEffect/mounted/Baby';
import Timer from './useEffect/updated/Timer';
import HideTimer from './useEffect/cleanup/HideTimer';
import GetResult from './useMemo/getResult';
import Dieter from './useCallback/Dieter';
import CheckScreen2 from './Custom-Hooks/CheckScreen2';
import QuestionAndAnswer from './useRef/QuestionAndAnswer';

/*
  모듈 import할 때 대소문자 주의! 안 그럼 아래와 같은 에러 남:
  Module not found: Error: Cannot find file: 'showMyName.js' does not match the corresponding name on disk: '.\src\useEffect\mounted-or-updated\ShowMyName.js'.
  Failed to compile.
*/

function App() {
  return (
    <div>
      <h2>CheckScreen - Hooks rules: at the top level</h2>
      <CheckScreen />

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

      <h2>GetResult - by useMemo</h2>
      <GetResult />

      <h2>Dieter - by useCallback</h2>
      <Dieter />

      <h2>CheckScreen2 - Custom Hooks rules: "can be used not at top level"</h2>
      <CheckScreen2 />

      <h2>QuestionAndAnswer - by useRef</h2>
      <QuestionAndAnswer />
    </div>
  );
}

export default App;
