import type { Metadata } from "next";
import { Kicker, PageHeader } from "../components/ui";
import { ContatoForm } from "../components/ContatoForm";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Fale com a APEA-CA. Sede na Vila de Caeté-Açu, Palmeiras/BA. E-mail é o canal mais confiável.",
};

export default function Contato() {
  return (
    <div className="mx-auto max-w-[840px] px-5 pb-20 pt-14">
      <PageHeader
        crumb="Início › Contato"
        title="Contato"
        lead="A sede fica na Vila de Caeté-Açu. O atendimento presencial acontece nos dias de reunião; para o resto, e-mail é o canal mais confiável — a conexão no vale é intermitente."
      />

      <div className="mb-12 grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-8">
        <div>
          <Kicker className="mb-2.5 text-ink-faint">Endereço da sede</Kicker>
          <p className="text-base leading-relaxed">
            Vila de Caeté-Açu
            <br />
            Palmeiras · Bahia · CEP 46840-000
          </p>
        </div>
        <div>
          <Kicker className="mb-2.5 text-ink-faint">E-mail</Kicker>
          <p className="text-base leading-relaxed">
            <a href="mailto:contato@apeaca.org.br">contato@apeaca.org.br</a>
            <br />
            <span className="text-sm text-ink-faint">Endereço de exemplo</span>
          </p>
        </div>
        <div>
          <Kicker className="mb-2.5 text-ink-faint">
            Telefone e WhatsApp
          </Kicker>
          <p className="text-base leading-relaxed">
            (75) 90000-0000
            <br />
            <span className="text-sm text-ink-faint">Número de exemplo</span>
          </p>
        </div>
      </div>

      <div className="border border-line bg-paper p-8">
        <h2 className="mb-5 font-serif text-[26px]">Enviar mensagem</h2>
        <ContatoForm />
      </div>
    </div>
  );
}
