type SearchProps = {
  size: string;
};

const SearchIcon = ({ size }: SearchProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24">
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M10 19a9 9 0 1 0 0-18a9 9 0 0 0 0 18m0-2.118a6.882 6.882 0 1 1 0-13.764a6.882 6.882 0 0 1 0 13.764M15.896 19l2.426 4h2.34l-2.427-4z"
      clipRule="evenodd"
    />
  </svg>
);

export default SearchIcon;
