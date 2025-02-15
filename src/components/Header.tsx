const Header = () => {
  return (
    <header>
      <div className={'h-[60px] border-b border-gray-600 px-4'}>
        <div className={'container mx-auto flex h-full items-center'}>
          <a href="#">
            <img src={'/logo.svg'} className="size-[36px]" alt="logo" />
          </a>
          <span className={'ml-4'}>Movie List - Virtual Spirit</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
