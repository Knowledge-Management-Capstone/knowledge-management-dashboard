import { ChevronRightIcon } from "@heroicons/react/solid";

import useSelectedTeam from "~/hooks/useSelectedTeam";

import ActionContainer from "./components/ActionContainer";
import BaseBreadcrumbs from "~/components/generic/breadcrumbs/BaseBreadcrumbs";
import DashboardLayout from "~/layouts/DashboardLayout";
import FolderNote from "./components/folder/FolderNote";

import DocumentCardList from "./components/document/DocumentCardList";
import FolderCardList from "./components/folder/FolderCardList";
// import DocumentContainer from "./components/DocumentContainer";

function ResearchDocumentation() {
  const {
    repository: { title },
  } = useSelectedTeam();

  const pages = [{ name: title, redirect: "#", current: true }];

  return (
    <DashboardLayout>
      <div className="py-6">
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
        <FolderCardList />
        <FolderNote />
        <DocumentCardList />
        {/* <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 md:px-8">
          <DocumentContainer />
        </div> */}
      </div>
    </DashboardLayout>
  );
}

export default ResearchDocumentation;
