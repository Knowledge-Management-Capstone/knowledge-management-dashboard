import { useState } from "react";
import { useField } from "formik";
import { PlusIcon } from "@heroicons/react/solid";

import BaseButton from "~/components/generic/button/BaseButton";
import ReferenceAddModal from "./ReferenceAddModal";

// function References({ references, onDelete }) {}

export default function ReferenceInput({ label, ...props }) {
  const [openAddReferenceModal, setOpenAddReferenceModal] = useState(false);

  const [field, meta, helpers] = useField(props);

  const { onBlur, value } = field;
  const { touched, error } = meta;
  const { setValue } = helpers;

  const handleBlur = () => {
    onBlur({ target: { name: props.name } });
  };

  const handleAddReference = (newValue) => {
    setValue([...value, newValue]);
  };

  // const handleDelete = (index) => {
  //   const newValue = [...value];
  //   newValue.splice(index, 1);
  //   setValue(newValue);
  // };

  return (
    <div className="mt-3">
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label
        htmlFor={props.id || props.name}
        className="block text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <div onBlur={handleBlur}>
        {/* <References references={value} onDelete={handleDelete} /> */}
        <BaseButton
          type="button"
          className="ml-auto mt-2 flex"
          onClick={() => setOpenAddReferenceModal(true)}
        >
          <PlusIcon className="mr-2 h-5 w-5" />
          <span>Tambah Referensi</span>
        </BaseButton>
        <ReferenceAddModal
          references={value}
          onAddReference={handleAddReference}
          open={openAddReferenceModal}
          setOpen={setOpenAddReferenceModal}
        />
      </div>
      {touched && error ? (
        <div className="mt-1 text-xs text-red-500">{meta.error}</div>
      ) : null}
    </div>
  );
}
