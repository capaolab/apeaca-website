/*
  Static example data for the prototype phase.
  Mirrors the sample content from the design prototype (docs/design).
  Projetos and Blog get full pages in a later phase; here the data feeds the
  home page highlights, timelines and the institutional/transparency pages.
*/

export type ProjetoStatus = "Ativo" | "Em captação" | "Concluído";

export type Projeto = {
  slug: string;
  nome: string;
  status: ProjetoStatus;
  periodo: string;
  area: string;
  resumo: string;
  descricao: string;
  parceiros: string;
  metricas: { valor: string; rotulo: string }[];
};

export type Post = {
  slug: string;
  titulo: string;
  categoria: "Notícia" | "Comunicado" | "Artigo" | "Convocação";
  data: string;
  autor: string;
  projeto: string | null;
  resumo: string;
};

export type LinhaDoTempoItem = {
  ano: string;
  titulo: string;
  parceiro: string;
};

export type CadastroItem = { rotulo: string; valor: string };
export type DiretoriaItem = { cargo: string; nome: string };
export type DocumentoItem = {
  tipo: string;
  titulo: string;
  resumo: string;
  peso: string;
};
export type Exercicio = {
  ano: string;
  receitas: string;
  despesas: string;
  saldo: string;
  aprovado: string;
  peso: string;
};

export const projetos: Projeto[] = [
  {
    slug: "agua-vila",
    nome: "Sistema de distribuição de água da Vila",
    status: "Ativo",
    periodo: "2017 — em curso",
    area: "Água",
    resumo:
      "Implantação e manutenção do abastecimento para a Vila e o entorno, com mais de 150 caixas d'água distribuídas aos sócios.",
    descricao:
      "Execução do sistema de distribuição de água da Vila de Caeté-Açu e comunidades do entorno, iniciada em 2017 no âmbito do programa Bahia Produtiva, com implantação concluída e manutenção contínua sob responsabilidade da associação. Mais de 150 caixas d'água foram distribuídas aos sócios ao longo do projeto.",
    parceiros: "Bahia Produtiva · CERB · Prefeitura de Palmeiras",
    metricas: [
      { valor: "150+", rotulo: "caixas d'água" },
      { valor: "2017", rotulo: "início" },
    ],
  },
  {
    slug: "rufino-rocha",
    nome: "Espaço Rufino Rocha",
    status: "Em captação",
    periodo: "2019 — em curso",
    area: "Cultura",
    resumo:
      "Gestão e revitalização do espaço cedido pela prefeitura para oficinas, assembleias e atividades culturais da comunidade.",
    descricao:
      "Em 2019 a associação recebeu a cessão de uso do espaço Rufino Rocha, por cinco anos, para atividades culturais e comunitárias. A etapa atual busca recursos para recuperar cobertura, piso e instalação elétrica, condição para retomar o uso regular do espaço.",
    parceiros: "Prefeitura de Palmeiras · cessão de uso por 5 anos",
    metricas: [
      { valor: "2019", rotulo: "cessão de uso" },
      { valor: "38%", rotulo: "da meta (exemplo)" },
    ],
  },
  {
    slug: "sede",
    nome: "Construção da sede da APEA-CA",
    status: "Concluído",
    periodo: "2006",
    area: "Infraestrutura",
    resumo:
      "Construção da sede própria da associação, que passou a abrigar assembleias, cursos e o atendimento aos associados.",
    descricao:
      "Construção da sede própria da APEA-CA, viabilizada em 2006 com apoio da Natura Cosméticos. A sede deu à associação um endereço permanente para assembleias, formações e atendimento, e é até hoje a base das atividades administrativas.",
    parceiros: "Natura Cosméticos",
    metricas: [
      { valor: "2006", rotulo: "conclusão" },
      { valor: "1", rotulo: "sede própria" },
    ],
  },
  {
    slug: "centro-digital",
    nome: "Centro Digital para a Cidadania",
    status: "Concluído",
    periodo: "2009",
    area: "Educação",
    resumo:
      "Implantação de centro de acesso à internet e formação digital na comunidade, em convênio com o Governo da Bahia.",
    descricao:
      "Implantação do Centro Digital para a Cidadania em Caeté-Açu, em 2009, por meio de programa do Governo da Bahia. O centro levou acesso à internet e formação digital para o vale num momento em que isso era raro na Chapada Diamantina.",
    parceiros: "Governo da Bahia",
    metricas: [
      { valor: "2009", rotulo: "implantação" },
      { valor: "1", rotulo: "centro digital" },
    ],
  },
  {
    slug: "educapao",
    nome: "Movimento ÉduCapão",
    status: "Concluído",
    periodo: "Campanha encerrada",
    area: "Educação",
    resumo:
      "Arrecadação e prestação de contas de recursos de terceiros em conta exclusiva, em apoio à educação no vale.",
    descricao:
      "A associação atuou como entidade arrecadadora do Movimento ÉduCapão, recebendo doações de terceiros em conta exclusiva e prestando contas do uso dos recursos. É o precedente de execução financeira que a associação apresenta a financiadores.",
    parceiros: "Movimento ÉduCapão · doadores pessoa física",
    metricas: [
      { valor: "1", rotulo: "conta exclusiva" },
      { valor: "100%", rotulo: "contas prestadas" },
    ],
  },
];

