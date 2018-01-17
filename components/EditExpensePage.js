import React from 'react';

const EditExpensePage = (props) => {
  console.log(props);
  return(
  <div>
    Here you can edit your data number of {props.match.params.id}
  </div>
);
}

export default EditExpensePage;
