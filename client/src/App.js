import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import TitleBar from './components/TitleBar';
import FileUploadForm from "./components/FileUploadForm";

function App() {

  return (
    <div className="App">
      <TitleBar />
      <FileUploadForm />
    </div>
  );
}

export default App;
