import clsx from "clsx";
import { useField } from "formik";
import { Combobox } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import { useState } from "react";

const items = [
  {
    _id: 1,
    name: "sample",
    extension: "txt",
    url: "https://firebasestorage.googleapis.com/v0/b/knowledge-management-capstone.appspot.com/o/sample%2F1663082103633_sample%20file.txt?alt=media&token=e3b3c154-9c36-45db-ad8f-d307674491fa",
  },
  {
    _id: 2,
    name: "LogBook",
    extension: "docx",
    url: "https://firebasestorage.googleapis.com/v0/b/knowledge-management-capstone.appspot.com/o/sample%2F1663082103633_sample%20file.txt?alt=media&token=e3b3c154-9c36-45db-ad8f-d307674491fa",
  },
];

export default function ReferenceCombobox({ label, ...props }) {
  const [documents, setDocuments] = useState([]);
  const [field, meta, helpers] = useField(props);

  const { onBlur, value } = field;
  const { touched, error } = meta;
  const { setValue } = helpers;

  const handleBlur = () => {
    onBlur({ target: { name: props.name } });
  };

  const handleChange = (event) => {
    console.log(event);
    setDocuments(items);
  };

  return (
    <div className="mt-3">
      <Combobox as="div" onBlur={handleBlur} value={value} onChange={setValue}>
        <Combobox.Label
          htmlFor={props.id || props.name}
          className="block text-sm font-medium text-gray-700"
        >
          {label}
        </Combobox.Label>
        <div className="relative mt-1">
          <Combobox.Input
            className="w-full rounded-md border border-accent bg-white py-2 pl-3 pr-10 font-bold text-primary shadow-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent sm:text-sm"
            onChange={handleChange}
            displayValue={(value) =>
              value && `${value?.name}.${value?.extension}`
            }
          />
          <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
            <SelectorIcon className="h-5 w-5 text-primary" aria-hidden="true" />
          </Combobox.Button>
          {documents.length > 0 && (
            <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
              {documents.map((item) => (
                <Combobox.Option
                  key={item._id}
                  value={item}
                  className={({ active }) =>
                    clsx(
                      {
                        "bg-primary text-secondary": active,
                        "text-primary": !active,
                      },
                      "relative cursor-default select-none py-2 pl-3 pr-9",
                    )
                  }
                >
                  {({ active, selected }) => (
                    <>
                      <div className="flex">
                        <span
                          className={clsx(
                            { "font-semibold": selected },
                            "truncate",
                          )}
                        >
                          {item.name}.{item.extension}
                        </span>
                        <span
                          className={clsx(
                            {
                              "text-indigo-200": active,
                              "text-gray-500": !active,
                            },
                            "ml-2 truncate text-gray-500",
                          )}
                        >
                          {item.name}
                        </span>
                      </div>
                      {selected && (
                        <span
                          className={clsx(
                            { "text-white": active, "text-primary": !active },
                            "absolute inset-y-0 right-0 flex items-center pr-4",
                          )}
                        >
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      )}
                    </>
                  )}
                </Combobox.Option>
              ))}
            </Combobox.Options>
          )}
        </div>
      </Combobox>
      {touched && error ? (
        <div className="mt-1 text-xs text-red-500">{error}</div>
      ) : null}
    </div>
  );
}
