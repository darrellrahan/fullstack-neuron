import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch("http://neuronworks.free.nf/api/home");
  const data = await res.json();

  return NextResponse.json({ data });
}
