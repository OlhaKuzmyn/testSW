import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";
import {MainLayout} from "./layouts";
import {GroupsPage, UsersPage} from "./pages";


function App() {

  return (
    <Routes>
      <Route path={'/'} element={<MainLayout/>}>
          <Route index element={<Navigate to={'users'}/>} />
          <Route path={'users'} element={<UsersPage/>}/>
          <Route path={'groups'} element={<GroupsPage/>}/>
      </Route>
    </Routes>
  );
}

export default App;
