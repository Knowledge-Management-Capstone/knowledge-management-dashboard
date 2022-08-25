import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon, LogoutIcon } from "@heroicons/react/outline";

import dashboard from "~/config/dashboard";
import { selectTeam } from "~/store/actions/teamActions";

import BaseCombobox from "~/components/generic/form/BaseCombobox";
import NavigationBarItem from "./NavigationBarItem";

function NavigationBarMobile({ sidebarOpen, setSidebarOpen }) {
  const [query, setQuery] = useState("");

  const [selectedTeam, setSelectedTeam] = useState({});

  const dispatch = useDispatch();

  const { data: acceptedTeams } = useSelector((state) => state.acceptedTeams);
  const selectedTeamId = useSelector((state) => state.selectedTeamId);
  const { data: notification } = useSelector((state) => state.notification);

  const filteredTeams =
    query === ""
      ? acceptedTeams
      : acceptedTeams.filter((team) =>
          team.name.toLowerCase().includes(query.toLowerCase()),
        );

  useEffect(() => {
    setSelectedTeam(acceptedTeams.find(({ _id }) => _id === selectedTeamId));
  }, [selectedTeamId, acceptedTeams]);

  const handleSelectTeam = (team) => {
    dispatch(selectTeam(team));
  };

  const handleLogout = () => {};

  return (
    <Transition.Root show={sidebarOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-40 flex md:hidden"
        onClose={setSidebarOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="transition ease-in-out duration-300 transform"
          enterFrom="-translate-x-full"
          enterTo="translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leaveFrom="translate-x-0"
          leaveTo="-translate-x-full"
        >
          <div className="relative flex w-full max-w-xs flex-1 flex-col bg-indigo-700 pt-5 pb-4">
            <Transition.Child
              as={Fragment}
              enter="ease-in-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in-out duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="absolute top-0 right-0 -mr-12 pt-2">
                <button
                  type="button"
                  className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  onClick={() => setSidebarOpen(false)}
                >
                  <span className="sr-only">Close sidebar</span>
                  <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </button>
              </div>
            </Transition.Child>
            <div className="flex shrink-0 items-center px-4">
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/workflow-logo-indigo-300-mark-white-text.svg"
                alt="Workflow"
              />
            </div>
            <div className="mt-5 h-0 flex-1 overflow-y-auto">
              <nav className="space-y-1 px-2">
                {acceptedTeams.length > 0 && (
                  <BaseCombobox
                    className="mb-4"
                    value={selectedTeam}
                    onChange={handleSelectTeam}
                    filteredItem={filteredTeams}
                    setQuery={setQuery}
                  />
                )}
                {acceptedTeams.length > 0 ? (
                  Object.values(dashboard).map((navigation) => {
                    return navigation.path === "/discussion" ? (
                      <NavigationBarItem
                        {...navigation}
                        key={navigation.name}
                        notification={notification}
                      />
                    ) : (
                      <NavigationBarItem
                        {...navigation}
                        key={navigation.name}
                      />
                    );
                  })
                ) : (
                  <NavigationBarItem {...dashboard.proposal} />
                )}
                <div className="pt-3">
                  <NavigationBarItem
                    name="Keluar"
                    path="#"
                    icon={LogoutIcon}
                    onLogout={handleLogout}
                  />
                </div>
              </nav>
            </div>
          </div>
        </Transition.Child>
        <div className="w-14 shrink-0" aria-hidden="true" />
      </Dialog>
    </Transition.Root>
  );
}

export default NavigationBarMobile;
