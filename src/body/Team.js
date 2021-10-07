import React from 'react'
import munib from '../pics/perfectcell.jpg'
import Mj from "../pics/mj.png"


const Team = () => {
    return (
        <div>
            <div className=" flex justify " style={{ color: '#284243', padding: '1%' }} >
                <h1>Meet the TEAM</h1>
            </div>

            <div className='flexwrap justify ' style={{ padding: '1%' }}  >
                <div className='flexwrap justifyaround width60' style={{ backgroundColor: '', maxWidth: '1300px' }}>

                    {/* <div className='card textalign'  >

                        <div>
                            <img src="" alt='' style={{ width: '8rem', borderRadius: '50%' }} ></img>
                        </div>
                        <hr style={{ width: '14.5rem' }}></hr>
                        <div><h2>Perfect Cell</h2></div>
                        <div style={{ marginTop: '3%'}}>
                            Cupidatat velit enim anim pariatur magna nostrud est excepteur ea aute cillum est. Elit qui et exercitation consequat laborum.
                                                         </div>
                    </div> */}

                    <div className='card '  >

                        <div className=' textalign'>
                            <img src={Mj} alt='' style={{ width: '8rem', height: "9rem", borderRadius: '50%', padding: '3%' }}
                            ></img>
                        </div>
                        <hr style={{ width: '14.5rem' }}></hr>
                        <div ><h2 className=' textalign' >MJ</h2></div>
                        <div style={{ marginTop: '3%', fontSize: '.9rem', padding: '5%' }} className="">
                            I'm a Entrepreneur who's here to help as many people throughout investing.
                            To Learn and achieve their financial goals to enhance their life in a positive way.

                        </div>
                        <div className="textalign" style={{ padding: '1%' }}>
                            z.jinvestments08@gmail.com
                        </div>
                        <div className="textalign">
                            <a href="tel:6368754054" class="tel">Call 636-875-4054 </a>
                        </div>

                    </div>
                    <div className='card textalign'  >

                        <div>
                            <img src={munib} alt='' style={{ width: '8rem', minHeight: '11rem', borderRadius: '50%' }} ></img>
                        </div>
                        <hr style={{ width: '14.5rem' }}></hr>
                        <div style={{ marginTop: '3%' }}  ><h2>Munib Khan</h2></div>
                        <div style={{ marginTop: '3%' }}>
                            Full Stack Java/React Developer.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team
