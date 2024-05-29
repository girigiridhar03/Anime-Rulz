import Navbar from './components/Navbar';
import Sliders from './components/Sliders';
import TrendingAnime from './components/TrendingAnime';

import './App.css';

function App() {
   return(
    <div className='overlay'>
     <Navbar />
     <Sliders />
     <TrendingAnime />
    </div>
   );
}

export default App;
