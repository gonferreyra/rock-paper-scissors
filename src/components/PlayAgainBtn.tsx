import { useGameStore } from '../store/gameStore';

export default function PlayAgainBtn() {
  const setSelectedPick = useGameStore((state) => state.setSelectedPick);
  const setComputerPick = useGameStore((state) => state.setComputerPick);
  const setShowComputerPick = useGameStore(
    (state) => state.setShowComputerPick,
  );
  const setResults = useGameStore((state) => state.setResults);
  return (
    <button
      className="mt-4 flex h-12 w-full items-center justify-center rounded-md bg-white text-sm uppercase text-text-dark transition hover:text-red-500"
      onClick={() => {
        setSelectedPick('');
        setComputerPick('');
        setShowComputerPick(false);
        setResults('');
      }}
    >
      Play Again
    </button>
  );
}
