import React from 'react'

function Links() {
  return (
    <>
       <div id="Links">
        <div className="Links">
               <div className="Links__container">
            <div className="Links__container--item Links__container--whatsap">
                <a href="https://wa.me/994509990103" target='_blank'>
                    <i className='fa fa-whatsapp'></i>
                </a>
            </div>
            <div className="Links__container--item Links__container--phone">
                <a href="tel:+994509990103">
                    <i className='fa fa-phone'></i>
                </a>
            </div>
            <div className="Links__container--item Links__container--tiktok">
                <a href="https://www.tiktok.com/@avto103rentacar" target='_blank'>
                <i className="fa-brands fa-tiktok"></i>
                </a>
            </div>
            <div className="Links__container--item Links__container--instagram">
                <a href="https://www.instagram.com/rentacar_avto103/" target='_blank'>
                    <i className='fa-brands fa-instagram'></i>
                </a>
            </div>
            <div className="Links__container--item Links__container--facebook">
                <a href="https://www.facebook.com/profile.php?id=61560227264392" target='_blank'>
                    <i className='fa-brands fa-facebook-f'></i>
                </a>
            </div>

        </div>
        </div>
     
       </div>
    </>
  )
}

export default Links