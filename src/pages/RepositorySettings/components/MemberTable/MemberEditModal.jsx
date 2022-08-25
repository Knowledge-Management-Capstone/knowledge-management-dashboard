import BaseInput from "~/components/generic/form/BaseInput";
import BaseSelect from "~/components/generic/form/BaseSelect";
import FormModal from "~/components/FormModal";

import { fullName, role } from "~/utils/validation";

function MemberEditModal({ setOpen, initialValues, ...props }) {
  const handleSubmit = () => {
    setOpen(false);
  };

  return (
    <FormModal
      title="Edit Member"
      setOpen={setOpen}
      validation={{ fullName, role }}
      handleSubmit={handleSubmit}
      initialValues={initialValues}
      {...props}
    >
      <BaseInput label="Full Name" name="fullName" type="text" disabled />
      <BaseSelect label="Role" name="role">
        <option value="" disabled defaultValue>
          Select role
        </option>
        <option value="administrator" disabled={initialValues?.isAdmin}>
          Administrator
        </option>
        <option value="researcher" disabled={!initialValues?.isAdmin}>
          Researcher
        </option>
      </BaseSelect>
    </FormModal>
  );
}

export default MemberEditModal;