export const posts: Post[] = [
  {
    slug: "convocacao-assembleia-2026",
    titulo: "Convocação: assembleia geral ordinária de 14 de março",
    categoria: "Convocação",
    data: "02/09/2026",
    autor: "Secretaria",
    projeto: null,
    resumo:
      "Pauta de aprovação das contas do exercício 2025, plano de atividades de 2026 e deliberação sobre a captação do Rufino Rocha.",
  },
  {
    slug: "agua-manutencao-reservatorio",
    titulo: "Manutenção do reservatório principal concluída",
    categoria: "Notícia",
    data: "18/08/2026",
    autor: "Diretoria",
    projeto: "agua-vila",
    resumo:
      "Limpeza e vedação do reservatório que abastece a Vila, com interrupção programada de dois dias e retomada normal do fornecimento.",
  },
  {
    slug: "rufino-rocha-orcamento",
    titulo: "Orçamento da revitalização do Rufino Rocha aprovado em reunião",
    categoria: "Notícia",
    data: "05/08/2026",
    autor: "Diretoria",
    projeto: "rufino-rocha",
    resumo:
      "Três orçamentos foram apresentados para cobertura, piso e instalação elétrica. O escolhido é a base da meta de captação divulgada.",
  },
];

export const linhaDoTempo: LinhaDoTempoItem[] = [
  {
    ano: "1996",
    titulo: "Fundação da associação de pais e mestres de Caeté-Açu",
    parceiro: "Moradores da comunidade",
  },
  {
    ano: "2006",
    titulo: "Construção da sede da APEA-CA",
    parceiro: "Natura Cosméticos",
  },
  {
    ano: "2009",
    titulo: "Centro Digital para a Cidadania",
    parceiro: "Governo da Bahia",
  },
  {
    ano: "2017",
    titulo: "Início do sistema de distribuição de água da Vila",
    parceiro: "Bahia Produtiva · CERB · Prefeitura de Palmeiras",
  },
  {
    ano: "2019",
    titulo: "Cessão de uso do espaço Rufino Rocha",
    parceiro: "Prefeitura de Palmeiras · 5 anos",
  },
  {
    ano: "2021",
    titulo: "Assento em colegiado municipal",
    parceiro: "Prefeitura de Palmeiras",
  },
  {
    ano: "2026",
    titulo: "Portal institucional e abertura da prestação de contas",
    parceiro: "Em implantação",
  },
];

