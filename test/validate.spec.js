// importamos la funcion que vamos a testear
import { emptyInput } from '../src/App/helpers/validate';

describe('Function emptyInput', () => {
  it('emptyInput debe ser una funcion', () => {
    expect(typeof emptyInput).toBe('function');
  });
  it('Si emptyInput recibe un mail vacio va a retornar true', () => {
    // Arrange
    const email = '';
    const password = '98965656';
    const confPassword = '98965656';

    // Act 
    const result = emptyInput(email, password, confPassword);

    // Assert
    expect(result).toBe(true);
  });

  it('Si emptyInput recibe parametros vacios va a retornar false', () => {
    // Arrange
    const email = '';
    const password = '';
    const confPassword = '';

    // Act 
    const result = emptyInput(email, password, confPassword);

    // Assert
    expect(result).toBe(true);
  });

  it('Si emptyInput recibe parametros no vacios va a retornar false', () => {
    // Arrange
    const email = '8989898';
    const password = '989898';
    const confPassword = '98989';

    // Act 
    const result = emptyInput(email, password, confPassword);

    // Assert
    expect(result).toBe(false);
  });
});

