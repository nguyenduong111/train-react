import React, {useState} from "react";
import {Prompt} from "react-router-dom";

function Contact() {
    let [check, setCheck] = useState(true);

    const Get = () => {
        setCheck(false);
    }

    const noGet = () => {
        setCheck(true);
    }

    return <div className="Contact">
        <h1>Đây là liên kết</h1>
        <button type="button" class="btn btn-info" onClick={Get}>Cho phep chuyen trang</button>
        <button type="button" class="btn btn-danger" onClick={noGet} >Xac nhan chuyen trang</button>
        <Prompt 
            when={check}
            message={location => (`Bạn chắc chắn muốn chuyển sang ${location.pathname} `)}
        />
    </div>;
}

export default Contact;
