import clsx from 'clsx';
import Rules from './components/Rules';
import { useGameContext } from './lib/hooks';

function App() {
  const {
    score,
    selectedPick,
    computerPick,
    results,
    showComputerPick,
    isRulesOpen,
    handleSelectedPick,
    handleComputerPick,
    handleResults,
    handleShowCumputerPick,
    handleRulesModal,
    startGame,
  } = useGameContext();

  return (
    <div className="box-border min-h-screen w-full bg-background-radial-gradient p-6 font-barlow font-semibold uppercase text-white">
      <header className="flex items-center justify-between rounded-md border-4 border-header-outline p-6 lg:m-auto lg:max-w-screen-sm">
        <div className="">
          <img src="/logo.svg" alt="rockpaperscissors-logo" className="h-16" />
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg bg-white px-4 py-3">
          <p className="text-[9px] tracking-widest text-text-score">Score</p>
          <p className="text-4xl tracking-tighter text-text-dark">{score}</p>
        </div>
      </header>

      <main className="relative mx-auto flex min-h-[75vh] max-w-[500px] flex-col items-center justify-between lg:max-w-screen-md">
        {selectedPick.length <= 0 ? (
          <div className="relative mx-auto mb-8 mt-28 h-80 w-[270px] bg-bg-triangle bg-contain bg-center bg-no-repeat sm:w-[400px]">
            <button
              id="paper"
              className="shadow-blue absolute -top-4 left-0 flex h-24 w-24 items-center justify-center rounded-full bg-white transition hover:scale-105 focus:scale-105 md:-top-12 md:h-32 md:w-32"
              onClick={() => startGame('paper')}
            >
              <img src="/icon-paper.svg" alt="paper-icon" />
            </button>
            <button
              id="scissors"
              className="shadow-yellow absolute -top-4 right-0 flex h-24 w-24 items-center justify-center rounded-full bg-white transition hover:scale-105 focus:scale-105 md:-top-12 md:h-32 md:w-32"
              onClick={() => startGame('scissors')}
            >
              <img src="/icon-scissors.svg" alt="scissors-icon" />
            </button>
            <button
              id="rock"
              className="shadow-red absolute bottom-0 left-1/2 flex h-24 w-24 -translate-x-1/2 transform items-center justify-center rounded-full bg-white transition hover:scale-105 focus:scale-105 md:h-32 md:w-32"
              onClick={() => startGame('rock')}
            >
              <img src="/icon-rock.svg" alt="rock-icon" />
            </button>
          </div>
        ) : (
          <div className="relative mx-auto mb-8 mt-28 flex w-[270px] flex-row justify-between md:w-[400px] lg:w-[580px] lg:gap-12">
            <div className="flex flex-col items-center gap-6 lg:flex-col-reverse">
              <div
                className={clsx(
                  'flex h-24 w-24 flex-col items-center justify-center rounded-full bg-white md:h-32 md:w-32',
                  {
                    'shadow-blue': selectedPick === 'paper',
                    'shadow-yellow': selectedPick === 'scissors',
                    'shadow-red': selectedPick === 'rock',
                  },
                )}
              >
                <img src={`/icon-${selectedPick}.svg`} />
              </div>
              <p className="text-xs lg:text-lg">Your pick</p>
            </div>

            {results && (
              <div className="mb-6 mt-12 hidden w-[65%] flex-col items-center lg:flex">
                <p className="text-4xl font-bold lg:text-center">{results}</p>
                {/* make reusable component */}
                <button
                  className="mt-4 flex h-12 w-full items-center justify-center rounded-md bg-white text-sm uppercase text-text-dark transition hover:text-red-500"
                  onClick={() => {
                    handleSelectedPick('');
                    handleComputerPick('');
                    handleShowCumputerPick(false);
                    handleResults(null);
                  }}
                >
                  Play Again
                </button>
              </div>
            )}

            {showComputerPick ? (
              <div className="flex flex-col items-center gap-6 lg:flex-col-reverse">
                <div
                  className={clsx(
                    'flex h-24 w-24 flex-col items-center justify-center rounded-full bg-white md:h-32 md:w-32',
                    {
                      'shadow-blue': computerPick === 'paper',
                      'shadow-yellow': computerPick === 'scissors',
                      'shadow-red': computerPick === 'rock',
                    },
                  )}
                >
                  <img src={`/icon-${computerPick}.svg`} />
                </div>
                <p className="text-xs lg:text-lg">house pick</p>
              </div>
            ) : (
              <div className="flex flex-col items-center gap-6 lg:flex-col-reverse">
                <div className="flex h-24 w-24 flex-col items-center justify-center rounded-full bg-background-radial-gradient md:h-32 md:w-32" />
                <p className="text-xs lg:text-lg">house pick</p>
              </div>
            )}
          </div>
        )}

        {results && (
          <div className="mb-6 mt-12 flex w-[65%] flex-col items-center lg:hidden">
            <p className="text-4xl font-bold">{results}</p>
            {/* make resusable component with the ither playagain btn */}
            <button
              className="mt-4 flex h-12 w-full items-center justify-center rounded-md bg-white text-sm uppercase text-text-dark transition hover:text-red-500"
              onClick={() => {
                handleSelectedPick('');
                handleComputerPick('');
                handleShowCumputerPick(false);
                handleResults(null);
              }}
            >
              Play Again
            </button>
          </div>
        )}

        <button
          onClick={handleRulesModal}
          className="mb-4 mt-auto flex h-12 w-32 items-center justify-center rounded-md border-2 border-white tracking-widest transition hover:scale-105 focus:scale-105 lg:ml-auto"
        >
          RULES
        </button>
      </main>

      {isRulesOpen && <Rules handleRulesModal={handleRulesModal} />}
    </div>
  );
}

export default App;
