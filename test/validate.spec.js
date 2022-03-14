// importamos la funcion que vamos a testear
import { emptyInput, comparePassword, emptyInputLog, showPassword } from "../src/App/helpers/validate";

describe("Function emptyInput", () => {
  it("emptyInput debe ser una funcion", () => {
    expect(typeof emptyInput).toBe("function");
  });

  it("Si emptyInput recibe un mail vacio va a retornar true", () => {
    // Arrange
    const email = "";
    const password = "989656";
    const confPassword = "989656";

    // Act
    const result = emptyInput(email, password, confPassword);

    // Assert
    expect(result).toBe(true);
  });

  it("Si emptyInput recibe un password vacio va a retornar true", () => {
    // Arrange
    const email = "email@email.cl";
    const password = "";
    const confPassword = "123456";

    // Act
    const result = emptyInput(email, password, confPassword);

    // Assert
    expect(result).toBe(true);
  });

  it("Si emptyInput recibe una confirmación de password vacio va a retornar true", () => {
    // Arrange
    const email = "email@email.cl";
    const password = "123456";
    const confPassword = "";

    // Act
    const result = emptyInput(email, password, confPassword);

    // Assert
    expect(result).toBe(true);
  });

  it("Si emptyInput recibe todos los parametros vacios va a retornar true", () => {
    // Arrange
    const email = "";
    const password = "";
    const confPassword = "";

    // Act
    const result = emptyInput(email, password, confPassword);

    // Assert
    expect(result).toBe(true);
  });

  it("Si emptyInput recibe parametros no vacios va a retornar false", () => {
    // Arrange
    const email = "email@email.cl";
    const password = "989898";
    const confPassword = "989898";

    // Act
    const result = emptyInput(email, password, confPassword);

    // Assert
    expect(result).toBe(false);
  });

  it("Si emptyInput recibe email y password vacíos va a retornar true", () => {
    //Arrange
    const email = "";
    const password = "";
    const confPassword = "989898";

    // Act
    const result = emptyInput(email, password, confPassword);

    //Assert
    expect(result).toBe(true);
  });

  it("si emptyInput recibe email y confirmación de password vacíos va a retornar true", () => {
    //Arrange
    const email = "";
    const password = "989898";
    const confPassword = "";

    //Act
    const result = emptyInput(email, password, confPassword);

    //Assert
    expect(result).toBe(true);
  });

  it("si emptyInput recibe password y confirmación de password vacíos va a retornar true", () => {
    //Arrange
    const email = "email@email.cl";
    const password = "";
    const confPassword = "";

    //Act
    const result = emptyInput(email, password, confPassword);

    //Assert
    expect(result).toBe(true);
  });
});

describe("Function comparePassword", () => {
  it("comparePassword debe ser una funcion", () => {
    expect(typeof comparePassword).toBe("function");
  });

  it("Si password y la confirmación de password son diferentes va a retornar true", () => {
    //Arrange
    const password = "989898";
    const confPassword = "989899";

    //Act
    const result = comparePassword(password, confPassword);

    //Assert
    expect(result).toBe(true);
  });

  it("Si password y la confirmación de password son iguales va a retornar false", () => {
    //Arrange
    const password = "989898";
    const confPassword = "989898";

    //Act
    const result = comparePassword(password, confPassword);

    //Assert
    expect(result).toBe(false);
  });
});

describe('Function emptyInputLog', () =>{
  it ('emptyInputLog debe ser una función', () =>{
    expect(typeof emptyInputLog).toBe('function');
  });
  it('Si recibe email vacío retorna true', () =>{
    //Arrange
    const email = '';
    const password = '123456';

    //Act 
    const result = emptyInputLog(email, password);

    //Assert
    expect(result).toBe(true);
  });

  it('Si recibe password vacío retorna true', () =>{
    //Arrange
    const email = 'hola@hola.cl';
    const password = '';

    //Act
    const result = emptyInputLog(email, password);

    //Assert
    expect(result).toBe(true);
  });

  it('Si recibe email vacío y password vacío retorna true', () =>{
     //Arrange
     const email = '';
     const password = '';
 
     //Act
     const result = emptyInputLog(email, password);
 
     //Assert
     expect(result).toBe(true);
  });

  it('Si recibe los parámetros de email y password no vacíos retorna false', () =>{
    
    const email = 'holi@holi.com';
    const password = '654321';

    const result = emptyInputLog(email, password);

    expect(result).toBe(false);
  });
});

describe('Function showPassword', () =>{
  it('showPassword debe ser una función', () =>{
    expect(typeof showPassword).toBe('function');
  });

  it()
});