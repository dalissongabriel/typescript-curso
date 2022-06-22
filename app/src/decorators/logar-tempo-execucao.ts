export function logarTempoExecucao() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const metodoOriginal = descriptor.value;

    descriptor.value = function (...args: any[]) {
      const t1 = performance.now();

      // Quanto executamos um metódo de uma classe apartir de um decorator, o escopo do "this" passa a ser do decorator e não mais da classe. Por isso precisamos usar o apply aqui, para deixar delegado que o "this" deve ser sempre do escopo a qual o metódo pertence.
      const retorno = metodoOriginal.apply(this, args);
      const t2 = performance.now();

      console.log(
        `${propertyKey}, tempo de execução: ${(t2 - t1) / 1000} segundos.`
      );
      retorno;
    };

    return descriptor;
  };
}
