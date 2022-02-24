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
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      cards: [],
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.getFormValidated = this.getFormValidated.bind(this);
  }

  // EVENT HANDLER GENÉRICO
  onInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    if (target.checked) {
      this.setState({
        hasTrunfo: true,
      });
    }

    this.setState({
      [name]: value,
    }, () => this.getFormValidated());
  }

  onSaveButtonClick() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.state;

    const newCard = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };

    this.setState((prevState) => ({
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      cards: [...prevState.cards, newCard],
    }));
  }

  getFormValidated() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    } = this.state;

    const attrMaxSum = 210;
    const attrMax = 90;
    const attr1 = parseInt(cardAttr1, 10);
    const attr2 = parseInt(cardAttr2, 10);
    const attr3 = parseInt(cardAttr3, 10);

    if (!cardName
      || !cardDescription
      || !cardImage
      || !cardRare
      || attr1 > attrMax || attr2 > attrMax || attr3 > attrMax
      || attr1 < 0 || attr2 < 0 || attr3 < 0
      || attr1 + attr2 + attr3 > attrMaxSum) {
      this.setState({
        isSaveButtonDisabled: true,
      });
    } else {
      this.setState({
        isSaveButtonDisabled: false,
      });
    }
  }

  render() {
    const { cards } = this.state;
    return (
      <div>
        <h1 className="title">Tryunfo</h1>
        <div className="body">
          <Form
            { ...this.state }
            onInputChange={ this.onInputChange }
            onSaveButtonClick={ this.onSaveButtonClick }
          />
          <div className="card-container">
            <Card
              { ...this.state }
            />
          </div>
        </div>
        <div className="cards-display">
          {cards.map((card) => (
            <Card
              key={ card.cardName }
              { ... card }
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
