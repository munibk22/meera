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
                    <legend><h2 style={{ color: "#cfa900" }}>Sample Text </h2></legend>
                    <div className="">
                        <h4 style={{ color: '005d31 ' }}>Inner Headline</h4>
                    </div>
                    <br />
                    <p className="" style={{ width: "70%" }}>
                        Aliqua occaecat dolor incididunt ut magna id eiusmod sit consequat nisi. Adipisicing cupidatat ad dolore consectetur aliqua velit aute. Nulla cillum qui dolore sunt enim quis ut tempor ut non exercitation laborum fugiat nulla. In magna labore enim sunt enim. Mollit exercitation commodo laborum aliqua cillum incididunt. Amet amet Lorem dolor mollit anim esse fugiat incididunt officia eiusmod tempor est sit. Cillum tempor fugiat pariatur enim excepteur Lorem ipsum eiusmod ipsum deserunt amet.
                            </p>

                </fieldset>

                <div className="flex absolute img1div  ">
                    <img alt='' src={Invest} className="img1"
                        style={{ maxWidth: "35vw" }}
                    />

                </div>
                <div className="" style={{ width: '15rem' }}>

                </div>

                <div className="flex rightcard">
                    Aliqua occaecat dolor incididunt ut magna id eiu
                </div>
            </div>


            <div className="relative flexwrap p2 margintop  justifybetween alignitems">
                <div className="flex rightcard">
                    Aliqua occaecat dolor incididunt ut magna id eiu
                </div>
                <div className="" style={{ width: '15rem' }}>

                </div>
                <fieldset className="p1">
                    <legend><h2 style={{ color: "#cfa900" }}>Sample Text </h2></legend>
                    {/* #432928 */}
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
                    <img alt='' src={Time} className="img2" />

                </div>
            </div>

            <div className="relative  flexwrap p2 margintop  justifybetween alignitems">

                <fieldset className="p1" style={{ maxWidth: "" }}>
                    <legend><h2 style={{ color: "#cfa900" }}>Sample Text </h2> </legend>
                    <div className="">
                        <h4>Inner Headline</h4>
                    </div>
                    <br />
                    <p className="" style={{ width: "70%" }}>
                        Aliqua occaecat dolor incididunt ut magna id eiusmod sit consequat nisi. Adipisicing cupidatat ad dolore consectetur aliqua velit aute. Nulla cillum qui dolore sunt enim quis ut tempor ut non exercitation laborum fugiat nulla. In magna labore enim sunt enim. Mollit exercitation commodo laborum aliqua cillum incididunt. Amet amet Lorem dolor mollit anim esse fugiat incididunt officia eiusmod tempor est sit. Cillum tempor fugiat pariatur enim excepteur Lorem ipsum eiusmod ipsum deserunt amet.
                            </p>
                </fieldset>

                <div className="flex absolute img3div ">
                    <img alt='' src={Phone} className="img3"
                        style={{ maxWidth: "35vw" }}
                    />
                </div>
                <div className="" style={{ width: '15rem' }}>

                </div>
                <div className="flex rightcard">
                    Aliqua occaecat dolor incididunt ut magna id eiu
                </div>
            </div>
        </div >
    )
}
