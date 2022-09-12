import { useState } from "react";
import { PlusIcon } from "@heroicons/react/solid";

import { getProfileFromFullName } from "~/utils/text";

import BaseButton from "~/components/generic/button/BaseButton";
import AuthorAddModal from "./AuthorAddModal";

function Authors({ authors }) {
  return (
    <div className="mt-3">
      <span className="block text-sm font-medium text-gray-700">Author(s)</span>
      <div className="mt-1 text-sm text-gray-900 sm:col-span-2">
        <ul className="flex-1 divide-y divide-gray-200 overflow-y-auto">
          {authors &&
            authors.map((author) => (
              <li key={author._id}>
                <div className="group relative flex items-center py-3 px-1">
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a href="#" className="-m-1 block flex-1 p-1">
                    <div
                      className="absolute inset-0 group-hover:bg-gray-50"
                      aria-hidden="true"
                    />
                    <div className="relative flex min-w-0 flex-1 items-center">
                      <span className="relative inline-block shrink-0">
                        {author.pictureUrl ? (
                          <img
                            className="h-10 w-10 rounded-full"
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                          />
                        ) : (
                          <div className="my-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                            <div className=" text-sm text-primary">
                              {getProfileFromFullName(author.fullName)}
                            </div>
                          </div>
                        )}
                      </span>
                      <div className="ml-4 truncate">
                        <div className="flex shrink-0 justify-between truncate text-sm">
                          <span className="font-medium">{author.fullName}</span>
                        </div>
                        <p className="truncate text-sm text-gray-500">
                          {`${author.email}`}
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default function AuthorInput() {
  const [authors, setAuthors] = useState([]);
  const [openAddAuthorModal, setOpenAddAuthorModal] = useState(false);

  return (
    <div>
      <Authors authors={authors} />
      <BaseButton
        type="button"
        className="ml-auto flex"
        onClick={() => setOpenAddAuthorModal(true)}
      >
        <PlusIcon className="mr-2 h-5 w-5" />
        <span>Add Author</span>
      </BaseButton>
      <AuthorAddModal
        authors={authors}
        setAuthors={setAuthors}
        open={openAddAuthorModal}
        setOpen={setOpenAddAuthorModal}
      />
    </div>
  );
}
