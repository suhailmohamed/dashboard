import React, { Fragment, useState, useEffect } from 'react';
import SimpleAccordian from './SimpleAccordian';
import { CollapsibleContainer } from './CollapsibleCardStyles';
import PlusIcon from '../../common-components/PlusIcon';
import DeleteModal from './DeleteModal';

const API_URL = "https://www.mocky.io/v2/5e8a7b512d00003c1a1a4665";

const CollapsibleCard = () => {
  const [isModalOpen, setModalOpenState] = useState(false);
  const [getAccordianData, setAccordianData] = useState({});

  const closeModal = () => {
    setModalOpenState(false);
    document.body.classList.remove("scroll-locked");
  };

  const cardClickAction = (e, slug) => {
    e && e.preventDefault();
    e && e.stopPropagation();
    window.location.href = slug;
  };

  const deleteButton = (e) => {
    e && e.preventDefault();
    e && e.stopPropagation();
    setModalOpenState(true);
    document.body.classList.add("scroll-locked");
  }

  const clickStopPropagation = (e) => {
    e && e.stopPropagation();
  }

  
  useEffect(() => {
    if (Object.keys(getAccordianData).length > 0) {
      return;
    } else {
      fetch(API_URL)
      .then(response => response.json())
      .then(resData => {
        const dataValue = resData;
        setAccordianData(dataValue);
      })
      .catch(error => {
        return error;
      });
    }
  }, []);

  console.log(getAccordianData["homepage_data"]);

  let components = getAccordianData["homepage_data"] && getAccordianData["homepage_data"].map(data => {
    return {
      header: (
        <div className="header">
          <div className="left-col" onClick={e => clickStopPropagation(e)}>
            <p>{data.title}</p>
          </div>
          <div className="right-col">
            <div className="group-btn-action" onClick={e => clickStopPropagation(e)}>
              <button className="btn file-icon" onClick={() => alert("Click File Icon")} />
              <button className="btn delete-icon" onClick={e => deleteButton(e)} />
              <button className="btn" onClick={() => alert("Click Hide")}>Hide</button>
            </div>
            <button className="btn expand" />
          </div>
        </div>
      ),
      content: (
        <Fragment>
          {data.data.map((item, index) => {
            return (
              <div
                className="image-card"
                key={index}
                onClick={e => cardClickAction(e, item.href_url)}
              >
                <figure
                  style={{
                    background: `url(${item.image_url}) no-repeat center / cover`
                  }}
                />

                <div className="btn-action">
                  <span onClick={() => alert("Click Update")}>Update</span>
                  <span onClick={() => alert("Click Edit")}>Edit</span>
                  <span onClick={() => alert("Click Delete")}><img src="./image/delete.svg" alt="delete" /></span>
                </div>
              </div>
            );
          })}

          <div className="image-card" onClick={() => alert("Click Add Card")}>
            <PlusIcon />
          </div>
        </Fragment>
      )
    };
  });

  return (
    <Fragment>
      <CollapsibleContainer>
        <SimpleAccordian components={components} />
      </CollapsibleContainer>
      <DeleteModal isOpen={isModalOpen} closeModal={closeModal} />
    </Fragment>
  );
};

export default CollapsibleCard;
