import './App.css';
import Sidebar from './components/Sidebar';
import GrpHome from './components/GrpHome';

function App() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-grow overflow-auto">
        <GrpHome />
      </div>
    </div>
  );
}

export default App;
