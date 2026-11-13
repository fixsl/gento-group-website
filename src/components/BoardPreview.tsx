const directors = [
  { name: 'Maurice Nathaniel Cole', role: 'Chairman' },
  { name: 'Mohamed Gento Kamara', role: 'Chief Executive Officer' },
  { name: 'Giovanni Pirrone', role: 'Executive Director' },
  { name: 'Michala Mackay', role: 'Non-Executive Director' },
  { name: 'Kawusu Kebbay', role: 'Non-Executive Director' },
]

export function BoardPreview() {
  return (
    <section className="bg-[#f3f1ea] px-6 py-20 sm:py-28 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-800">Leadership & governance</p>
          <h2 className="mt-5 max-w-xl font-serif text-4xl font-medium leading-tight tracking-tight text-green-950 sm:text-5xl">
            Experience that guides our direction.
          </h2>
          <p className="mt-6 max-w-lg text-base leading-7 text-stone-600">
            Our Board brings together leaders in infrastructure, finance, law, public service and economic development.
          </p>
          <a href="/board-of-directors" className="mt-8 inline-flex items-center border-b border-green-950 pb-2 text-sm font-semibold text-green-950 transition hover:border-amber-700 hover:text-amber-800">
            Meet the Board <span className="ml-3" aria-hidden="true">→</span>
          </a>
        </div>
        <ol className="divide-y divide-stone-300 border-y border-stone-300">
          {directors.map((director, index) => (
            <li key={director.name} className="flex items-baseline gap-5 py-4 sm:py-5">
              <span className="w-7 shrink-0 text-xs font-semibold tracking-[0.12em] text-amber-800">{String(index + 1).padStart(2, '0')}</span>
              <div className="flex flex-1 flex-col justify-between gap-1 sm:flex-row sm:items-baseline sm:gap-6">
                <span className="font-serif text-xl font-medium text-green-950 sm:text-2xl">{director.name}</span>
                <span className="text-xs font-semibold uppercase tracking-[0.12em] text-stone-500">{director.role}</span>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
