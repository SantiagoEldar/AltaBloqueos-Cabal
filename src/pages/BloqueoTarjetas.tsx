import { TopBar } from "@/components/ui/bloqueo-tarjetas/TopBar";
import TablaBloqueos from "@/components/ui/bloqueo-tarjetas/TablaBloqueos";
import { Paginador } from "@/components/ui/bloqueo-tarjetas/Paginador";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";

const BloqueoTarjetas = () => {
    return (
      <div className="flex flex-col flex-grow min-h-full w-full bg-white">
        <TopBar />
  
        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
          <div className="max-w-7xl mx-auto bg-gray-50 rounded-lg shadow p-4 sm:p-6">
            <h2 className="text-xl font-semibold mb-4 text-center">Lista</h2>
  
            <div className="flex justify-start mb-4">
              <Button variant="outline">
                <Filter className="mr-2 h-4 w-4" /> Filtro
              </Button>
            </div>
  
            <TablaBloqueos />
            <div className="mt-6">
              <Paginador />
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  
  export default BloqueoTarjetas;
