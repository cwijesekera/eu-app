import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch("https://api.sampleapis.com/baseball/hitsSingleSeason");

    if (!res.ok) {
      return NextResponse.json(
        { error: "Upstream API failed", status: res.status },
        { status: 502 }
      );
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json(
      { error: "Server error", message: err instanceof Error ? err.message : String(err) },
      { status: 500 }
    );
  }
}
