import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';

import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
  const { dispatch } = useContext(AppContext);

  const handleDelete = () => {
    dispatch({
      type: 'DELETE_EXPENSE',
      payload: props.id,
    });
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {props.name}
      <div>
        <span className="badge badge-primary badge-pill mr-3 text-primary">
          ${props.cost}
        </span>
        <TiDelete
          size="1.5em"
          onClick={handleDelete}
          className="data-mdb-attribute"
        ></TiDelete>
      </div>
    </li>
  );
};

export default ExpenseItem;
