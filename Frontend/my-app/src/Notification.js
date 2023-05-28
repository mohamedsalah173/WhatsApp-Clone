import { useEffect, useState } from 'react'
import socket from './socket';
const Notification = () => {
    const [noti, setNoti] = useState([]);
    const [input, setInput] = useState('');

    const handelSubmit = (e) => {
        e.preventDefault()
        // setNoti(prev => prev.concat(input));
        socket.emit('message',{content:input})
        setInput ('')
    }
    useEffect(()=>{
        socket.on('newMessage',(data)=>{
            setNoti(prev=>prev.concat(data.content))
        })
    },[])
    return (

        <form onSubmit={handelSubmit}>
            <div>
                <label>Notification</label>
                <input value={input} onChange={(e)=>{setInput( e.target.value)}}></input>
            </div>
            
            <div>
                <ul>
                    {noti.map(noti=> <li >{noti}</li>)}
                </ul>
            </div>
        </form>
    )

}

export default Notification