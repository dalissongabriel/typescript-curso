export function inspect(target, propertyKey, descriptor) {
    const metodoOriginal = descriptor.value;
    descriptor.value = (...args) => {
        console.log(`--- Método: ${propertyKey}`);
        console.log(`------ Parâmetros: ${JSON.stringify(args, null, 2)}`);
        const retorno = metodoOriginal.apply(this, args);
        console.log(`------ Retorno: ${JSON.stringify(retorno, null, 2)}`);
        return retorno;
    };
    return descriptor;
}
