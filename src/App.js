import logo from './logo.svg';
import './App.css';

import NavBar from './components/NavBar';
import PageProductList from './components/PageBody/PageProductList';
import PageProductAdd from './components/PageBody/PageProductAdd';
import PageProductDetail from './components/PageBody/PageProductDetail';
import PageGradientList from './components/PageBody/PageGradientList';
import PageGradientAdd from './components/PageBody/PageGradientAdd';
import PageFilterCakeList from './components/PageBody/PageFilterCakeList';
import PageFilterCakeAdd from './components/PageBody/PageFilterCakeAdd';
import TopBar from './components/TopBar';
import { useState } from 'react';

function App() {
  return (
    <Main />
  );
}

function switchPage(index){
  switch(index){
    case 0:
      return <PageProductList></PageProductList>;
    case 1: 
      return <PageProductAdd></PageProductAdd>;
    // case 2:
    //   return <PageProductDetail></PageProductDetail> ;
    case 3:
      return <PageFilterCakeList></PageFilterCakeList>;
    case 4:
      return <PageFilterCakeAdd></PageFilterCakeAdd>;
    case 5:
      return <PageGradientList></PageGradientList>;
    case 6:
      return <PageGradientAdd></PageGradientAdd>;
  }
}

function Main() {
  let [selectedPage, setSelectedPage] = useState(0);

  return (
    <div className="Webpage">
      <TopBar></TopBar>
      <div className="body">
        <NavBar setSelectedPage = {setSelectedPage}></NavBar>
        {switchPage(selectedPage)}
      </div>
    </div>
  );
}

if (module.hot) {
  module.hot.accept();
}
export default App;
