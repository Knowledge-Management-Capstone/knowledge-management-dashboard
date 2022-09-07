import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ChevronRightIcon } from "@heroicons/react/solid";

import useSelectedTeam from "~/hooks/useSelectedTeam";
import { fetchFolderById } from "~/store/actions/folderActions";

import ActionContainer from "./components/ActionContainer";
import BaseBreadcrumbs from "~/components/generic/breadcrumbs/BaseBreadcrumbs";
import DashboardLayout from "~/layouts/DashboardLayout";
import FolderNote from "./components/folder/FolderNote";
import DocumentCardList from "./components/document/DocumentCardList";
import FolderCardList from "./components/folder/FolderCardList";

function ResearchDocumentation() {
  const dispatch = useDispatch();

  const {
    repository: { title, root: folderId },
  } = useSelectedTeam();
  const { data: folder } = useSelector((state) => state.folder);

  useEffect(() => {
    dispatch(fetchFolderById(folderId));
  }, [dispatch, folderId]);

  const pages = [{ name: title, redirect: "#", current: true }];

  return (
    <DashboardLayout>
      <div className="pt-6 pb-40">
        <div className="mx-auto px-4 sm:px-6 md:px-8">
          <BaseBreadcrumbs pages={pages} separator={ChevronRightIcon} />
        </div>
        <div className="mt-4 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-gray-300" />
        </div>
        <ActionContainer />
        <div className="mt-4 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-gray-300" />
        </div>
        <pre>{JSON.stringify(folder, 0, 2)}</pre>
        <FolderCardList />
        <FolderNote />
        <DocumentCardList />
      </div>
    </DashboardLayout>
  );
}

export default ResearchDocumentation;
