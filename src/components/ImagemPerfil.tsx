import React from 'react';
import styled from 'styled-components';

const Card = () => {
  return (
    <StyledWrapper className=''>
      <div className="card1">
         <img src="/fotoPerfilRoun.svg" alt="Foto de Manuella" className=""/> 
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card1 {

    width: 250px;
    height: 350px;
   
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;,
    border-radius: 50%;
  
  }

  .card1::before {
    content: "";
    position: absolute;
    z-index: -19;
    width: 262px;
    height: 365px;
    padding: 10px;

    background: rgb(4,0,255);
    background: rgba(136,0,255,1);
    border-radius: 6px;
    border-radius: 44%;
  }

  .card1::after {
    content: "";
    position: absolute;
    z-index: -19;
    width: 262px;
    height: 360px;
    margin: auto;
    background: rgb(4,0,255);
    background: rgba(136,0,255,1);
    border-radius: 6px;
    filter: blur(40px);
    transition: 2s;
    border-radius: 40%;
  }

 
  
  }`;

export default Card;
