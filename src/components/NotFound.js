const NotFound = () => {
  return (
    <div className="fixed  bg-gray-100 w-full h-full flex justify-center items-center no-contacts-found ">
      <div className="text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-24 w-24 m-auto text-purple-500"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10 1.5C5.85786 1.5 2.5 4.85786 2.5 9C2.5 11.4568 4.17017 13.5658 6.225 14.5828V15.5C6.225 16.3284 6.89657 17 7.725 17H12.275C13.1034 17 13.775 16.3284 13.775 15.5V14.5828C15.8298 13.5658 17.5 11.4568 17.5 9C17.5 4.85786 14.1421 1.5 10 1.5ZM10 3.5C13.0376 3.5 15.5 5.96243 15.5 9C15.5 11.2804 14.116 13.0821 12.225 13.8474V15.5H7.775V13.8474C5.88403 13.0821 4.5 11.2804 4.5 9C4.5 5.96243 6.96243 3.5 10 3.5ZM10 5.5C8.61929 5.5 7.5 6.61929 7.5 8C7.5 9.38071 8.61929 10.5 10 10.5C11.3807 10.5 12.5 9.38071 12.5 8C12.5 6.61929 11.3807 5.5 10 5.5Z"
            fill="currentColor"
          />
        </svg>
        <p className="mt-4 text-lg font-medium text-purple-600">
          Contact Not Found
        </p>
      </div>
    </div>
  );
};

export default NotFound;
