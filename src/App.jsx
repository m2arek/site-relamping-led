import React, { useMemo, useState } from "react";

// === Site Relamping LED – One‑page React app (TailwindCSS-ready) ===
// Astuce : remplace les éléments TODO (nom, téléphone, email, WhatsApp, logo, couleurs)
// Hébergeable tel quel sur Vercel/Netlify en mode SPA. Pas de dépendances externes.

export default function SiteRelampingLED() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <TopBar />
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Benefits />
        <Process />
        <Eligibility />
        <Calculator />
        <CaseStudies />
        <FAQ />
        <About />
        <Contact />
        <Legal />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}

// === Components ===
function TopBar() {
  return (
    <div className="w-full bg-emerald-700 text-white text-sm">
      <div className="mx-auto max-w-7xl px-4 py-2 flex items-center justify-between">
        <span>Intervention en Corse & DOM‑TOM • Audit gratuit • Dossier CEE pris en charge</span>
        <a href="#contact" className="underline underline-offset-4">Demander un audit</a>
      </div>
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const nav = [
    { href: "#offre", label: "Offre" },
    { href: "#process", label: "Comment ça marche" },
    { href: "#eligibilite", label: "Éligibilité" },
    { href: "#calculateur", label: "Calculateur" },
    { href: "#realisations", label: "Réalisations" },
    { href: "#faq", label: "FAQ" },
    { href: "#apropos", label: "À propos" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/80 border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <a href="#accueil" className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-2xl bg-emerald-600 text-white grid place-items-center shadow-md">
            {/* TODO: Remplacer par votre logo */}
            <span className="font-bold">LED</span>
          </div>
          <div className="leading-tight">
            <div className="font-semibold">Relamping à 0€</div>
            <div className="text-xs text-gray-500">CEE • Corse & DOM‑TOM</div>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-6">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="text-sm hover:text-emerald-700">
              {n.label}
            </a>
          ))}
          <a href="#contact" className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-4 py-2 text-white shadow hover:bg-emerald-700">
            Audit gratuit
          </a>
        </nav>
        <button onClick={() => setOpen(!open)} className="md:hidden rounded-xl border px-3 py-2 text-sm">
          Menu
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="mx-auto max-w-7xl px-4 py-3 grid gap-2">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="py-2" onClick={() => setOpen(false)}>
                {n.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-4 py-2 text-white shadow">
              Audit gratuit
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="accueil" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-emerald-100 via-white to-white" />
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
            Éclairez vos locaux <span className="text-emerald-700">sans avance de frais</span><br /> grâce au dispositif CEE
          </h1>
          <p className="mt-5 text-lg text-gray-600">
            Relamping LED clé en main pour entreprises, commerces et collectivités en Corse et DOM‑TOM. Financement possible jusqu’à 100% via les Certificats d’Économies d’Énergie.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#contact" className="rounded-2xl bg-emerald-600 px-6 py-3 text-white shadow hover:bg-emerald-700">Demander un audit gratuit</a>
            <a href="#offre" className="rounded-2xl border px-6 py-3 hover:border-emerald-600 hover:text-emerald-700">Découvrir l’offre</a>
          </div>
          <ul className="mt-6 text-sm text-gray-600 grid md:grid-cols-3 gap-2">
            <li className="flex items-center gap-2">✅ Jusqu’à 70% d’économies</li>
            <li className="flex items-center gap-2">✅ Confort lumineux amélioré</li>
            <li className="flex items-center gap-2">✅ Installation rapide & propre</li>
          </ul>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] w-full rounded-3xl bg-white shadow-xl border grid place-items-center p-6">
            {/* Illustration simple */}
            <svg viewBox="0 0 200 150" className="w-full h-full">
              <defs>
                <linearGradient id="g" x1="0" x2="1">
                  <stop offset="0%" stopColor="#10b981" />
                  <stop offset="100%" stopColor="#34d399" />
                </linearGradient>
              </defs>
              <rect x="10" y="20" width="180" height="60" rx="8" fill="url(#g)" opacity="0.25" />
              <rect x="10" y="90" width="180" height="40" rx="8" fill="#e5e7eb" />
              <circle cx="35" cy="110" r="8" fill="#10b981" />
              <circle cx="65" cy="110" r="8" fill="#10b981" />
              <circle cx="95" cy="110" r="8" fill="#10b981" />
              <rect x="115" y="105" width="70" height="10" rx="5" fill="#9ca3af" />
            </svg>
          </div>
          <p className="mt-3 text-center text-sm text-gray-500">Avant/Après relamping • Flux lumineux homogène • Consommation réduite</p>
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  return (
    <section className="py-6 bg-white border-y">
      <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-4 gap-6 text-center">
        <Stat title="Projets LED" value="250+" note="PME, retail, collectivités" />
        <Stat title="Économies moyennes" value="‑60%" note="sur la facture éclairage" />
        <Stat title="Délai d’intervention" value="10‑20 j" note="selon stock & site" />
        <Stat title="Satisfaction" value="4,9/5" note="sur retours clients" />
      </div>
    </section>
  );
}

