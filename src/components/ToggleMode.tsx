import React from 'react';
import styled from 'styled-components';

interface  ToggleModeProps {
    toggleHandDark: () => void;
    isDark: boolean
}
const Switch = ({ toggleHandDark, isDark }: ToggleModeProps) => {
  return (
    <StyledWrapper>
      <div className="love">
        <input type="checkbox" id="switch" checked={isDark}        // ← controla o estado visual
          onChange={toggleHandDark} />
        <label className="love-heart" htmlFor="switch">
          <i className="left" />
          <i className="right" />
          <i className="bottom" />
          <div className="round" />
        </label>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .love-heart:before,#switch {
   display: none;
  }

  .love-heart, .love-heart::after {
   border-color: #A489D1;
   border: 1px solid;
   border-top-left-radius: 100px;
   border-top-right-radius: 100px;
   width: 10px;
   height: 8px;
   border-bottom: 0;
  }

  .round {
   position: absolute;
   z-index: 1;
   width: 8px;
   height: 8px;
   background: #A489D1;
   box-shadow: rgb(0 0 0 / 24%) 0px 0px 4px 0px;
   border-radius: 100%;
   left: 0px;
   bottom: -1px;
   transition: all .5s ease;
   animation: check-animation2 .5s forwards;
  }

  input:checked + label .round {
   transform: translate(0px, 0px);
   animation: check-animation .5s forwards;
   background-color: hsl(0deg 0% 100%);
  }

  @keyframes check-animation {
   0% {
    transform: translate(0px, 0px);
   }

   50% {
    transform: translate(0px, 7px);
   }

   100% {
    transform: translate(7px, 7px);
   }
  }

  @keyframes check-animation2 {
   0% {
    transform: translate(7px, 7px);
   }

   50% {
    transform: translate(0px, 7px);
   }

   100% {
    transform: translate(0px, 0px);
   }
  }

  .love-heart {
   box-sizing: border-box;
   position: relative;
   transform: rotate(-45deg) translate(-50%, -33px) scale(1.5);
   display: block;
   border-color: #181222;
   cursor: pointer;
   top: 14px; 
    right: 0px;
    margin-left: 40px;
  }

  input:checked + .love-heart, input:checked + .love-heart::after, input:checked + .love-heart .bottom {
   border-color: #181222;
   box-shadow: inset 6px -5px 0px 2px #A489D1;
   
  }

  .love-heart::after, .love-heart .bottom {
   content: "";
   display: block;
   box-sizing: border-box;
   position: absolute;
   border-color: #181222;

  }

  .love-heart::after {
   right: -9px;
   transform: rotate(90deg);
   top: 7px;
   
  }

  .love-heart .bottom {
   width: 11px;
   height: 11px;
   border-left: 1px solid;
   border-bottom: 1px solid;
   border-color: #181222;
   left: -1px;
   top: 5px;
   border-radius: 0px 0px 0px 5px;
  }`;

export default Switch;
