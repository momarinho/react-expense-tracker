import React, { useContext, useState } from 'react';

import { AppContext } from '../context/AppContext';
import Edit from './Edit';
import ViewBudget from './ViewBudget';

const Budget = () => {
  const { budget, dispatch } = useContext(AppContext);
  const [isEditing, setEditing] = useState(false);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = (value) => {
    dispatch({
      type: 'SET_BUDGET',
      payload: value,
    });
    setEditing(false);
  };

  return (
    <div className="alert alert-secondary p-3 d-flex align-items-center justify-content-between">
      {isEditing ? (
        <Edit handleSave={handleSave} budget={budget} />
      ) : (
        <ViewBudget handleEdit={handleEdit} budget={budget} />
      )}
    </div>
  );
};

export default Budget;
