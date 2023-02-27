import React from "react";
import AllContent from "./AllContent";
import AcceptedContent from "./AcceptedContent";
import RejectedContent from "./RejectedContent";
import NotMyJurisdiction from "./NotMyJurisdiction";

const TabContent = ({ activeTab }) => {
    
  if (activeTab === "All") {
    return <AllContent />;
  } else if (activeTab === "Accepted") {
    return <AcceptedContent />;
  } else if (activeTab === "Rejected") {
    return <RejectedContent />;
  } else if (activeTab === "NotMyJurisdiction") {
    return <NotMyJurisdiction />;
  } else {
    return null;
  }
};

export default TabContent;
