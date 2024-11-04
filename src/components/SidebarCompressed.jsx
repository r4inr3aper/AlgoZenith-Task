import React from 'react'
import { HiOutlineChartBar, HiOutlineLightBulb, HiOutlineStar, HiOutlineViewGrid } from "react-icons/hi";
import { HiOutlineUserGroup } from "react-icons/hi";
import { HiOutlineClipboard } from "react-icons/hi";
import { useDispatch, useSelector } from 'react-redux';
import { changePage } from "../Features/PageSlice";

const SidebarCompressed = () => {
  const active = useSelector((state)=>{
    return state.page});
  const dispatch = useDispatch();

  return (
    <div className="sidebarcompressed me-md-4">
    <div className="d-flex flex-column justify-content-between gap-3 mb-4 ">
      <div className={`d-flex align-items-center ${active==="Dashboard" ? "sidebar-active": "sidebar-item"} px-2 gap-3 hover-pointer`} onClick={()=>dispatch(changePage("Dashboard"))}>
        <HiOutlineViewGrid className="sidebar-icon" />
      </div>

      <div className={`d-flex align-items-center ${active==="Learn" ? "sidebar-active": "sidebar-item"} px-2 gap-3 hover-pointer`} onClick={()=>dispatch(changePage("Learn"))}>
        <HiOutlineLightBulb className="sidebar-icon " />
      </div>

      <div className={`d-flex align-items-center ${active==="Forums" ? "sidebar-active": "sidebar-item"} px-2 gap-3 hover-pointer`} onClick={()=>dispatch(changePage("Forums"))}>
        <HiOutlineUserGroup className="sidebar-icon" />
      </div>
      <div className={`d-flex align-items-center ${active==="Upskill" ? "sidebar-active": "sidebar-item"} px-2 gap-3 hover-pointer`} onClick={()=>dispatch(changePage("Upskill"))}>
        <HiOutlineClipboard className="sidebar-icon" />
      </div>
      <div className={`d-flex align-items-center ${active==="Contest" ? "sidebar-active": "sidebar-item"} px-2 gap-3 hover-pointer`} onClick={()=>dispatch(changePage("Contest"))}>
        <HiOutlineChartBar className="sidebar-icon" />
      </div>
      <div className={`d-flex align-items-center ${active==="Leaderboard" ? "sidebar-active": "sidebar-item"} px-2 gap-3 hover-pointer`} onClick={()=>dispatch(changePage("Leaderboard"))}>
        <HiOutlineStar className="sidebar-icon" />
      </div>

    </div>
  </div>

  )
}

export default SidebarCompressed