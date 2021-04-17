import React from 'react'

export default function Social() {
    return (
        <div className=" flex justify " style={{ width: "100vw" }}>
            <script src="https://kit.fontawesome.com/494ce4ee7f.js" crossorigin="anonymous"></script>

            <div className="flex width30 justifyaround ">
                <div className="socialbackground justify alignitems " >
                    <a href="/" style={{ width: "3rem" }} className=" "> <i class="fab fa-facebook-square    social"></i>

                    </a>

                </div>

                <a href="/" > <i class="fab fa-twitter-square social"></i></a>
                <a href="/" ><i class="fab fa-instagram social"></i></a>
                <a href="/" > <i class="fas fa-envelope social">  </i> </a>


            </div>

        </div>
    )
}
