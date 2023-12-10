function findPearsonCorrelation (arr_1, arr_2) {
    let promedio = l => l.reduce((s, a) => s + a, 0) / l.length;
    let n = arr_1.length;
    let calc = (v, prom) => Math.sqrt(v.reduce((s, a) => (s + a * a), 0) - n * prom * prom);
    let nn = 0;

    for (let i = 0; i < n; i += 1, nn += 1) {
        if ((!arr_1[i] && arr_1[i] !== 0) || (!arr_2[i] && arr_2[i] !== 0)) {
            nn += 1;
            continue;
        };

        arr_1[nn] = arr_1[i];
        arr_2[nn] = arr_2[i];
    };

    if (n !== nn) {
        arr_1 = arr_1.splice(0, nn);
        arr_2 = arr_2.splice(0, nn);
        n = nn;
    };

    let prom_arr_1 = promedio(arr_1), prom_arr_2 = promedio(arr_2);
    return (arr_1
        .map((e, i) => ({arr_1: e, arr_2: arr_2[i]}))
        .reduce((v, a) => v + a.arr_1 * a.arr_2, 0) - n * prom_arr_1 * prom_arr_2) 
        / (calc(arr_1, prom_arr_1) * calc(arr_2, prom_arr_2));
};

let array_1 = [10, 45, 26, 31, 15, 57];
let array_2 = [61, 22, 38, 8, 77, 88];

console.log(`Расчет коэффициента корреляции Пирсона: ${findPearsonCorrelation(array_1, array_2)}`);