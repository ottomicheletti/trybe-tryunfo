import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <div className="forms">
        <div className="div-forms-columns">
          <label htmlFor="name">
            Nome
            <input
              name="name"
              id=""
              type="text"
              data-testid="name-input"
            />
          </label>
          <label htmlFor="description">
            Descrição
            <textarea
              name="description"
              id=""
              cols="30"
              rows="10"
              data-testid="description-input"
            />
          </label>
        </div>
        <div className="div-forms-rows">
          <label htmlFor="attr01">
            Attr01
            <input
              type="number"
              name="attr01"
              id=""
              data-testid="attr1-input"
            />
          </label>
          <label htmlFor="attr02">
            Attr02
            <input
              type="number"
              name="attr02"
              id=""
              data-testid="attr2-input"
            />
          </label>
          <label htmlFor="attr03">
            Attr03
            <input
              type="number"
              name="attr03"
              id=""
              data-testid="attr3-input"
            />
          </label>
          <label htmlFor="image">
            Imagem
            <input
              type="text"
              name="image"
              id=""
              data-testid="image-input"
            />
          </label>
        </div>
        <div className="div-forms-columns">
          <label htmlFor="rarity">
            Raridade
            <select
              name="rarity"
              id="rarity"
              placeholder="Escolha um nível de raridade"
              data-testid="rare-input"
            >
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>
        </div>
        <div className="div-forms-check">
          <label htmlFor="trunfo">
            <input
              type="checkbox"
              name="trunfo"
              id="checkbox"
              data-testid="trunfo-input"
            />
            Super Trybe Trunfo
          </label>
        </div>
        <button type="button" data-testid="save-button">
          Salvar
        </button>
      </div>
    );
  }
}

export default Form;