function Stat({ title, value, note }) {
  return (
    <div className="rounded-2xl bg-gray-50 border p-6 shadow-sm">
      <div className="text-3xl font-extrabold text-emerald-700">{value}</div>
      <div className="mt-1 font-medium">{title}</div>
      <div className="text-sm text-gray-500">{note}</div>
    </div>
  );
}

function Benefits() {
  const items = [
    {
      title: "Jusqu’à 70% d’économies",
      desc: "Des luminaires LED haute efficacité qui divisent la consommation et la maintenance.",
    },
    {
      title: "Financement CEE",
      desc: "Montage de dossier pris en charge. Couverture possible jusqu’à 100% selon cas.",
    },
    {
      title: "Confort & sécurité",
      desc: "Éclairage instantané, rendu des couleurs élevé, conformité aux normes en vigueur.",
    },
    {
      title: "Installation clé en main",
      desc: "Audit, fourniture, pose, recyclage des anciens matériels, garanties.",
    },
  ];
  return (
    <section id="offre" className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-2xl md:text-3xl font-bold">Notre offre de relamping LED « à 0€ »</h2>
        <p className="mt-3 text-gray-600 max-w-3xl">
          Nous remplaçons vos sources existantes (néons, halogènes, fluo‑compactes, sodium, etc.) par des LED performantes. Les économies d’énergie générées sont valorisées via le dispositif des Certificats d’Économies d’Énergie (CEE), permettant une prise en charge partielle ou totale du projet.
        </p>
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it) => (
            <div key={it.title} className="rounded-2xl border bg-gray-50 p-6 shadow-sm">
              <div className="text-lg font-semibold">{it.title}</div>
              <p className="mt-2 text-sm text-gray-600">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    {
      title: "Audit gratuit",
      desc: "Relevé des points lumineux, puissances, usages, horaires. Conseil sur la photométrie.",
    },
    {
      title: "Dossier CEE",
      desc: "Montage administratif et technique, calcul de primes, engagement de l’obligé.",
    },
    {
      title: "Installation",
      desc: "Planification, pose, mise en service, recyclage des anciens équipements.",
    },
    {
      title: "Contrôle & garanties",
      desc: "Vérifications, attestation sur l’honneur, garanties produit & main d’œuvre.",
    },
  ];
  return (
    <section id="process" className="py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-2xl md:text-3xl font-bold">Comment ça marche ?</h2>
        <div className="mt-8 grid md:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={s.title} className="relative rounded-2xl border bg-white p-6 shadow-sm">
              <div className="absolute -top-3 -left-3 h-10 w-10 rounded-2xl bg-emerald-600 text-white grid place-items-center shadow">{i + 1}</div>
              <div className="font-semibold">{s.title}</div>
              <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <a href="#contact" className="inline-flex rounded-2xl bg-emerald-600 px-6 py-3 text-white shadow hover:bg-emerald-700">Je demande mon audit gratuit</a>
        </div>
      </div>
    </section>
  );
}

