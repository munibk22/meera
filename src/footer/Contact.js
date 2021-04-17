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
        <div className="flex justify " style={{ marginTop: '1%' }}>
            <form className="flexwrap contact-form width20" onSubmit={sendEmail} style={{ width: '100px' }}>

                <div className="">
                    <input type="hidden" name="contact_number" />
                    <label>Name</label>
                </div>
                <div className="">

                    <input type="text" name="user_name" />
                    <label>Email</label>
                </div>
                <div className="">
                    <input type="email" name="user_email" />
                    <label>Message</label>
                </div>
                <div className="">
                    <textarea name="message" />
                    <input type="submit" value="Send" />
                </div>



            </form>
        </div>
    )
}

export default Contact
