import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-[#f8f9f8] px-5 text-center">
      <div>
        <p className="text-xs font-bold uppercase tracking-[.2em] text-emerald-700">Error 404</p>
        <h1 className="mt-4 text-5xl font-semibold tracking-[-0.05em] text-neutral-950">Esta ruta no existe.</h1>
        <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-neutral-500">
          Parece que este punto aún no está en el mapa. Regresa al portafolio para seguir explorando.
        </p>
        <Button asChild className="mt-7">
          <Link href="/">
            <ArrowLeft /> Volver al inicio
          </Link>
        </Button>
      </div>
    </main>
  );
}
