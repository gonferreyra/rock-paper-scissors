import clsx from 'clsx';
import PlayAgainBtn from './PlayAgainBtn';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

type ResultsProps = {
  screen: 'small' | 'large';
};

export default function Results({ screen }: ResultsProps) {
  const results = useSelector((state: RootState) => state.game.results);
  return (
    <div
      className={clsx('mb-6 mt-12 w-[65%] flex-col items-center lg:flex', {
        'hidden lg:flex': screen === 'small',
        'flex lg:hidden': screen === 'large',
      })}
    >
      <p className="text-4xl font-bold lg:text-center">{results}</p>
      <PlayAgainBtn />
    </div>
  );
}
