import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LogoutIcon } from "@heroicons/react/outline";
import dashboard from "~/config/dashboard";

import { selectTeam } from "~/store/actions/teamActions";

import BaseCombobox from "~/components/generic/form/BaseCombobox";
import NavigationBarItem from "./NavigationBarItem";

function NavigationBarDesktop() {
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
    <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
      <div className="flex grow flex-col overflow-y-auto bg-primary pt-5">
        <div className="flex shrink-0 items-center px-4">
          <img
            className="h-8 w-auto"
            src="https://tailwindui.com/img/logos/workflow-logo-indigo-300-mark-white-text.svg"
            alt="Workflow"
          />
        </div>
        <div className="mt-5 flex flex-1 flex-col">
          <nav className="flex-1 space-y-1 px-2 pb-4">
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
                  <NavigationBarItem {...navigation} key={navigation.name} />
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
    </div>
  );
}

export default NavigationBarDesktop;
