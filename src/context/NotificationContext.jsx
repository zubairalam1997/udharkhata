import { createContext, useContext, useState } from "react";

const NotificationContext = createContext();

export function NotificationProvider({ children }) {
  const [notifications, setNotifications] = useState([]);

  const pushNotification = (notification) => {
    setNotifications((prev) => [notification, ...prev]);
  };

  return (
    <NotificationContext.Provider value={{ notifications, pushNotification }}>
      {children}
    </NotificationContext.Provider>
  );
}

export const useNotificationContext = () =>
  useContext(NotificationContext);
