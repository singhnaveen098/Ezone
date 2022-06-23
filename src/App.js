import {
  BrowserRouter,
} from "react-router-dom";
import Table from './components/Table';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Table />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
