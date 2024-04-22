/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { Navbar } from "../../components/navbars/Navbar";
import { LoadingSpinner } from "../../components/LoadingSpinner";
import { Content } from "../../components/dashboard/Content";
import { useChannels, useUserDetails } from "../../shared/hooks";

import "./dashboardPage.css";

export const DashboardPage = () => {
  const { getChannels, allChannels, isFetching } = useChannels();
  const { isLogged } = useUserDetails();

  useEffect(() => {
    getChannels(isLogged);
  }, []);

  if (isFetching) {
    <LoadingSpinner />;
  }
  return (
    <div className="dashboard-container">
      <Navbar />
      <Content channels={allChannels || []} getChannels={getChannels} />
    </div>
  );
};
