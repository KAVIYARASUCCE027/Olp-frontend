import { Outlet } from "react-router";
import TopBar from "./TopBar";

const MainLayOut=()=>{
    return (
        <div>
            <TopBar/>
            <Outlet/>

        </div>
    )
}

export default MainLayOut;

