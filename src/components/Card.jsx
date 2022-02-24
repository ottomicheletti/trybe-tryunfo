import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Card extends Component {
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
      deleteCard,
      displayedCard,
    } = this.props;

    const tnf = `trunfo-${cardTrunfo}`;
    const sp = 'Super Trunfo';

    return (
      <div>
        <div className="card">
          <div className={ `cor-${cardRare.split(' ').join('-')}` }>
            <div className="card-name">
              <h1 data-testid="name-card">{cardName}</h1>
            </div>
            <img
              src={ cardImage }
              alt={ cardName }
              className="card-img"
              data-testid="image-card"
            />
            <p className="card-text" data-testid="description-card">{cardDescription}</p>
            <div className="attributes">
              <p className="attribute" data-testid="attr1-card">
                {`Attr 01 ........................... ${cardAttr1}`}
              </p>
              <p className="attribute" data-testid="attr2-card">
                {`Attr 02 ........................... ${cardAttr2}`}
              </p>
              <p className="attribute" data-testid="attr3-card">
                {`Attr 03 ........................... ${cardAttr3}`}
              </p>
            </div>
            <p className="hide" data-testid="rare-card">{cardRare}</p>
          </div>
          {cardTrunfo ? <p className={ tnf } data-testid="trunfo-card">{ sp }</p> : null}
        </div>
        <div className="delete-button">
          {displayedCard
            ? (
              <button
                type="button"
                data-testid="delete-button"
                onClick={ () => deleteCard(cardName) }
              >
                Excluir
              </button>
            ) : (
              null
            )}
        </div>
      </div>
    );
  }
}

Card.propTypes = {
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

export default Card;
