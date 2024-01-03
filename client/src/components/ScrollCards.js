import React from 'react'

export default function ScrollCards() {
  return (
    <>
         {/* ****************SCROLL CARDS **************************** */}

         <p className="div2-topProducts desc1" style={{marginTop: "20px"}}>TOP DISHES</p>


        <div class="scroll-card2">
            <div class="scroll-card2-child">
                <img class="scroll-card2-img" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/seqow1xpsqqmheeipuso" alt="img"/>
            </div>
            <div class="scroll-card2-child">
                <img class="scroll-card2-img" src="https://vistapointe.net/images/chinese-food-4.jpg" alt="img"/>
            </div>
            <div class="scroll-card2-child">
                <img class="scroll-card2-img" src="https://www.thespruceeats.com/thmb/UMT0Jx65qwNd0wxGdPk8nED3FBo=/2000x1500/filters:fill(auto,1)/GettyImages-1042998066-518ca1d7f2804eb09039e9e42e91667c.jpg" alt="img"/>
            </div>
            <div class="scroll-card2-child">
                <img class="scroll-card2-img" src="https://just-eat-prod-sg-res.cloudinary.com/image/upload/c_fill,d_au:cuisines:indian-1.jpg,w_500/v1/au/restaurants/1338111.jpg" alt="img"/>
            </div>
            <div class="scroll-card2-child">
                <img class="scroll-card2-img" src="https://www.melissahartfiel.com/wp-content/uploads/2013/04/20130426-1304_untitled0051.jpg" alt="img"/>
            </div>
        </div>
    </>
  )
}
