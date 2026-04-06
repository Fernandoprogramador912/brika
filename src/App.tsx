import bano1 from './assets/gallery/banos/bano-1.jpg'
import bano2 from './assets/gallery/banos/bano-2.jpg'
import bano3 from './assets/gallery/banos/bano-3.jpg'
import bano4 from './assets/gallery/banos/bano-4.jpg'
import cocina1 from './assets/gallery/cocinas/cocina-1.jpg'
import cocina2 from './assets/gallery/cocinas/cocina-2.jpg'
import cocina3 from './assets/gallery/cocinas/cocina-3.jpg'
import cocina4 from './assets/gallery/cocinas/cocina-4.webp'

const HERO_KITCHEN =
  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2400&q=85'

const KITCHENS = [
  {
    src: cocina1,
    alt: 'Cocina moderna con muebles en gris oscuro, madera y mesada clara',
  },
  {
    src: cocina2,
    alt: 'Cocina minimalista con alacenas brillantes, mesada blanca y mesada de mármol',
  },
  {
    src: cocina3,
    alt: 'Cocina con isla en mármol oscuro, iluminación colgante y electrodomésticos integrados',
  },
  {
    src: cocina4,
    alt: 'Cocina contemporánea con diseño limpio y mobiliario a medida',
  },
] as const

const BATHROOMS = [
  {
    src: bano1,
    alt: 'Baño principal con mármol, bañera independiente y doble vanitory',
  },
  {
    src: bano2,
    alt: 'Baño con vanitory en madera clara, espejo ovalado y ventana circular',
  },
  {
    src: bano3,
    alt: 'Baño con bañera empotrada, texturas claras e iluminación indirecta',
  },
  {
    src: bano4,
    alt: 'Baño moderno con vanitory en madera, bañera y sector de ducha acristalado',
  },
] as const

const SERVICES = [
  {
    title: 'Plomería y gas',
    text: 'Instalaciones, refacciones y certificaciones con materiales de primera.',
  },
  {
    title: 'Electricidad',
    text: 'Tableros, iluminación LED, tomas y cableado a normativa.',
  },
  {
    title: 'Albañilería fina',
    text: 'Movimientos livianos, revestimientos y terminaciones impecables.',
  },
  {
    title: 'Pintura y detalle',
    text: 'Acabados duraderos para que el ambiente se vea como nuevo.',
  },
] as const

