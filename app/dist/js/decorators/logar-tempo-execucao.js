export function logarTempoExecucao(tempoEmSegundos = false) {
    return function (target, propertyKey, descriptor) {
        const metodoOriginal = descriptor.value;
        let unidade = "milisegundos";
        let divisor = 1;
        if (tempoEmSegundos) {
            let unidade = "segundos";
            let divisor = 1000;
        }
        descriptor.value = function (...args) {
            const t1 = performance.now();
            const retorno = metodoOriginal.apply(this, args);
            const t2 = performance.now();
            console.log(`${propertyKey}, tempo de execução: ${(t2 - t1) / divisor} ${unidade}.`);
            retorno;
        };
        return descriptor;
    };
}
