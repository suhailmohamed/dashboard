import React from 'react';
import styled from 'styled-components';

export const PlusIconWrapper = styled.div`
  display: block;

  span {
    width: 24px;
    height: 24px;
    border: 1px solid rgba(125,125,125,0.5);
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 17px;
    font-weight: 500;
    margin: 0 auto;
    cursor: pointer;
    transition: all 0.5s ease;

    &:hover {
      box-shadow: 0 0 15px rgba(0, 0, 0, 0.12);
      transform: translateY(-2px);
    }
  }
`;

const PlusIcon = () => {
  return (
    <PlusIconWrapper className="plus-icon" onClick={() => alert("Click Add More")}>
      <span>+</span>
    </PlusIconWrapper>
  );
};

export default PlusIcon;
