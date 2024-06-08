import React from 'react'
import { useTranslation } from 'react-i18next';

function ButonLink({marka}) {
  const { t } = useTranslation();
  return (
    <>
    
           <div className="CarsItem__button--click">
                            <a href='tel:+994509990103' className="clickLeft">
                                <strong>
                                    <i className='fa fa-phone'></i>
                                    {t('zeng')}
                                </strong>
                            </a>
                            <a href={`https://api.whatsapp.com/send?phone=994509990103&text= Salam Avto 103! Sizə "${marka}" ilə əlaqədar müraciət edirəm.`} target='_blank' className="clickRight">
                               <strong>
                               <i className='fa fa-whatsapp'></i>
                                Whatsapp
                               </strong>
                            </a>
                        </div>
    </>
  )
}

export default ButonLink