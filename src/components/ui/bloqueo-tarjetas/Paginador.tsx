import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Paginador = () => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-2 py-6">
    <Button variant="outline" className="cursor-pointer">
      <ChevronLeft className="h-4 w-4" />
    </Button>
    {[1, 2, 3, 4, 5].map(n => (
      <Button key={n} variant="outline" className="cursor-pointer">
        {n}
      </Button>
    ))}
    <span className="text-gray-500">...</span>
    <Button variant="outline" className="cursor-pointer">3000</Button>
    <Button variant="outline" className="cursor-pointer">
      <ChevronRight className="h-4 w-4" />
    </Button>
  </div>
  
  );
};