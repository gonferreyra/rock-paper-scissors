import { createContext, useContext, useState } from 'react';
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
};

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
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export function useGameContext() {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGameContext must be used within a GameContextProvider');
  }
  return context;
}
