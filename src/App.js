import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AdminManagement from "./pages/AdminManagement";
import RequireAuth from "./pages/RequireAuth";
// import PastRequest from "./pages/PastRequest";
// import PendingRequest from "./pages/PendingRequest";

function App() {

  return (    
    // <Routes>
    //   <Route path="/" element={<Layout><Dashboard /></Layout>}>
    //     {/* <Route path="/PendingRequest" element={<PendingRequest tab="Pending" />}/>
    //     <Route path="/PastRequest" element={<PastRequest tab="Past" />}/> */}
    //   </Route>
    //   <Route path="/PendingRequest" element={<Layout><Dashboard tab="Pending" /></Layout>}/>
    //   <Route path="/PastRequest" element={<Layout><Dashboard tab="Past" /></Layout>}/>
    //   <Route path="/AdminManagement" element={<Layout><AdminManagement /></Layout>}/>
    //   <Route path="/Login" element={<Login />}/>
    // </Routes>

    <Routes>
      <Route path="login" element={<Login />}/>
      {/* <Route path="register" element={<Login />}/> */}

      <Route path="/" element={<RequireAuth />}>
        <Route path="/dashboard" element={<Layout><Dashboard /></Layout>}/>
        <Route path="/PendingRequest" element={<Layout><Dashboard tab="Pending" /></Layout>}/>
        <Route path="/PastRequest" element={<Layout><Dashboard tab="Past" /></Layout>}/>
        <Route path="/AdminManagement" element={<Layout><AdminManagement /></Layout>}/>
      </Route>
      
    </Routes>
  );
}

export default App;
