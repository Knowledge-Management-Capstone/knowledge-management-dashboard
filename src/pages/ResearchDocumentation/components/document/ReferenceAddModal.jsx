import { useState } from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";

import { reference } from "~/utils/validation";

import BaseButton from "~/components/generic/button/BaseButton";
import BaseModal from "~/components/generic/modal/BaseModal";
import ReferenceCombobox from "./ReferenceCombobox";

export default function ReferenceAddModal({ open, setOpen }) {
  const [selectedReference, setSelectedReference] = useState(null);
  const handleSubmit = () => {};

  return (
    <BaseModal title="Tambah Referensi" open={open} setOpen={setOpen}>
      <Formik
        initialValues={{ reference: {} }}
        validationSchema={Yup.object({ reference })}
        onSubmit={handleSubmit}
      >
        <Form>
          <ReferenceCombobox
            label="Referensi"
            id="reference"
            name="reference"
            value={selectedReference}
            onChange={setSelectedReference}
          />
          <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
            <BaseButton
              type="submit"
              className="inline-flex w-full justify-center rounded-md border border-transparent px-4 py-2 shadow-sm focus:outline-none sm:col-start-2 sm:text-sm"
            >
              Simpan
            </BaseButton>
            <BaseButton
              type="button"
              className="mt-3 inline-flex w-full justify-center rounded-md border px-4 py-2 shadow-sm sm:col-start-1 sm:mt-0 sm:text-sm"
              secondary
              onClick={() => setOpen(false)}
            >
              Batal
            </BaseButton>
          </div>
        </Form>
      </Formik>
    </BaseModal>
  );
}
