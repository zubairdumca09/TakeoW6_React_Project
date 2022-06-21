import CreateBook from './components/CreateBook'
import './App.css';
//import Utils, { testNamedExport, testFun } from './concepts/importExport'
import { testFun } from './concepts/importExport'


function App() {
  //Utils.camelize();
  return (
    <div className="App">
      <h3>React App component</h3>
      <CreateBook
        name="Fundamentals"
        author="HC Verma"
      />
    </div>
  );
}

export default App;
