import { useEffect, useState } from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import debounce from "lodash.debounce";

import { userApi } from "~/api";
import { craftingTime, description, files, status } from "~/utils/validation";

import BaseModal from "~/components/generic/modal/BaseModal";
import BaseInput from "~/components/generic/form/BaseInput";
import BaseFileUpload from "~/components/generic/form/BaseFileUpload";
import BaseSelect from "~/components/generic/form/BaseSelect";
import BaseTextArea from "~/components/generic/form/BaseTextArea";
import ResearcherCombobox from "~/components/ResearcherCombobox";
import BaseButton from "~/components/generic/button/BaseButton";

function DocumentModal({ open, setOpen, title, members }) {
  // TODO: Refactor duplicate code
  const [authors, setAuthors] = useState([]);
  const [selectedAuthor, setSelectedAuthor] = useState(null);

  // TODO: get useSelector instead
  const fetchAuthors = async (query) => {
    // TODO: search members
    const { data } = await userApi.searchResearchers(query);
    setAuthors(data);
  };

  useEffect(() => {
    fetchAuthors("");
  }, []);

  const handleQuery = debounce((query) => {
    fetchAuthors(query);
  }, 500);

  const handleSubmit = async (values, { setSubmitting, setFieldError }) => {
    if (members.includes(values.author)) {
      setFieldError("author", "Author already exists");
    }
    // TODO: API call to Add Documents Here
    // eslint-disable-next-line no-console
    console.log(values);
    setSubmitting(false);
    setOpen(false);
  };
  return (
    <BaseModal title={title} open={open} setOpen={setOpen}>
      <Formik
        initialValues={{
          title: "",
          description: "",
          status: "",
          files: [],
          craftingTime: 0,
        }}
        validationSchema={Yup.object({
          craftingTime,
          description,
          files,
          status,
        })}
        onSubmit={handleSubmit}
      >
        <Form>
          <BaseFileUpload label="Documents" name="files" id="files" />
          <BaseSelect label="Status" name="status">
            <option value="" disabled defaultValue>
              Select current status
            </option>
            <option value="ongoing">Ongoing</option>
            <option value="draft">Draft</option>
            <option value="done">Done</option>
            <option value="critical">Critical</option>
          </BaseSelect>
          <BaseInput
            label="Crafting Time (Hours)"
            name="craftingTime"
            type="number"
          />
          <BaseTextArea label="Description" name="description" />
          <ResearcherCombobox
            label="Authors"
            id="author"
            name="author"
            value={selectedAuthor}
            onChange={setSelectedAuthor}
            filteredItem={authors}
            setQuery={handleQuery}
            members={authors}
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
    // <FormModal
    //   validation={{ craftingTime, description, files, status }}
    //   handleSubmit={handleSubmit}
    //   setOpen={setOpen}
    //   {...props}
    // >
    // <BaseFileUpload label="Documents" name="files" id="files" />
    // <BaseSelect label="Status" name="status">
    //   <option value="" disabled defaultValue>
    //     Select current status
    //   </option>
    //   <option value="ongoing">Ongoing</option>
    //   <option value="draft">Draft</option>
    //   <option value="done">Done</option>
    //   <option value="critical">Critical</option>
    // </BaseSelect>
    // <BaseInput
    //   label="Crafting Time (Hours)"
    //   name="craftingTime"
    //   type="number"
    // />
    // <BaseTextArea label="Description" name="description" />
    // </FormModal>
  );
}

export default DocumentModal;
