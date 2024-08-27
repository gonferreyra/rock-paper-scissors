import { useDispatch } from 'react-redux';
import { setRulesModal } from '../store/GameSlice/gameSlice';
import { AppDispatch } from '../store/store';

export default function Rules() {
  const dispatch: AppDispatch = useDispatch();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white lg:inset-32 lg:bg-inherit">
      <div className="flex scale-95 transform flex-col items-center justify-between gap-24 bg-white px-8 py-16 transition-transform duration-300 ease-in-out lg:rounded-lg">
        <h2 className="my-4 text-2xl text-text-dark">Rules</h2>
        <img src="/image-rules.svg" className="max-w-[600px]" />
        <button
          className="mt-auto rounded px-4 py-2"
          onClick={() => dispatch(setRulesModal())}
        >
          <img src="/icon-close.svg" />
        </button>
      </div>
    </div>
  );
}