export const cadastro: CadastroItem[] = [
  {
    rotulo: "Razão social",
    valor: "Associação de Pais, Educadores e Agricultores de Caeté-Açu",
  },
  { rotulo: "Sigla", valor: "APEA-CA" },
  { rotulo: "CNPJ", valor: "01.234.567/0001-89 · dado de exemplo" },
  {
    rotulo: "Natureza jurídica",
    valor: "Associação privada sem fins lucrativos",
  },
  { rotulo: "Fundação", valor: "1996" },
  { rotulo: "Sede", valor: "Vila de Caeté-Açu · Palmeiras · Bahia" },
  {
    rotulo: "Território de atuação",
    valor: "Vale do Capão e comunidades do entorno, Chapada Diamantina",
  },
  {
    rotulo: "Reconhecimento",
    valor:
      "Municipal e estadual, com assento em colegiado da Prefeitura de Palmeiras",
  },
];

export const diretoria: DiretoriaItem[] = [
  { cargo: "Presidência", nome: "A confirmar" },
  { cargo: "Vice-presidência", nome: "A confirmar" },
  { cargo: "Tesouraria", nome: "A confirmar" },
  { cargo: "Secretaria", nome: "A confirmar" },
  { cargo: "Conselho fiscal", nome: "Três membros a confirmar" },
];

export const documentos: DocumentoItem[] = [
  {
    tipo: "Estatuto · vigente",
    titulo: "Estatuto social da APEA-CA",
    resumo:
      "Finalidade, quadro social, órgãos de administração, regras de assembleia e destinação do patrimônio.",
    peso: "PDF · 1,1 MB",
  },
  {
    tipo: "Ata · 14/03/2026",
    titulo: "Assembleia geral ordinária",
    resumo:
      "Aprovação das contas do exercício 2025 e plano de atividades para 2026.",
    peso: "PDF · 212 KB",
  },
  {
    tipo: "Ata · 08/02/2025",
    titulo: "Eleição da diretoria, gestão 2025–2027",
    resumo:
      "Chapa eleita, apuração e posse dos membros da diretoria e do conselho fiscal.",
    peso: "PDF · 184 KB",
  },
  {
    tipo: "Regimento",
    titulo: "Regimento interno de uso dos espaços comunitários",
    resumo:
      "Regras de reserva, uso e conservação da sede e do espaço Rufino Rocha.",
    peso: "PDF · 96 KB",
  },
];

export const exercicios: Record<string, Exercicio> = {
  "2025": {
    ano: "2025",
    receitas: "148.320,00",
    despesas: "131.905,44",
    saldo: "16.414,56",
    aprovado: "14/03/2026",
    peso: "420 KB",
  },
  "2024": {
    ano: "2024",
    receitas: "96.740,00",
    despesas: "89.112,30",
    saldo: "7.627,70",
    aprovado: "22/03/2025",
    peso: "388 KB",
  },
  "2023": {
    ano: "2023",
    receitas: "74.210,00",
    despesas: "71.980,15",
    saldo: "2.229,85",
    aprovado: "19/03/2024",
    peso: "351 KB",
  },
};

export const anosExercicio = ["2025", "2024", "2023"];

export const PIX_KEY = "01.234.567/0001-89";

// Visual badge tokens per project status.
export function statusBadge(status: ProjetoStatus): {
  bg: string;
  ink: string;
} {
  if (status === "Ativo") return { bg: "#E3F0E4", ink: "#0C3B21" };
  if (status === "Em captação") return { bg: "#FAF3E4", ink: "#8A4020" };
  return { bg: "#EDE9DE", ink: "#4A4B44" };
}

// Visual badge tokens per blog category.
export function categoriaBadge(categoria: Post["categoria"]): {
  bg: string;
  ink: string;
} {
  if (categoria === "Convocação") return { bg: "#FAF3E4", ink: "#8A4020" };
  if (categoria === "Comunicado") return { bg: "#E3F0E4", ink: "#0C3B21" };
  if (categoria === "Artigo") return { bg: "#EDE9DE", ink: "#4A4B44" };
  return { bg: "#E9F3EC", ink: "#14683A" };
}
