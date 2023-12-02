import React from 'react'
import * as P from '../../styles/placelist.style'

// import { useDispatch } from 'react-redux';
// import { closeModal, openModal } from '../../store/modalSlice';

// eslint-disable-next-line react/prop-types
function PlaceList({filteredList, setPlaceInput, toggleLocation}) {


  const handleSetPlace = (item) => () =>{
    setPlaceInput(item);
    toggleLocation();
  }

  return (
    <>
    <P.PlaceModalLayout>
        {filteredList.map((item, index) => ( 
         <P.PlaceListBox key={index}> 
             <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_53_292)">
                  <path d="M0 10C0 4.47715 4.47715 0 10 0H25C30.5228 0 35 4.47715 35 10V25C35 30.5228 30.5228 35 25 35H10C4.47715 35 0 30.5228 0 25V10Z" fill="#BFC6FA"/>
                  <path d="M17.5 18C16.4687 18 15.625 17.19 15.625 16.2C15.625 15.21 16.4687 14.4 17.5 14.4C18.5313 14.4 19.375 15.21 19.375 16.2C19.375 17.19 18.5313 18 17.5 18ZM23.125 16.38C23.125 13.113 20.6406 10.8 17.5 10.8C14.3594 10.8 11.875 13.113 11.875 16.38C11.875 18.486 13.7031 21.276 17.5 24.606C21.2969 21.276 23.125 18.486 23.125 16.38ZM17.5 9C21.4375 9 25 11.898 25 16.38C25 19.368 22.4969 22.905 17.5 27C12.5031 22.905 10 19.368 10 16.38C10 11.898 13.5625 9 17.5 9Z" fill="white"/>
                </g>
                <defs>
                  <clipPath id="clip0_53_292">
                  <rect width="35" height="35" fill="white"/>
                  </clipPath>
                </defs>
                </svg> 
                <li 
                  role="presentation"
                  className='placelabel' 
                  onClick={handleSetPlace(item)} 
                  onKeyPress={()=> {}}>{item}</li> 
            </P.PlaceListBox>
          ))}
          
      </P.PlaceModalLayout>
      </>
  )
}


export default PlaceList;