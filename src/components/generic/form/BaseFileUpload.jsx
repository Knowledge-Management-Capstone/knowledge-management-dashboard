import { useState } from "react";
// import { useField } from "formik";
import clsx from "clsx";

function BaseFileUpload({ label, ...props }) {
  const [files, setFiles] = useState();

  const handleChange = (e) => {
    setFiles(e.target.files);
  };

  return (
    <div className="mt-3">
      <label
        htmlFor={props.id || props.name}
        className="block text-sm font-medium text-gray-700"
      >
        {label}{" "}
        <span className="font-normal italic">(*Accepted file type TBD)</span>
      </label>
      <div className="mt-1">
        <input
          className={clsx(
            "block w-full appearance-none rounded-md border shadow-sm placeholder:text-gray-400 focus:border-primary focus:outline-none focus:ring-primary disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none sm:text-sm",
            { "": props.disabled },
          )}
          type="file"
          multiple
          onChange={handleChange}
          // {...field}
          // {...props}
        />
      </div>
      <p className="mt-2 text-sm text-gray-500" id="list">
        {files?.length > 1 &&
          Object.values(files).map(({ name }) => (
            <div
              className="flex w-full appearance-none items-center justify-between rounded-md border p-2 text-gray-800 shadow-sm disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none sm:text-sm"
              key={name}
            >
              <span className="text-gray-800">{name}</span>
              <button
                type="button"
                className="ml-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-gray-500 hover:bg-gray-300 hover:text-gray-800 focus:bg-gray-800 focus:text-white focus:outline-none"
                onClick={() => {}}
              >
                <span className="sr-only">Remove {name}</span>
                <svg
                  className="h-2.5 w-2.5"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 8 8"
                >
                  <path
                    strokeLinecap="round"
                    strokeWidth="1.5"
                    d="M1 1l6 6m0-6L1 7"
                  />
                </svg>
              </button>
            </div>
          ))}
      </p>
      {/* {meta.touched && meta.error ? (
        <div className="mt-1 text-xs text-red-500">{meta.error}</div>
      ) : null} */}
    </div>
  );
}

export default BaseFileUpload;
