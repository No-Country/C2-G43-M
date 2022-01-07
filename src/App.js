import Footer from './components/Footer';
import FormUno from './components/FormUno';
import NavbarUno from './components/NavbarUno';
import Sidebar from './components/Sidebar';
function App() {
  return (
    <div className="App">
      <NavbarUno />
      <div className="row">
        <Sidebar />
      </div>
      <FormUno />
      <Footer />
    </div>
  );
}

export default App;
