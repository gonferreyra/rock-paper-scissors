import { useGameContext } from '../lib/hooks';

export default function PlayAgainBtn() {
  const {
    handleSelectedPick,
    handleComputerPick,
    handleShowComputerPick,
    handleResults,
  } = useGameContext();
  return (
    <button
      className="mt-4 flex h-12 w-full items-center justify-center rounded-md bg-white text-sm uppercase text-text-dark transition hover:text-red-500"
      onClick={() => {
        handleSelectedPick('');
        handleComputerPick('');
        handleShowComputerPick(false);
        handleResults(null);
      }}
    >
      Play Again
    </button>
  );
}
