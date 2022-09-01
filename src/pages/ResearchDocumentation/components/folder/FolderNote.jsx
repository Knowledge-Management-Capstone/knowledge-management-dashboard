/* eslint-disable react/no-danger */
import { useState } from "react";
import { PencilAltIcon } from "@heroicons/react/solid";

import ReactQuill from "~/components/ReactQuill";

import BaseButton from "~/components/generic/button/BaseButton";

export default function FolderNote() {
  const [content, setContent] = useState("<h1>Details Here</h1>");
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="my-20">
      {isEditing ? (
        <>
          <ReactQuill value={content} setValue={setContent} />
          <div className="mt-3 flex justify-end px-8">
            <BaseButton
              className="mt-3 flex items-center gap-3"
              onClick={() => setIsEditing(false)}
            >
              <PencilAltIcon className="h-5 w-5" />
              Save Note
            </BaseButton>
          </div>
        </>
      ) : (
        <div className="relative mx-auto max-w-7xl p-6">
          <div
            className="prose"
            dangerouslySetInnerHTML={{ __html: content }}
          />
          <div className="mt-3 flex justify-end px-8">
            <BaseButton
              className="mt-3 flex items-center gap-3"
              onClick={() => setIsEditing(true)}
            >
              <PencilAltIcon className="h-5 w-5" />
              Edit Note
            </BaseButton>
          </div>
        </div>
      )}
    </div>
  );
}
