import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form className="info-card">
        <label htmlFor="input-name">
          Name:
          <input
            type="text"
            name="name"
            id="input-name"
            data-testid="name-input"
          />
        </label>
        <label htmlFor="input-textarea">
          Descrição da Carta:
          <textarea
            name="carta-info"
            id="input-textarea"
            cols="30"
            rows="10"
            data-testid="description-input"
          />
        </label>
        <label htmlFor="input-number1">
          Primeiro Atributo:
          <input
            type="number"
            name="atributo1"
            id="input-number1"
            data-testid="attr1-input"
          />
        </label>
        <label htmlFor="input-number2">
          Segundo Atributo:
          <input
            type="number"
            name="atributo2"
            id="input-number2"
            data-testid="attr2-input"
          />
        </label>
        <label htmlFor="input-number3">
          Terceiro Atributo:
          <input
            type="number"
            name="atributo3"
            id="input-number3"
            data-testid="attr3-input"
          />
        </label>
        <label htmlFor="input-text-image">
          Imagem:
          <input
            type="text"
            name="image"
            id="input-text-image"
            data-testid="image-input"
          />
        </label>
        <label htmlFor="select-raridade">
          Raridade:
          <select name="raridade" id="select-raridade" data-testid="rare-input">
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="checkbox-trunfo">
          É Trunfo?
          <input
            type="checkbox"
            name="trunfo"
            id="checkbox-trunfo"
            data-testid="trunfo-input"
          />
        </label>
        <button type="button" data-testid="save-button">Salvar</button>
      </form>
    );
  }
}

export default Form;
