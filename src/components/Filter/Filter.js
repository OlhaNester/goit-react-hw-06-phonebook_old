import React from "react";
import { connect } from "react-redux";
import phonebookActions from "../../redux/phonebook-actions";

const Filter = ({ value, onChange }) => {
  return (
    <label>
      Filter
      <input type="text" value={value} onChange={onChange}></input>
    </label>
  );
};

const mapStateToProps = (state) => ({
    value: state.contacts.filter,
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (event) =>
    dispatch(phonebookActions.filterContact(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
