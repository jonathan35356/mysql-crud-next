import { NextResponse } from "next/server";
export function GET() {
  return NextResponse.json({ message: "Listando productos" });
}

export function POST() {
  return NextResponse.json({ message: "creando nuevo producto" });
}
