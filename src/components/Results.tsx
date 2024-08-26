import clsx from 'clsx';
import { useGameContext } from '../lib/hooks';
import PlayAgainBtn from './PlayAgainBtn';

type ResultsProps = {
  screen: 'small' | 'large';
};

export default function Results({ screen }: ResultsProps) {
  const { results } = useGameContext();
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
