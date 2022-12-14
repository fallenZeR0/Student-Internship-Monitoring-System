import React from "react";
import { FaSortAmountUp, FaRegCalendarCheck, FaFilter } from "react-icons/fa";

const Narrative = () => {
  return (
    <div className="narrative-container">
      <div className="button-container">
        <button className="sort">
          <span>
            <FaSortAmountUp />
          </span>
          <p>Sort</p>
        </button>
        <button className="status">
          <span>
            <FaRegCalendarCheck />
          </span>
          <p>Status</p>
        </button>
        <button className="filters">
          <span>
            <FaFilter />
          </span>
          <p>Filters</p>
        </button>
      </div>
      <div className="content">
        <div className="narrative-content">
          <div className="dateAndDay">
            <h5>Day 1</h5>
            <p>August 18, 2022</p>
          </div>
          <div className="btn-column-container">
            <div className="top">
              <button>Completed</button>
            </div>
            <div className="bottom">
              <button className="add">Add</button>
              <button className="edit">Edit</button>
              <button className="View">View</button>
            </div>
          </div>
          <div className="blank-container">
            <div className="blank"></div>
          </div>
        </div>
        <div className="narrative-content">
          <div className="dateAndDay">
            <h5>Day 2</h5>
            <p>August 19, 2022</p>
          </div>
          <div className="btn-column-container">
            <div className="top">
              <button>Completed</button>
            </div>
            <div className="bottom">
              <button className="add">Add</button>
              <button className="edit">Edit</button>
              <button className="View">View</button>
            </div>
          </div>
          <div className="blank-container">
            <div className="blank"></div>
          </div>
        </div>
        <div className="narrative-content">
          <div className="dateAndDay">
            <h5>Day 3</h5>
            <p>August 20, 2022</p>
          </div>
          <div className="btn-column-container">
            <div className="top">
              <button>Completed</button>
            </div>
            <div className="bottom">
              <button className="add">Add</button>
              <button className="edit">Edit</button>
              <button className="View">View</button>
            </div>
          </div>
          <div className="blank-container">
            <div className="blank"></div>
          </div>
        </div>
        <div className="narrative-content">
          <div className="dateAndDay">
            <h5>Day 4</h5>
            <p>August 21, 2022</p>
          </div>
          <div className="btn-column-container">
            <div className="top">
              <button>Completed</button>
            </div>
            <div className="bottom">
              <button className="add">Add</button>
              <button className="edit">Edit</button>
              <button className="View">View</button>
            </div>
          </div>
          <div className="blank-container">
            <div className="blank"></div>
          </div>
        </div>
        <div className="narrative-content">
          <div className="dateAndDay">
            <h5>Day 5</h5>
            <p>August 22, 2022</p>
          </div>
          <div className="btn-column-container">
            <div className="top">
              <button>Completed</button>
            </div>
            <div className="bottom">
              <button className="add">Add</button>
              <button className="edit">Edit</button>
              <button className="View">View</button>
            </div>
          </div>
          <div className="blank-container">
            <div className="blank"></div>
          </div>
        </div>
        <div className="narrative-content">
          <div className="dateAndDay">
            <h5>Day 6</h5>
            <p>August 23, 2022</p>
          </div>
          <div className="btn-column-container">
            <div className="top">
              <button>Completed</button>
            </div>
            <div className="bottom">
              <button className="add">Add</button>
              <button className="edit">Edit</button>
              <button className="View">View</button>
            </div>
          </div>
          <div className="blank-container">
            <div className="blank"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Narrative;
