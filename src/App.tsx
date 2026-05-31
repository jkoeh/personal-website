import Header from './components/Header';
import openShelfImg from './images/openshelf.png';

const flipWords = ['Public', 'domain', 'books', 'read', 'aloud'];
const audioBars = [30, 54, 42, 78, 48, 88, 52, 68, 36, 72, 44, 58];

function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#171716] text-[#f7f4ec]">
      <div className="pointer-events-none fixed inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(247,244,236,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(247,244,236,.8)_1px,transparent_1px)] [background-size:72px_72px]" />

      <section className="relative min-h-screen flex flex-col">
        <Header />

        <main className="flex-1 px-6 py-10 min-[700px]:px-12 min-[1040px]:px-16">
          <div className="mx-auto max-w-7xl">
            <div className="pt-10 min-[980px]:pt-24">
              <p className="mb-6 text-xs font-bold uppercase tracking-[0.34em] text-[#b7ff5d]">
                Johann Koeh
              </p>
              <h1 className="max-w-5xl text-[58px] font-black leading-[0.92] tracking-normal min-[700px]:text-[96px] min-[1160px]:text-[126px]">
                Fun software with a little bit of edge.
              </h1>
              <p className="mt-8 max-w-2xl text-lg leading-8 text-[#d8d2c3] min-[700px]:text-xl">
                I make things. Playful, sturdy, and free where possible.
              </p>

              <div className="mt-10 flex flex-wrap gap-4 text-sm font-bold uppercase tracking-[0.18em] text-[#f7f4ec]/55">
                <a
                  href="#work"
                  className="border border-[#b7ff5d] bg-[#b7ff5d] px-5 py-3 text-[#171716] no-underline transition-transform hover:-translate-y-0.5"
                >
                  See the work
                </a>
                <a
                  href="https://github.com/jkoeh"
                  className="border border-[#f7f4ec]/18 px-5 py-3 text-[#f7f4ec]/72 no-underline transition-colors hover:border-[#f7f4ec]/50 hover:text-[#f7f4ec]"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </main>

        <div className="px-6 pb-8 min-[700px]:px-12 min-[1040px]:px-16">
          <div className="mx-auto flex max-w-7xl items-center justify-between border-t border-[#f7f4ec]/14 pt-4 text-xs uppercase tracking-[0.22em] text-[#f7f4ec]/38">
            <span>Selected work</span>
            <span>2026</span>
          </div>
        </div>
      </section>

      <section id="work" className="relative px-6 py-20 min-[700px]:px-12 min-[1040px]:px-16">
        <div className="mx-auto max-w-7xl">
          <a
            href="https://openshelf.johannkoeh.io"
            className="group grid overflow-hidden border border-[#f7f4ec]/14 bg-[#22211f] text-[#f7f4ec] no-underline transition-colors hover:border-[#b7ff5d]/70 min-[900px]:grid-cols-[.9fr_1.1fr]"
          >
            <div className="relative min-h-[440px] overflow-hidden bg-[#e8e1d1] p-6 text-[#171716] min-[700px]:p-10">
              <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(#171716_1px,transparent_1px),linear-gradient(90deg,#171716_1px,transparent_1px)] [background-size:44px_44px]" />
              <div className="relative flex h-full min-h-[360px] items-center justify-center [perspective:1500px]">
                <div className="relative h-[300px] w-[218px] transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:translateX(34px)_rotateZ(-2deg)] min-[700px]:h-[342px] min-[700px]:w-[248px]">
                  <div className="absolute inset-0 translate-x-5 translate-y-5 bg-[#171716]" />

                  <div className="absolute inset-0 origin-left border border-[#171716]/25 bg-[#fffaf0] p-5 shadow-[8px_8px_0_rgba(23,23,22,.18)] transition-transform duration-700 [backface-visibility:hidden] [transform-style:preserve-3d] group-hover:[transform:rotateY(-118deg)]">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#171716]/42">
                      Generated audio
                    </p>
                    <div className="mt-6 flex h-16 items-end gap-1.5 border-y border-[#171716]/12 py-3">
                      {audioBars.map((height, index) => (
                        <span
                          key={`${height}-${index}`}
                          className={index < 7 ? 'flex-1 bg-[#4eb4ff]' : 'flex-1 bg-[#171716]/18'}
                          style={{ height: `${height}%` }}
                        />
                      ))}
                    </div>
                    <div className="mt-7 flex flex-wrap gap-x-2 gap-y-3 text-3xl font-black leading-none tracking-normal">
                      {flipWords.map((word) => (
                        <span
                          key={word}
                          className={word === 'read' ? 'bg-[#b7ff5d] px-1' : 'text-[#171716]/76'}
                        >
                          {word}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="absolute inset-0 origin-left border border-[#171716]/20 bg-[#f7f4ec] p-5 transition-transform delay-75 duration-700 [backface-visibility:hidden] group-hover:[transform:rotateY(-92deg)]">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#171716]/42">
                      Word sync
                    </p>
                    <div className="mt-6 space-y-3">
                      <span className="block h-3 w-full bg-[#171716]/14" />
                      <span className="block h-3 w-10/12 bg-[#171716]/14" />
                      <span className="block h-3 w-8/12 bg-[#b7ff5d]" />
                      <span className="block h-3 w-11/12 bg-[#171716]/14" />
                    </div>
                  </div>

                  <div className="absolute inset-0 origin-left overflow-hidden border border-[#171716]/25 bg-[#171716] p-3 shadow-[12px_12px_0_#171716] transition-transform delay-150 duration-700 [backface-visibility:hidden] group-hover:[transform:rotateY(-42deg)]">
                    <img
                      src={openShelfImg}
                      alt="OpenShelf book cover"
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="absolute -bottom-12 left-1/2 flex -translate-x-1/2 gap-2 text-[10px] font-black uppercase tracking-[0.18em] text-[#171716]/58">
                    <span className="whitespace-nowrap border border-[#171716]/16 bg-[#f7f4ec] px-3 py-2">
                      Hover to flip
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex min-h-[360px] flex-col justify-between p-7 min-[700px]:p-10">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#4eb4ff]">
                  Expo · Cloudflare · AI Audio
                </p>
                <h2 className="mt-5 max-w-2xl text-[42px] font-black uppercase leading-[0.95] tracking-normal min-[700px]:text-[68px]">
                  OpenShelf
                </h2>
                <p className="mt-6 max-w-xl text-lg leading-8 text-[#d8d2c3]">
                  Books of the public domain are our shared treasure. We should be able to hear
                  them read to us.
                </p>
              </div>

              <div className="mt-12 grid gap-4 min-[700px]:grid-cols-[1fr_auto] min-[700px]:items-end">
                <div className="grid grid-cols-3 gap-3">
                  {['Kokoro TTS', 'R2 streaming', 'Expo reader'].map((item) => (
                    <span
                      key={item}
                      className="border border-[#f7f4ec]/14 px-3 py-3 text-[11px] font-bold uppercase tracking-[0.16em] text-[#f7f4ec]/64"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <span className="inline-flex items-center justify-center border border-[#b7ff5d] bg-[#b7ff5d] px-5 py-4 text-xs font-black uppercase tracking-[0.2em] text-[#171716] transition-transform group-hover:-translate-y-1">
                  View project
                </span>
              </div>
            </div>
          </a>
        </div>
      </section>

      <footer className="relative px-6 pb-10 min-[700px]:px-12 min-[1040px]:px-16">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 border-t border-[#f7f4ec]/14 pt-6 text-xs uppercase tracking-[0.22em] text-[#f7f4ec]/38">
          <span>Johann Koeh</span>
          <a
            href="https://github.com/jkoeh"
            className="text-[#f7f4ec]/48 no-underline transition-colors hover:text-[#f7f4ec]"
          >
            GitHub
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
