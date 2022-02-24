import React, { Component } from 'react';
import './App.css';
import Card from './components/Card';
import Form from './components/Form';

class App extends Component {
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
      displayedCard: false,
      searchTrunfo: false,
      rareSearch: '',
      searchInput: '',
      cards: [],
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.validateTrunfo = this.validateTrunfo.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
  }

  // EVENT HANDLER GENÉRICO
  onInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    // if (target.checked) {
    //   this.setState({
    //     hasTrunfo: true,
    //   });
    // }

    this.setState({
      [name]: value,
    }, () => this.getFormValidated());
  }

  onSaveButtonClick() {
    const { state } = this;

    const newCard = {
      cardName: state.cardName,
      cardDescription: state.cardDescription,
      cardAttr1: state.cardAttr1,
      cardAttr2: state.cardAttr2,
      cardAttr3: state.cardAttr3,
      cardImage: state.cardImage,
      cardRare: state.cardRare,
      cardTrunfo: state.cardTrunfo,
      displayedCard: true,
    };

    this.setState((prevState) => ({ cards: [...prevState.cards, newCard] }));
    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      displayedCard: false,
    }, () => this.validateTrunfo());
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

  validateTrunfo() {
    const { cards } = this.state;
    const query = cards.some((card) => card.cardTrunfo === true);
    if (query) {
      this.setState({ hasTrunfo: true });
    } else {
      this.setState({ hasTrunfo: false });
    }
  }

  deleteCard(name) {
    const { cards } = this.state;
    const newCardsArray = cards.filter((card) => card.cardName !== name);

    this.setState({
      cards: newCardsArray,
    }, this.validateTrunfo());

    const displayedCardsHaveTrunfo = newCardsArray.some((card) => card.cardTrunfo);
    if (displayedCardsHaveTrunfo) {
      this.setState({
        hasTrunfo: true,
      });
    } else {
      this.setState({
        hasTrunfo: false,
      });
    }
  }

  render() {
    const {
      cards,
      // cardName,
      // cardRare,
      searchInput,
      rareSearch,
      searchTrunfo,
    } = this.state;
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
        <div className="cards-div">
          <div className="search-bar">
            <h2>Filtros de Busca</h2>
            <input
              type="text"
              name="searchInput"
              placeholder="Nome da carta"
              data-testid="name-filter"
              disabled={ searchTrunfo }
              onChange={ this.onInputChange }
              value={ searchInput }
            />
            <select
              name="rareSearch"
              data-testid="rare-filter"
              disabled={ searchTrunfo }
              onChange={ this.onInputChange }
              value={ rareSearch }
            >
              <option value="">todas</option>
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
            <label htmlFor="searchTrunfo">
              <input
                type="checkbox"
                name="searchTrunfo"
                data-testid="trunfo-filter"
                checked={ searchTrunfo }
                onChange={ this.onInputChange }
              />
              Super Trybe Trunfo
            </label>
          </div>
          <div className="cards-display">
            {searchTrunfo
              ? cards.filter((card) => card.cardTrunfo === true).map((card) => (
                <Card
                  key={ card.cardName }
                  deleteCard={ this.deleteCard }
                  { ... card }
                />))
              : cards.reduce((acc, card) => {
                if (rareSearch === '') {
                  acc = [...acc, card];
                } if (rareSearch === card.cardRare) {
                  acc = [...acc, card];
                }
                return acc;
              }, []).filter((card) => card.cardName.includes(searchInput)).map((card) => (
                <Card
                  key={ card.cardName }
                  displayedCard={ card.displayedCard }
                  cardName={ card.cardName }
                  cardDescription={ card.cardDescription }
                  cardAttr1={ card.cardAttr1 }
                  cardAttr2={ card.cardAttr2 }
                  cardAttr3={ card.cardAttr3 }
                  cardImage={ card.cardImage }
                  cardRare={ card.cardRare }
                  cardTrunfo={ card.cardTrunfo }
                  deleteCard={ this.deleteCard }
                />
              ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
