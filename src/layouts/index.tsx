import React from "react";
// import Header from "./header";
// import Footer from "./footer";

interface IProps {
  children: React.ReactNode;
}

const Layout: React.FC<IProps> = ({
  children,
}) => {
  return (
    <>
      {children}
    </>
  );
};

Layout.defaultProps = {
};

export default Layout;
