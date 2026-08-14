import {
  Activity,
  Box,
  Check,
  CircleUserRound,
  Crosshair,
  Database,
  Layers3,
  MapPin,
  Move3d,
  PackageCheck,
  ScanFace,
  ShoppingBag,
  Sprout,
  Workflow,
} from "lucide-react";
import type { ProjectVisual as ProjectVisualType } from "@/types";

type ProjectVisualProps = {
  type: ProjectVisualType;
};

const browserChrome = (
  <div className="flex h-8 items-center gap-1.5 border-b border-white/10 px-3">
    <span className="size-1.5 rounded-full bg-red-300/70" />
    <span className="size-1.5 rounded-full bg-amber-300/70" />
    <span className="size-1.5 rounded-full bg-emerald-300/70" />
    <span className="ml-3 h-2.5 w-24 rounded-full bg-white/8" />
  </div>
);

export function ProjectVisual({ type }: ProjectVisualProps) {
  return (
    <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(52,211,153,.2),transparent_40%)]" />
      <div className="absolute inset-x-5 bottom-0 top-5 overflow-hidden rounded-t-xl border border-white/10 bg-[#151917] shadow-2xl sm:inset-x-7 sm:top-7">
        {browserChrome}
        {type === "map" ? <MapMockup /> : null}
        {type === "face" ? <FaceMockup /> : null}
        {type === "cad" ? <CadMockup /> : null}
        {type === "commerce" ? <CommerceMockup /> : null}
        {type === "agro" ? <AgroMockup /> : null}
        {type === "data" ? <DataMockup /> : null}
      </div>
    </div>
  );
}

function MapMockup() {
  return (
    <div className="grid h-full grid-cols-[34px_1fr]">
      <div className="flex flex-col items-center gap-2 border-r border-white/8 py-3">
        <Layers3 className="size-3 text-emerald-300" />
        <span className="size-3 rounded bg-white/10" />
        <span className="size-3 rounded bg-white/5" />
      </div>
      <div className="relative overflow-hidden bg-[#1f3227]">
        <div className="absolute inset-0 opacity-50 [background-image:linear-gradient(45deg,transparent_49%,rgba(255,255,255,.12)_50%,transparent_51%),linear-gradient(-45deg,transparent_49%,rgba(255,255,255,.07)_50%,transparent_51%)] [background-size:38px_38px]" />
        <div className="absolute -left-8 top-8 h-20 w-44 rotate-12 rounded-[50%] border-[7px] border-cyan-300/20" />
        <div className="absolute right-[20%] top-[36%] grid size-7 place-items-center rounded-full border-2 border-white bg-emerald-400 text-emerald-950">
          <MapPin className="size-3" />
        </div>
        <div className="absolute bottom-3 left-3 rounded-md border border-white/10 bg-black/35 px-2.5 py-2 backdrop-blur">
          <p className="text-[6px] uppercase tracking-widest text-white/35">Capas activas</p>
          <p className="mt-1 text-[10px] font-semibold text-white">24 datasets</p>
        </div>
      </div>
    </div>
  );
}

function FaceMockup() {
  return (
    <div className="grid h-full grid-cols-[1fr_.62fr] gap-2 p-3">
      <div className="relative overflow-hidden rounded-lg bg-gradient-to-b from-slate-700 to-slate-900">
        <CircleUserRound className="absolute left-1/2 top-1/2 size-20 -translate-x-1/2 -translate-y-1/2 text-white/25" />
        <div className="absolute left-1/2 top-1/2 size-24 -translate-x-1/2 -translate-y-1/2 border border-emerald-300/70">
          <span className="absolute -left-px -top-px size-3 border-l-2 border-t-2 border-emerald-300" />
          <span className="absolute -right-px -top-px size-3 border-r-2 border-t-2 border-emerald-300" />
          <span className="absolute -bottom-px -left-px size-3 border-b-2 border-l-2 border-emerald-300" />
          <span className="absolute -bottom-px -right-px size-3 border-b-2 border-r-2 border-emerald-300" />
        </div>
        <Crosshair className="absolute left-1/2 top-1/2 size-5 -translate-x-1/2 -translate-y-1/2 text-emerald-300/70" />
        <span className="absolute bottom-2 left-2 rounded bg-emerald-400 px-1.5 py-1 text-[6px] font-bold text-emerald-950">
          MATCH 98.4%
        </span>
      </div>
      <div className="space-y-2">
        <div className="rounded-lg border border-white/8 bg-white/5 p-2">
          <ScanFace className="size-3 text-emerald-300" />
          <p className="mt-3 text-[10px] font-semibold text-white">Identidad validada</p>
          <p className="text-[6px] text-white/35">hace 2 segundos</p>
        </div>
        {[1, 2, 3].map((item) => (
          <div key={item} className="flex items-center gap-1.5 rounded-md bg-white/[.035] p-1.5">
            <span className="grid size-4 place-items-center rounded bg-white/8 text-[6px] text-white/30">0{item}</span>
            <span className="h-1 w-8 rounded bg-white/10" />
            <Check className="ml-auto size-2.5 text-emerald-300/70" />
          </div>
        ))}
      </div>
    </div>
  );
}

