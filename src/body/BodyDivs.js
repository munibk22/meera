import React from 'react'
import Banner from '../head/Banner'
import Invest from '../pics/invest.jpg'
import Phone from '../pics/phone.png'
import Time from '../pics/time.jpg'
import Header2 from './Header2'


export default function BodyDivs() {
    return (
        <div >

            <div className="" style={{ top: '0px' }}>
                <Banner />
            </div>


            <div className=" flexwrap justify margintop">
                <Header2 />
            </div>
            <div className="relative flexwrap container margintop15 justifybetween alignitems" style={{ maxWidth: "" }}>

                <fieldset className="p1 ">
                    <legend><h2 style={{ color: "#cfa900" }}>Now Is The Time To Invest </h2></legend>
                    <div className="">
                        <br></br>
                        <h4 style={{ color: '005d31 ' }}>Warren Buffet Philosophy</h4>
                    </div>
                    <br />
                    <div className="" style={{ width: "75%" }}>


                        <p className="" >
                            Here is something about the Oracle of Omaha! I bet he is buying like crazy and we will find out in a few months.
                    </p>
                        <br></br><div className="">
                            Buffet says to "Be fearful when others are greedy and to be greedy only when others are fearful." He also once stated, "Opportunities come infrequently.
                            When it rains gold, put out the bucket, not the thimble."
                        </div>
                        <br></br><div className="">

                        </div>

                    </div>
                </fieldset>

                <div className="flex absolute img1div  ">
                    <img alt='' src={Time} className="img2"
                        style={{ maxWidth: "35vw" }}
                    />

                </div>
                <div className="" style={{ width: '10rem' }}>

                </div>

                <div className=" rightcard">
                    <p className="padding2" style={{ width: "" }}>
                        Hire Z&J Invesments and LETS' TALK MONEY!  </p>

                    <p className="padding2">
                        There are certainly a lot of investors who are very fearful right now. However, the Oracle of Omaha undoubtly
                        sees the current coronavirus-caused market meltdown as one of those rare oppurtunities where it's raining
                        gold.
                        </p >
                    <p className="padding2"> We will research the best investment for you and your family. </p>

                </div>
            </div>


            {/* <div className="relative flexwrap p2 margintop  justifybetween alignitems">
                <div className="flex rightcard">
                    Aliqua occaecat dolor incididunt ut magna id eiu
                </div>
                <div className="" style={{ width: '15rem' }}>

                </div>
                <fieldset className="p1">
                    <legend><h2 style={{ color: "#cfa900" }}>Sample Text </h2></legend>
                
                    <div className=" flex justifyend">
                        <h4 style={{ color: '#284336' }}>Time To Invest</h4>
                    </div>
                    <br />
                    <div className=" flex justifyend">


                        <p className="" style={{ width: "70%", textAlign: 'end', color: '#432928' }}>
                            Aliqua occaecat dolor incididunt ut magna id eiusmod sit consequat nisi. Adipisicing cupidatat ad dolore consectetur aliqua velit aute. Nulla cillum qui dolore sunt enim quis ut tempor ut non exercitation laborum fugiat nulla. In magna labore enim sunt enim. Mollit exercitation commodo laborum aliqua cillum incididunt. Amet amet Lorem dolor mollit anim esse fugiat incididunt officia eiusmod tempor est sit. Cillum tempor fugiat pariatur enim excepteur Lorem ipsum eiusmod ipsum deserunt amet.

    </p>

                    </div>
                </fieldset>

                <div className="flex absolute img2div ">
                    <img alt='' src={Invest} className="img1" />

                </div>
            </div> */}

            <div className="relative  flexwrap p2 margintop  justifybetween alignitems">

                <fieldset className="p1" style={{ maxWidth: "" }}>
                    <legend><h2 style={{ color: "#cfa900" }}>Sample Text </h2> </legend>
                    <div className="">
                        <h4>Inner Headline</h4>
                    </div>
                    <br />
                    <p className="" style={{ width: "70%" }}>
                        Aliqua occaecat dolor incididunt ut magna id eiusmod sit consequat nisi. Adipisicing cupidatat ad dolore
                        consectetur aliqua velit aute. Nulla cillum qui dolore sunt enim quis ut tempor ut non exercitation laborum.
                        Cillum tempor fugiat pariatur enim excepteur Lorem ipsum eiusmod ipsum deserunt amet.
                            </p>
                </fieldset>

                <div className="flex absolute img3div ">
                    <img alt='' src={Phone} className="img3"
                        style={{ maxWidth: "35vw" }}
                    />
                </div>
                <div className="" style={{ width: '13rem' }}>

                </div>
                <div className="flex rightcard">
                    Aliqua occaecat dolor incididunt ut magna id eiu
                </div>
            </div>
        </div >
    )
}
