import Rules from './components/Rules';
import Header from './components/Header';
import Game from './components/Game';
import { useSelector } from 'react-redux';
import { RootState } from './store/store';

function App() {
  const isRulesOpen = useSelector((state: RootState) => state.game.isRulesOpen);

  return (
    <div className="box-border min-h-screen w-full bg-background-radial-gradient p-6 font-barlow font-semibold uppercase text-white">
      <Header />

      <Game />

      {isRulesOpen && <Rules />}
    </div>
  );
}

export default App;
