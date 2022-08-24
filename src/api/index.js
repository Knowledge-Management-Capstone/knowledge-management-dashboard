import axios from "axios";

import chat from "./chat";
import user from "./user";
import team from "./team";
import notification from "./notification";

const chatApi = chat(axios);
const userApi = user(axios);
const teamApi = team(axios);
const notificationApi = notification(axios);

export { chatApi, userApi, teamApi, notificationApi };
