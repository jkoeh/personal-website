import { useState } from 'react';
import Header from './components/Header';
import backgroundWebp from './images/james-pond-1qkyck-UL3g-unsplash.webp';
import backgroundJpg from './images/james-pond-1qkyck-UL3g-unsplash.jpg';
import ticTacToeImg from './images/tic-tac-toe.png';

const PROJECT_TYPES = ['ML', 'Front End', 'Back End'];

function App() {
  const [projectTypeSelected, setProjectType] = useState('');

  return (
    <div className="text-center m-0 p-0 h-full">
      <div className="flex flex-col justify-start">
        <Header />

        <div
          className="
            text-white text-center uppercase border-b border-white mx-auto p-0
            text-[30px]
            min-[900px]:text-[40px]
            min-[1200px]:text-[50px] min-[1200px]:mt-[200px] min-[1200px]:min-w-[700px]
          "
        >
          {projectTypeSelected} Engineer.
        </div>

        <div className="flex justify-center mt-[30px] min-[900px]:mt-[10px]">
          {PROJECT_TYPES.map((type) => (
            <button
              key={type}
              className="
                text-white border border-white bg-transparent rounded cursor-pointer
                mx-2.5 min-w-[70px]
                min-[700px]:text-[25px] min-[700px]:min-w-[120px]
              "
              onClick={() => setProjectType(type)}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      <div className="text-white min-[1200px]:mt-[200px]">
        <div
          className="h-[450px] w-[450px]"
          style={{
            background: `linear-gradient(rgba(255,255,255,0.45), rgba(255,255,255,0.45)), url(${ticTacToeImg})`,
          }}
        />
        <div>
          <h2>Tic-Tac-Toe</h2>
          <p>Try your skill with this simple tic-tac-toe build purely with react</p>
          <p>
            <a
              className="inline-block px-4 py-2 text-sm font-medium text-white bg-gray-600 rounded hover:bg-gray-500 no-underline"
              href="http://johann-tic-tac-toe.s3-website.us-east-2.amazonaws.com/"
            >
              View Detail
            </a>
          </p>
        </div>
      </div>

      <picture>
        <source srcSet={backgroundWebp} type="image/webp" />
        <img
          className="absolute left-0 top-0 min-w-[100vw] max-w-[100vw] -z-10 opacity-30"
          src={backgroundJpg}
          alt=""
          width="1920"
          height="1280"
          decoding="async"
          fetchpriority="low"
        />
      </picture>
    </div>
  );
}

export default App;
