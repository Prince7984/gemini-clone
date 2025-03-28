import React, { useContext, useState } from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context.jsx";
const Sidebar = () => {
  const [extended, setExtened] = useState(false);
  const {onSent,prevPrompt=[],setRecentPrompt,newchat}= useContext(Context)

  const loadPrompt =async (prompt)=>{
    setRecentPrompt(prompt)
     await onSent(prompt)

  }

  return ( 
    <div className="sidebar">
      <div className="top">
        <img onClick={()=>setExtened(prev=>!prev)} className="menu" src={assets.menu_icon} alt="" />
        <div onClick={()=>newchat()} className="new-chat">
          <img src={assets.plus_icon} alt="" />
          {extended ? <p>New chat</p> : null}
        </div>
        {extended ? (
          <div key={index} className="recent">
            <p className="recent-title">Recent</p>
            {
              prevPrompt.map((item,index)=>{
                return(
                  <div onClick={()=>loadPrompt(item)} className="recent-entry">
              <img src={assets.message_icon} alt="" />
              <p>{item.slice(0,18)}...</p>
            </div>
                )
              })
            }
           
          </div>
        ) : null}
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="" />
          {extended?<p>Help</p>:null}     </div>
        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="" />
          {extended?<p>Activity</p>:null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="" />
          {extended?<p>Setting</p>:null}       
           </div>
      </div>
    </div>
  );
};

export default Sidebar;
