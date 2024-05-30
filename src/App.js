import Navbar from './components/Navbar';
import Sliders from './components/Sliders';
import TrendingAnime from './components/TrendingAnime';
import TeluguDubbAnime from './components/TeluguDubbAnime';

import './App.css';

function App() {
   return(
    <div className='overlay'>
     <Navbar />
     <Sliders />
     <TrendingAnime />
     <TeluguDubbAnime />
    </div>
   );
}

export default App;
