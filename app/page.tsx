"use client";

import { useState } from "react";

export default function Home() {
  const [date, setDate] = useState<string>("");

  const getCarbonIndex = async () => {
    const res = await fetch("/api/lookup");
    const data = await res.json();
    console.log(data)
  };

  const fetchHistory = () => {

  };

  const handleSubmit = () => {
    getCarbonIndex();
    fetchHistory();
  };

  return (
    <div className="">
      <main className="p-10">
        <h1 className="mb-10">Carbon Footprint App</h1>
        <label>
          Please select the date you want to check the carbon index for:
        </label>
        <br />
        <input
          type="date"
          className="p-2 w-100 border-1"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <br />
        <br />
        <button
          type="button"
          onClick={() => handleSubmit()}
          className="p-3 w-50"
        >
          Look up
        </button>

        <h2 className="mt-10">History</h2>
        <hr className="mb-10" />
        <table>
          <thead>
            <th>Date</th>
            <th>Description</th>
            <th>Score</th>
            <th>Created At</th>
          </thead>
          <tbody>
            <tr>
              <td></td>
            </tr>
          </tbody>
        </table>
      </main>
    </div>
  );
}
