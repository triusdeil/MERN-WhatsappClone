import React from 'react'
import '../styles/Chat.css'
import {Avatar, IconButton} from "@material-ui/core"
import {AttachFile,MoreVert,SearchOutlined} from "@material-ui/icons"
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon"
import MicIcon from '@material-ui/icons/Mic'
export default function Chat() {
    return (
        <div className='chat'>
            <div className="chat__header">
                <Avatar/>
                <div className="chat__headerInfo">
                    <h3>Just Chating</h3>
                    <p>last seen at ...</p>
                </div>
                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined/>
                    </IconButton>
                    <IconButton>
                        <AttachFile/>
                    </IconButton>
                    <IconButton>
                        <MoreVert/>
                    </IconButton>
                </div>
            </div>
            <div className="chat__body">
                <p className="chat__message">
                    <span className="chat__name">Triusdeil</span>
                    This is a message
                    <span className="chat__timestamp">{new Date().toUTCString()}</span>
                </p>

                <p className="chat__message chat__reciever">
                    <span className="chat__name">Triusdeil</span>
                    This is a message
                    <span className="chat__timestamp">{new Date().toUTCString()}</span>
                </p>

                 <p className="chat__message">
                    <span className="chat__name">Triusdeil</span>
                    This is a message
                    <span className="chat__timestamp">{new Date().toUTCString()}</span>
                </p>
            </div>

            <div className="chat__footer">
                <IconButton>
                <InsertEmoticonIcon/>
                </IconButton>
                <form>
                   <input type="text" placeholder="Type a message"/>
                    <button type="Submit">
                        Send a message
                    </button>
                </form>
                <IconButton>
                    <MicIcon/>
                </IconButton>
            </div>

        </div>
    )
}
