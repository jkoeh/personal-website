import { useState } from 'react';
import Header from './components/Header';
import HeroSlot from './components/HeroSlot';
import ticTacToeImg from './images/tic-tac-toe.png';

const PROJECT_TYPES = ['ML', 'Front End', 'Back End'];

function App() {
  const [projectTypeSelected, setProjectType] = useState('');

  function toggleType(type: string) {
    setProjectType((prev) => (prev === type ? '' : type));
  }

  return (
    <div>
      {/* ── HERO ── */}
      <section className="min-h-[60vh] flex flex-col">
        <Header />
        <div className="flex-1 flex flex-col justify-center">
          <HeroSlot />
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section className="px-10 min-[700px]:px-16 py-16">
        <div className="flex items-center gap-6 mb-8 flex-wrap">
          <p className="text-white/30 text-xs uppercase tracking-widest">Projects</p>
          <div className="flex gap-3 flex-wrap">
            {PROJECT_TYPES.map((type) => (
              <button
                key={type}
                onClick={() => toggleType(type)}
                className={`
                  px-3 py-1 text-xs uppercase tracking-widest border transition-colors cursor-pointer
                  ${
                    projectTypeSelected === type
                      ? 'bg-white text-[#28282a] border-white'
                      : 'bg-transparent text-white/40 border-white/20 hover:border-white hover:text-white'
                  }
                `}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 min-[700px]:grid-cols-2 gap-6 max-w-4xl">
          <div className="border border-white/10 overflow-hidden">
            <img
              src={ticTacToeImg}
              alt="Tic-Tac-Toe screenshot"
              className="w-full aspect-square object-cover"
            />
            <div className="p-5">
              <p className="text-white/30 text-xs uppercase tracking-widest">React · Front End</p>
              <h3 className="text-white font-bold text-lg uppercase tracking-wide mt-1">Tic-Tac-Toe</h3>
              <p className="text-white/50 text-sm mt-2">
                A classic game built with vanilla React. No libraries, no fluff.
              </p>
              <a
                href="http://johann-tic-tac-toe.s3-website.us-east-2.amazonaws.com/"
                className="inline-block mt-5 text-xs text-white uppercase tracking-widest hover:text-white/50 transition-colors no-underline"
              >
                View Project →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
