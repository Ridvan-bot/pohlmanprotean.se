"use client";

import Image from "next/image";
import BlurredShape from "@/public/images/blurred-shape.svg";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";

export default function Privacy() {
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
                <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-indigo-200/50">
                  <span className="inline-flex bg-gradient-to-r from-blue-500 to-indigo-200 bg-clip-text text-transparent">
                    Juridiskt
                  </span>
                </div>
                <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-8 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
                  Integritetspolicy
                </h1>
                <p className="text-lg text-indigo-200/65">
                  Senast uppdaterad: {new Date().toLocaleDateString('sv-SE', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
              </div>

              <div className="prose prose-invert max-w-none">
                <div className="space-y-8 text-indigo-200/80">
                  
                  <section>
                    <h2 className="text-2xl font-semibold text-gray-200 mb-4">1. Introduktion</h2>
                    <p className="mb-4">
                      Pohlman Protean ("vi", "oss" eller "vår") värnar om din integritet. Denna integritetspolicy förklarar hur vi samlar in, använder, delar och skyddar dina uppgifter när du besöker vår webbplats eller använder våra tjänster. Vi följer GDPR och svensk dataskyddslagstiftning.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-200 mb-4">2. Vilken information vi samlar in</h2>
                    <p className="mb-4">Vi kan samla in följande typer av information:</p>
                    
                    <h3 className="text-xl font-semibold text-gray-300 mb-3 mt-6">Personuppgifter</h3>
                    <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                      <li>Namn och kontaktuppgifter (e‑post, telefonnummer)</li>
                      <li>Företagsuppgifter och befattning</li>
                      <li>Yrkesbakgrund och erfarenhet</li>
                      <li>Portfolio‑ eller LinkedIn‑länkar</li>
                      <li>Meddelanden och kommunikation med oss</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-gray-300 mb-3 mt-6">Teknisk information</h3>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>IP‑adress och platsdata</li>
                      <li>Webbläsartyp och version</li>
                      <li>Enhetsinformation</li>
                      <li>Användningsdata och analys</li>
                      <li>Cookies och liknande spårningsteknik</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-200 mb-4">3. Hur vi samlar in information</h2>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li><strong>Direkt insamling:</strong> När du fyller i formulär, skickar ansökningar eller kontaktar oss</li>
                      <li><strong>Automatisk insamling:</strong> Via cookies, analysverktyg och interaktioner på webbplatsen</li>
                      <li><strong>Tredje part:</strong> Från offentligt tillgängliga professionella nätverk (med ditt samtycke)</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-200 mb-4">4. Hur vi använder din information</h2>
                    <p className="mb-4">Vi använder dina uppgifter för följande ändamål:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Besvara förfrågningar och ge support</li>
                      <li>Hantera jobbansökningar och rekrytering</li>
                      <li>Leverera IT‑konsult‑ och utvecklingstjänster</li>
                      <li>Förbättra vår webbplats och våra tjänster</li>
                      <li>Uppfylla rättsliga skyldigheter</li>
                      <li>Skicka relevant information (med ditt samtycke)</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-200 mb-4">5. Rättslig grund för behandling (GDPR)</h2>
                    <p className="mb-4">Vi behandlar dina personuppgifter baserat på:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li><strong>Samtycke:</strong> När du frivilligt lämnar uppgifter via formulär</li>
                      <li><strong>Avtal:</strong> För att utföra efterfrågade tjänster</li>
                      <li><strong>Befogat intresse:</strong> För verksamhet och förbättring av tjänster</li>
                      <li><strong>Rättslig förpliktelse:</strong> För att följa lagkrav</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-200 mb-4">6. Delning av information</h2>
                    <p className="mb-4">Vi säljer inte och överför inte dina personuppgifter till tredje part, förutom:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Med ditt uttryckliga samtycke</li>
                      <li>Till betrodda tjänsteleverantörer som hjälper vår verksamhet (med sekretessavtal)</li>
                      <li>När lag kräver det eller för att skydda våra rättigheter</li>
                      <li>I samband med företagsöverlåtelser (med information)</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-200 mb-4">7. Datasäkerhet</h2>
                    <p className="mb-4">
                      Vi vidtar lämpliga tekniska och organisatoriska säkerhetsåtgärder för att skydda dina uppgifter mot obehörig åtkomst, ändring, utlämning eller förstörelse. Exempel är kryptering, säkra servrar och åtkomstkontroller.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-200 mb-4">8. Lagringstid</h2>
                    <p className="mb-4">
                      Vi sparar dina personuppgifter endast så länge som behövs för de ändamål som beskrivs här, för att uppfylla lagkrav eller lösa tvister. Kontaktformulär sparas normalt i 2 år och jobbansökningar upp till 3 år.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-200 mb-4">9. Dina rättigheter (GDPR)</h2>
                    <p className="mb-4">Enligt GDPR har du rätt att:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li><strong>Tillgång:</strong> Begära en kopia av dina uppgifter</li>
                      <li><strong>Rättelse:</strong> Korrigera felaktiga eller ofullständiga uppgifter</li>
                      <li><strong>Radering:</strong> Begära att bli raderad ("rätten att bli bortglömd")</li>
                      <li><strong>Dataportabilitet:</strong> Få ut dina uppgifter i ett strukturerat format</li>
                      <li><strong>Begränsning:</strong> Begränsa hur vi behandlar dina uppgifter</li>
                      <li><strong>Invändning:</strong> Invända mot behandling baserat på berättigat intresse</li>
                      <li><strong>Återkalla samtycke:</strong> När som helst</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-200 mb-4">10. Cookies och spårning</h2>
                    <p className="mb-4">
                      Vår webbplats använder cookies för att förbättra användarupplevelsen och analysera trafik. Du kan styra cookies i din webbläsare. Nödvändiga cookies krävs för att sidan ska fungera och kan inte stängas av.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-200 mb-4">11. Internationella överföringar</h2>
                    <p className="mb-4">
                      Dina uppgifter kan överföras till och behandlas i länder utanför EU/EES. Vi säkerställer lämpliga skyddsåtgärder, som standardavtalsklausuler eller adekvansbeslut.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-200 mb-4">12. Barns integritet</h2>
                    <p className="mb-4">
                      Våra tjänster riktar sig inte till personer under 18 år. Vi samlar inte medvetet in personuppgifter från barn under 18.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-200 mb-4">13. Ändringar i denna policy</h2>
                    <p className="mb-4">
                      Vi kan uppdatera denna integritetspolicy vid behov. Vi informerar om större ändringar genom att publicera den nya policyn med uppdaterat datum.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-200 mb-4">14. Kontaktuppgifter</h2>
                    <p className="mb-4">
                      Om du har frågor om denna integritetspolicy eller vill utöva dina rättigheter, kontakta oss via kontaktformuläret. För GDPR‑relaterade klagomål kan du vända dig till Integritetsskyddsmyndigheten (IMY).
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