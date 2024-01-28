import './App.css';
import Sidebar from './components/Sidebar';
import VideoBG from './components/VideoBG';
import Services from './components/Services';
import Insta from './components/Insta';
import Contact from './components/Contact';

function App() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-grow overflow-auto">
        <VideoBG />
        <Services />
        <Insta />
        <Contact />
      </div>
    </div>
  );
}

export default App;
