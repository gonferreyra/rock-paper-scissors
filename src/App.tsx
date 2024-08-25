import { useGameContext } from './lib/hooks';
import Rules from './components/Rules';
import Header from './components/Header';
import Game from './components/Game';

function App() {
  const { isRulesOpen, handleRulesModal } = useGameContext();

  return (
    <div className="box-border min-h-screen w-full bg-background-radial-gradient p-6 font-barlow font-semibold uppercase text-white">
      <Header />

      <Game />

      {isRulesOpen && <Rules handleRulesModal={handleRulesModal} />}
    </div>
  );
}

export default App;
