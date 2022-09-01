import { useState } from "react";
import { DocumentAddIcon, FolderAddIcon } from "@heroicons/react/outline";

import DocumentModal from "./document/DocumentModal";
import FolderModal from "./folder/FolderModal";

function ActionContainer() {
  const [openDocumentDialog, setOpenDocumentDialog] = useState(false);
  const [openFolderDialog, setOpenFolderDialog] = useState(false);

  return (
    <>
      <div className="mx-auto flex items-center gap-3 px-4 pt-3 pb-4 sm:px-6 md:px-8">
        <button
          type="button"
          className="flex cursor-pointer items-center gap-2 rounded-md border-2 py-2 px-3 text-accent hover:bg-primary hover:text-secondary"
          onClick={() => setOpenFolderDialog(true)}
        >
          <FolderAddIcon className="h-6 w-6" /> Add Folder
        </button>
        <button
          type="button"
          className="flex cursor-pointer items-center gap-2 rounded-md border-2 py-2 px-3 text-accent hover:bg-primary hover:text-secondary"
          onClick={() => setOpenDocumentDialog(true)}
        >
          <DocumentAddIcon className="h-6 w-6" /> Upload Document
        </button>
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
    </>
  );
}

export default ActionContainer;
