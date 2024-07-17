import { Link2, Plus } from "lucide-react";
import { Button } from "../../components/button";

export function ImportantLinks() {
  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">Links importantes</h2>
      <div className="space-y-5">
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5">
            <span className="block font-medium text-zinc-100">Reserva do AirBnB</span>
            <a className="block text-xs text-zinc-400 truncate hover:text-zinc-200 cursor-pointer">
              https://www.airbnb.com.br/rooms/647140504861919590?source_impression_id=p3_1720711840_P3kmz_J8-31Dlmj3
            </a>
          </div>
          <Link2 className="text-zinc-400 size-5 shrink-0" />
        </div>
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5">
            <span className="block font-medium text-zinc-100">Reserva do AirBnB</span>
            <a className="block text-xs text-zinc-400 truncate hover:text-zinc-200 cursor-pointer">
              https://www.airbnb.com.br/rooms/647140504861919590?source_impression_id=p3_1720711840_P3kmz_J8-31Dlmj3
            </a>
          </div>
          <Link2 className="text-zinc-400 size-5 shrink-0" />
        </div>
      </div>
      
      <Button variant="secondary" size="full"> 
        <Plus className="size-5"/>
        Cadastrar novo link
      </Button>
    </div>  
  )
}