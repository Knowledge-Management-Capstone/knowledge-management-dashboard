// import { useField } from "formik";
import clsx from "clsx";

function BaseFileUpload({ label, ...props }) {
  return (
    <div className="mt-3">
      <label
        htmlFor={props.id || props.name}
        className="block text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <div className="mt-1">
        <input
          className={clsx(
            "block w-full appearance-none rounded-md border  shadow-sm placeholder:text-gray-400 focus:border-primary focus:outline-none focus:ring-primary disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none sm:text-sm",
            { "": props.disabled },
          )}
          type="file"
          multiple
          // {...field}
          {...props}
        />
      </div>
      <p className="mt-2 text-sm text-gray-500" id="list">
        {/* TODO: Specify this */}
        *Accepted file type TBD
      </p>
      {/* {meta.touched && meta.error ? (
        <div className="mt-1 text-xs text-red-500">{meta.error}</div>
      ) : null} */}
    </div>
  );
}

export default BaseFileUpload;