function CadMockup() {
  return (
    <div className="grid h-full grid-cols-[1fr_.55fr]">
      <div className="relative border-r border-white/8 bg-[#101716] [background-image:linear-gradient(rgba(52,211,153,.07)_1px,transparent_1px),linear-gradient(90deg,rgba(52,211,153,.07)_1px,transparent_1px)] [background-size:18px_18px]">
        <div className="absolute left-[21%] top-[22%] h-[54%] w-[58%] border border-cyan-300/45">
          <div className="absolute -right-5 top-1/2 h-px w-[calc(100%+2.5rem)] bg-cyan-300/25" />
          <div className="absolute -top-5 left-1/2 h-[calc(100%+2.5rem)] w-px bg-cyan-300/25" />
          <span className="absolute -left-1 -top-1 size-2 border border-emerald-300 bg-[#101716]" />
          <span className="absolute -bottom-1 -right-1 size-2 border border-emerald-300 bg-[#101716]" />
        </div>
        <Move3d className="absolute bottom-2 left-2 size-3 text-white/30" />
      </div>
      <div className="p-2.5">
        <div className="flex items-center gap-1.5">
          <span className="grid size-5 place-items-center rounded-md bg-violet-400 text-[7px] font-bold text-violet-950">AI</span>
          <p className="text-[8px] font-semibold text-white">CAD Copilot</p>
        </div>
        <div className="mt-3 rounded-md bg-white/5 p-2 text-[6px] leading-3 text-white/45">
          Dibuja la planta con acceso al norte y acota los muros.
        </div>
        <div className="mt-2 rounded-md border border-emerald-300/15 bg-emerald-300/5 p-2">
          <div className="flex items-center gap-1 text-[6px] text-emerald-200">
            <Check className="size-2" /> 8 acciones ejecutadas
          </div>
          <div className="mt-2 space-y-1">
            <span className="block h-1 w-full rounded bg-white/8" />
            <span className="block h-1 w-2/3 rounded bg-white/8" />
          </div>
        </div>
      </div>
    </div>
  );
}

function CommerceMockup() {
  return (
    <div className="h-full bg-[#f4f1e9] p-3 text-stone-900">
      <div className="flex items-center justify-between">
        <p className="text-[9px] font-black tracking-tighter">NÓMADA</p>
        <ShoppingBag className="size-3" />
      </div>
      <div className="mt-3 grid grid-cols-[1.2fr_.8fr] gap-2">
        <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-orange-200 via-stone-200 to-emerald-200 p-3">
          <p className="text-[6px] uppercase tracking-widest text-stone-500">Nueva colección</p>
          <p className="mt-1 max-w-24 text-base font-semibold leading-4 tracking-tight">Diseño que viaja contigo.</p>
          <span className="mt-5 inline-flex rounded-full bg-stone-900 px-2.5 py-1 text-[6px] text-white">Descubrir</span>
          <Box className="absolute bottom-2 right-2 size-11 rotate-6 text-stone-800/20" />
        </div>
        <div className="space-y-2">
          {["bg-stone-300", "bg-emerald-200"].map((color, index) => (
            <div key={color} className="rounded-lg bg-white p-1.5 shadow-sm">
              <div className={`h-10 rounded ${color}`} />
              <div className="mt-1 flex items-center justify-between">
                <span className="h-1 w-8 rounded bg-stone-300" />
                <span className="text-[6px] font-bold">${index ? "89" : "64"}</span>
              </div>
            </div>
          ))}
        </div>
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
    { icon: Database, label: "PostGIS", x: "left-3", tone: "text-cyan-300" },
    { icon: Workflow, label: "ETL", x: "left-1/2 -translate-x-1/2", tone: "text-violet-300" },
    { icon: PackageCheck, label: "API", x: "right-3", tone: "text-emerald-300" },
  ];

  return (
    <div className="relative h-full overflow-hidden p-4">
      <p className="text-[7px] font-semibold uppercase tracking-widest text-white/30">Pipeline monitor</p>
      <div className="absolute left-[18%] right-[18%] top-[49%] h-px bg-gradient-to-r from-cyan-300/40 via-violet-300/40 to-emerald-300/40" />
      {nodes.map(({ icon: Icon, label, x, tone }) => (
        <div key={label} className={`absolute top-[35%] ${x} w-16 rounded-lg border border-white/10 bg-white/5 p-2 text-center`}>
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
