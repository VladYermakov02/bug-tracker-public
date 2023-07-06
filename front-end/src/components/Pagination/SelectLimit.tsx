/* eslint-disable react/destructuring-assignment */
import React from 'react';

function SelectLimit(props: any) {
  return (
    <select
      className="select-data-limit-form rounded-pill mx-2"
      aria-label="Select Data Limit To Show"
      // eslint-disable-next-line react/destructuring-assignment, react/prop-types
      onChange={(e) => props.onLimitChange(e.target.value)}
    >
      <option value="5">5</option>
      <option value="10">10</option>
      <option value="20">20</option>
      <option value="50">50</option>
      <option value="100">100</option>
      {/* eslint-disable-next-line react/destructuring-assignment */}
      <option value={props.dataLenght}>All: {props.dataLenght}</option>
    </select>
  );
}

export default SelectLimit;
