import Header from './components/Header';
import openShelfImg from './images/openshelf.png';

const focusAreas = ['AI products', 'Full-stack systems', 'Audio + reading UX'];
const metrics = [
  ['Public-domain', 'catalog'],
  ['Word-level', 'sync'],
  ['Cloudflare', 'edge'],
];

function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#171716] text-[#f7f4ec]">
      <div className="pointer-events-none fixed inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(247,244,236,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(247,244,236,.8)_1px,transparent_1px)] [background-size:72px_72px]" />

      <section className="relative min-h-screen flex flex-col">
        <Header />

        <main className="flex-1 px-6 py-10 min-[700px]:px-12 min-[1040px]:px-16">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 min-[980px]:grid-cols-[1.08fr_.92fr] min-[980px]:items-end">
            <div className="pt-10 min-[980px]:pt-20">
              <p className="mb-6 text-xs font-bold uppercase tracking-[0.34em] text-[#b7ff5d]">
                Johann Koeh
              </p>
              <h1 className="max-w-4xl text-[52px] font-black leading-[0.92] tracking-normal min-[700px]:text-[88px] min-[1160px]:text-[112px]">
                I build calm, useful software with a little bit of edge.
              </h1>
              <p className="mt-8 max-w-2xl text-lg leading-8 text-[#d8d2c3] min-[700px]:text-xl">
                Product-minded engineer working across AI, media, and web systems. I like
                interfaces that feel fast, legible, and quietly inevitable.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                {focusAreas.map((area) => (
                  <span
                    key={area}
                    className="border border-[#f7f4ec]/18 bg-[#f7f4ec]/6 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#f7f4ec]/80"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            <aside className="border-y border-[#f7f4ec]/14 py-6 min-[980px]:mb-5 min-[980px]:border-y-0 min-[980px]:border-l min-[980px]:py-0 min-[980px]:pl-10">
              <p className="text-sm leading-7 text-[#d8d2c3]">
                Currently shaping OpenShelf, an open-source audiobook platform that turns
                public-domain books into narrated, synchronized reading experiences.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-4">
                {metrics.map(([top, bottom]) => (
                  <div key={top} className="border-t border-[#f7f4ec]/18 pt-4">
                    <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#f7f4ec]/42">
                      {top}
                    </p>
                    <p className="mt-1 text-xl font-black uppercase tracking-normal text-[#f7f4ec]">
                      {bottom}
                    </p>
                  </div>
                ))}
              </div>
            </aside>
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
            <div className="relative min-h-[360px] overflow-hidden bg-[#24e000]">
              <img
                src={openShelfImg}
                alt="OpenShelf audiobook cover"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]"
              />
              <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between bg-[#171716]/88 px-5 py-4 text-xs font-bold uppercase tracking-[0.24em] text-[#f7f4ec]/74 backdrop-blur">
                <span>Live project</span>
                <span>Open source</span>
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
                  Public-domain audiobooks with AI narration, streaming audio, and word-level
                  read-along sync across a mobile-first reader.
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

          <div className="mt-12 grid gap-5 border-t border-[#f7f4ec]/14 pt-8 text-sm leading-7 text-[#d8d2c3] min-[780px]:grid-cols-3">
            <p>
              I care about the boring parts that make products feel good: data contracts,
              deployment paths, loading states, and the small moments where users decide whether
              to trust a tool.
            </p>
            <p>
              The work usually lands somewhere between product engineering and systems design,
              with a bias toward shipping the thing people can actually touch.
            </p>
            <p>
              This site is intentionally small. The projects should do most of the talking.
            </p>
          </div>
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
