const Header = () => (
  <div className="flex justify-between items-center px-10 min-[700px]:px-16 pt-8 pb-4 text-white text-sm uppercase tracking-widest">
    <div className="text-white/30 text-xs tracking-widest cursor-pointer hover:text-white/60 transition-colors">
      Johann Koeh
    </div>
    <nav className="flex gap-6">
      <div className="cursor-pointer hover:text-white/60 transition-colors">Home</div>
      <a
        className="text-white no-underline hover:text-white/60 transition-colors"
        href="http://johann-resume.s3-website.us-east-2.amazonaws.com/"
      >
        Resume
      </a>
      <div className="cursor-pointer hover:text-white/60 transition-colors">Contact</div>
    </nav>
  </div>
);

export default Header;
