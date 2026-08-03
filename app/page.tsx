import Link from "next/link";
export default function Home() {
  return (
    <main className="min-h-screen bg-amber-50 text-stone-900">
      <section className="max-w-6xl mx-auto px-8 py-28 text-center">

        <p className="uppercase tracking-[0.3em] text-green-700 font-semibold">
          Desert Survivors Community Project
        </p>

        <h1 className="text-6xl font-bold mt-6">
          🌵 Desert Habitat Audit
        </h1>

        <p className="text-xl mt-8 max-w-3xl mx-auto text-stone-600 leading-relaxed">
          Helping every yard become part of the Sonoran Desert ecosystem.
          Discover how native plants can support wildlife, conserve water,
          and create beautiful, resilient landscapes.
        </p>

<Link
  href="/habitat-builder"
  className="inline-block mt-12 rounded-xl bg-green-700 px-8 py-4 text-xl font-semibold text-white hover:bg-green-800 transition"
>
  Begin Your Habitat Journey
</Link>

        <div className="mt-20 grid gap-6 md:grid-cols-4">

          <div className="rounded-xl bg-white p-6 shadow">
            <div className="text-4xl">🦋</div>
            <h3 className="mt-4 font-bold text-lg">Pollinators</h3>
            <p className="text-stone-600 mt-2">
              Support butterflies and native bees with locally adapted plants.
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow">
            <div className="text-4xl">💧</div>
            <h3 className="mt-4 font-bold text-lg">Water Conservation</h3>
            <p className="text-stone-600 mt-2">
              Replace thirsty landscapes with beautiful native habitat.
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow">
            <div className="text-4xl">🐦</div>
            <h3 className="mt-4 font-bold text-lg">Wildlife Habitat</h3>
            <p className="text-stone-600 mt-2">
              Create places where birds, reptiles, and beneficial insects thrive.
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow">
            <div className="text-4xl">🌳</div>
            <h3 className="mt-4 font-bold text-lg">Riparian Refuge</h3>
            <p className="text-stone-600 mt-2">
              Explore layered native landscapes inspired by Arizona's streamside habitats.
            </p>
          </div>

        </div>

      </section>
    </main>
  );
}