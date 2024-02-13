import React, { useState } from "react";
import data from "./data";
import "./style.css";

function Accordion() {
  const [selected, setselected] = useState(null);
  const [selectMulti, setselectMulti] = useState([]);
  const [enable, setEnable] = useState(false);

  // when only one item is showing at a time
  function handleSingleAccordion(getCurrentId) {
    setselected(getCurrentId);
    selected === getCurrentId ? setselected(null) : setselected(getCurrentId);
  }

  // for multiple accordian showing at a time
  function handleMultipleAccordions(getCurrentId) {
    let cpyList = [...selectMulti];
    let findIndexOfCurrent = cpyList.indexOf(getCurrentId);
    findIndexOfCurrent === -1
      ? cpyList.push(getCurrentId)
      : cpyList.splice(findIndexOfCurrent, 1);

    setselectMulti(cpyList);
  }

  return (
    <div className="wrapper">
      <div className="Accordion">
        <button
          onClick={() => {
            setEnable(!enable);
          }}
          className="enable"
        >
          {enable === false ? `Enable Multi Select` : `Disable Multi Select`}
        </button>
        {data && data.length > 0 ? (
          data.map((item) => (
            // for showing single accoridian at a time

            // <div className='item'>
            //     <div key={item.id} onClick={()=>handleSingleAccordion(item.id)} className='title'>
            //         <h2>{item.question}</h2>
            //         {
            //             selected === item.id ? <span>-</span> : <span>+</span>
            //         }

            //     </div>
            //     {
            //         selected === item.id ?
            //         <div className='answer'>
            //             <h3>{item.answer}</h3>
            //         </div>
            //         : null
            //     }
            // </div>

            <div className="item">
              <div
                key={item.id}
                onClick={
                  enable
                    ? () => handleMultipleAccordions(item.id)
                    : () => handleSingleAccordion(item.id)
                }
                className="title"
              >
                <h2>{item.question}</h2>
                {selected === item.id ? <span>-</span> : <span>+</span>}
              </div>
              {enable ? (
                selectMulti.indexOf(item.id) !== -1 ? (
                  <div className="answer">
                    <h3>{item.answer}</h3>
                  </div>
                ) : null
              ) : selected === item.id ? (
                <div className="answer">
                  <h3>{item.answer}</h3>
                </div>
              ) : null}
            </div>
          ))
        ) : (
          <h1>Not data Found</h1>
        )}
      </div>
    </div>
  );
}

export default Accordion;
