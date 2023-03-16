import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import { Windmill } from '@windmill/react-ui'
import EditView from './views/EditView';
function App() {
  return (
    <Windmill>
    <div className=" bg-bgColor h-[100%] min-w-[100vw] box-border">
     <Navbar/>
     <EditView/>
    </div>
    </Windmill>
  );
}

export default App;
