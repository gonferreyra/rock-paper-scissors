import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type GameState = {
  score: number;
  selectedPick: 'rock' | 'paper' | 'scissors' | '';
  computerPick: 'rock' | 'paper' | 'scissors' | '';
  results: 'You win!' | 'You lose!' | 'Tie' | '';
  showComputerPick: boolean;
  isRulesOpen: boolean;
};

const initialState: GameState = {
  score: 0,
  selectedPick: '',
  computerPick: '',
  results: '',
  showComputerPick: false,
  isRulesOpen: false,
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setScore: (state, action: PayloadAction<'addition' | 'subtraction'>) => {
      if (action.payload === 'addition') {
        return {
          ...state,
          score: state.score + 1,
        };
      } else {
        return {
          ...state,
          score: state.score - 1,
        };
      }
    },
    setSelectedPick: (
      state,
      action: PayloadAction<'rock' | 'paper' | 'scissors' | ''>,
    ) => {
      return {
        ...state,
        selectedPick: action.payload,
      };
    },
    setComputerPick: (
      state,
      action: PayloadAction<'rock' | 'paper' | 'scissors' | ''>,
    ) => {
      return {
        ...state,
        computerPick: action.payload,
      };
    },
    setResults: (
      state,
      action: PayloadAction<'You win!' | 'You lose!' | 'Tie' | ''>,
    ) => {
      return {
        ...state,
        results: action.payload,
      };
    },
    setShowComputerPick: (state, action: PayloadAction<boolean>) => {
      return {
        ...state,
        showComputerPick: action.payload,
      };
    },
    setRulesModal: (state) => {
      return {
        ...state,
        isRulesOpen: !state.isRulesOpen,
      };
    },
  },
});

// actions creators
export const {
  setScore,
  setSelectedPick,
  setComputerPick,
  setResults,
  setShowComputerPick,
  setRulesModal,
} = gameSlice.actions;

export default gameSlice.reducer;
