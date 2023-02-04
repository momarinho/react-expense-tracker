import React from 'react';

const ViewBudget = ({ budget, handleEdit }) => {
  return (
    <>
      <span>${budget}</span>
      <button type="button" class="btn btn-primary" onClick={handleEdit}>
        Edit
      </button>
    </>
  );
};

export default ViewBudget;
