import React from "react";
import { connect } from "react-redux";
import phonebookActions from '../../Redux/phonebook-actions';

const Filter = ({ value, onChange }) => {
  return (
    <label>
      Filter
      <input type="text" value={value} onChange={onChange}></input>
    </label>
  );
};

const getfilteredContactList = (contacts, filter) => {
    const { filter, contacts } = this.state;
    const normolizeFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normolizeFilter)
    );
};
  

const mapStateToProps = (state) => {
  const { filter, items } = state.contacts;
  const normolizeFilter = filter.toLowerCase();
  const filteredContactList = items.filter((contact) =>
    contact.name.toLowerCase().includes(normolizeFilter))
  
  return { contacts: filteredContactList, }
};

const mapDispatchToProps =dispatch=>  ({
  onChange: (event)=>dispatch(phonebookActions.filter(event.target.value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