function Eligibility() {
  return (
    <section id="eligibilite" className="py-16 bg-white border-y">
      <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">Êtes‑vous éligible au financement CEE ?</h2>
          <ul className="mt-4 space-y-3 text-gray-700">
            <li>• Entreprises, commerces, hôtels, bureaux, collectivités, copropriétés (parties communes).</li>
            <li>• Remplacement d’éclairages existants par des luminaires LED certifiés.</li>
            <li>• Dossier CEE accepté <span className="font-medium">avant</span> toute commande/installation.</li>
            <li>• Sites situés en Corse et DOM‑TOM : prise en compte des spécificités locales.</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Chaque situation est étudiée : le taux de prise en charge dépend de vos usages, puissances actuelles, heures de fonctionnement et fiches d’opérations standardisées applicables.</p>
        </div>
        <QuickCheckForm />
      </div>
    </section>
  );
}

function QuickCheckForm() {
  const [data, setData] = useState({ secteur: "Commerce", surface: "200", heures: "10" });
  const note = useMemo(() => {
    const surface = Number(data.surface || 0);
    const heures = Number(data.heures || 0);
    const score = Math.min(100, Math.round(surface * 0.1 + heures * 3));
    if (score > 70) return "Éligibilité très probable (à confirmer après audit).";
    if (score > 40) return "Éligibilité possible : audit recommandé.";
    return "Éligibilité à vérifier : contactez‑nous pour une estimation précise.";
  }, [data]);
  return (
    <div className="rounded-2xl border bg-gray-50 p-6 shadow-sm">
      <div className="font-semibold">Test d’éligibilité (indicatif)</div>
      <div className="mt-4 grid md:grid-cols-3 gap-4">
        <Field label="Secteur">
          <select
            className="w-full rounded-xl border px-3 py-2"
            value={data.secteur}
            onChange={(e) => setData({ ...data, secteur: e.target.value })}
          >
            <option>Commerce</option>
            <option>Bureaux</option>
            <option>Hôtellerie</option>
            <option>Industrie légère</option>
            <option>Collectivité</option>
          </select>
        </Field>
        <Field label="Surface (m²)">
          <input
            type="number"
            className="w-full rounded-xl border px-3 py-2"
            value={data.surface}
            onChange={(e) => setData({ ...data, surface: e.target.value })}
            min={0}
          />
        </Field>
        <Field label="Heures d’allumage / jour">
          <input
            type="number"
            className="w-full rounded-xl border px-3 py-2"
            value={data.heures}
            onChange={(e) => setData({ ...data, heures: e.target.value })}
            min={0}
            max={24}
          />
        </Field>
      </div>
      <div className="mt-4 rounded-xl bg-white border p-4 text-sm text-gray-700">{note}</div>
      <a href="#contact" className="mt-4 inline-flex rounded-xl bg-emerald-600 px-5 py-2.5 text-white shadow hover:bg-emerald-700">Obtenir une étude gratuite</a>
    </div>
  );
}

