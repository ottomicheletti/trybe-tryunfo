import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Form extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <div className="form-container">
        <div className="div-forms-columns">
          <label htmlFor="cardName">
            Nome da Carta
            <input
              name="cardName"
              id=""
              type="text"
              data-testid="name-input"
              onChange={ onInputChange }
              value={ cardName }
            />
          </label>
          <label htmlFor="cardDescription">
            Descrição
            <textarea
              name="cardDescription"
              id=""
              cols="30"
              rows="5"
              maxLength="150"
              data-testid="description-input"
              onChange={ onInputChange }
              value={ cardDescription }
            />
          </label>
        </div>
        <div className="div-forms-rows">
          <label htmlFor="cardAttr1">
            Attr01
            <input
              type="number"
              name="cardAttr1"
              id=""
              min="0"
              max="90"
              data-testid="attr1-input"
              onChange={ onInputChange }
              value={ cardAttr1 }
            />
          </label>
          <label htmlFor="cardAttr2">
            Attr02
            <input
              type="number"
              name="cardAttr2"
              id=""
              min="0"
              max="90"
              data-testid="attr2-input"
              onChange={ onInputChange }
              value={ cardAttr2 }
            />
          </label>
          <label htmlFor="cardAttr3">
            Attr03
            <input
              type="number"
              name="cardAttr3"
              id=""
              min="0"
              max="90"
              data-testid="attr3-input"
              onChange={ onInputChange }
              value={ cardAttr3 }
            />
          </label>
          <label htmlFor="cardImage">
            Imagem
            <input
              type="text"
              name="cardImage"
              id=""
              data-testid="image-input"
              onChange={ onInputChange }
              value={ cardImage }
            />
          </label>
        </div>
        <div className="div-forms-columns">
          <label htmlFor="cardRare">
            Raridade
            <select
              name="cardRare"
              id="rarity"
              data-testid="rare-input"
              onChange={ onInputChange }
              value={ cardRare }
            >
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>
        </div>
        <div className="div-forms-check">
          {hasTrunfo
            ? 'Você já tem um Super Trunfo em seu baralho'
            : (
              <label htmlFor="cardTrunfo">
                <input
                  type="checkbox"
                  name="cardTrunfo"
                  id="checkbox"
                  data-testid="trunfo-input"
                  checked={ cardTrunfo }
                  onChange={ onInputChange }
                />
                Super Trybe Trunfo
              </label>
            )}
        </div>
        <button
          type="submit"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </div>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.number,
  cardAttr2: PropTypes.number,
  cardAttr3: PropTypes.number,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  hasTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
}.isRequired;

export default Form;
