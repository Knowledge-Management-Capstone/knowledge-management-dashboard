import { useDispatch, useSelector } from "react-redux";
import prettyBytes from "pretty-bytes";
import { XIcon } from "@heroicons/react/outline";

import { removeAttachment } from "~/store/actions/chatActions";

function AttachmentEntry({ attachment, onDelete }) {
  return (
    <li className="relative rounded-lg border">
      <XIcon
        onClick={onDelete}
        className="absolute right-2 top-2 z-50 h-5 w-5 hover:text-red-500"
      />
      <div className="group aspect-w-10 aspect-h-7 block overflow-hidden rounded-lg bg-gray-100 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
        <div type="button" className="absolute inset-0 focus:outline-none">
          <span className="sr-only">View details for {attachment.name}</span>
        </div>
      </div>
      <div className="mt-2 flex items-start justify-between p-2">
        <div className="flex flex-col truncate">
          <p className="pointer-events-none truncate text-sm font-medium text-gray-900">
            {attachment.name}
          </p>
          <p className="pointer-events-none block text-sm font-medium text-gray-500">
            {prettyBytes(attachment.size)}
          </p>
        </div>
      </div>
    </li>
  );
}

export default function AttachmentList() {
  const dispatch = useDispatch();
  const attachments = useSelector((state) => state.attachments);

  const handleDelete = (index) => {
    dispatch(removeAttachment(index));
  };

  return (
    <ul className="mx-auto mt-3 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-5 xl:gap-x-8">
      {attachments.map(({ id, file }, index) => (
        <AttachmentEntry
          key={id}
          attachment={file}
          onDelete={() => handleDelete(index)}
        />
      ))}
    </ul>
  );
}
