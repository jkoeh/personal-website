const Header = () => (
  <header className="px-6 pt-6 min-[700px]:px-12 min-[1040px]:px-16">
    <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-5 border-b border-[#f7f4ec]/14 pb-5 text-xs font-bold uppercase tracking-[0.22em] text-[#f7f4ec]/62">
      <a
        className="flex items-center gap-3 text-[#f7f4ec]/70 no-underline transition-colors hover:text-[#f7f4ec]"
        href="/"
        aria-label="Johann Koeh home"
      >
        <span className="h-2.5 w-2.5 bg-[#b7ff5d]" aria-hidden="true" />
        Johann Koeh
      </a>

      <nav className="flex flex-wrap items-center gap-x-5 gap-y-3">
        <a className="text-current no-underline transition-colors hover:text-[#f7f4ec]" href="#work">
          Work
        </a>
        <a
          className="text-current no-underline transition-colors hover:text-[#f7f4ec]"
          href="https://www.linkedin.com/in/johann-koeh-12884639/"
        >
          Resume
        </a>
        <a
          className="text-current no-underline transition-colors hover:text-[#f7f4ec]"
          href="https://github.com/jkoeh"
        >
          GitHub
        </a>
      </nav>
    </div>
  </header>
);

export default Header;
