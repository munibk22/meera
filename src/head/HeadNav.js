import React from 'react'

export const HeadNav = () => {
    return (
        <div className=" flex justifyend alignitems " style={{ marginRight: "3%", marginTop: '1.3%' }}>
            <span
                className=" "
                style={{ marginLeft: "" }}  >
                <a href="/" className="btn btn-link btn-sm flex  alignitems" style={{ fontSize: ".8rem", padding: "", marginRight: "5px" }}  >


                    <img type="button" src="
https://cdn3.iconfinder.com/data/icons/UltimateGnome/256x256/actions/gnome-session-logout.png

" alt=""
                        style={{ width: "26px", height: '25px', marginBottom: "3px", padding: "" }}>

                    </img>


                   User Login </a >
            </span>
        </div>
    )
}
