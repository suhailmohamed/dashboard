import React, { Fragment } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { theme } from "../../styled-components/theme";
import { sm } from '../../styled-components/device';

const Backdrop = styled.div`
  position: fixed;
  left: 0px;
  top: 0;
  width: 0px;
  opacity: 0;
  height: 100vh;
  z-index: ${theme.zIndex10};
  background-color: rgba(69, 69, 69, 0.5);
  transition: opacity 0.3s ease 0s;

  ${props => props.open && css`
    width: 100%;
    opacity: 1;
  `};
`;

const DeleteModalWrapper = styled.div`
  position: fixed;
  width: 320px;
  height: 320px;
  background-color: #FFFFFF;
  z-index: 10;
  -webkit-transition: all 0.3s ease-out 0s;
  transition: all 0.3s ease-out 0s;
  top: -100%;
  left: 50%;
  margin-top: -156px;
  margin-left: -156px;
  border-radius: 4px;
  box-shadow: 0px 0px 16px rgba(0,0,0,0.1);
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  ${props => props.open && css`
    top: 30%;
  `}

  p {
    font-size: 15px;
    line-height: 1.2;
    letter-spacing: -0.3px;
    margin-bottom: 16px;

    span {
      display: block;
      font-size: 16px;
      line-height: 1.125;
      letter-spacing: -0.26px;
      font-weight: 500;
      margin-bottom: 8px;

      ${sm} {
        font-size: 18px;
        line-height: 1.33;
        letter-spacing: -0.29px;
      }
    }
  }

  .btn-wrapper {
    .btn {
      padding: 8px 16px;

      &:not(:last-child){
        margin-right: 12px;
      }

      &.yes {
        background-color: #f44336;
        border-color: #f44336;
        color: #FFFFFF;
      }
    }
  }
`;

const DeleteModal = ({
  isOpen = false,
  closeModal
}) => {
  return (
    <Fragment>
      <Backdrop open={isOpen} />

      <DeleteModalWrapper open={isOpen}>
        <p>
          <span>Are you sure?</span>
          You App data will be delete this widge. Are you sure want to change it?
        </p>
        <div className="btn-wrapper">
          <button className="btn yes" onClick={() => alert("Yes, delete it!")}>Yes, delete it!</button>
          <button className="btn btn-primary" onClick={closeModal}>Cancel</button>
        </div>
      </DeleteModalWrapper>
    </Fragment>
  );
};

DeleteModal.propTypes = {
  isOpen: PropTypes.bool,
  closeModal: PropTypes.func
};

export default DeleteModal;
