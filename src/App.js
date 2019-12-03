// Tids overblik:   
// Set up:  09.44 - 09.50  (6 min)
// Navigation part 1 : 09.50 -  09.57 (7 min) 
// Context: kortekurser part1: 09.59 -  10.05 (6min)
// Navigation part 2 : 10.06 -  10.20 (14 min)
// Logo: 10.20 - 10.55 (25min)
// Navigation part 3 : 10.55 - 11.06 (11 min)
// Visuel Søgfelt i Navigation: 11.07 - 11.30 ( 23 min)
// footer: 11.30 - 11.55 ( 25min)

// Main:
import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

// Context:
import KurserContextProvider from './context/kortekurser.context';

// Components
import NavigationsBar from './components/basicComponents/navigation/navigation.compnent';

// img:
import logo from './assets/logo.png'
import Footer from './components/basicComponents/footer/footer.component';

function App() {
  return (
    <div className="App">
    <Router>
    <KurserContextProvider>

      <header>
        <img src={logo} alt=""/>
        <NavigationsBar />
      </header>

      <main></main>

      <footer>
        <Footer />
      </footer>
    
    </KurserContextProvider>
    </Router> 
    </div>
  );
}

export default App;
