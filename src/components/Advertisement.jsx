import React from 'react'
import advertisement from '../assets/images/advertisement.png';
import styled from 'styled-components'
const AdvertisementContainer=styled.div`
img{
    width: 136rem;
    height: 32rem;
}   
    position: absolute;
    top: 237.5rem;
    left: 50%; 
    transform: translateX(-50%); 
`
const Advertisement = () => {
  return (
    <AdvertisementContainer>
        <img src={advertisement} alt="Advertisement"/>
    </AdvertisementContainer> 
  )
}

export default Advertisement