function App() {
  return (
    <div className="min-h-svh bg-[#faf9f7] text-brika-ink antialiased">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-white/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <a
            href="#"
            className="flex items-center gap-2 text-lg font-semibold tracking-tight"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brika-ink text-sm font-bold text-white">
              B
            </span>
            Brika
          </a>
          <nav
            className="hidden items-center gap-8 text-sm font-medium text-brika-stone md:flex"
            aria-label="Principal"
          >
            <a href="#cocinas" className="transition hover:text-brika-ink">
              Cocinas
            </a>
            <a href="#banos" className="transition hover:text-brika-ink">
              Baños
            </a>
            <a href="#servicios" className="transition hover:text-brika-ink">
              Servicios
            </a>
            <a href="#contacto" className="transition hover:text-brika-ink">
              Contacto
            </a>
          </nav>
          <a
            href="#contacto"
            className="shrink-0 rounded-full bg-brika-ink px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-brika-ink/20 transition hover:bg-brika-ink/90"
          >
            Presupuesto
          </a>
        </div>
        <nav
          className="flex gap-5 overflow-x-auto border-t border-black/5 px-4 py-2.5 text-xs font-medium text-brika-stone md:hidden"
          aria-label="Secciones"
        >
          <a href="#cocinas" className="whitespace-nowrap hover:text-brika-ink">
            Cocinas
          </a>
          <a href="#banos" className="whitespace-nowrap hover:text-brika-ink">
            Baños
          </a>
          <a href="#servicios" className="whitespace-nowrap hover:text-brika-ink">
            Servicios
          </a>
          <a href="#contacto" className="whitespace-nowrap hover:text-brika-ink">
            Contacto
          </a>
        </nav>
      </header>

      <main>
        <section className="relative flex min-h-[100svh] items-end overflow-hidden pt-20">
          <img
            src={HERO_KITCHEN}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
            fetchPriority="high"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-brika-ink via-brika-ink/50 to-brika-ink/20"
            aria-hidden
          />
          <div className="relative mx-auto w-full max-w-6xl px-4 pb-16 pt-32 sm:px-6 lg:px-8 lg:pb-24">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-white/70">
              Reformas de hogar
            </p>
            <h1 className="max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Cocinas y baños que se sienten como un country moderno.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/85">
              Nos enfocamos en tu casa: diseño a medida, instalaciones
              profesionales y terminaciones que duran. También plomería,
              electricidad y arreglos generales.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#contacto"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-brika-ink shadow-xl transition hover:bg-brika-sand"
              >
                Pedir presupuesto sin cargo
              </a>
              <a
                href="#cocinas"
                className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/10 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
              >
                Ver proyectos
              </a>
            </div>
          </div>
        </section>

        <section
          className="border-y border-black/5 bg-white py-16 sm:py-20"
          aria-label="Diferenciales"
        >
          <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:grid-cols-3 sm:px-6 lg:px-8">
            {[
              {
                k: 'Especialización',
                v: 'Cocinas y baños como eje principal del proyecto.',
              },
              {
                k: 'Un solo equipo',
                v: 'Coordinamos albañilería, instalaciones y mobiliario.',
              },
              {
                k: 'Claridad',
                v: 'Presupuesto detallado y plazos realistas desde el día uno.',
              },
            ].map((item) => (
              <div key={item.k}>
                <h2 className="text-sm font-semibold uppercase tracking-wider text-brika-clay">
                  {item.k}
                </h2>
                <p className="mt-2 text-brika-stone">{item.v}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="cocinas" className="scroll-mt-24 py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Cocinas amplias, luminosas y actuales
              </h2>
              <p className="mt-4 text-lg text-brika-stone">
                Inspiración tipo residencias en countries: islas generosas,
                despensas, integración con el living y materiales nobles. Te
                acompañamos desde el croquis hasta la última terminación.
              </p>
            </div>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
              {KITCHENS.map((img, i) => (
                <figure
                  key={img.src}
                  className={`group relative overflow-hidden rounded-2xl bg-black/5 shadow-sm ring-1 ring-black/5 ${
                    i === 0 ? 'sm:col-span-2 sm:row-span-2' : ''
                  }`}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className={`aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-[1.03] ${
                      i === 0 ? 'aspect-[16/10] min-h-[280px] sm:min-h-[420px]' : ''
                    }`}
                  />
                  <figcaption className="sr-only">{img.alt}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section
          id="banos"
          className="scroll-mt-24 border-t border-black/5 bg-[#f3f1ed] py-20 sm:py-28"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                  Baños que funcionan y se ven de revista
                </h2>
                <p className="mt-4 text-lg text-brika-stone">
                  Duchas a medida, vanitories, iluminación y revestimientos
                  pensados para el uso diario. Ideal para suites y baños de
                  visitas en casas y countries.
                </p>
              </div>
              <a
                href="#contacto"
                className="inline-flex w-fit items-center rounded-full border border-brika-ink/15 bg-white px-6 py-2.5 text-sm font-semibold text-brika-ink shadow-sm transition hover:border-brika-ink/30"
              >
                Quiero renovar mi baño
              </a>
            </div>
            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              {BATHROOMS.map((img) => (
                <figure
                  key={img.src}
                  className="group relative overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-black/5"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                  />
                  <figcaption className="sr-only">{img.alt}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="servicios" className="scroll-mt-24 py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Arreglos generales en tu casa
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-brika-stone">
              Trabajamos el hogar y los espacios que usás todos los días, con el
              mismo cuidado en cada detalle.
            </p>
            <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {SERVICES.map((s) => (
                <li
                  key={s.title}
                  className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm transition hover:shadow-md"
                >
                  <h3 className="font-semibold text-brika-ink">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-brika-stone">
                    {s.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          id="contacto"
          className="scroll-mt-24 border-t border-black/5 bg-brika-ink py-20 text-white sm:py-28"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                  Hablemos de tu proyecto
                </h2>
                <p className="mt-4 text-lg text-white/75">
                  Contanos qué espacio querés transformar. Te respondemos con
                  una propuesta clara y un visita técnica cuando corresponda.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap lg:flex-col xl:flex-row">
                <a
                  href="tel:+5491171574227"
                  className="inline-flex flex-1 items-center justify-center rounded-2xl bg-white px-6 py-4 text-center text-sm font-semibold text-brika-ink transition hover:bg-brika-sand"
                >
                  Llamar ahora
                </a>
                <a
                  href="https://wa.me/5491171574227"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center rounded-2xl border border-white/25 bg-white/10 px-6 py-4 text-center text-sm font-semibold backdrop-blur-sm transition hover:bg-white/15"
                >
                  WhatsApp
                </a>
                <a
                  href="mailto:hola@brika.com.ar"
                  className="inline-flex flex-1 items-center justify-center rounded-2xl border border-white/25 bg-transparent px-6 py-4 text-center text-sm font-semibold transition hover:bg-white/10"
                >
                  hola@brika.com.ar
                </a>
              </div>
            </div>
            <p className="mt-10 text-center text-xs text-white/45">
              También podés escribirnos por correo; actualizá la dirección si
              usás otra.
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/5 bg-[#faf9f7] py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-sm text-brika-stone sm:flex-row sm:px-6 lg:px-8">
          <span className="font-semibold text-brika-ink">© {new Date().getFullYear()} Brika</span>
          <span>Reformas de hogar · Cocinas · Baños · Instalaciones</span>
        </div>
      </footer>
    </div>
  )
}

export default App
