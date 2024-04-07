import { useState } from 'react';
import './App.scss';
import Nav from "./components/Nav/Nav";
import Home from "./pages/Home/Home.jsx";

function App() {
  const [page, setPage] = useState('home')

  const changePage = (pageView) => {
    setPage(pageView)
  } 

  return (
    <>
      <Nav changePage={changePage}/>
      { page === 'home' && <Home/>}
    </>
  );
}



export default App; 
