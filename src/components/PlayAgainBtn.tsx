import { useDispatch } from 'react-redux';
import {
  setComputerPick,
  setResults,
  setSelectedPick,
  setShowComputerPick,
} from '../store/GameSlice/gameSlice';
import { AppDispatch } from '../store/store';

export default function PlayAgainBtn() {
  const dispatch: AppDispatch = useDispatch();
  return (
    <button
      className="mt-4 flex h-12 w-full items-center justify-center rounded-md bg-white text-sm uppercase text-text-dark transition hover:text-red-500"
      onClick={() => {
        dispatch(setSelectedPick(''));
        dispatch(setComputerPick(''));
        dispatch(setShowComputerPick(false));
        dispatch(setResults(''));
      }}
    >
      Play Again
    </button>
  );
}
