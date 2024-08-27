import clsx from 'clsx';

type PickProps = {
  pick: string | null;
};

export default function Pick({ pick }: PickProps) {
  return (
    <div
      className={clsx(
        'flex h-24 w-24 flex-col items-center justify-center rounded-full bg-white md:h-32 md:w-32',
        {
          'shadow-blue': pick === 'paper',
          'shadow-yellow': pick === 'scissors',
          'shadow-red': pick === 'rock',
        },
      )}
    >
      <img src={`/icon-${pick}.svg`} />
    </div>
  );
}
