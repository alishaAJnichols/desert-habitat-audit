"use client";
import { useState } from "react";
import Link from "next/link";
function FieldNote({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mt-12 rounded-xl bg-green-50 border border-green-200 p-6 shadow-sm">
      <h2 className="font-bold text-green-700 text-lg">
        🌿 Field Note
      </h2>

      <p className="mt-3 text-stone-700 leading-relaxed">
        {children}
      </p>
    </div>
  );
}
export default function HabitatBuilderPage() {
  const [selectedSun, setSelectedSun] = useState("");
  const [selectedWildlife, setSelectedWildlife] = useState("");
  const [selectedSpace, setSelectedSpace] = useState("");
  const [selectedCare, setSelectedCare] = useState("");
  const [step, setStep] = useState(1);
  return (
    <main className="min-h-screen bg-amber-50 text-stone-900">
      <section className="max-w-3xl mx-auto px-8 py-20">

        <p className="text-green-700 font-semibold">
  Step {step} of 5
</p>

<div
  className="bg-green-700 h-3 rounded-full transition-all duration-500"
  style={{ width: `${step * 20}%` }}
></div>

{step === 1 && (
  <>
    <h1 className="text-5xl font-bold">
          ☀️ Sun Exposure
        </h1>

        <p className="text-xl text-stone-600 mt-6">
          How much sun does this area receive during the growing season?
        </p>

        <div className="mt-10 space-y-4">

<button
  onClick={() => setSelectedSun("Full Sun")}
  className={`w-full rounded-xl border p-5 text-left transition ${
    selectedSun === "Full Sun"
      ? "bg-green-700 text-white"
      : "bg-white hover:bg-green-50"
  }`}
>
  🌞 Full Sun
</button>

<button
  onClick={() => setSelectedSun("Part Sun")}
  className={`w-full rounded-xl border p-5 text-left transition ${
    selectedSun === "Part Sun"
      ? "bg-green-700 text-white"
      : "bg-white hover:bg-green-50"
  }`}
>
  🌤 Part Sun (3–6 hours)
</button>

         <button
  onClick={() => setSelectedSun("Mostly Shade")}
  className={`w-full rounded-xl border p-5 text-left transition ${
    selectedSun === "Mostly Shade"
      ? "bg-green-700 text-white"
      : "bg-white hover:bg-green-50"
  }`}
>
  🌳 Mostly Shade
</button>

<button
  onClick={() => setSelectedSun("Not Sure")}
  className={`w-full rounded-xl border p-5 text-left transition ${
    selectedSun === "Not Sure"
      ? "bg-green-700 text-white"
      : "bg-white hover:bg-green-50"
  }`}
>
  ❓ I'm not sure
</button>

</div> 

<FieldNote>
  Sunlight changes throughout the year. It's perfectly okay if you're
  estimating today. We'll still recommend native plants that fit your space.
</FieldNote>

</>
)}

{step === 2 && (
  <>
    <h1 className="text-5xl font-bold">
      🌱 What life would you like to welcome?
    </h1>

    <p className="text-xl text-stone-600 mt-6">
      Every yard has the potential to become habitat. Which visitors would you
      most like to support?
    </p>

    <div className="mt-10 space-y-4">

<button
  onClick={() => setSelectedWildlife("Butterflies")}
  className={`w-full rounded-xl border p-5 text-left transition ${
    selectedWildlife === "Butterflies"
      ? "bg-green-700 text-white"
      : "bg-white hover:bg-green-50"
  }`}
>
  🦋 Butterflies
</button>

<button
  onClick={() => setSelectedWildlife("Native Bees")}
  className={`w-full rounded-xl border p-5 text-left transition ${
    selectedWildlife === "Native Bees"
      ? "bg-green-700 text-white"
      : "bg-white hover:bg-green-50"
  }`}
>
  🐝 Native Bees
</button>

<button
  onClick={() => setSelectedWildlife("Birds")}
  className={`w-full rounded-xl border p-5 text-left transition ${
    selectedWildlife === "Birds"
      ? "bg-green-700 text-white"
      : "bg-white hover:bg-green-50"
  }`}
>
  🐦 Birds
</button>

<button
  onClick={() => setSelectedWildlife("Desert Wildlife")}
  className={`w-full rounded-xl border p-5 text-left transition ${
    selectedWildlife === "Desert Wildlife"
      ? "bg-green-700 text-white"
      : "bg-white hover:bg-green-50"
  }`}
>
  🦎 Desert Wildlife
</button>
<button
  onClick={() => setSelectedWildlife("Everything")}
  className={`w-full rounded-xl border p-5 text-left transition ${
    selectedWildlife === "Everything"
      ? "bg-green-700 text-white"
      : "bg-white hover:bg-green-50"
  }`}
>
  🌵 I want to support everything I can
</button>

    </div>

<FieldNote>
  Even a few native flowers can become an important stop for butterflies,
  native bees, hummingbirds, and other wildlife.
</FieldNote>

  </>
)}

{step === 3 && (
  <>
    <h1 className="text-5xl font-bold">
      🌿 Tell us about your space
    </h1>

    <p className="text-xl text-stone-600 mt-6">
      Every space has potential. Which best describes the area you're planting?
    </p>

    <div className="mt-10 space-y-4">

      <button
        onClick={() => setSelectedSpace("Small")}
        className={`w-full rounded-xl border p-5 text-left transition ${
          selectedSpace === "Small"
            ? "bg-green-700 text-white"
            : "bg-white hover:bg-green-50"
        }`}
      >
        🪴 Small garden or planter
      </button>

      <button
        onClick={() => setSelectedSpace("Medium")}
        className={`w-full rounded-xl border p-5 text-left transition ${
          selectedSpace === "Medium"
            ? "bg-green-700 text-white"
            : "bg-white hover:bg-green-50"
        }`}
      >
        🌼 Small section of my yard
      </button>

      <button
        onClick={() => setSelectedSpace("Large")}
        className={`w-full rounded-xl border p-5 text-left transition ${
          selectedSpace === "Large"
            ? "bg-green-700 text-white"
            : "bg-white hover:bg-green-50"
        }`}
      >
        🌳 Most of my yard
      </button>

      <button
        onClick={() => setSelectedSpace("Unsure")}
        className={`w-full rounded-xl border p-5 text-left transition ${
          selectedSpace === "Unsure"
            ? "bg-green-700 text-white"
            : "bg-white hover:bg-green-50"
        }`}
      >
        🤔 I'm still planning
      </button>

    </div>

<FieldNote>
  Habitat doesn't begin with a large yard. A single container, courtyard,
  or garden corner can make a meaningful difference.
</FieldNote>

</>
)}

{step === 4 && (
  <>
    <h1 className="text-5xl font-bold">
      💧 Caring for Your Habitat
    </h1>

    <p className="text-xl text-stone-600 mt-6">
      As your habitat becomes established, what feels realistic for you?
    </p>

    <div className="mt-10 space-y-4">

      <button
        onClick={() => setSelectedCare("Independent")}
        className={`w-full rounded-xl border p-5 text-left transition ${
          selectedCare === "Independent"
            ? "bg-green-700 text-white"
            : "bg-white hover:bg-green-50"
        }`}
      >
        🌵 I'd like a landscape that becomes very independent.
      </button>

      <button
        onClick={() => setSelectedCare("Occasional")}
        className={`w-full rounded-xl border p-5 text-left transition ${
          selectedCare === "Occasional"
            ? "bg-green-700 text-white"
            : "bg-white hover:bg-green-50"
        }`}
      >
        🌿 I can check in and water occasionally.
      </button>

      <button
        onClick={() => setSelectedCare("Hands-On")}
        className={`w-full rounded-xl border p-5 text-left transition ${
          selectedCare === "Hands-On"
            ? "bg-green-700 text-white"
            : "bg-white hover:bg-green-50"
        }`}
      >
        💙 I enjoy spending time caring for my plants.
      </button>

      <button
        onClick={() => setSelectedCare("Unsure")}
        className={`w-full rounded-xl border p-5 text-left transition ${
          selectedCare === "Unsure"
            ? "bg-green-700 text-white"
            : "bg-white hover:bg-green-50"
        }`}
      >
        🤔 I'm still figuring that out.
      </button>

    </div>

<FieldNote>
  Native plants reward patience. As they establish their roots,
  many become surprisingly independent while continuing to support wildlife.
</FieldNote>

  </>
)}

{step === 5 && (
  <>
    <h1 className="text-5xl font-bold">
      🌵 Your Habitat Blueprint
    </h1>

    <p className="text-xl text-stone-600 mt-6">
      Every yard has the potential to become habitat.
    </p>

    <div className="mt-10 rounded-xl bg-white shadow p-8 space-y-4">

      <p><strong>☀️ Sun:</strong> {selectedSun || "Not selected"}</p>

      <p><strong>🦋 Wildlife:</strong> {selectedWildlife || "Not selected"}</p>

      <p><strong>🌼 Space:</strong> {selectedSpace || "Not selected"}</p>

      <p><strong>💧 Care:</strong> {selectedCare || "Not selected"}</p>

    </div>

    <FieldNote>
      Every native plant you add creates another opportunity
      for butterflies, birds, bees, and desert wildlife.
    </FieldNote>

<button
  disabled
  className="mt-10 w-full rounded-xl bg-green-700 p-5 text-white text-xl font-semibold opacity-70 cursor-not-allowed"
>
  🌿 Habitat Plans Coming Soon
</button>

  </>
)}

<div className="mt-8 flex justify-end">
 <button
  onClick={() => {
    if (step < 5) {
      setStep(step + 1);
    }
  }}
  disabled={
    (step === 1 && !selectedSun) ||
    (step === 2 && !selectedWildlife) ||
    (step === 3 && !selectedSpace) ||
    (step === 4 && !selectedCare)
  }
  className="rounded-full bg-green-700 px-6 py-3 text-white transition disabled:opacity-50 disabled:cursor-not-allowed hover:bg-green-800"
>

{step === 5 ? "Finished 🌵" : "Next →"}

  </button>
</div>

<div className="mt-12 text-center">
  <Link
    href="/"
    className="inline-block rounded-full border border-green-700 px-6 py-3 text-green-700 hover:bg-green-700 hover:text-white transition"
  >
    ← Back to Home
  </Link>
</div>

      </section>
    </main>
  );
}