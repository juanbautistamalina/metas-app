import { createContext, useReducer } from "react";

const listaMock = [
  {
    id: "1",
    detalles: "Correr 10km",
    periodo: "día",
    eventos: 1,
    icono: "🏃🏻",
    meta: 365,
    plazo: "2030-01-01",
    completado: 5,
  },
  {
    id: "2",
    detalles: "Leer libros",
    periodo: "año",
    eventos: 6,
    icono: "📚",
    meta: 12,
    plazo: "2030-01-01",
    completado: 0,
  },
  {
    id: "3",
    detalles: "Meditar 20 minutos",
    periodo: "día",
    eventos: 1,
    icono: "🧘🏻‍♂️",
    meta: 365,
    plazo: "2030-01-01",
    completado: 10,
  },
];

const estadoInicial = {
  orden: [],
  objetos: {},
};

function reductor(estado, accion) {
  switch (accion.tipo) {
    case "colocar": {
      const metas = accion.metas;
      const nuevoEstado = {
        orden: metas.map(meta => meta.id),
        objetos: metas.reduce((objeto, meta) => ({ ...objeto, [meta.id]: meta }),{}),
      };
      return nuevoEstado;
    }

    case "crear": {
      const id = Math.random();
      const nuevoEstado = {
        orden: [...estado.orden, id],
        objetos: {...estado.objetos,
                [id]: accion.meta
            }
      };
      return nuevoEstado;
    }
  }
}

const metas = reductor(estadoInicial, { tipo: "colocar", metas: listaMock });

export const Contexto = createContext(null);

function Memoria({ children }) {
  const [estado, enviar] = useReducer(reductor, metas);
  return (
    <Contexto.Provider value={[estado, enviar]}>{children}</Contexto.Provider>
  );
}

export default Memoria;
