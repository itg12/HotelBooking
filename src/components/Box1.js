import React from 'react'

export default function Box1() {
  return (
    <>
        <div style={{marginTop:"120px" , width:"100%", backgroundColor:"rgba(0, 0,0,0.7)", backdropFilter:"blur(2px)"}}>
          <p className='cl_1'>OUR ROOMS</p>
          
          
          <div className='flex_container rounded-0 my-2'>
                <div className='img_container'>
                  <img className="rounded-0" src="https://images.pexels.com/photos/3688261/pexels-photo-3688261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  alt="image" style={{width:"100%", height:"100%"}}/>
                </div>
                <div className='img_container p-3'>
                  <p className="card-title fw-bold cl_2 text-light">CLASSICAL BEDROOM</p>   
                  <p className="card-text fs-4 text-light">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores obcaecati, dignissimos ut natus amet architecto harum quo. Accusamus obcaecati explicabo modi reiciendis sed officiis, facere ut consequuntur maxime et veniam?</p>   

                  <div>
                    <button className='btn btn-lg bg-warning fw-bold rounded-0'>BOOK NOW</button>
                  </div>            
                </div>               
          </div>

          <div className='flex_container rounded-0  my-5'>
                <div className='img_container'>
                  <img className="rounded-0" src="https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  alt="image" style={{width:"100%", height:"100%"}}/>
                </div> 
                <div className='img_container p-2'>
                  <p className="card-title fw-bold cl_2 text-light">CLASSICAL BEDROOM</p>   
                  <p className="card-text fs-4 text-light">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores obcaecati, dignissimos ut natus amet architecto harum quo. Accusamus obcaecati explicabo modi reiciendis sed officiis, facere ut consequuntur maxime et veniam?</p>   

                  <div>
                    <button className='btn btn-lg bg-warning fw-bold rounded-0'>BOOK NOW</button>
                  </div>            
                </div>                    
          </div>

          <div className='flex_container rounded-0  my-5'>
                <div className='img_container'>
                  <img className="rounded-0" src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  alt="image" style={{width:"100%", height:"100%"}}/>
                </div>
                <div className='img_container p-2'>
                  <p className="card-title fw-bold cl_2 text-light">CLASSICAL BEDROOM</p>   
                  <p className="card-text fs-4 text-light">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores obcaecati, dignissimos ut natus amet architecto harum quo. Accusamus obcaecati explicabo modi reiciendis sed officiis, facere ut consequuntur maxime et veniam?</p>   

                  <div>
                    <button className='btn btn-lg bg-warning fw-bold rounded-0'>BOOK NOW</button>
                  </div>            
                </div>               
          </div>
 
          <div>
              <center><button className='btn btn-lg bg-info fw-bold rounded-0 my-2'>Explore More</button></center>
          </div> 
      </div>
    </>
  )
}
