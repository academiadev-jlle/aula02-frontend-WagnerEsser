const fibonacci = (numero) => console.log(`Fibonacci do número: ${numero}`);

const chameUmaFuncaoACadaIteracao = (n, cb) => {
    for (let i = 0; i < n; i++) {
        cb(i);
    }
}

chameUmaFuncaoACadaIteracao(5, fibonacci);