function Calculator() {
  const [inputs, setInputs] = useState({
    nb: "50",
    wOld: "72", // ancien néon/fluos
    wNew: "24", // LED
    hPerDay: "10",
    dPerYear: "260",
    price: "0.20", // €/kWh (à adapter)
  });

  const results = useMemo(() => {
    const nb = Number(inputs.nb || 0);
    const wOld = Number(inputs.wOld || 0);
    const wNew = Number(inputs.wNew || 0);
    const h = Number(inputs.hPerDay || 0);
    const d = Number(inputs.dPerYear || 0);
    const price = Number(inputs.price || 0);

    const kWhOld = (nb * wOld * h * d) / 1000;
    const kWhNew = (nb * wNew * h * d) / 1000;
    const kWhSaved = Math.max(0, kWhOld - kWhNew);
    const euroSaved = kWhSaved * price;
    const pct = kWhOld > 0 ? Math.round((kWhSaved / kWhOld) * 100) : 0;

    return { kWhOld, kWhNew, kWhSaved, euroSaved, pct };
  }, [inputs]);

  return (
    <section id="calculateur" className="py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-2xl md:text-3xl font-bold">Calculez vos économies potentielles</h2>
        <p className="mt-2 text-gray-600">Indication rapide basée sur vos données. Nous affinons gratuitement lors de l’audit.</p>
        <div className="mt-8 grid lg:grid-cols-2 gap-8">
          <div className="rounded-2xl border bg-gray-50 p-6 shadow-sm">
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Nombre de luminaires">
                <input type="number" className="w-full rounded-xl border px-3 py-2" value={inputs.nb} onChange={(e) => setInputs({ ...inputs, nb: e.target.value })} min={0} />
              </Field>
              <Field label="Puissance actuelle (W)">
                <input type="number" className="w-full rounded-xl border px-3 py-2" value={inputs.wOld} onChange={(e) => setInputs({ ...inputs, wOld: e.target.value })} min={0} />
              </Field>
              <Field label="Puissance LED (W)">
                <input type="number" className="w-full rounded-xl border px-3 py-2" value={inputs.wNew} onChange={(e) => setInputs({ ...inputs, wNew: e.target.value })} min={0} />
              </Field>
              <Field label="Heures / jour">
                <input type="number" className="w-full rounded-xl border px-3 py-2" value={inputs.hPerDay} onChange={(e) => setInputs({ ...inputs, hPerDay: e.target.value })} min={0} max={24} />
              </Field>
              <Field label="Jours / an">
                <input type="number" className="w-full rounded-xl border px-3 py-2" value={inputs.dPerYear} onChange={(e) => setInputs({ ...inputs, dPerYear: e.target.value })} min={0} max={366} />
              </Field>
              <Field label="Prix élec (€/kWh)">
                <input type="number" step="0.01" className="w-full rounded-xl border px-3 py-2" value={inputs.price} onChange={(e) => setInputs({ ...inputs, price: e.target.value })} min={0} />
              </Field>
            </div>
          </div>
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <div className="text-sm text-gray-500">Résultats annuels estimés</div>
            <div className="mt-4 grid sm:grid-cols-2 gap-4">
              <KPI label="Conso avant" value={`${fmt(results.kWhOld)} kWh`} />
              <KPI label="Conso après" value={`${fmt(results.kWhNew)} kWh`} />
              <KPI label="Économies" value={`${fmt(results.kWhSaved)} kWh`} />
              <KPI label="Gain estimé" value={`${fmt(results.euroSaved)} €`} />
            </div>
            <div className="mt-6 h-3 w-full bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-emerald-600" style={{ width: `${results.pct}%` }} />
            </div>
            <div className="mt-2 text-sm text-gray-600">Réduction ≈ {results.pct}%</div>
            <a href="#contact" className="mt-6 inline-flex rounded-2xl bg-emerald-600 px-5 py-2.5 text-white shadow hover:bg-emerald-700">Recevoir une étude détaillée</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function CaseStudies() {
  const items = [
    { title: "Supérette – Bastia", gain: "‑63%", details: "Remplacement tubes 2×58W → dalles LED 36W dimmables." },
    { title: "Hôtel – Ajaccio", gain: "‑58%", details: "Spots halogènes → downlights LED + minuterie couloirs." },
    { title: "Bureaux – Fort‑de‑France", gain: "‑66%", details: "Dalles 600×600 + détecteurs présence/silence." },
  ];
  return (
    <section id="realisations" className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-2xl md:text-3xl font-bold">Quelques réalisations</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {items.map((it) => (
            <div key={it.title} className="rounded-2xl border bg-gray-50 p-6 shadow-sm">
              <div className="text-lg font-semibold">{it.title}</div>
              <div className="mt-1 text-emerald-700 font-bold">{it.gain} sur la conso éclairage</div>
              <p className="mt-2 text-sm text-gray-600">{it.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const qa = [
    {
      q: "C’est vraiment 0€ ?",
      a: "Selon votre site et les fiches CEE applicables, la prime peut couvrir jusqu’à 100% du projet. Quand la prime ne couvre pas tout, nous optimisons le lot pour viser un reste à charge minimal.",
    },
    {
      q: "Combien de temps ça prend ?",
      a: "Après validation du dossier CEE, l’installation est généralement planifiée sous 10 à 20 jours ouvrés selon disponibilités et contraintes du site.",
    },
    {
      q: "Qui s’occupe du dossier CEE ?",
      a: "Nous prenons en charge le montage complet : relevés, calculs, engagement de l’obligé, pièces justificatives et attestations.",
    },
    {
      q: "Quelles garanties ?",
      a: "Produits LED sélectionnés avec garanties fabricant (souvent 3 à 5 ans) et intervention soignée. Possibilité de contrat de maintenance.",
    },
  ];
  return (
    <section id="faq" className="py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-2xl md:text-3xl font-bold">FAQ</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          {qa.map((x) => (
            <details key={x.q} className="rounded-2xl border bg-white p-5 shadow-sm">
              <summary className="cursor-pointer font-medium">{x.q}</summary>
              <p className="mt-2 text-sm text-gray-600">{x.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="apropos" className="py-16 bg-white border-y">
      <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">Installateur d’éclairage LED de proximité</h2>
          <p className="mt-3 text-gray-600">
            Nous accompagnons les entreprises en Corse et dans les DOM‑TOM pour moderniser leur éclairage : relevés sur site, conseil photométrique, sélection de luminaires, montage CEE et installation clé en main.
          </p>
          <ul className="mt-4 space-y-2 text-gray-700">
            <li>• Intervention soignée, respect des horaires d’exploitation</li>
            <li>• Produits performants (UGR, IRC, flux, efficacité)</li>
            <li>• Mise en conformité et optimisation énergétique</li>
          </ul>
        </div>
        <div className="rounded-3xl border bg-gray-50 p-6 shadow-sm">
          <h3 className="font-semibold">Zones d’intervention</h3>
          <div className="mt-2 grid sm:grid-cols-2 gap-3 text-sm text-gray-700">
            <div className="rounded-xl bg-white border p-4">Corse (Haute‑Corse, Corse‑du‑Sud)</div>
            <div className="rounded-xl bg-white border p-4">Guadeloupe • Martinique</div>
            <div className="rounded-xl bg-white border p-4">Réunion • Mayotte</div>
            <div className="rounded-xl bg-white border p-4">Guyane</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-16">
      <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">Contact & audit gratuit</h2>
          <p className="mt-3 text-gray-600">Parlez‑nous de votre site et recevez une estimation d’économies et de prime CEE.</p>
          <div className="mt-6 space-y-2 text-gray-700">
            <div>📞 <span className="font-medium">Téléphone :</span> <a className="underline" href="tel:+33000000000">+33 0 00 00 00 00</a> {/* TODO */}</div>
            <div>✉️ <span className="font-medium">Email :</span> <a className="underline" href="mailto:contact@votre-domaine.fr">contact@votre-domaine.fr</a> {/* TODO */}</div>
            <div>💬 <span className="font-medium">WhatsApp :</span> <a className="underline" href="https://wa.me/33000000000" target="_blank" rel="noreferrer">Discuter maintenant</a> {/* TODO */}</div>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}

function ContactForm() {
  const [form, setForm] = useState({ nom: "", entreprise: "", email: "", tel: "", message: "" });
  const [sent, setSent] = useState(false);
  return (
    <div className="rounded-2xl border bg-gray-50 p-6 shadow-sm">
      {!sent ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            // Ici, branchement vers un backend / Zapier / Formspree / EmailJS
            setSent(true);
          }}
          className="grid gap-4"
        >
          <Field label="Nom">
            <input required className="w-full rounded-xl border px-3 py-2" value={form.nom} onChange={(e) => setForm({ ...form, nom: e.target.value })} />
          </Field>
          <Field label="Entreprise">
            <input className="w-full rounded-xl border px-3 py-2" value={form.entreprise} onChange={(e) => setForm({ ...form, entreprise: e.target.value })} />
          </Field>
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Email">
              <input type="email" required className="w-full rounded-xl border px-3 py-2" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            </Field>
            <Field label="Téléphone">
              <input className="w-full rounded-xl border px-3 py-2" value={form.tel} onChange={(e) => setForm({ ...form, tel: e.target.value })} />
            </Field>
          </div>
          <Field label="Votre besoin">
            <textarea rows={4} className="w-full rounded-xl border px-3 py-2" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Ex : relamping magasin 300 m², 80 luminaires, ouvert 6 j/7…" />
          </Field>
          <button className="rounded-2xl bg-emerald-600 px-5 py-2.5 text-white shadow hover:bg-emerald-700">Envoyer</button>
          <p className="text-xs text-gray-500">En envoyant ce formulaire, vous acceptez d’être recontacté. Aucune donnée partagée à des tiers.</p>
        </form>
      ) : (
        <div className="text-emerald-700 font-medium">Merci ! Votre demande a été enregistrée. Nous revenons vers vous très vite.</div>
      )}
    </div>
  );
}

function Legal() {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-7xl px-4 rounded-2xl border bg-white p-6 shadow-sm text-sm text-gray-600">
        <h3 className="font-semibold">Mentions utiles (résumé)</h3>
        <ul className="mt-2 list-disc list-inside">
          <li>Les montants de prime CEE et les taux de prise en charge dépendent des fiches standardisées applicables, de vos usages et de la conformité du dossier.</li>
          <li>Le « 0€ » peut s’appliquer lorsque la prime couvre l’intégralité du projet. À défaut, un reste à charge peut subsister.</li>
          <li>Interventions en Corse & DOM‑TOM, sous réserve de disponibilité et contraintes logistiques locales.</li>
        </ul>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-7xl px-4 py-8 grid md:grid-cols-3 gap-6 items-center">
        <div>
          <div className="font-semibold">Votre entreprise {/* TODO: nom */}</div>
          <div className="text-sm text-gray-500">Relamping LED • CEE • Corse & DOM‑TOM</div>
        </div>
        <div className="text-sm text-gray-600">
          © {new Date().getFullYear()} • Tous droits réservés • <a className="underline" href="#">Mentions légales</a>
        </div>
        <div className="flex gap-3 justify-start md:justify-end">
          <a href="#contact" className="rounded-xl border px-4 py-2 hover:border-emerald-600 hover:text-emerald-700">Contact</a>
          <a href="https://wa.me/33000000000" className="rounded-xl bg-emerald-600 px-4 py-2 text-white shadow hover:bg-emerald-700">WhatsApp</a>
        </div>
      </div>
    </footer>
  );
}

function FloatingCTA() {
  return (
    <a href="#contact" className="fixed bottom-4 right-4 rounded-full bg-emerald-600 text-white shadow-xl px-5 py-3">
      Demander un audit
    </a>
  );
}

// === UI helpers ===
function Field({ label, children }) {
  return (
    <label className="block text-sm">
      <span className="text-gray-700">{label}</span>
      <div className="mt-1">{children}</div>
    </label>
  );
}

function KPI({ label, value }) {
  return (
    <div className="rounded-2xl bg-gray-50 border p-5 shadow-sm">
      <div className="text-xs text-gray-500">{label}</div>
      <div className="mt-1 text-xl font-bold text-emerald-700">{value}</div>
    </div>
  );
}

function fmt(n) {
  return (Math.round(n * 100) / 100).toLocaleString("fr-FR");
}

