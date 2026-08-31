import {
  Activity,
  Box,
  Database,
  MapPin,
  PackageCheck,
  ShoppingBag,
  Sprout,
  Workflow,
} from "lucide-react";
import Image from "next/image";
import type { ProjectVisual as ProjectVisualType } from "@/types";

type ProjectVisualProps = {
  type: ProjectVisualType;
};

function BrowserChrome() {
  return (
    <div className="flex h-8 items-center gap-1.5 border-b border-white/10 px-3">
      <span className="size-1.5 rounded-full bg-red-300/70" />
      <span className="size-1.5 rounded-full bg-amber-300/70" />
      <span className="size-1.5 rounded-full bg-emerald-300/70" />
      <span className="ml-3 h-2.5 w-24 rounded-full bg-white/8" />
    </div>
  );
}

export function ProjectVisual({ type }: ProjectVisualProps) {
  return (
    <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(52,211,153,.2),transparent_40%)]" />
      <div className="absolute inset-x-5 bottom-0 top-5 overflow-hidden rounded-t-xl border border-white/10 bg-[#151917] shadow-2xl sm:inset-x-7 sm:top-7">
        <BrowserChrome />
        {type === "map" ? <GeoFieldMockup /> : null}
        {type === "face" ? <BiometricMockup /> : null}
        {type === "cad" ? <CadMockup /> : null}
        {type === "commerce" ? <CommerceMockup /> : null}
        {type === "agro" ? <AgroMockup /> : null}
        {type === "data" ? <DataMockup /> : null}
        {type === "photogrammetry" ? <PhotogrammetryMockup /> : null}
      </div>
    </div>
  );
}

function GeoFieldMockup() {
  return (
    <div className="relative h-full overflow-hidden bg-[#111812]">
      <Image
        src="/geofield.jpeg"
        alt="Interfaz de GeoField App en laptop y teléfono"
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className="object-cover object-center transition duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent" />
      <div className="absolute left-3 top-3 flex items-center gap-2 rounded-full border border-white/20 bg-black/45 px-2.5 py-1.5 font-mono text-[7px] uppercase tracking-[.14em] text-white backdrop-blur-md sm:left-4 sm:top-4">
        <span className="size-1.5 rounded-full bg-[#b8ff3d] shadow-[0_0_10px_#b8ff3d]" /> GeoField App
      </div>
      <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between sm:bottom-4 sm:left-4 sm:right-4">
        <div>
          <p className="text-[7px] uppercase tracking-widest text-white/60">Geoportal · análisis espacial</p>
          <p className="mt-1 text-xs font-semibold text-white">Mapas que ayudan a leer el territorio.</p>
        </div>
        <div className="grid size-8 place-items-center rounded-full border border-white/20 bg-black/35 text-[#b8ff3d] backdrop-blur-md">
          <MapPin className="size-3.5" />
        </div>
      </div>
    </div>
  );
}

function BiometricMockup() {
  return (
    <div className="relative h-full overflow-hidden bg-[#17191d]">
      <Image
        src="/biometric.jpeg"
        alt="Sistema de identificación biométrica BioID"
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className="object-cover object-center transition duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10" />
      <div className="absolute left-3 top-3 flex items-center gap-2 rounded-full border border-white/20 bg-black/45 px-2.5 py-1.5 font-mono text-[7px] uppercase tracking-[.14em] text-white backdrop-blur-md sm:left-4 sm:top-4">
        <span className="size-1.5 rounded-full bg-emerald-300 shadow-[0_0_10px_#6ee7b7]" /> BioID System
      </div>
      <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between sm:bottom-4 sm:left-4 sm:right-4">
        <div>
          <p className="text-[7px] uppercase tracking-widest text-white/60">Identificación · trazabilidad</p>
          <p className="mt-1 text-xs font-semibold text-white">Registro biométrico en un flujo claro.</p>
        </div>
        <div className="rounded-full border border-emerald-300/35 bg-emerald-300/15 px-2 py-1 font-mono text-[7px] text-emerald-200 backdrop-blur-md">
          VERIFIED
        </div>
      </div>
    </div>
  );
}

function CadMockup() {
  return (
    <div className="relative h-full overflow-hidden bg-[#0f1615]">
      <Image
        src="/autocad.jpeg"
        alt="Agente de inteligencia artificial integrado con AutoCAD"
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className="object-cover object-center transition duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/10" />
      <div className="absolute left-3 top-3 flex items-center gap-2 rounded-full border border-white/20 bg-black/45 px-2.5 py-1.5 font-mono text-[7px] uppercase tracking-[.14em] text-white backdrop-blur-md sm:left-4 sm:top-4">
        <span className="size-1.5 rounded-full bg-cyan-300 shadow-[0_0_10px_#67e8f9]" /> AutoDraft AI
      </div>
      <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between sm:bottom-4 sm:left-4 sm:right-4">
        <div>
          <p className="text-[7px] uppercase tracking-widest text-white/60">AutoCAD · agente inteligente</p>
          <p className="mt-1 text-xs font-semibold text-white">Instrucciones que se convierten en dibujo.</p>
        </div>
        <div className="rounded-full border border-cyan-300/35 bg-cyan-300/15 px-2 py-1 font-mono text-[7px] text-cyan-200 backdrop-blur-md">
          AI READY
        </div>
      </div>
    </div>
  );
}

