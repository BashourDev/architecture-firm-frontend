import React from "react";

const AppFileInput = ({ id, label, onChange, containerClassName }) => {
  return (
    <div
      className={`flex w-full items-center justify-center ${containerClassName}`}
    >
      <label className="w-64 flex flex-col items-center px-4 py-6 bg-white text-dark-blue rounded-lg shadow-sm tracking-wide uppercase border border-light-gold cursor-pointer hover:bg-dark-blue hover:text-white">
        <svg
          className="w-8 h-8"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
        </svg>
        <span className="mt-2 text-base leading-normal">
          Select Project Images
        </span>
        <input
          id={id}
          type="file"
          className="hidden"
          multiple
          onChange={onChange}
        />
      </label>
    </div>
  );
};

export default AppFileInput;
