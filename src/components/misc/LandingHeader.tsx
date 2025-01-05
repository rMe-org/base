const LandingHeader = () => {
  return (
    <nav className="w-full max-w-3xl rounded-[18px] bg-white px-4 py-2 pr-2 shadow">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Logo and brand */}
        <div className="flex items-center space-x-6">
          <h1 className="text-2xl font-bold">Creatr</h1>
          <div className="h-5 w-[1px] bg-[#dedede]"></div>

          {/* Navigation links */}
          <div className="flex items-center space-x-8 text-[14px] text-body">
            <a href="#" className="hover:text-gray-900">
              Products
            </a>
            <a href="#" className="hover:text-gray-900">
              Templates
            </a>
            <a href="#" className="hover:text-gray-900">
              Plans
            </a>
            <a href="#" className="hover:text-gray-900">
              Support
            </a>
          </div>
        </div>

        {/* Auth buttons */}
        <div className="flex items-center space-x-4 text-[14px]">
          <button className="px-4 py-2 text-gray-600 hover:text-gray-900">
            Sign In
          </button>
          <button className="special-btn rounded-xl bg-orange-400 px-4 py-2 text-white hover:bg-orange-500">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default LandingHeader;
