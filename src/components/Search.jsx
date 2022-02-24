import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Search extends Component {
  render() {
    const {
      cardName,
      // cardDescription,
      // cardAttr1,
      // cardAttr2,
      // cardAttr3,
      // cardImage,
      cardRare,
      cardTrunfo,
      // deleteCard,
      onInputChange,
    } = this.props;

    return (
      <div className="search-bar">
        <h2>Filtros de Busca</h2>
        <input
          type="text"
          name="search-card"
          placeholder="Nome da carta"
          data-testid="name-filter"
          onChange={ onInputChange }
          value={ cardName }
        />
        <select
          name="cardRare"
          id="rarity"
          placeholder="Escolha um nível de raridade"
          data-testid="rare-filter"
          onChange={ onInputChange }
          value={ cardRare }
        >
          <option value="''">todas</option>
          <option value="normal">normal</option>
          <option value="raro">raro</option>
          <option value="muito raro">muito raro</option>
        </select>
        <label htmlFor="cardTrunfo">
          <input
            type="checkbox"
            name="cardTrunfo"
            data-testid="trunfo-filter"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />
          Super Trybe Trunfo
        </label>
        <button type="button">Buscar</button>

      </div>
    );
  }
}

Search.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.number,
  cardAttr2: PropTypes.number,
  cardAttr3: PropTypes.number,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  deleteCard: PropTypes.func,
  displayedCard: PropTypes.bool,
}.isRequired;

export default Search;
