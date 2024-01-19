import './App.css';
import Sidebar from './components/Sidebar';
import VideoBG from './components/VideoBG';

function App() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-grow overflow-auto">
        <VideoBG />
      </div>
    </div>
  );
}

export default App;
