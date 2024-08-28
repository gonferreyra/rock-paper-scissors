import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

type GameState = {
  score: number;
  selectedPick: 'rock' | 'paper' | 'scissors' | '';
  computerPick: 'rock' | 'paper' | 'scissors' | '';
  results: 'You win!' | 'You lose!' | 'Tie' | '';
  showComputerPick: boolean;
  isRulesOpen: boolean;
  setScore: (action: 'addition' | 'subtraction') => void;
  setSelectedPick: (pick: 'rock' | 'paper' | 'scissors' | '') => void;
  setComputerPick: (pick: 'rock' | 'paper' | 'scissors' | '') => void;
  setResults: (results: 'You win!' | 'You lose!' | 'Tie' | '') => void;
  setShowComputerPick: (boolean: boolean) => void;
  setRulesModal: () => void;
};

export const useGameStore = create<GameState>()(
  devtools(
    (set) => ({
      score: 0,
      selectedPick: '',
      computerPick: '',
      results: '',
      showComputerPick: false,
      isRulesOpen: false,
      setScore: (action) => {
        if (action === 'addition') {
          set((state) => ({
            ...state,
            score: state.score + 1,
          }));
        } else {
          set((state) => ({
            ...state,
            score: state.score - 1,
          }));
        }
      },
      setSelectedPick: (pick) => {
        set((state) => ({
          ...state,
          selectedPick: pick,
        }));
      },
      setComputerPick: (pick) => {
        set((state) => ({
          ...state,
          computerPick: pick,
        }));
      },
      setResults: (results) => {
        set((state) => ({
          ...state,
          results: results,
        }));
      },
      setShowComputerPick: (boolean) =>
        set((state) => ({ ...state, showComputerPick: boolean })),
      setRulesModal: () =>
        set((state) => ({ ...state, isRulesOpen: !state.isRulesOpen })),
    }),
    { name: 'game' },
  ),
);
