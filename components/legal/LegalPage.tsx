import type { ReactNode } from "react";
import Link from "next/link";
import Logo from "@/components/Logo";
import { CONTACT_EMAIL, EDITOR, MAILTO } from "@/lib/contact";

/* Briques partagées par les pages légales (/confidentialite-*, /suppression-donnees-*).
   La page client historique /confidentialite garde son propre rendu. */

/** Éditeur et adresse de contact — définis dans lib/contact.ts, réexportés ici
 *  pour que les pages légales n'aient qu'un seul point d'import. */
export { EDITOR, CONTACT_EMAIL } from "@/lib/contact";

export function EmailLinks() {
  return (
    <a href={MAILTO} className="font-semibold text-neon">
      {CONTACT_EMAIL}
    </a>
  );
}

export function Code({ children }: { children: ReactNode }) {
  return (
    <code className="rounded bg-white/5 px-1.5 py-0.5 font-mono text-[0.85em] text-neon-soft">
      {children}
    </code>
  );
}

export type Section = {
  n: string;
  title: string;
  highlight?: boolean;
  intro?: ReactNode;
  text?: ReactNode;
  items?: [string, ReactNode][];
  table?: { head: string[]; rows: ReactNode[][] };
  callout?: ReactNode;
  outro?: ReactNode;
  cta?: { href: string; label: string };
};

export function LegalTable({ head, rows }: { head: string[]; rows: ReactNode[][] }) {
  return (
    <div className="mt-5 -mx-5 overflow-x-auto px-5 sm:mx-0 sm:px-0">
      <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-neon/20">
            {head.map((h) => (
              <th
                key={h}
                className="py-2.5 pr-4 font-display text-xs font-bold uppercase tracking-wider text-neon"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-white/5">
              {row.map((cell, j) => (
                <td
                  key={j}
                  className={
                    j === 0
                      ? "py-3 pr-4 align-top font-semibold text-white"
                      : "py-3 pr-4 align-top text-mist"
                  }
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function Callout({ children }: { children: ReactNode }) {
  return (
    <div className="mt-5 rounded-xl border border-neon/25 border-l-2 border-l-neon bg-neon/5 px-5 py-4 text-mist">
      {children}
    </div>
  );
}

export function SectionBlock({ section: s }: { section: Section }) {
  return (
    <section
      className={
        s.highlight
          ? "mt-10 rounded-2xl border border-neon/25 bg-charcoal px-6 py-7 sm:px-7"
          : "mt-10"
      }
    >
      <h2 className="flex items-baseline gap-3 font-display text-xl font-bold">
        <span className="font-display text-base font-bold text-neon">{s.n}</span>
        {s.title}
      </h2>
      {s.intro && <p className="mt-3 text-mist">{s.intro}</p>}
      {s.text && <p className="mt-3 text-mist">{s.text}</p>}
      {s.items && (
        <ul className="mt-4 space-y-3">
          {s.items.map(([strong, rest], i) => (
            <li key={i} className="relative pl-6 text-mist">
              <span
                className="absolute left-0 top-2.5 h-2 w-2 rounded-full bg-neon"
                style={{ boxShadow: "0 0 10px rgba(155,255,58,.5)" }}
              />
              {strong && <strong className="text-white">{strong} </strong>}
              {rest}
            </li>
          ))}
        </ul>
      )}
      {s.table && <LegalTable head={s.table.head} rows={s.table.rows} />}
      {s.callout && <Callout>{s.callout}</Callout>}
      {s.outro && <p className="mt-4 text-mist">{s.outro}</p>}
      {s.cta && (
        <Link
          href={s.cta.href}
          className="btn-neon mt-6 inline-block rounded-full px-6 py-2.5 text-sm font-bold"
        >
          {s.cta.label}
        </Link>
      )}
    </section>
  );
}

export function ContactCard({
  n,
  editor,
  related,
}: {
  n: string;
  editor: string;
  related: { href: string; label: string };
}) {
  return (
    <div className="mt-12 rounded-2xl border border-neon/20 bg-charcoal px-7 py-7">
      <h3 className="font-display text-lg font-bold">{n} — Contact</h3>
      <p className="mt-2 text-mist">
        {editor}
        <br />
        <EmailLinks />
      </p>
      <p className="mt-4 text-sm text-muted">
        Voir aussi :{" "}
        <Link href={related.href} className="font-semibold text-neon">
          {related.label}
        </Link>
      </p>
    </div>
  );
}

export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <>
      <header className="glass fixed inset-x-0 top-0 z-50 border-b border-neon/10 py-3">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
          <Link href="/" aria-label="Velox — accueil">
            <Logo size="sm" />
          </Link>
          <Link href="/#telecharger" className="btn-neon rounded-full px-6 py-2.5 text-sm font-bold">
            Télécharger
          </Link>
        </nav>
      </header>

      <main className="mx-auto max-w-3xl px-5 pb-24 pt-36 sm:px-8">
        <Link href="/" className="text-sm font-semibold text-muted transition hover:text-neon">
          ← Retour à l&apos;accueil
        </Link>

        <h1 className="mt-7 font-display text-4xl font-bold tracking-tight sm:text-5xl">{title}</h1>
        <span className="mt-3 block text-sm font-semibold text-neon-soft">
          Dernière mise à jour : {updated}
        </span>

        {children}
      </main>

      <footer className="border-t border-white/5 bg-ink">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-4 px-5 py-8 text-sm text-faint sm:px-8">
          <p>© 2026 Velox — Édité par Velox Corp. Tous droits réservés.</p>
          <Link href="/" className="text-neon">
            Retour à l&apos;accueil
          </Link>
        </div>
      </footer>
    </>
  );
}

/* Bloc « étapes de suppression » — exigence (b) de Google Play :
   étapes numérotées, en évidence, en haut de page. */
export function DeletionSteps({ steps, mailto }: { steps: ReactNode[]; mailto: string }) {
  return (
    <>
      <ol className="mt-5 space-y-4">
        {steps.map((step, i) => (
          <li key={i} className="relative pl-11 text-mist">
            <span
              className="absolute left-0 top-0 flex h-7 w-7 items-center justify-center rounded-full border border-neon/40 bg-neon/10 font-display text-sm font-bold text-neon"
              style={{ boxShadow: "0 0 12px rgba(155,255,58,.25)" }}
            >
              {i + 1}
            </span>
            {step}
          </li>
        ))}
      </ol>
      <a href={mailto} className="btn-neon mt-7 inline-block rounded-full px-6 py-3 text-sm font-bold">
        Envoyer ma demande de suppression →
      </a>
      <p className="mt-3 text-sm text-muted">
        L&apos;objet de l&apos;e-mail est pré-rempli automatiquement.
      </p>
    </>
  );
}

export function AppIdentityCard({
  appName,
  packageId,
  editor = EDITOR,
}: {
  appName: string;
  packageId: string;
  editor?: string;
}) {
  return (
    <div className="mt-6 rounded-2xl border border-neon/25 bg-charcoal px-6 py-6 sm:px-7">
      <p className="text-mist">
        Application concernée : <strong className="text-white">« {appName} »</strong> —{" "}
        <Code>{packageId}</Code>
        <br />
        Éditeur : <strong className="text-white">{editor}</strong>
        <br />
        Contact : <EmailLinks />
      </p>
    </div>
  );
}
