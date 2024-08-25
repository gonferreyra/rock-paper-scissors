import { createContext, useState } from 'react';
import { useLocalStorage } from '../lib/hooks';

type Store = {
  score: number;
  selectedPick: string;
  computerPick: string;
  results: 'You win!' | 'You lose!' | 'Tie' | null;
  showComputerPick: boolean;
  isRulesOpen: boolean;
  handleScore: (type: 'addition' | 'subtraction') => void;
  handleSelectedPick: (pick: 'rock' | 'paper' | 'scissors' | '') => void;
  handleComputerPick: (
    computerSelection: 'rock' | 'paper' | 'scissors' | '',
  ) => void;
  handleResults: (result: 'You win!' | 'You lose!' | 'Tie' | null) => void;
  handleShowCumputerPick: (boolean: boolean) => void;
  handleRulesModal: () => void;
  startGame: (pick: 'rock' | 'paper' | 'scissors') => void;
};

const choices = ['rock', 'paper', 'scissors'];

export const GameContext = createContext<Store | null>(null);

export default function GameContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [score, setScore] = useLocalStorage('score', 0);
  const [selectedPick, setSelectedPick] = useState<string>('');
  const [computerPick, setComputerPick] = useState<string>('');
  const [results, setResults] = useState<
    'You win!' | 'You lose!' | 'Tie' | null
  >(null);
  const [showComputerPick, setShowComputerPick] = useState<boolean>(false);
  const [isRulesOpen, setIsRulesOpen] = useState(false);

  // handlers
  function handleScore(type: 'addition' | 'subtraction') {
    if (type === 'addition') {
      setScore((prev) => prev + 1);
    } else {
      setScore((prev) => prev - 1);
    }
  }

  function handleSelectedPick(pick: 'rock' | 'paper' | 'scissors' | '') {
    setSelectedPick(pick);
  }

  function handleComputerPick(
    computerSelection: 'rock' | 'paper' | 'scissors' | '',
  ) {
    setComputerPick(computerSelection);
  }

  function handleResults(result: 'You win!' | 'You lose!' | 'Tie' | null) {
    setResults(result);
  }

  function handleShowCumputerPick(boolean: boolean) {
    setShowComputerPick(boolean);
  }

  function handleRulesModal() {
    setIsRulesOpen(!isRulesOpen);
  }

  function startGame(pick: 'rock' | 'paper' | 'scissors') {
    // set user choice
    handleSelectedPick(pick);

    // set computer choice
    const computerSelection = choices[
      Math.floor(Math.random() * choices.length)
    ] as 'rock' | 'paper' | 'scissors';
    handleComputerPick(computerSelection);

    setTimeout(() => {
      handleShowCumputerPick(true);

      setTimeout(() => {
        // compare results
        let result: 'You win!' | 'You lose!' | 'Tie' | null = null;
        if (pick === computerSelection) {
          result = 'Tie';
        } else if (
          (pick === 'rock' && computerSelection === 'scissors') ||
          (pick === 'scissors' && computerSelection === 'paper') ||
          (pick === 'paper' && computerSelection === 'rock')
        ) {
          result = 'You win!';
          handleScore('addition');
        } else {
          result = 'You lose!';
          handleScore('subtraction');
        }
        handleResults(result);
      }, 1000); // compare results timeout
    }, 1000); // show computers pick timeout
  }

  return (
    <GameContext.Provider
      value={{
        score,
        selectedPick,
        computerPick,
        results,
        showComputerPick,
        isRulesOpen,
        handleScore,
        handleSelectedPick,
        handleComputerPick,
        handleResults,
        handleShowCumputerPick,
        handleRulesModal,
        startGame,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}
