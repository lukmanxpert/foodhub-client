import React from "react";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      Common Layout!
      {children}
    </div>
  );
};

export default CommonLayout;
