import {
  DownloadIcon,
  InformationCircleIcon,
  PencilAltIcon,
  TrashIcon,
} from "@heroicons/react/outline";

import { BaseMenu, BaseMenuItem } from "~/components/generic/menu/BaseMenu";

const files = [
  {
    title: "IMG_4985.HEIC",
    size: "3.9 MB",
  },
  // More files...
];

function DocumentCard({ file }) {
  const handleDownload = () => {};
  const handleDelete = () => {};
  const handleEdit = () => {};
  const handleOpenInfo = () => {};

  return (
    <li className="relative rounded-lg border">
      <div className="group aspect-w-10 aspect-h-7 block overflow-hidden rounded-lg bg-gray-100 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
        <button type="button" className="absolute inset-0 focus:outline-none">
          <span className="sr-only">View details for {file.title}</span>
        </button>
      </div>
      <div className="mt-2 flex items-start justify-between p-2">
        <div>
          <p className="pointer-events-none block truncate text-sm font-medium text-gray-900">
            {file.title}
          </p>
          <p className="pointer-events-none block text-sm font-medium text-gray-500">
            {file.size}
          </p>
        </div>
        <BaseMenu>
          <BaseMenuItem
            icon={DownloadIcon}
            name="Download"
            onClick={handleDownload}
          />
          <BaseMenuItem
            icon={InformationCircleIcon}
            name="Details"
            onClick={handleOpenInfo}
          />
          <BaseMenuItem icon={PencilAltIcon} name="Edit" onClick={handleEdit} />
          <BaseMenuItem icon={TrashIcon} name="Delete" onClick={handleDelete} />
        </BaseMenu>
      </div>
    </li>
  );
}

function DocumentCardList() {
  return (
    <div className="px-4 sm:px-6 md:px-8">
      <h2 className="text-sm font-medium text-gray-500">Documents</h2>
      <ul className="mx-auto mt-3 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-5 xl:gap-x-8">
        {files.map((file) => (
          <DocumentCard file={file} key={file.title} />
        ))}
      </ul>
    </div>
  );
}

export default DocumentCardList;
