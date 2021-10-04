import React from 'react';
import axios from 'axios';

export const HeadNav = () => {

    async function handleLogin(e) {
        e.preventDefault();
        console.log("Login");
        const url = "http://18.117.255.214:8082/users/"
        const response = await axios.get(url + "hello");

        if (response.status === 200) {
            console.log("User successfully loggin in");
        } else {
            console.log("User cound not log in ");
        }
    }


    return (
        <div className="flex justifyend " style={{ marginRight: "", marginTop: '10%' }}>
            <div className=" flex justifyend alignitems"
                style={{ marginRight: "", }}  >
                <a href="/"
                    className="btn btn-link btn-sm flex  alignitems"
                    style={{ fontSize: ".8rem", padding: "", marginRight: "" }}
                    onClick={handleLogin}
                >


                    <img type="button" src="
https://cdn3.iconfinder.com/data/icons/UltimateGnome/256x256/actions/gnome-session-logout.png

" alt=""
                        style={{ width: "26px", height: '25px', marginBottom: "3px", padding: "" }}>

                    </img>

                    <div className="" style={{ color: "whitesmoke", marginLeft: "5px" }}>
                        User Login
                    </div>
                </a >
            </div>

        </div>
    )
}
