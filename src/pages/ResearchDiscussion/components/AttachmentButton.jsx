import { useRef } from "react";
import { PaperClipIcon } from "@heroicons/react/outline";

import BaseIconButton from "~/components/generic/button/BaseIconButton";

export default function AttachmentButton() {
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { files } = e.target;
    if (!files) return;
    console.log(Array.from(files));
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
