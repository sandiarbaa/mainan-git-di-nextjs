import React from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="w-full h-screen font-bold text-3xl p-5">{children}</main>
  );
};

export default MainLayout;
