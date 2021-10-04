import React from 'react'
import emailjs from 'emailjs-com';


const Contact = () => {


    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_ey4ab2x', 'template_3de1jw9', e.target, 'user_wv3K1hQDxcdMl9VBIJNVm')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();

    }


    return (
        <div className=" padding2 " style={{ marginTop: '1%' }}>
            <div className="textalign">
                <h2>Send Us A Message:</h2>
            </div>
            <br></br>
            <div className="flex justify">

                <form className="flex contact-form" onSubmit={sendEmail} style={{ width: '' }}>

                    <div className="margin2" style={{ width: "150px" }} >


                        <div className="">
                            <label htmlFor="user_name">Full Name</label>
                            <input type="text" name="user_name" id="user_name" />
                        </div>
                        <div className="margintop10">
                            <label htmlFor="email">Email</label>
                            <input id="email" type="email" name="user_email" />
                        </div>
                        <div className="margintop10">
                            <label htmlFor="number">Phone Number</label>
                            <input type="text" id="number" name="contact_number" />
                        </div>

                    </div>
                    <div className="message margin2 ">

                        <div className="">
                            <label htmlFor="">Message</label>
                        </div>

                        <div className="">
                            <textarea id="message" name="message"
                                style={{ width: "280px", height: "130px", borderRadius: '' }} />
                            <div className="">
                                <input type="submit" value="Send" style={{ display: "block", width: "100%", borderRadius: '10px', padding: '2%' }} />
                            </div>
                        </div>


                    </div>
                    {/* <input type="submit" value="Send" style={{ display: "block", width: "100%" }} /> */}


                </form>

            </div>
        </div>
    )
}

export default Contact
