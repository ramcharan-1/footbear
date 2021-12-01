import Header from "./header";

import Footer from "./footer";

const Layout = (props) => {
  return (
    <>
      <div id="page">
        <Header />
        <div className="main">
        {props.children}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
