import Header from "../../components/Dashboard/Header";
import LeftSide from "../../components/Dashboard/LeftSide";

const Layout = ({ children }) => {
  return (
    <div className="flex ">
      <div className="">
        <LeftSide />
      </div>
      <main className="flex-1">
        <Header />

        {children}
      </main>
    </div>
  );
};

export default Layout;
