import { createContext, useCallback, useState } from 'react';
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
  handleShowComputerPick: (boolean: boolean) => void;
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
  const handleScore = useCallback((type: 'addition' | 'subtraction') => {
    if (type === 'addition') {
      setScore((prev) => prev + 1);
    } else {
      setScore((prev) => prev - 1);
    }
  }, []);

  const handleSelectedPick = useCallback(
    (pick: 'rock' | 'paper' | 'scissors' | '') => {
      setSelectedPick(pick);
    },
    [],
  );

  const handleComputerPick = useCallback(
    (computerSelection: 'rock' | 'paper' | 'scissors' | '') => {
      setComputerPick(computerSelection);
    },
    [],
  );

  const handleResults = useCallback(
    (result: 'You win!' | 'You lose!' | 'Tie' | null) => {
      setResults(result);
    },
    [],
  );

  const handleShowComputerPick = useCallback((boolean: boolean) => {
    setShowComputerPick(boolean);
  }, []);

  const handleRulesModal = useCallback(() => {
    setIsRulesOpen((prev) => !prev);
  }, []);

  const startGame = useCallback((pick: 'rock' | 'paper' | 'scissors') => {
    // set user choice
    handleSelectedPick(pick);

    // set computer choice
    const computerSelection = choices[
      Math.floor(Math.random() * choices.length)
    ] as 'rock' | 'paper' | 'scissors';
    handleComputerPick(computerSelection);

    setTimeout(() => {
      handleShowComputerPick(true);

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
  }, []);

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
        handleShowComputerPick,
        handleRulesModal,
        startGame,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}
