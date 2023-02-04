import React, { useState } from 'react';

const Edit = ({ budget, handleSave }) => {
  const [value, setValue] = useState(budget);
  return (
    <>
      <input
        required="required"
        type="number"
        class="form-control mr-3"
        id="name"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <button
        type="button"
        class="btn btn-primary"
        onClick={() => handleSave(value)}
      >
        Save
      </button>
    </>
  );
};

export default Edit;
