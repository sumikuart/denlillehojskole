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
// Tilmældings Component: 10.16 - 12.59 (2 timer 43 min) <<<---- Problemer med at snakke med State
// korte Kurser: 13.00 - 13.45 (45 min)

// Dag 3: 
// kursuscenter: 09.26 - 09.59 (23 min)
// lange kurser: 10.00 - 10.26 (26min)
// linjefag + linjefag context: 10.27 - 11.04 (37 min)
// Studie ture: 11.07 - 11.28 (21 min)
// Studie Ture - Galleri: 11.29 - 12.11 (42 min)
// Style Tilmelding: 12.13 - 12.55 (42 min)
// Context -> lav side for linjefag: 12.56 - 14.38 (1 time 34 min) <<<---- Problemer med at overføre Data fra Context til side, basseret på URL


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
import KursuscenterComponent from './components/mainComponents/kursuscenter/kursuscenter.component';
import LangekurserComponent from './components/mainComponents/langekurser/langekurser.component';
import LinjefagComponent from './components/mainComponents/linjefag/linjefag.component';
import LinjefagContextProvider from './context/linjefag.context';
import StudieTureCompnent from './components/mainComponents/studieture/studieture.component';
import LinjefagDetailComponent from './components/mainComponents/linjefag/linjefagdetaljeside/linjefagdetaljeside.component';

function App() {
  return (
    <div className="App">
    <Router>
    <KurserContextProvider>
    <HoldContextProvider>
    <LinjefagContextProvider>

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
        <Route path='/kursuscenter' component={KursuscenterComponent} />
        <Route exact path='/langekurser' component={LangekurserComponent} />
        
        <Route exact path='/langekurser/linjefag' component={LinjefagComponent} />
        <Route path='/langekurser/linjefag/:valgfag' component={LinjefagDetailComponent} />

        <Route path='/studietur' component={StudieTureCompnent} />
      </main>

      <footer>
        <Footer />
      </footer>

    </LinjefagContextProvider>
    </HoldContextProvider>
    </KurserContextProvider>
    </Router> 
    </div>
  );
}

export default App;
