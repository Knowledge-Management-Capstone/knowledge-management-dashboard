import { useRef } from "react";
import { useDispatch } from "react-redux";
import { PaperClipIcon } from "@heroicons/react/outline";
import { v4 as uuidv4 } from "uuid";

import { addAttachment } from "~/store/actions/chatActions";

import BaseIconButton from "~/components/generic/button/BaseIconButton";

export default function AttachmentButton() {
  const fileInputRef = useRef(null);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { files } = e.target;
    if (!files) return;

    const filesArray = Array.from(files).map((file) => ({
      id: uuidv4(),
      file,
    }));

    dispatch(addAttachment(Array.from(filesArray)));
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };
  return (
    <BaseIconButton secondary onClick={handleClick}>
      <PaperClipIcon className="h-6 w-6" aria-hidden="true" />
      <input
        ref={fileInputRef}
        type="file"
        multiple
        className="hidden"
        onChange={handleChange}
      />
    </BaseIconButton>
  );
}
