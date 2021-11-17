import { Component } from "react";
import { connect } from "react-redux";
import phonebookActions from "../../redux/phonebook-actions";

import "./Form.css";

class Form extends Component {
  state = {
    name: "",
    number: "",
  };

  handleChange = (event) => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    if (
      this.props.contacts
        .map((contact) => contact.name)
        .includes(this.state.name)
    ) {
      alert(`${this.state.name} is already in contacts`);
      
    }
else 
    {this.props.onSubmit(this.state);
    this.props.onClose();
    this.reset();}
  };

  reset = () => {
    this.setState({
      name: "",
      number: "",
    });
  };
  render() {
    return (
      <form className="Form" onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameImputId}>
          Name
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            id={this.nameImputId}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>
        <label htmlFor={this.numberImputId}>
          Phone Number
          <input
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
            id={this.numberImputId}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </label>

        <button type="submit" className="button">
          Add contact
        </button>
      </form>
    );
  }
}
const mapStateToProps = (state) => ({
  contacts: state.contacts.items,
});
const mapDispatchToProps = (dispatch) => ({
  onSubmit: ({ name, number }) =>
    dispatch(phonebookActions.addContact({ name, number })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
