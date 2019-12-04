// Tids overblik:   
// Set up:  09.44 - 09.50  (6 min)
// Navigation part 1 : 09.50 -  09.57 (7 min) 
// Context: kortekurser part1: 09.59 -  10.05 (6min)
// Navigation part 2 : 10.06 -  10.20 (14 min)
// Logo: 10.20 - 10.55 (25min)
// Navigation part 3 : 10.55 - 11.06 (11 min)
// Visuel Søgfelt i Navigation: 11.07 - 11.30 ( 23 min)
// Footer: 11.30 - 11.55 ( 25min)

// Dag 2:
// om Skolen, banner: 08.30 - 09.36 (1 time 6min)
// om Skolen, content: 09.36 - 10.16 (40 min)
// Tilmældings Component: 10.16 - 12.59 (2 timer 43 min)
// korte Kurser: 13.00 - 13.45 (45 min)


// Main:
import React from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink} from "react-router-dom";

// Context:
import KurserContextProvider from './context/kortekurser.context';

// Components
import NavigationsBar from './components/basicComponents/navigation/navigation.compnent';

// img:
import logo from './assets/logo.png'
import Footer from './components/basicComponents/footer/footer.component';
import OmSkolenComponent from './components/mainComponents/omSkolen/omSkolen.component';
import HoldContextProvider from './context/elevhold.context';
import TilmeldComponent from './components/mainComponents/tilmelding/tilmeld.component';
import KorteKurserComponent from './components/mainComponents/korteKurser/korteKurser.component';

function App() {
  return (
    <div className="App">
    <Router>
    <KurserContextProvider>
    <HoldContextProvider>

      <header>
        <NavLink to='/'>
        <img src={logo} alt=""/>
        </NavLink>
        <NavigationsBar />
      </header>

      <main>
        <Route exact path='/' component={OmSkolenComponent} />
        <Route path='/tilmeld/:type/:chosenPath' component={TilmeldComponent} />
        <Route path='/kortekurser' component={KorteKurserComponent} />
      </main>

      <footer>
        <Footer />
      </footer>

    </HoldContextProvider>
    </KurserContextProvider>
    </Router> 
    </div>
  );
}

export default App;
