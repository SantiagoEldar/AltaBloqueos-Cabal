interface BloqueoData {
    pan: string;
    origen: string;
    modoIngreso: string;
    alta: string;
    vigencia: string;
    usuarios: string;
    accion: string;
    fecha: string;
  }
  
  const FilaBloqueo = ({ data }: { data: BloqueoData }) => {
    return (
      <tr>
        <td className="border px-4 py-2">{data.pan}</td>
        <td className="border px-4 py-2">{data.origen}</td>
        <td className="border px-4 py-2">{data.modoIngreso}</td>
        <td className="border px-4 py-2">{data.alta}</td>
        <td className="border px-4 py-2">{data.vigencia}</td>
        <td className="border px-4 py-2">{data.usuarios}</td>
        <td className="border px-4 py-2">{data.accion}</td>
        <td className="border px-4 py-2">{data.fecha}</td>
      </tr>
    );
  };
  
  export default FilaBloqueo;
  