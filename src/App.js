import logo from './logo.svg';
import './App.css';

import NavBar from './components/NavBar';
import PageBody from './components/PageBody';
import TopBar from './components/TopBar';

function App() {
  return (
    <Main />
  );
}

function Main() {
  return (
    <div className="Webpage">
      <TopBar></TopBar>
      <div className="body">
        <NavBar></NavBar>
        <PageBody></PageBody>
      </div>
    </div>
  );
}

if (module.hot) {
  module.hot.accept();
}
export default App;
