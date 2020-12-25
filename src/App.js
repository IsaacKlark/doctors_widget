import './App.css';
import { HashRouter, Redirect, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import DoctorPage from './components/DoctorPage/DoctorPage';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <HashRouter >
        <Header />
        <Route path='/'>
          <Redirect to="/about" />
        </Route>
        <Route path="/about">
          <Home />
        </Route>
        <Route path="/doctor">
          <DoctorPage />
        </Route>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
