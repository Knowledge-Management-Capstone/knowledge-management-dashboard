import { useField } from "formik";
import { UploadIcon } from "@heroicons/react/solid";

function BaseFileUpload({ label, ...props }) {
  const [field, meta, helpers] = useField(props);

  const { onBlur, value } = field;
  const { touched, error } = meta;
  const { setValue } = helpers;

  const handleBlur = () => {
    onBlur({ target: { name: props.name } });
  };

  const handleChange = (e) => {
    setValue([...value, ...e.target.files]);
  };

  const handleDelete = (index) => {
    const list = [...value];
    list.splice(index, 1);
    setValue(list);
  };

  return (
    <div className="mt-3">
      <div className="block text-sm font-medium text-gray-700">
        {label}{" "}
        <span className="font-normal italic">(*Accepted file type TBD)</span>
      </div>
      <label
        htmlFor={props.id || props.name}
        className="mt-1 block w-32 cursor-pointer text-sm font-medium text-gray-700"
      >
        <div className="flex items-center gap-2 rounded-md bg-primary p-2 pl-3 text-white hover:bg-accent hover:text-secondary">
          <div>Choose Files</div> <UploadIcon className="inline h-4 w-4" />
        </div>
        <input
          className="hidden"
          type="file"
          multiple
          onChange={handleChange}
          onBlur={handleBlur}
          {...props}
        />
      </label>
      <div className="mt-2 text-sm text-gray-500" id="list">
        {value.map(({ name }, index) => (
          <div
            className="flex w-full appearance-none items-center justify-between rounded-md border p-2 text-gray-800 shadow-sm disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none sm:text-sm"
            key={name}
          >
            <span className="text-gray-800">{name}</span>
            <button
              type="button"
              className="ml-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-gray-500 hover:bg-gray-300 hover:text-gray-800 focus:bg-gray-800 focus:text-white focus:outline-none"
              onClick={() => handleDelete(index)}
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
      </div>
      {touched && error ? (
        <div className="mt-1 text-xs text-red-500">{error}</div>
      ) : null}
    </div>
  );
}

export default BaseFileUpload;