function CommerceMockup() {
  return (
    <div className="relative h-full overflow-hidden bg-[#dfe1e5] p-3 text-stone-900">
      <Image
        src="/tenis.jpeg"
        alt="Tienda en línea de calzado urbano"
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className="z-10 object-cover object-center transition duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/70 via-transparent to-black/5" />
      <div className="absolute left-3 top-3 z-30 flex items-center gap-2 rounded-full border border-black/10 bg-white/75 px-2.5 py-1.5 font-mono text-[7px] uppercase tracking-[.14em] text-black backdrop-blur-md sm:left-4 sm:top-4">
        <span className="size-1.5 rounded-full bg-violet-600" /> Urbano Shoes
      </div>
      <div className="absolute bottom-3 left-3 right-3 z-30 flex items-end justify-between sm:bottom-4 sm:left-4 sm:right-4">
        <div>
          <p className="text-[7px] uppercase tracking-widest text-white/70">E-commerce · experiencia de compra</p>
          <p className="mt-1 text-xs font-semibold text-white">Una tienda clara para elegir mejor.</p>
        </div>
        <div className="grid size-8 place-items-center rounded-full bg-white text-black shadow-lg">
          <ShoppingBag className="size-3.5" />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-[9px] font-black tracking-tighter">URBANO SHOES</p>
        <ShoppingBag className="size-3" />
      </div>
      <div className="mt-3 grid grid-cols-[1.1fr_.9fr] gap-2">
        <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-orange-200 via-stone-200 to-emerald-200 p-3">
          <p className="text-[6px] uppercase tracking-widest text-stone-500">Nueva colección</p>
          <p className="mt-1 max-w-24 text-base font-semibold leading-4 tracking-tight">Calzado urbano con estilo limpio.</p>
          <span className="mt-5 inline-flex rounded-full bg-stone-900 px-2.5 py-1 text-[6px] text-white">Comprar ahora</span>
          <Box className="absolute bottom-2 right-2 size-11 rotate-6 text-stone-800/20" />
        </div>
        <div className="space-y-2">
          {["Sneaker", "Runner", "Street"].map((label, index) => (
            <div key={label} className="rounded-lg bg-white p-1.5 shadow-sm">
              <div className={`h-10 rounded ${index === 0 ? "bg-stone-300" : index === 1 ? "bg-emerald-200" : "bg-orange-200"}`} />
              <div className="mt-1 flex items-center justify-between">
                <span className="h-1 w-8 rounded bg-stone-300" />
                <span className="text-[6px] font-bold">${index ? "89" : "64"}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-2 grid grid-cols-3 gap-2">
        {["#1", "#2", "#3"].map((item, index) => (
          <div key={item} className="rounded-lg border border-stone-200 bg-white p-2">
            <div className={`h-12 rounded ${index === 0 ? "bg-stone-100" : index === 1 ? "bg-orange-100" : "bg-emerald-100"}`} />
            <p className="mt-2 text-[7px] uppercase tracking-[.14em] text-stone-400">Modelo {item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function AgroMockup() {
  return (
    <div className="relative h-full overflow-hidden bg-[#354c25]">
      <div className="absolute inset-0 [background-image:linear-gradient(17deg,transparent_47%,rgba(219,244,170,.15)_48%,rgba(219,244,170,.15)_51%,transparent_52%)] [background-size:24px_24px]" />
      <div className="absolute left-[8%] top-[15%] h-[64%] w-[40%] rotate-[-8deg] rounded-[45%] border-2 border-lime-300/60 bg-lime-300/10" />
      <div className="absolute left-[28%] top-[35%] size-3 rounded-full border-2 border-white bg-orange-400" />
      <div className="absolute right-3 top-3 w-24 rounded-lg border border-white/10 bg-black/30 p-2 backdrop-blur">
        <div className="flex items-center gap-1 text-[7px] font-semibold text-white">
          <Sprout className="size-2.5 text-lime-300" /> Crop health
        </div>
        <div className="mt-2 flex items-end gap-1">
          {[45, 72, 54, 88, 68, 92].map((value, index) => (
            <span key={index} className="w-2 rounded-t bg-lime-300/50" style={{ height: `${value / 4}px` }} />
          ))}
        </div>
      </div>
      <div className="absolute bottom-3 right-3 flex gap-1 rounded-md bg-black/35 p-1.5 text-[6px] text-white/60">
        <Activity className="size-2.5 text-lime-300" /> NDVI 0.78
      </div>
    </div>
  );
}

function DataMockup() {
  const nodes = [
    { icon: Database, label: "PostgreSQL", x: "left-3", tone: "text-cyan-300" },
    { icon: Workflow, label: "ETL", x: "left-1/2 -translate-x-1/2", tone: "text-violet-300" },
    { icon: PackageCheck, label: "API", x: "right-3", tone: "text-emerald-300" },
  ];

  return (
    <div className="relative h-full overflow-hidden p-4">
      <p className="text-[7px] font-semibold uppercase tracking-widest text-white/30">Pipeline monitor</p>
      <div className="absolute left-[18%] right-[18%] top-[49%] h-px bg-gradient-to-r from-cyan-300/40 via-violet-300/40 to-emerald-300/40" />
      {nodes.map(({ icon: Icon, label, x, tone }) => (
        <div key={label} className={`absolute top-[35%] ${x} w-20 rounded-lg border border-white/10 bg-white/5 p-2 text-center`}>
          <Icon className={`mx-auto size-4 ${tone}`} />
          <p className="mt-1 text-[7px] font-medium text-white">{label}</p>
          <span className="mt-1 inline-flex items-center gap-0.5 text-[5px] text-emerald-300">
            <span className="size-1 rounded-full bg-emerald-300" /> Healthy
          </span>
        </div>
      ))}
      <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between rounded-md bg-white/[.035] px-2 py-1.5">
        <span className="text-[6px] text-white/35">18.4M records processed</span>
        <span className="text-[6px] font-medium text-emerald-300">100%</span>
      </div>
    </div>
  );
}

function PhotogrammetryMockup() {
  return (
    <div className="grid h-full grid-cols-[1.08fr_.92fr] bg-[#11161a] p-3">
      <div className="relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-slate-800 via-slate-900 to-zinc-950">
        <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(148,163,184,.14)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,.14)_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="absolute left-1/2 top-1/2 h-[66%] w-[66%] -translate-x-1/2 -translate-y-1/2 rounded-[28%] border border-cyan-300/20 bg-[radial-gradient(circle_at_45%_35%,rgba(56,189,248,.26),transparent_32%),radial-gradient(circle_at_60%_70%,rgba(52,211,153,.22),transparent_28%)]" />
        <div className="absolute left-[12%] top-[18%] size-2 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(110,231,183,.8)]" />
        <div className="absolute right-[14%] top-[26%] size-2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,.8)]" />
        <div className="absolute bottom-[17%] left-[30%] size-2 rounded-full bg-orange-300 shadow-[0_0_12px_rgba(251,191,36,.8)]" />
        <div className="absolute left-4 top-4 rounded-lg border border-white/10 bg-black/40 px-2 py-1 backdrop-blur">
          <p className="text-[6px] uppercase tracking-widest text-white/35">PhotoFlow Portal</p>
        </div>
        <div className="absolute bottom-3 left-3 rounded-md border border-white/10 bg-black/35 px-2 py-1 text-[6px] text-white/45">
          Orthomosaic / mesh / preview
        </div>
      </div>
      <div className="space-y-2 pl-2">
        <div className="rounded-xl border border-white/10 bg-white/5 p-2">
          <p className="text-[7px] uppercase tracking-[.16em] text-white/35">Task queue</p>
          <div className="mt-2 space-y-2">
            {[
              ["Upload", "100%"],
              ["Align", "78%"],
              ["Build", "42%"],
            ].map(([label, progress]) => (
              <div key={label} className="rounded-lg bg-black/25 p-2">
                <div className="flex items-center justify-between text-[6px] text-white/55">
                  <span>{label}</span>
                  <span>{progress}</span>
                </div>
                <div className="mt-1 h-1 rounded-full bg-white/8">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-cyan-300 to-emerald-300"
                    style={{ width: progress }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/[.03] p-2">
          <div className="flex items-center gap-1.5 text-[7px] font-semibold text-white">
            <PackageCheck className="size-3 text-emerald-300" /> Processing
          </div>
          <p className="mt-2 text-[6px] leading-3 text-white/35">
            Portal para monitorear el procesamiento fotogramétrico sin perder visibilidad del flujo.
          </p>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/[.03] p-2">
          <div className="flex items-center justify-between">
            <span className="text-[6px] uppercase tracking-[.16em] text-white/35">Results</span>
            <span className="text-[6px] text-emerald-300">Ready</span>
          </div>
          <div className="mt-2 grid grid-cols-2 gap-1">
            <span className="h-12 rounded bg-slate-700" />
            <span className="h-12 rounded bg-slate-800" />
          </div>
        </div>
      </div>
    </div>
  );
}
