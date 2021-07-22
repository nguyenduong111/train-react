import React, { useState } from "react";
import { Redirect } from "react-router-dom";

var keyLocal = "user";

function Login(props) {
    let [stateOfValueForm, setStateOfValueForm] = useState({
        txtUsername: "",
        txtPassword: "",
    });

    let [isAccept, setAccept] = useState(false);

    let { txtUsername, txtPassword } = stateOfValueForm;

    const onChange = (e) => {
        let target = e.target;
        let name = target.name;
        let value = target.type === "checkbox" ? target.checked : target.value;

        setStateOfValueForm({
            ...stateOfValueForm,
            [name]: value,
        });
    };

    const onLogin = (e) => {
        // e.preventDefault();
        localStorage.setItem(
            keyLocal,
            JSON.stringify({
                userName: "nguyenduong",
                passWord: "123456",
            })
        );

        let { txtUsername, txtPassword } = stateOfValueForm;
        let loggedInUser = localStorage.getItem(keyLocal);
        let LogUser = JSON.parse(loggedInUser);
        
        // console.log(typeof(txtUsername), "-",typeof(txtPassword) );
        // console.log(typeof(LogUser.userName), "-",typeof(LogUser.passWord));
        if (
            txtUsername === LogUser.userName &&
            txtPassword === LogUser.passWord
        ) {
            setAccept(true);
        } else {
            alert("tài khoản hoặc mật khẩu sai, nhập lại !!!");
        }
    };

    let {location} = props;
    // console.log(location);

    if (isAccept) {
        let { txtUsername, txtPassword } = stateOfValueForm;
        localStorage.setItem(
            keyLocal,
            JSON.stringify({
                userName: txtUsername,
            })
        );


        return <Redirect to={{
            pathname: "/products",
            state: {
                from: location,
                keyLocal: keyLocal
            }
        }} />
    }

    return (
        <div className="Login">
            <div className="row">
                <div className="col-xs-6 col-md-6 col-lg-6 col-sm-6 ">
                    <form
                        onSubmit={onLogin}
                        style={
                            ({ border: "1px solid #999", margin: "10px"})
                        }
                    >
                        <div className="title">
                            <h2>Đăng nhập</h2>
                            <hr />
                        </div>
                        <div className="mb-3" style={{ textAlign: "left" }}>
                            <label className="form-label">Username</label>
                            <input
                                type="text"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                name="txtUsername"
                                onChange={onChange}
                                value={txtUsername}
                            />
                        </div>
                        <div className="mb-3" style={{ textAlign: "left" }}>
                            <label className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="exampleInputPassword1"
                                name="txtPassword"
                                onChange={onChange}
                                value={txtPassword}
                            />
                        </div>
                        <button
                            type="submit"
                            className="btn btn-primary"
                            style={{ marginBottom: "3px" }}
                        >
                            đăng nhập
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
