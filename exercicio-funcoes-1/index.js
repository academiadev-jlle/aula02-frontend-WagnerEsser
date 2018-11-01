
const buscarMenor = (numeros) => numeros.reduce( ( prevVal, elem ) => elem < prevVal ? elem : prevVal, 0);

const valoresTest = [4,2,3,1,-55,1,-3, 0,-100,6, 0]; // -100
console.log(buscarMenor(valoresTest));
