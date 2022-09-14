import { useField } from "formik";

import { craftingTime, description, name, status } from "~/utils/validation";

import BaseTextArea from "~/components/generic/form/BaseTextArea";
import BaseInput from "~/components/generic/form/BaseInput";
import BaseSelect from "~/components/generic/form/BaseSelect";
import FormModal from "~/components/FormModal";

export function InputWithAddOns({ label, extension, ...props }) {
  const [field, meta] = useField(props);

  return (
    <div className="mt-3">
      <label
        htmlFor={props.id || props.name}
        className="block text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <div className="relative mt-1 rounded-md shadow-sm">
        <input
          className="block w-full rounded-md border-gray-300 pl-3 pr-12 shadow-sm placeholder:text-gray-400 focus:border-primary focus:outline-none focus:ring-primary disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none sm:text-sm"
          {...field}
          {...props}
        />
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          <span className="uppercase text-gray-500 sm:text-sm">
            {extension}
          </span>
        </div>
      </div>
      {meta.touched && meta.error ? (
        <div className="mt-1 text-xs text-red-500">{meta.error}</div>
      ) : null}
    </div>
  );
}

export default function DocumentEditModal(props) {
  const {
    initialValues: { extension },
  } = props;

  return (
    <FormModal
      title="Edit Document"
      validation={{ craftingTime, description, name, status }}
      {...props}
    >
      <InputWithAddOns
        label="Name"
        name="name"
        type="text"
        extension={extension}
      />
      <BaseInput
        label="Crafting Time (Hours)"
        name="craftingTime"
        type="number"
      />
      <BaseSelect label="Status" name="status">
        <option value="" disabled defaultValue>
          Select current status
        </option>
        <option value="ongoing">Ongoing</option>
        <option value="draft">Draft</option>
        <option value="done">Done</option>
        <option value="critical">Critical</option>
      </BaseSelect>
      <BaseTextArea label="Description" name="description" />
      {/* TODO: Add authors */}
    </FormModal>
  );
}
