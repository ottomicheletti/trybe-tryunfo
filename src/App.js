import React from 'react';
import './App.css';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      // hasTrunfo: false,
      // isSaveButtonDisabled: true,
      // cards: [],
    };

    this.onInputChange = this.onInputChange.bind(this);
    // this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
  }

  // EVENT HANDLER GENÉRICO
  onInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    console.log(name, value);

    this.setState({
      [name]: value,
    });
  }

  // onSaveButtonClick(event) {}

  render() {
    // const {
    //   cardName,
    //   cardDescription,
    //   cardAttr1,
    //   cardAttr2,
    //   cardAttr3,
    //   cardImage,
    //   cardRare,
    //   cardTrunfo,
    //   // isSaveButtonDisabled,
    // } = this.state;

    return (
      <div>
        <h1 className="title">Tryunfo</h1>
        <div className="body">
          <Form
            onInputChange={ this.onInputChange }
          // isSaveButtonDisabled={ isSaveButtonDisabled }
          // onSaveButtonClick={ this.onSaveButtonClick }
          />
          <Card
            { ...this.state }
          />
        </div>
      </div>
    );
  }
}

export default App;
