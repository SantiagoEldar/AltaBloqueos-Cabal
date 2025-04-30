import FilaBloqueo from "@/components/ui/bloqueo-tarjetas/FilaBloqueo";

const datos = [
    {
      pan: "**** **** **** 1234",
      origen: "Web",
      modoIngreso: "Manual",
      alta: "01/01/2024",
      vigencia: "31/12/2024",
      usuarios: "admin",
      accion: "Bloqueado",
      fecha: "15/04/2024",
    },
    {
      pan: "**** **** **** 5678",
      origen: "Mobile",
      modoIngreso: "Automático",
      alta: "10/02/2024",
      vigencia: "10/08/2024",
      usuarios: "jdoe",
      accion: "Pendiente",
      fecha: "20/04/2024",
    },
    {
      pan: "**** **** **** 9101",
      origen: "Sucursal",
      modoIngreso: "Manual",
      alta: "05/03/2024",
      vigencia: "05/09/2024",
      usuarios: "mjane",
      accion: "Bloqueado",
      fecha: "22/04/2024",
    },
    {
      pan: "**** **** **** 1121",
      origen: "Web",
      modoIngreso: "Manual",
      alta: "15/03/2024",
      vigencia: "15/09/2024",
      usuarios: "admin",
      accion: "Rechazado",
      fecha: "25/04/2024",
    },
    {
      pan: "**** **** **** 3141",
      origen: "Call Center",
      modoIngreso: "Automático",
      alta: "01/04/2024",
      vigencia: "01/10/2024",
      usuarios: "calluser1",
      accion: "Bloqueado",
      fecha: "27/04/2024",
    },
  ];
  

const TablaBloqueos = () => {
  return (
    <div className="w-full overflow-x-auto">
        <table className="min-w-full table-auto border">
        <thead className="bg-gray-50">
            <tr>
            <th className="px-4 py-2 text-left">Pan</th>
            <th className="px-4 py-2 text-left">Origen</th>
            <th className="px-4 py-2 text-left">Modo Ingreso</th>
            <th className="px-4 py-2 text-left">Alta</th>
            <th className="px-4 py-2 text-left">Vigencia</th>
            <th className="px-4 py-2 text-left">Usuarios</th>
            <th className="px-4 py-2 text-left">Acción</th>
            <th className="px-4 py-2 text-left">Fecha</th>
            </tr>
        </thead>
        <tbody>
            {datos.map((dato, index) => (
            <FilaBloqueo key={index} data={dato} />
            ))}
        </tbody>
     </table>
    </div>
  );
};

export default TablaBloqueos;
