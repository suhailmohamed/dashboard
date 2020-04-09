import styled from 'styled-components';
import { xs, sm, md } from '../../styled-components/device';
import { PlusIconWrapper } from '../../common-components/PlusIcon';

export const CollapsibleContainer = styled.div`
  display: inline-block;
  width: 100%;
  border: 1px solid rgba(125,125,125,0.5);
  background-color: #FFFFFF;
  border-radius: 4px;
  box-shadow: 0px 0px 16px rgba(0,0,0,0.1);
  margin: 40px 0 16px;

  ${sm} {
    width: 80%;
    margin: 40px 40px 16px;
  }
  ${md} {
    width: 70%;
  }

  .Collapsible {
    padding: 12px 16px;
    min-height: 68px;

    &:not(:last-child){
      border-bottom: 1px solid rgba(125,125,125,0.5);
    }

    .header {
      position: relative;
      display: flex;
      align-items: center;

      ${xs} {
        flex-wrap: wrap;
      }

      .left-col {
        width: 100%;
        ${sm} {
          width: 40%;
        }
  
        p {
          font-size: 15px;
          line-height: 1.2;
          letter-spacing: -0.3px;
          font-weight: 500;
          margin-bottom: 0;

          ${sm}{
            font-size: 18px;
            line-height: 1.33;
            letter-spacing: -0.29px;
          }
        }
      }
      
      .right-col {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        ${xs}{
          margin-top: 12px;
        }
        ${sm} {
          width: 60%;
        }
  
        .btn {
          font-weight: 500;
          border-color: rgba(125,125,125,0.5);
          padding: 8px 16px;

          ${xs}{
            font-size: 15px;
            letter-spacing: -0.3px;
            padding: 8px 12px;
          }

          &:not(:last-child){
            margin-right: 10px;
            ${md}{
              margin-right: 16px;
            }
          }

          &.expand {
            ${sm}{
              min-width: 96px;
            }
              
            
            &:after {
              content: "Expand";
            }
          }
        }

        .group-btn-action {
          opacity: 0;
          visibility: hidden;
          padding-right: 10px;
          transition: opacity .5s ease-in-out;
          width: 100%;
          display: flex;
          justify-content: flex-end;

          ${md}{
            padding-right: 16px;
          }
          
          .file-icon, .delete-icon {
            &:after {
              content: "";
              width: 13px;
              height: 13px; 
              display: inline-block;
              vertical-align: middle;

              ${sm}{
                width: 16px;
                height: 16px; 
              }
            }
          }
  
          .file-icon {
            &:after {
              background: url("./image/file.svg") no-repeat center / contain;
            }
          }
          .delete-icon {  
            &:after {
              background: url("./image/delete.svg") no-repeat center / contain;
            }

            &:hover {
              background-color: rgb(241, 95, 117);
              border-color: rgb(241, 95, 117);
              &:after {
                filter: invert(1);
              }
            }
          }
        }
      }
    }

    .is-open {
      .header .right-col {
        .group-btn-action {
          opacity: 1;
          visibility: visible;
        }

        .btn.expand:after {
          content: "Collapse";
        }
      }
    }

    .Collapsible__contentOuter {
      .Collapsible__contentInner {
        display: flex;
        flex-wrap: wrap;
        margin-top: 32px;

        .image-card {
          width: 218px;
          height: 218px;
          background-color: #f3f3f3;
          margin: 0 16px 16px 0;
          display: flex;
          flex-wrap: wrap;
          flex-direction: column;
          justify-content: center;
          border: 1px solid rgba(125,125,125,0.5);
          border-radius: 3px;
          transition: all 0.5s ease;
          cursor: pointer;

          ${md}{
            width: 278px;
            height: 278px;
          }

          &:hover {
            box-shadow: 0 0 15px rgba(0, 0, 0, 0.12);
            transform: translateY(-2px);
          }

          figure {
            height: 178px;
            width: 100%;
            margin-bottom: 0;
            ${md}{
              height: 238px;
            }
          }

          .btn-action {
            display: flex;
            align-items: center;
            justify-content: space-between;

            span {
              flex: 1;
              font-weight: 500;
              text-align: center;
              padding: 8px;
              border: solid rgba(125,125,125,0.5);
              border-width: 1px 1px 0 0;
              height: 38px;
              cursor: pointer;

              &:last-child {
                border-right-width: 0;
              }

              &:hover {
                background-color: #4A90E2;
                color: #FFFFFF;
                border-color: #4A90E2;
                margin-left: -1px;

                &:first-child {
                  border-bottom-left-radius: 2px;
                  margin-left: 0px;
                }

                &:last-child {
                  border-bottom-right-radius: 2px;

                }

                img {
                  filter: invert(1);
                }
              }
            }
          }

          ${PlusIconWrapper} {
            width: auto;
            margin: 0;

            span {
              width: 40px;
              height: 40px;
              font-size: 24px;
              background-color: #aaaaaa;
              color: #f1f1f1;
            }
          }
        }
      }
    }
  }
`;