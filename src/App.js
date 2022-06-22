import CreateBook from './components/CreateBook'
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
//import Utils, { testNamedExport, testFun } from './concepts/importExport'
import { testFun } from './concepts/importExport'


function App() {
  //Utils.camelize();
  return (
    <div className="App">
      <Header />
      <CreateBook
        name="Fundamentals"
        author="HC Verma"
      />
    </div>
  );
}

export default App;
