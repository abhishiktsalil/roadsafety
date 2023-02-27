import classes from "./Layout.module.css";
import Navbar from "./Navbar";
import TopHeader from "./TopHeader";

function Layout(props) {

  
  return (    
    <div className={classes.dashboard}>
      {/* <div className={classes.sidebar}>Sidebar</div> */}
      <Navbar />
      <div className={classes.contentArea}>
        <TopHeader />
        <main>{props.children}</main>
      </div>      
    </div>
  );
}

export default Layout;
