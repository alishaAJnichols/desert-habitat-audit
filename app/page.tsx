import Link from "next/link";
export default function Home() {
  return (
    <main className="min-h-screen bg-amber-50 text-stone-900">
      <section className="max-w-6xl mx-auto px-8 py-28 text-center">

        <p className="uppercase tracking-[0.3em] text-green-700 font-semibold">
          Desert Survivors Community Project
        </p>

        <h1 className="text-6xl font-bold mt-6">
  🌵 Habitat Builder
</h1>

       <p className="text-xl mt-8 max-w-3xl mx-auto text-stone-600 leading-relaxed">
  Habitat belongs to everyone.
  <br /><br />
  A window ledge can support life.
  A balcony can become a tiny oasis.
  A yard can become a wildlife corridor.
  And 40 acres can become a restoration project.
  <br /><br />
  Habitat Builder is for Tucson's many different spaces, people, and possibilities.
  <br /><br />
  You don't need a big yard to make a difference.
  Start with what you have, and discover what could grow there.
</p>

<Link
  href="/habitat-builder"
  className="inline-block mt-12 rounded-xl bg-green-700 px-8 py-4 text-xl font-semibold text-white hover:bg-green-800 transition"
>
 🌿 Build My Habitat
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