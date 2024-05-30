import Navbar from './components/Navbar';
import Sliders from './components/Sliders';
import TrendingAnime from './components/TrendingAnime';
import TeluguDubbAnime from './components/TeluguDubbAnime';
import HindiDubbAnime from './components/HinidDubbAnime';
import TamilDubbAnime from './components/TamilDubbAnime';
import LatestEp from './components/LatestEp';
import NewlyAdded from './components/NewlyAdded';
import ShareUs from './components/ShareUs';

import './App.css';

function App() {
   return(
    <div className='overlay'>
     <Navbar />
     <Sliders />
     <TrendingAnime />
     <TeluguDubbAnime />
     <HindiDubbAnime />
     <TamilDubbAnime />
     <LatestEp />
     <NewlyAdded />
     <ShareUs />
    </div>
   );
}

export default App;
