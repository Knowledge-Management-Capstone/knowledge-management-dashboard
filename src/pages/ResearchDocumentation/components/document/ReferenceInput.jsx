import { useState } from "react";
import { PlusIcon } from "@heroicons/react/solid";

import BaseButton from "~/components/generic/button/BaseButton";
import ReferenceAddModal from "./ReferenceAddModal";

export default function ReferenceInput({ label, ...props }) {
  const [openAddReferenceModal, setOpenAddReferenceModal] = useState(false);

  return (
    <div className="mt-3">
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label
        htmlFor={props.id || props.name}
        className="block text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <div>
        <BaseButton
          type="button"
          className="ml-auto mt-2 flex"
          onClick={() => setOpenAddReferenceModal(true)}
        >
          <PlusIcon className="mr-2 h-5 w-5" />
          <span>Tambah Referensi</span>
        </BaseButton>
        <ReferenceAddModal
          open={openAddReferenceModal}
          setOpen={setOpenAddReferenceModal}
        />
      </div>
    </div>
  );
}
