import { Button } from "@/components/ui/button";
import { Home, Plus, FileText, FileSpreadsheet, Printer, LogOut } from "lucide-react";

export const TopBar = () => {
  return (
    <div className="flex flex-wrap sm:flex-nowrap items-center justify-between px-6 py-4 bg-gray-100 border-b gap-4">
        {/* Botones Izquierda */}
        <div className="flex flex-wrap sm:flex-nowrap items-center gap-2">
            <Button variant="outline" className="cursor-pointer">
            <Home className="mr-2 h-4 w-4" /> Principal
            </Button>
            <Button variant="outline" className="cursor-pointer">
            <Plus className="mr-2 h-4 w-4" /> Nuevo
            </Button>
        </div>

        {/* Botones Derecha */}
        <div className="flex flex-1 justify-end items-center flex-wrap gap-2">
            {/* Grupo exportar */}
            <div className="flex items-center gap-2">
            <Button variant="outline" className="cursor-pointer">
                <FileText className="h-4 w-4 text-red-600" />
            </Button>
            <Button variant="outline" className="cursor-pointer">
                <FileSpreadsheet className="h-4 w-4 text-green-600" />
            </Button>
            <Button variant="outline" className="cursor-pointer">
                <Printer className="h-4 w-4 text-blue-600" />
            </Button>
            </div>

            {/* Separación visible */}
            <div className="w-4" />

            {/* Cerrar sesión */}
            <Button variant="destructive" className="cursor-pointer">
            <LogOut className="mr-2 h-4 w-4" /> Cerrar sesión
            </Button>
        </div>
    </div>
  );
};