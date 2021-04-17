import React from 'react'
import munib from '../pics/perfectcell.jpg'


const Team = () => {
    return (
        <div>
            <div className=" flex justify " style={{ color: '#284243', padding: '1%' }} >
                <h1>Meet the TEAM</h1>
            </div>

            <div className='flexwrap justify ' style={{ padding: '1%'}}  >
                <div className='flexwrap justifyaround width60' style={{ backgroundColor: '', maxWidth: '1300px'  }}>

                    <div className='card textalign'  >

                        <div>
                            <img src="" alt='' style={{ width: '8rem', borderRadius: '50%' }} ></img>
                        </div>
                        <hr style={{ width: '14.5rem' }}></hr>
                        <div><h2>Perfect Cell</h2></div>
                        <div style={{ marginTop: '3%'}}>
                            Cupidatat velit enim anim pariatur magna nostrud est excepteur ea aute cillum est. Elit qui et exercitation consequat laborum.
                                                         </div>
                    </div>
                    <div className='card textalign'  >

                        <div>
                            <img src="" alt='' style={{ width: '8rem', borderRadius: '50%' }} ></img>
                        </div>
                        <hr style={{ width: '14.5rem' }}></hr>
                        <div ><h2>Kid Buu</h2></div>
                        <div style={{ marginTop: '3%'}}>
                            Deserunt ipsum tempor aute officia aute cupidatat occaecat cillum id laboris id nostrud. 
                           
</div>
                    </div>
                    <div className='card textalign'  >

                        <div>
                            <img src={munib} alt='' style={{ width: '8rem', minHeight: '11rem', borderRadius: '50%' }} ></img>
                        </div>
                        <hr style={{ width: '14.5rem' }}></hr>
                        <div style={{ marginTop: '3%'}}  ><h2>Munib Khan</h2></div>
                        <div style={{ marginTop: '3%'}}>
                            Full Stack Javascript/React Developer.
</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team
