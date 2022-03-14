// importamos la funcion que vamos a testear
import { emptyInput } from '../src/App/helpers/validate';

describe('Function emptyInput', () => {
  it('emptyInput debe ser una funcion', () => {
    expect(typeof emptyInput).toBe('function');
  });
  it('Si emptyInput recibe un mail vacio va a retornar true', () => {
    // Arrange
    const email = '';
    const password = '989656';
    const confPassword = '989656';

    // Act 
    const result = emptyInput(email, password, confPassword);

    // Assert
    expect(result).toBe(true);
  });

  it('Si emptyInput recibe un password vacio va a retornar true', () => {
    // Arrange
    const email = 'email@email.cl';
    const password = '';
    const confPassword = '123456';

    // Act 
    const result = emptyInput(email, password, confPassword);

    // Assert
    expect(result).toBe(true);
  });

  it('Si emptyInput recibe una confirmación de password vacio va a retornar true', () => {
    // Arrange
    const email = 'email@email.cl';
    const password = '123456';
    const confPassword = '';

    // Act 
    const result = emptyInput(email, password, confPassword);

    // Assert
    expect(result).toBe(true);
  });

  it('Si emptyInput recibe todos los parametros vacios va a retornar true', () => {
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
    const email = 'email@email.cl';
    const password = '989898';
    const confPassword = '989898';

    // Act 
    const result = emptyInput(email, password, confPassword);

    // Assert
    expect(result).toBe(false);
  });
});

