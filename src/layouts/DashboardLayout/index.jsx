import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { fetchNotifications } from "~/store/actions/notificationActions";

import NavigationBar from "./components/NavigationBar";

function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    data: { _id: memberId, token },
  } = useSelector((state) => state.user);

  const {
    data: { roomId },
  } = useSelector((state) => state.chat);

  useEffect(() => {
    if (!token) navigate("/login");
  }, [token, navigate]);

  useEffect(() => {
    if (token) {
      dispatch(fetchNotifications(memberId, roomId));
    }
  }, [dispatch, token, memberId, roomId]);

  return (
    <div className="min-h-screen">
      <NavigationBar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
      <div className="flex h-screen w-screen flex-1 flex-col md:pl-64">
        <main className="h-full">{children}</main>
      </div>
    </div>
  );
}

export default DashboardLayout;
