import { useMemo } from "react";
import { useSelector } from "react-redux";
import clsx from "clsx";
import { DownloadIcon } from "@heroicons/react/solid";

import { toTimeOnlyFormat } from "~/utils/date";
import { getFileIcon, splitNameAndExtension } from "~/utils/file";

function LoadingIcon() {
  return (
    <svg
      className="mr-3 h-5 w-5 animate-spin"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );
}

function Attachment({ file }) {
  const { extension, name } = splitNameAndExtension(file.name);
  const FileIcon = useMemo(() => getFileIcon(extension), [extension]);

  const isUploading = true;

  return (
    <div className="col-span-1 flex rounded-md border-2 border-gray-200 shadow-sm">
      <div className="flex w-16 shrink-0 items-center justify-center rounded-l-md text-sm font-medium">
        <FileIcon className="h-8 w-8" />
      </div>
      <div className="flex flex-1 items-center justify-between rounded-md py-3">
        <div className="max-w-[50%] flex-1 py-2 pr-10 text-base">
          <span className="truncate">{name}</span>.{extension}
        </div>
        <div className="shrink-0 pr-2">
          {isUploading ? (
            <LoadingIcon />
          ) : (
            <DownloadIcon className="mr-3 h-5 w-5 cursor-pointer" />
          )}
        </div>
      </div>
    </div>
  );
}

function ChatBubble({ message }) {
  const {
    data: { _id: userId },
  } = useSelector((data) => data.user);

  return (
    <div
      className={clsx("flex", {
        "justify-end": message.sender._id === userId,
      })}
    >
      <div className="w-fit max-w-xl text-black">
        {message.sender._id !== userId && (
          <p className="text-sm">{message.sender.fullName}</p>
        )}
        {message.type === "text" ? (
          <p
            className={clsx(" mb-3 rounded-xl p-4", {
              "bg-gray-200": message.sender._id !== userId,
              "bg-primary text-white": message.sender._id === userId,
            })}
          >
            {message.body}
          </p>
        ) : (
          <Attachment file={message.file} />
        )}
        <time
          dateTime={message.createdAt}
          className="mb-2 flex justify-end text-xs italic"
        >
          {toTimeOnlyFormat(message.createdAt)}
        </time>
      </div>
    </div>
  );
}

export default ChatBubble;
