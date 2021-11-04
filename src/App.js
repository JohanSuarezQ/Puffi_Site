import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import NavMenu from './components/NavMenu';
import Home from './pages/Home';


function App() {
  return (
    <div className="App">
      <Router>
        <NavMenu/>
        <Home />
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
