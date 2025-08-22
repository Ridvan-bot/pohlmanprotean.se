"use client";

import Image from "next/image";
import BlurredShape from "@/public/images/blurred-shape.svg";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";

export default function Terms() {
  return (
    <main className="relative min-h-screen">
      <section className="relative flex items-center min-h-screen">
        <div
          className="absolute left-1/2 top-0 -translate-x-1/2"
          aria-hidden="true"
          style={{ zIndex: 0 }}
        >
          <Image
            className="max-w-none"
            src={BlurredShapeGray}
            width={760}
            height={668}
            alt="Blurred shape"
          />
        </div>
        <div
          className="absolute top-30 right-1/2 -translate-x-1/2 opacity-50"
          aria-hidden="true"
          style={{ zIndex: -1 }}
        >
          <Image
            className="max-w-none"
            src={BlurredShape}
            width={760}
            height={668}
            alt="Blurred shape"
          />
        </div>

        <div className="mx-auto max-w-4xl flex-1 text-left relative z-10">
        <div className="
  border-t py-12
  [border-image:linear-gradient(to_right,transparent,theme(colors.blue.900/.25),transparent)1]
  dark:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.400/.25),transparent)1]
  md:py-20
">
            <div className="mx-auto max-w-4xl">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-indigo-600/60 dark:before:to-indigo-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-indigo-600/60 dark:after:to-indigo-200/50">
                  <span className="inline-flex bg-gradient-to-r from-gray-950 to-gray-800 dark:from-blue-500 dark:to-indigo-200 bg-clip-text text-transparent">
                    Juridiskt
                  </span>
                </div>
                <h1 className="dark:animate-[gradient_6s_linear_infinite] dark:bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] dark:bg-[length:200%_auto] dark:bg-clip-text pb-8 font-nacelle text-3xl font-semibold text-gray-950 dark:text-transparent md:text-4xl">
                  Användarvillkor
                </h1>
                <p className="text-lg text-gray-600 dark:text-indigo-200/65">
                  Senast uppdaterad: {new Date().toLocaleDateString('sv-SE', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
              </div>

              <div className="prose dark:prose-invert max-w-none">
                <div className="space-y-8 text-gray-700 dark:text-indigo-200/80">
                  
                  <section>
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">1. Godkännande av villkor</h2>
                    <p className="mb-4">
                      Genom att använda tjänster från Pohlman Protean ("vi", "vårt" eller "oss") godkänner du dessa villkor. Om du inte accepterar villkoren ska du inte använda tjänsten.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">2. Tjänster</h2>
                    <p className="mb-4">
                      Pohlman Protean erbjuder IT‑konsulttjänster, mjukvaruutveckling, molnimplementation och automatisering. Exempel på tjänster:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Fullstack‑utveckling och rådgivning</li>
                      <li>Webbutveckling för företag i alla storlekar</li>
                      <li>Molnimplementation och infrastrukturhantering</li>
                      <li>Automatiseringslösningar</li>
                      <li>Projektledning</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">3. Licens för användning</h2>
                    <p className="mb-4">
                      Du får tillfällig åtkomst till material på Pohlman Proteans webbplats för personligt, icke‑kommersiellt bruk. Detta är en licens, inte en överlåtelse av äganderätt. Under licensen får du inte:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Ändra eller kopiera materialet</li>
                      <li>Använda materialet kommersiellt eller offentligt</li>
                      <li>Försöka reverse‑engineering av mjukvara på webbplatsen</li>
                      <li>Ta bort upphovsrättsliga eller andra äganderättsliga notiser</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">4. Kundens skyldigheter</h2>
                    <p className="mb-4">
                      När du anlitar våra tjänster godkänner du att:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Lämna korrekt och fullständig information</li>
                      <li>Betala enligt överenskomna villkor</li>
                      <li>Svara skyndsamt på förfrågningar</li>
                      <li>Respektera immateriella rättigheter</li>
                      <li>Följa tillämpliga lagar och regler</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">5. Betalningsvillkor</h2>
                    <p className="mb-4">
                      Betalningsvillkor specificeras i projektavtal. Om inget annat anges:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Fakturor förfaller 30 dagar efter utfärdande</li>
                      <li>Försenad betalning kan medföra avgifter</li>
                      <li>Arbete kan pausas vid förfallna skulder</li>
                      <li>Återbetalningspolicy framgår av projektavtal</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">6. Immateriella rättigheter</h2>
                    <p className="mb-4">
                      Om inte annat avtalas skriftligen blir kundanpassat arbete kundens egendom efter full betalning. Pohlman Protean behåller rätten att använda generell kunskap och erfarenhet för framtida uppdrag.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">7. Sekretess</h2>
                    <p className="mb-4">
                      Vi respekterar våra kunders konfidentiella information och lämnar inte ut sådan information utan lagstöd eller uttryckligt samtycke.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">8. Integritetspolicy</h2>
                    <p className="mb-4">
                      Din integritet är viktig för oss. Vi samlar in och använder personuppgifter endast enligt vår integritetspolicy.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">9. Ändringar av villkor</h2>
                    <p className="mb-4">
                      Pohlman Protean kan ändra dessa villkor när som helst. Genom att använda webbplatsen och våra tjänster accepterar du den senaste versionen.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">10. Tillämplig lag</h2>
                    <p className="mb-4">
                      Dessa villkor regleras av svensk lag och tvister hanteras av svensk domstol.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">11. Kontakt</h2>
                    <p className="mb-4">
                      Om du har frågor om dessa villkor, kontakta oss via kontaktformuläret eller e‑post.
                    </p>
                  </section>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}