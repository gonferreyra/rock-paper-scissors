import clsx from 'clsx';
import { useGameContext } from '../lib/hooks';
import Results from './Results';

export default function Game() {
  const {
    selectedPick,
    computerPick,
    results,
    showComputerPick,
    handleRulesModal,
    startGame,
  } = useGameContext();
  return (
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

          {results && <Results screen="small" />}

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

      {results && <Results screen="large" />}

      <button
        onClick={handleRulesModal}
        className="mb-4 mt-auto flex h-12 w-32 items-center justify-center rounded-md border-2 border-white tracking-widest transition hover:scale-105 focus:scale-105 lg:ml-auto"
      >
        RULES
      </button>
    </main>
  );
}
