const Header = () => (
  <div className="flex justify-between items-center text-white mx-5 my-5 min-[700px]:text-[25px]">
    <div className="min-w-[121px] cursor-pointer hover:[text-shadow:0.5px_0.5px_#fff]">
      Johann Koeh
    </div>
    <nav className="flex gap-4">
      <div className="min-w-[121px] cursor-pointer hover:[text-shadow:0.5px_0.5px_#fff]">
        Home
      </div>
      <div className="min-w-[121px] cursor-pointer hover:[text-shadow:0.5px_0.5px_#fff]">
        <a
          className="text-white no-underline hover:[text-shadow:0.5px_0.5px_#fff]"
          href="http://johann-resume.s3-website.us-east-2.amazonaws.com/"
        >
          Resume
        </a>
      </div>
      <div className="min-w-[121px] cursor-pointer hover:[text-shadow:0.5px_0.5px_#fff]">
        Contact
      </div>
    </nav>
  </div>
);

export default Header;
