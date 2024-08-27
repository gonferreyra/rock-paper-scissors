import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

export default function Header() {
  const score = useSelector((state: RootState) => state.game.score);

  return (
    <header className="flex items-center justify-between rounded-md border-4 border-header-outline p-4 lg:m-auto lg:max-w-screen-sm xl:max-w-screen-lg xl:p-6">
      <div className="">
        <img src="/logo.svg" alt="rockpaperscissors-logo" className="h-16" />
      </div>
      <div className="flex flex-col items-center justify-center rounded-lg bg-white px-4 py-3">
        <p className="text-[9px] tracking-widest text-text-score md:text-xs">
          Score
        </p>
        <p className="text-4xl tracking-tighter text-text-dark md:text-5xl">
          {score}
        </p>
      </div>
    </header>
  );
}
