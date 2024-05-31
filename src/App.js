import Navbar from './components/Navbar';
import Sliders from './components/Sliders';
import TrendingAnime from './components/TrendingAnime';
import TeluguDubbAnime from './components/TeluguDubbAnime';
import HindiDubbAnime from './components/HinidDubbAnime';
import TamilDubbAnime from './components/TamilDubbAnime';
import LatestEp from './components/LatestEp';
import NewlyAdded from './components/NewlyAdded';
import ShareUs from './components/ShareUs';
import LanguageContainer from './components/LanguageContainer';
import MostView from './components/MostView';
import BestRatedAnime from './components/BestRatedAnime';
import UpComing from './components/UpComing';
import Footer from './components/Footer';

import './App.css';

function App() {
   return(
    <div className='overlay overflow-x-hidden'>
     <Navbar />
     <Sliders />
     <TrendingAnime />
     <TeluguDubbAnime />
     <HindiDubbAnime />
     <TamilDubbAnime />
     <LatestEp />
     <NewlyAdded />
     <ShareUs />
     <LanguageContainer />
     <MostView />
     <BestRatedAnime />
     <UpComing />
     <Footer />
    </div>
   );
}

export default App;
