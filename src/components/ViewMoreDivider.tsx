interface ViewMoreDividerProps {
  onClick: () => void;
}

const ViewMoreDivider = (props: ViewMoreDividerProps) => {
  return (
    <div className="fter:h-px my-8 flex items-center before:h-px before:flex-1 before:bg-gray-300 before:content-[''] after:h-px after:flex-1 after:bg-gray-300 after:content-['']">
      <button
        type="button"
        onClick={props.onClick}
        className="flex cursor-pointer items-center rounded-full border border-gray-300 bg-gray-100 px-3 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="mr-1 h-4 w-4"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
        View More
      </button>
    </div>
  );
};

export default ViewMoreDivider;
