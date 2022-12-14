import {configureStore} from "@reduxjs/toolkit";
import globalReducer from "./features/globalReducer";
import userReducer from "./features/user/userReducer";
import dashboard from "./features/dashboard/dashboard";
import sidebarRight from "./features/dashboard/sidebarRight";
import intern from "./features/interns/internReducer";

export const store = configureStore({
  reducer: {
    global: globalReducer,
    user: userReducer,
    dashboard: dashboard,
    sidebarRight: sidebarRight,
    intern: intern,
  },
});
