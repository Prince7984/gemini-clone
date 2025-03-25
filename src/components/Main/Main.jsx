import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context.jsx'
const Main = () => {
    const {onSent,recentPrompt,showResult,loading,resultData,setInput,input}=useContext(Context);
  return (
    <div className='main'>
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        {!showResult 
        ?<>
            <div className="greet">
            <p><span>Hello, Prince.</span></p>
            <p>How can I help you today?</p>

        </div>
        <div className="cards">
            <div className="card">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicin</p>
                <img src={assets.compass_icon} alt="" />
            </div>
            <div className="card">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicin</p>
                <img src={assets.bulb_icon} alt="" />
            </div>
            <div className="card">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit</p>
                <img src={assets.message_icon} alt="" />
            </div>
            <div className="card">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing</p>
                <img src={assets.code_icon} alt="" />
            </div>
        </div>
         </>
            :<div className='result'>
                <div className="result-title">
                    <img src={assets.user_icon} alt="" />
                    <p>{recentPrompt}</p>
                
                </div>
                <div className="result-data">
                    <img src={assets.gemini_icon} alt="" />
                    {loading ?
                    <div className="loader">
                        <hr />
                        <hr />
                        <hr />
                    </div>                      

                        : 
                        <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                        
                     }
                </div>
            </div>
            

        }
        
        <div className='main-bottom'>
            <div className="searchbox">
                <input onChange={(e) =>
                    setInput(e.target.value)
                    
                } value={input} type="text" 
                onKeyDown={(e) => e.key === "Enter" && onSent()} 
                placeholder='enter a promt here..'/>
                <div>
                    <img src={assets.gallery_icon} alt="" />
                    <img src={assets.mic_icon}  alt="" />
                    {input ?<img onClick={()=> onSent()} src={assets.send_icon} alt="" />:null}
                </div>
            </div>
            <p className="bottom-info">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, veniam!
            </p>
        </div>
      </div>
    </div>
  )
}

export default Main
