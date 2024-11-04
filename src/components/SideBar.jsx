import React from "react";
import { HiOutlineChartBar, HiOutlineLightBulb, HiOutlineStar, HiOutlineViewGrid } from "react-icons/hi";
import { HiOutlineUserGroup } from "react-icons/hi";
import { HiOutlineClipboard } from "react-icons/hi";
import {useDispatch, useSelector} from 'react-redux'
import { changePage } from "../Features/PageSlice";
const SideBar = () => {
  const active = useSelector((state)=>{
    return state.page});
  const dispatch = useDispatch();
  return (
    <div className="sidebar me-md-4">
      <div className="d-flex flex-column justify-content-between gap-3 mb-4 ">
        <div className={`d-flex align-items-center ${active==="Dashboard" ? "sidebar-active": "sidebar-item"} px-2 gap-3 hover-pointer`} onClick={()=>dispatch(changePage("Dashboard"))}>
          <HiOutlineViewGrid className="sidebar-icon" />
          <h4 className="fs-6 mb-0 text-nowrap ">Dashboard</h4>
        </div>

        <div className={`d-flex align-items-center ${active==="Learn" ? "sidebar-active": "sidebar-item"} px-2 gap-3 hover-pointer`} onClick={()=>dispatch(changePage("Learn"))}>
          <HiOutlineLightBulb className="sidebar-icon " />
          <h4 className="fs-6 mb-0 text-nowrap">Learn</h4>
        </div>

        <div className={`d-flex align-items-center ${active==="Forums" ? "sidebar-active": "sidebar-item"} px-2 gap-3 hover-pointer`} onClick={()=>dispatch(changePage("Forums"))}>
          <HiOutlineUserGroup className="sidebar-icon" />
          <h4 className="fs-6 mb-0 text-nowrap">Forums</h4>
        </div>
        <div className={`d-flex align-items-center ${active==="Upskill" ? "sidebar-active": "sidebar-item"} px-2 gap-3 hover-pointer`} onClick={()=>dispatch(changePage("Upskill"))}>
          <HiOutlineClipboard className="sidebar-icon" />
          <h4 className="fs-6 mb-0 text-nowrap">Upskill</h4>
        </div>
        <div className={`d-flex align-items-center ${active==="Contest" ? "sidebar-active": "sidebar-item"} px-2 gap-3 hover-pointer`} onClick={()=>dispatch(changePage("Contest"))}>
          <HiOutlineChartBar className="sidebar-icon" />
          <h4 className="fs-6 mb-0 text-nowrap">Contest</h4>
        </div>
        <div className={`d-flex align-items-center ${active==="Leaderboard" ? "sidebar-active": "sidebar-item"} px-2 gap-3 hover-pointer`} onClick={()=>dispatch(changePage("Leaderboard"))}>
          <HiOutlineStar className="sidebar-icon" />
          <h4 className="fs-6 mb-0 text-nowrap">Leaderboard</h4>
        </div>

      </div>
    </div>
  );
};

export default SideBar;
