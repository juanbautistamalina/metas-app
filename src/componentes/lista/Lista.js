import Meta from "./Meta";

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
    id: "1",
    detalles: "Meditar 20 minutos",
    periodo: "día",
    eventos: 1,
    icono: "🧘🏻‍♂️",
    meta: 365,
    plazo: "2030-01-01",
    completado: 10,
  },
];

function Lista() {
  return listaMock.map((meta) => <Meta {...meta} />);
}
export default Lista;
