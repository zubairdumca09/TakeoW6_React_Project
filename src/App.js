import { useState } from 'react'
import CreateBook from './components/CreateBook'
import Books from './components/Books'
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
//import Utils, { testNamedExport, testFun } from './concepts/importExport'
import { testFun } from './concepts/importExport'


function App() {
  const [showBooksFlag, setShowBooksFlag] = useState(false);
  //Utils.camelize();

  const showBooks = () => {
    setShowBooksFlag(true)
  }
  const addBook = () => {
    setShowBooksFlag(false)
  }
  return (
    <div className="App">
      <Header />
      {!showBooksFlag && <CreateBook
        name="Fundamentals"
        author="HC Verma"
        showBooks={showBooks}
      />}
      {showBooksFlag && <Books addBook={addBook} />}
    </div>
  );
}

export default App;
