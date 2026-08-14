import { createCvPdf } from "@/lib/create-cv-pdf";

export const dynamic = "force-static";

export function GET() {
  const pdf = createCvPdf();

  return new Response(pdf, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="cv-eduardo-esquivel-salaszar.pdf"',
      "Content-Length": String(pdf.byteLength),
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  });
}
