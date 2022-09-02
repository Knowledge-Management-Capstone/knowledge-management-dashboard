import { useState } from "react";
import {
  DocumentAddIcon,
  FolderAddIcon,
  InformationCircleIcon,
} from "@heroicons/react/outline";

import BaseButton from "~/components/generic/button/BaseButton";
import BaseIconButton from "~/components/generic/button/BaseIconButton";
import DocumentModal from "./document/DocumentModal";
import FolderInfo from "./folder/FolderInfo";
import FolderModal from "./folder/FolderModal";

function ActionContainer() {
  const [openDocumentDialog, setOpenDocumentDialog] = useState(false);
  const [openFolderDialog, setOpenFolderDialog] = useState(false);
  const [openFoderInfo, setOpenFolderInfo] = useState(false);

  return (
    <>
      <div className="mx-auto flex items-center justify-between gap-3 px-4 pt-3 pb-4 sm:px-6 md:px-8">
        <div className="flex gap-3">
          <BaseButton
            className="mt-3 flex items-center gap-3"
            onClick={() => setOpenFolderDialog(true)}
          >
            <FolderAddIcon className="h-6 w-6" /> Add Folder
          </BaseButton>
          <BaseButton
            className="mt-3 flex items-center gap-3"
            onClick={() => setOpenDocumentDialog(true)}
          >
            <DocumentAddIcon className="h-6 w-6" /> Upload Document
          </BaseButton>
        </div>
        <div className="ml-4 mt-4 flex shrink-0">
          <BaseIconButton secondary onClick={() => setOpenFolderInfo(true)}>
            <InformationCircleIcon className="h-6 w-6" />
          </BaseIconButton>
        </div>
      </div>
      <FolderModal
        title="Add Folder"
        open={openFolderDialog}
        setOpen={setOpenFolderDialog}
        initialValues={{ title: "" }}
      />
      <DocumentModal
        title="Add Document"
        open={openDocumentDialog}
        setOpen={setOpenDocumentDialog}
        initialValues={{ title: "", note: "", files: [] }}
      />
      <FolderInfo open={openFoderInfo} setOpen={setOpenFolderInfo} />
    </>
  );
}

export default ActionContainer;
