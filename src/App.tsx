import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import GrpHome from './components/GrpHome';
import GrpRealEstate from './components/GrpRealEstate';

function App() {
  return (
    <Router>
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-grow overflow-auto">
          <Routes>
            <Route path="/" element={<GrpHome />} />
            <Route path="/real-estate" element={<GrpRealEstate />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
