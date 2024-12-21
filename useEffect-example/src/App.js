import logo from './logo.svg';
import './App.css';
import ExampleOfUseEffect from './useEffectExample';
import ExampleOfUseReducer from './useReducerExample';

function App() {  

  return (
    < >    
    <div className='App'>
      <h1>Example of useEffect</h1>
      <ExampleOfUseEffect/>
    </div>
    <div className='App'>
      <h1>Example of useReducer</h1>
      <ExampleOfUseReducer/>
    </div>
    </>

  );
}

export default App;
