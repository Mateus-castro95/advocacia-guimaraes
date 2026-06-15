export interface Article {
  id: number
  category: string
  title: string
  slug: string
  summary: string
  image: string
  content: string[]
}

export const articles: Article[] = [
  {
    id: 1,
    category: 'Direito Administrativo',
    title: 'Servidores públicos: concursos, estabilidade e reforma administrativa',
    slug: 'servidores-publicos-concursos-estabilidade-reforma-administrativa',
    summary: 'Entenda as principais diretrizes sobre concursos públicos, estabilidade de cargos e os potenciais impactos das novas propostas de reforma administrativa.',
    image: '/img/administrativo.webp',
    content: [
      'O regime jurídico dos servidores públicos no Brasil é pautado por regras rígidas que visam garantir a impessoalidade e a continuidade dos serviços prestados à população. Dentre essas regras, o concurso público surge como a porta de entrada constitucional para cargos efetivos, assegurando igualdade de oportunidades a todos os candidatos.',
      'A estabilidade funcional, adquirida após o estágio probatório, é outro pilar fundamental. Ela não existe para proteger privilégios individuais, mas sim para resguardar o servidor de pressões políticas e perseguições decorrentes da alternância de poder, garantindo uma atuação técnica e imparcial do Estado.',
      'Atualmente, o debate em torno da reforma administrativa traz à tona propostas de flexibilização da estabilidade e novas formas de contratação. Acompanhar essas alterações é crucial para candidatos a cargos públicos e servidores de carreira, a fim de garantir a conformidade e a preservação de direitos adquiridos.'
    ]
  },
  {
    id: 2,
    category: 'Direito Ambiental',
    title: 'Responsabilidade civil por danos ambientais e dano moral coletivo',
    slug: 'responsabilidade-civil-danos-ambientais-dano-moral-coletivo',
    summary: 'Uma análise aprofundada sobre a reparação de danos ao meio ambiente e a caracterização do dano moral coletivo segundo a jurisprudência brasileira.',
    image: '/img/ambiental.webp',
    content: [
      'A responsabilidade civil por danos ao meio ambiente no Brasil é orientada pela teoria do risco integral, o que significa que o poluidor responde de forma objetiva (independentemente de culpa) pela reparação dos danos causados. O dever de reparar visa restituir a área lesada ao seu estado natural ou compensar os prejuízos irreparáveis.',
      'Nos últimos anos, os tribunais superiores consolidaram o entendimento de que os danos ecológicos também podem gerar o chamado dano moral coletivo. Trata-se de uma lesão extrapatrimonial sofrida por toda a coletividade, que tem seu direito ao meio ambiente ecologicamente equilibrado violado por ações ilícitas.',
      'A quantificação desse tipo de indenização é complexa e leva em consideração a extensão do dano e o caráter pedagógico da punição, servindo como desestímulo para futuras práticas poluidoras por parte de empresas e particulares.'
    ]
  },
  {
    id: 3,
    category: 'Direito Ambiental',
    title: 'Licenciamento ambiental e flexibilização das regras ambientais',
    slug: 'licenciamento-ambiental-flexibilizacao-regras-ambientais',
    summary: 'Descubra como funcionam os trâmites do licenciamento ambiental e as discussões recentes sobre a flexibilização das normas no país.',
    image: '/img/ambiental.webp',
    content: [
      'O licenciamento ambiental é o procedimento administrativo pelo qual o órgão competente autoriza a localização, instalação, ampliação e a operação de empreendimentos e atividades utilizadoras de recursos ambientais, considerados efetiva ou potencialmente poluidores.',
      'Discussões recentes no cenário legislativo buscam flexibilizar e agilizar a concessão de licenças, propondo modalidades simplificadas para atividades consideradas de baixo impacto. Críticos argumentam que a pressa burocrática não pode comprometer a análise técnica de riscos, sob pena de retrocessos ecológicos irreparáveis.',
      'Para empresas do setor agroindustrial, imobiliário e de infraestrutura, compreender o equilíbrio entre celeridade processual e a rigorosa observância das normas vigentes é fundamental para evitar a paralisação de projetos e multas administrativas.'
    ]
  },
  {
    id: 4,
    category: 'Direito Ambiental',
    title: 'Desmatamento, áreas de preservação permanente e reserva legal',
    slug: 'desmatamento-areas-preservacao-permanente-reserva-legal',
    summary: 'Saiba quais são os limites e imposições legais referentes às APPs e à Reserva Legal no controle de desmatamento.',
    image: '/img/ambiental.webp',
    content: [
      'O Código Florestal Brasileiro impõe limites estritos ao uso da terra, com especial atenção às Áreas de Preservação Permanente (APPs) e à Reserva Legal. As APPs protegem encostas, margens de rios e topos de morros, sendo áreas cobertas ou não por vegetação nativa com a função ambiental de preservar recursos hídricos e a biodiversidade.',
      'Já a Reserva Legal é a área localizada no interior de uma propriedade rural, delimitada de acordo com o percentual de cada bioma, necessária ao uso sustentável dos recursos naturais e à reabilitação dos processos ecológicos.',
      'A supressão irregular de vegetação nessas áreas constitui crime ambiental e sujeita o proprietário a pesadas multas, embargo da atividade e à obrigação de promover o reflorestamento da área degradada através do Cadastro Ambiental Rural (CAR).'
    ]
  },
  {
    id: 5,
    category: 'Direito Civil',
    title: 'Responsabilidade civil das plataformas digitais e o Jogo do Tigrinho',
    slug: 'responsabilidade-civil-plataformas-digitais-jogo-tigrinho',
    summary: 'A responsabilidade civil de redes sociais e influenciadores digitais na divulgação de jogos de azar online não autorizados no Brasil.',
    image: '/img/civil.webp',
    content: [
      'A popularização de plataformas de apostas e jogos de azar online não autorizados, popularmente conhecidos no Brasil como "Jogo do Tigrinho" e similares, gerou uma onda de discussões jurídicas sobre a responsabilidade civil por danos de consumidores induzidos ao prejuízo financeiro.',
      'Sob a ótica do Direito Civil e do Código de Defesa do Consumidor, investiga-se a responsabilização não apenas das plataformas que hospedam os jogos fora do país, mas também dos influenciadores digitais que promovem esses sistemas prometendo ganhos garantidos.',
      'A jurisprudência caminha para reconhecer a corresponsabilidade pela publicidade enganosa, abrindo precedentes importantes de indenizações por danos materiais e morais para vítimas de fraudes virtuais promovidas em larga escala.'
    ]
  },
  {
    id: 6,
    category: 'Direito de Família e Sucessões',
    title: 'Holding familiar como instrumento sucessório e patrimonial',
    slug: 'holding-familiar-instrumento-sucessorio-patrimonial',
    summary: 'Descubra como organizar e proteger seus bens em vida, evitando disputas judiciais de inventário e reduzindo a carga tributária.',
    image: '/img/da-familia.webp',
    content: [
      'A holding familiar é uma empresa constituída com a finalidade de administrar o patrimônio de uma família. Em vez de os bens físicos (como imóveis, aplicações e participações societárias) estarem em nome das pessoas físicas, eles passam a pertencer à pessoa jurídica da holding.',
      'Esse mecanismo funciona como uma ferramenta extraordinária de planejamento sucessório, pois permite que a partilha dos bens seja feita através da doação de cotas sociais com cláusulas de usufruto, reversão e impenhorabilidade, eliminando por completo a necessidade de um desgastante processo de inventário judicial.',
      'Além de afastar conflitos familiares típicos de partilhas futuras, a estruturação de uma holding acarreta benefícios fiscais significativos, diminuindo impostos incidentes sobre rendas de aluguéis e ganhos de capital em transações imobiliárias.'
    ]
  },
  {
    id: 7,
    category: 'Direito de Família e Sucessões',
    title: 'Divórcio extrajudicial e novas formas de dissolução familiar',
    slug: 'divorcio-extrajudicial-novas-formas-dissolucao-familiar',
    summary: 'Saiba como formalizar o término conjugal em cartório de forma ágil, simples e sem a necessidade de intervenção judicial.',
    image: '/img/da-familia.webp',
    content: [
      'O divórcio extrajudicial, instituído pela Lei 11.441/2007, revolucionou o Direito de Família ao permitir que casais realizem a dissolução do casamento diretamente em Cartório de Notas, por meio de escritura pública, dispensando o demorado trâmite no Poder Judiciário.',
      'Para utilizar essa via rápida, o casal deve estar em consenso sobre todos os termos (partilha de bens, pensão alimentícia e retorno ao nome de solteiro(a)) e não possuir filhos menores ou incapazes — ou, em entendimentos mais modernos de diversos estados, ter as questões de guarda e alimentos previamente resolvidas em juízo.',
      'A presença de um advogado é obrigatória no ato cartorário para orientar as partes e garantir a regularidade do acordo, tornando o processo humanizado, econômico e concluído em poucos dias.'
    ]
  },
  {
    id: 8,
    category: 'Direito de Família e Sucessões',
    title: 'Alienação parental e guarda compartilhada',
    slug: 'alienacao-parental-guarda-compartilhada',
    summary: 'Diretrizes legais sobre a guarda de filhos e as consequências psicológicas e jurídicas dos atos de alienação parental.',
    image: '/img/da-familia.webp',
    content: [
      'A alienação parental ocorre quando um dos genitores ou responsáveis realiza uma campanha de desconstrução da imagem do outro genitor na mente do filho, visando afastar a criança da convivência e do afeto deste. Trata-se de uma conduta ilícita, combatida severamente pela Lei 12.318/2010.',
      'A fixação da guarda compartilhada é apontada por especialistas como um dos principais mecanismos para atenuar as chances de alienação. Na guarda compartilhada, o tempo de convivência com os filhos deve ser dividido de forma equilibrada, e as decisões cruciais sobre a educação, saúde e bem-estar do menor devem ser tomadas em conjunto por ambos os pais.',
      'A comprovação de alienação parental em juízo pode resultar em advertências ao alienador, ampliação do regime de convivência em favor do genitor alienado, multas e, em casos extremos, na alteração da guarda ou suspensão da autoridade parental.'
    ]
  },
  {
    id: 9,
    category: 'Direito de Família e Sucessões',
    title: 'Uniões simultâneas e seus efeitos patrimoniais',
    slug: 'unioes-simultaneas-efeitos-patrimoniais',
    summary: 'A análise da jurisprudência nacional acerca de uniões estáveis concomitantes e os direitos de partilha de bens.',
    image: '/img/da-familia.webp',
    content: [
      'A concomitância de uniões estáveis — ou seja, a coexistência de dois relacionamentos afetivos públicos, contínuos e com o objetivo de constituir família ao mesmo tempo — desafia as bases tradicionais do Direito de Família brasileiro, que é historicamente norteado pelo princípio da monogamia.',
      'O Supremo Tribunal Federal (STF) fixou tese vedando o reconhecimento jurídico e previdenciário de uniões estáveis paralelas, priorizando a proteção ao casamento ou à primeira união constituída.',
      'Contudo, o debate segue vivo nas instâncias inferiores, com foco em questões de cunho patrimonial (partilha de bens) fundadas na teoria do enriquecimento sem causa, visando proteger os direitos materiais de parceiros de boa-fé em relacionamentos duradouros paralelos.'
    ]
  },
  {
    id: 10,
    category: 'Direito de Família e Sucessões',
    title: 'Direito dos animais no contexto familiar (família multiespécie)',
    slug: 'direito-dos-animais-contexto-familiar-familia-multiespecie',
    summary: 'Como a guarda, custódia e pensão para animais domésticos têm sido decididas pelos tribunais após a separação de casais.',
    image: '/img/da-familia.webp',
    content: [
      'O conceito de "família multiespécie", que reconhece os animais de estimação como integrantes do núcleo familiar, ganhou força no cenário jurídico nacional. Em disputas de divórcio, os pets deixaram de ser tratados como meros bens materiais descartáveis sujeitos a partilha comum.',
      'Atualmente, o Judiciário vem decidindo sobre a custódia compartilhada ou unilateral de cães e gatos de estimação, estabelecendo períodos de visitação e até mesmo obrigação de auxílio financeiro (pensão alimentícia animal) para custear ração, vacinas e cuidados veterinários.',
      'As decisões levam em conta o laço afetivo estabelecido entre os tutores e os animais, priorizando o bem-estar do pet e a harmonia das partes envolvidas no pós-separação.'
    ]
  },
  {
    id: 11,
    category: 'Direito Imobiliário',
    title: 'Usucapião extrajudicial',
    slug: 'usucapiao-extrajudicial',
    summary: 'Saiba como regularizar a propriedade de um imóvel diretamente no Cartório de Registro, sem a demora do processo judicial.',
    image: '/img/imobiliario.webp',
    content: [
      'A regularização da propriedade imobiliária por meio do usucapião extrajudicial, regulamentado pelo Novo Código de Processo Civil e provimentos do CNJ, simplificou significativamente o reconhecimento da posse prolongada de bens imóveis.',
      'Se antes o cidadão aguardava anos por uma sentença judicial de usucapião, hoje é possível instruir o pedido com ata notarial, planta assinada por profissional habilitado, certidões negativas e encaminhar a documentação diretamente ao Cartório de Registro de Imóveis competente.',
      'Esse trâmite extrajudicial, quando não há oposição de vizinhos ou órgãos públicos, costuma durar poucos meses, conferindo ao possuidor o título de propriedade de forma ágil, segura e valorizando substancialmente o ativo imobiliário.'
    ]
  },
  {
    id: 12,
    category: 'Direito Imobiliário',
    title: 'Penhora de imóveis rurais e proteção patrimonial',
    slug: 'penhora-imoveis-rurais-protecao-patrimonial',
    summary: 'Os aspectos jurídicos da impenhorabilidade de imóveis rurais familiares de pequena dimensão frente a credores.',
    image: '/img/imobiliario.webp',
    content: [
      'A pequena propriedade rural, definida em lei e explorada pela família, goza de proteção constitucional de impenhorabilidade. Esse direito visa garantir a subsistência do trabalhador rural e a dignidade familiar frente a execuções de dívidas decorrentes de sua atividade produtiva.',
      'Tribunais consolidaram entendimento favorável ao devedor mesmo nos casos em que o imóvel rural tenha sido oferecido como garantia hipotecária em empréstimos de fomento agrícola, mantendo a proteção imposta pela Constituição Federal.',
      'Empresários rurais e proprietários devem estar atentos aos requisitos formais de caracterização da pequena propriedade para resguardar o patrimônio produtivo de penhoras judiciais abusivas.'
    ]
  },
  {
    id: 13,
    category: 'Direito Médico, Odontológico e da Saúde',
    title: 'Responsabilidade civil médica e odontológica',
    slug: 'responsabilidade-civil-medica-odontologica',
    summary: 'Esclarecimentos sobre os deveres dos profissionais da saúde, erro médico e as reparações devidas sob as regras do Código de Defesa do Consumidor.',
    image: '/img/medico-odonto-e-saude.webp',
    content: [
      'A relação entre profissional de saúde e paciente atrai as normas protetivas do Código de Defesa do Consumidor. A obrigação do médico é de meio (empregar a melhor técnica, sem garantia de cura), salvo em procedimentos puramente estéticos (onde a obrigação é de resultado).',
      'Para a caracterização da responsabilidade civil do profissional liberal, exige-se a demonstração de culpa em alguma de suas modalidades: negligência, imprudência ou imperícia.',
      'Hospitais, por sua vez, respondem de forma objetiva pelos defeitos na prestação de seus serviços auxiliares. Em caso de lesões decorrentes de falhas procedimentais, o paciente lesionado tem direito a pleitear indenizações por danos morais, estéticos e materiais.'
    ]
  },
  {
    id: 14,
    category: 'Direito Médico, Odontológico e da Saúde',
    title: 'Planos de saúde e negativas de cobertura',
    slug: 'planos-de-saude-negativas-cobertura',
    summary: 'Como agir diante da recusa abusiva de planos de saúde para exames, cirurgias, medicamentos de alto custo ou terapias essenciais.',
    image: '/img/medico-odonto-e-saude.webp',
    content: [
      'As negativas de cobertura por operadoras de plano de saúde para tratamentos prescritos por médicos assistentes constituem um dos principais focos de litígio no Direito da Saúde.',
      'Alegações como a falta de previsão do medicamento ou procedimento no Rol de Procedimentos da ANS, ou a indicação de tratamento experimental (off-label), são reiteradamente declaradas abusivas pelos tribunais, sob a premissa de que quem define a terapia adequada é o médico, e não a operadora.',
      'Casos urgentes que envolvem risco de morte ou agravamento de doenças podem ser resolvidos de forma rápida por meio de medidas liminares na justiça, obrigando o plano ao imediato fornecimento do tratamento sob pena de multa diária.'
    ]
  },
  {
    id: 15,
    category: 'Direito Penal',
    title: 'Crimes digitais e cibercriminalidade',
    slug: 'crimes-digitais-cibercriminalidade',
    summary: 'O panorama atual sobre o vazamento de dados, cyberbullying, difamação online e a repressão estatal a essas condutas.',
    image: '/img/penal.webp',
    content: [
      'O ambiente cibernético, anteriormente considerado por muitos como uma zona sem leis, passou a ter regras severas de controle penal com o surgimento da Lei Carolina Dieckmann e o avanço de delegacias especializadas.',
      'Crimes como invasão de dispositivo informático alheio, vazamento e divulgação de dados íntimos sem consentimento, perseguição obsessiva digital (stalking) e crimes contra a honra cometidos em redes sociais estão sujeitos a penas de reclusão.',
      'A preservação de provas no ambiente digital — por meio de atas notariais, armazenamento de metadados e prints detalhados com cabeçalhos de e-mail — é o passo decisivo para embasar investigações e queixas-crimes bem-sucedidas.'
    ]
  },
  {
    id: 16,
    category: 'Direito Penal',
    title: 'Fraudes eletrônicas e golpes financeiros',
    slug: 'fraudes-eletronicas-golpes-financeiros',
    summary: 'Entenda os principais golpes aplicados na internet, como engenharia social e falsas identidades, e as sanções penais previstas.',
    image: '/img/penal.webp',
    content: [
      'O estelionato eletrônico sofreu recente endurecimento penal no Código Penal Brasileiro, com penas de reclusão substancialmente elevadas para golpes aplicados via redes sociais, contatos de WhatsApp falsos ou e-mails fraudulentos.',
      'Criminosos utilizam técnicas sofisticadas de engenharia social para roubar contas virtuais, induzir transferências bancárias por PIX ou oferecer produtos fantasmas em plataformas de vendas.',
      'Além da atuação da polícia civil para identificar a autoria do crime e prender os fraudadores, as vítimas podem, por vias civis conexas, acionar as instituições bancárias sob o argumento de falha de segurança em transações atípicas para recuperar o valor perdido.'
    ]
  },
  {
    id: 17,
    category: 'Direito Penal',
    title: 'Crimes ambientais e responsabilidade penal empresarial',
    slug: 'crimes-ambientais-responsabilidade-penal-empresarial',
    summary: 'A responsabilidade criminal que recai sobre as pessoas jurídicas e seus executivos em face de desastres ecológicos.',
    image: '/img/penal.webp',
    content: [
      'A Lei de Crimes Ambientais (Lei 9.605/98) inovou no ordenamento jurídico ao prever a responsabilidade penal direta das pessoas jurídicas. Empresas podem figurar no polo passivo de ações penais e sofrer sanções de suspensão de atividades, interdição temporária de direitos e penas de multa expressivas.',
      'Executivos, diretores e engenheiros que sabiam do risco ambiental e deixaram de agir para evitá-lo também podem responder pessoalmente pelos crimes, estando sujeitos a penas privativas de liberdade.',
      'A implementação de sistemas corporativos rígidos de compliance ambiental e auditorias internas é a ferramenta preventiva ideal para salvaguardar a imagem institucional da empresa e mitigar riscos criminais.'
    ]
  },
  {
    id: 18,
    category: 'Direito Previdenciário',
    title: 'Aposentadoria especial e agentes nocivos',
    slug: 'aposentadoria-especial-agentes-nocivos',
    summary: 'Quem tem direito ao benefício diferenciado pelo exercício de atividades insalubres e como comprovar a nocividade perante o INSS.',
    image: '/img/previdenciário.webp',
    content: [
      'A aposentadoria especial é um benefício previdenciário concedido a trabalhadores que exercem suas funções expostos a agentes nocivos químicos, físicos ou biológicos capazes de causar danos à saúde ou à integridade física de forma contínua.',
      'Para a obtenção da aposentadoria especial aos 15, 20 ou 25 anos de contribuição, a legislação exige a apresentação do Perfil Profissiográfico Previdenciário (PPP) e do Laudo Técnico de Condições Ambientais do Trabalho (LTCAT), emitidos pela empresa contratante.',
      'A reforma previdenciária de 2019 instituiu uma idade mínima de transição para a aposentadoria especial, gerando discussões judiciais acerca do direito adquirido de trabalhadores expostos a níveis elevados de ruído ou calor contínuos.'
    ]
  },
  {
    id: 19,
    category: 'Direito Previdenciário',
    title: 'Reconhecimento de atividade rural',
    slug: 'reconhecimento-atividade-rural',
    summary: 'Quais documentos e meios de prova são aceitos para comprovar a atuação como segurado especial no campo.',
    image: '/img/previdenciário.webp',
    content: [
      'O segurado especial que trabalha em regime de economia familiar na produção agrícola ou pecuária possui regras previdenciárias de acesso facilitado à aposentadoria por idade. O grande desafio, frequentemente levado à esfera judicial, reside na comprovação documental do tempo trabalhado na roça.',
      'O INSS exige início de prova material contemporânea aos fatos, complementada por depoimentos de testemunhas. Certidões de nascimento, casamento, matrículas de imóveis rurais da família, cadastros de sindicatos rurais e registros de compra e venda de insumos agrícolas servem como fortes evidências.',
      'A atuação de assessoria previdenciária especializada ajuda a reunir e organizar a documentação de forma consistente para obter a concessão do benefício de maneira rápida e sem indeferimentos administrativos desnecessários.'
    ]
  },
  {
    id: 20,
    category: 'Direito Previdenciário',
    title: 'BPC/LOAS e critérios socioeconômicos',
    slug: 'bpc-loas-criterios-socioeconomicos',
    summary: 'O passo a passo para requerer o benefício assistencial para idosos ou pessoas com deficiência em situação de vulnerabilidade.',
    image: '/img/previdenciário.webp',
    content: [
      'O Benefício de Prestação Continuada (BPC), regulamentado pela Lei Orgânica da Assistência Social (LOAS), garante o pagamento de um salário-mínimo mensal a idosos com mais de 65 anos ou a pessoas com deficiência de qualquer idade que comprovem não possuir meios de prover a própria subsistência.',
      'O critério de renda familiar per capita estabelecido na lei é de 1/4 do salário-mínimo, contudo, a jurisprudência judicial pacificou o entendimento de que a miserabilidade pode ser demonstrada por outros fatores sociais e despesas comprovadas de saúde e moradia.',
      'Ter o Cadastro Único (CadÚnico) devidamente atualizado no município é pré-requisito indispensável antes de protocolar o requerimento, o qual pode ser contestado na justiça se houver avaliação social ou perícia médica inadequada do INSS.'
    ]
  },
  {
    id: 21,
    category: 'Direito Previdenciário',
    title: 'Tempo de contribuição e provas digitais',
    slug: 'tempo-contribuicao-provas-digitais',
    summary: 'A importância de cruzar dados do CNIS e utilizar plataformas do governo para comprovar vínculos de trabalho antigos.',
    image: '/img/previdenciário.webp',
    content: [
      'A digitalização dos serviços previdenciários transformou a forma de se requerer aposentadorias. O Cadastro Nacional de Informações Sociais (CNIS) é o banco de dados oficial utilizado para o cálculo, porém apresenta erros comuns como ausência de datas de saída ou valores de contribuição divergentes.',
      'O segurado deve monitorar ativamente sua carteira de trabalho digital e o portal "Meu INSS". A utilização de provas digitais contemporâneas de prestação de serviço (como extratos de FGTS e contratos assinados digitalmente) é a via ágil para retificar o CNIS.',
      'O auxílio de um profissional especializado assegura que o tempo de contribuição seja computado em sua totalidade, evitando perdas financeiras no valor final do benefício.'
    ]
  },
  {
    id: 22,
    category: 'Direito Societário',
    title: 'Planejamento patrimonial e holding familiar empresarial',
    slug: 'planejamento-patrimonial-holding-familiar-empresarial',
    summary: 'Estruturação societária estratégica com foco na perpetuidade empresarial, otimização de tributos e proteção de ativos.',
    image: '/img/societário.webp',
    content: [
      'O planejamento patrimonial por meio de estruturas societárias especializadas, como as holdings puras e mistas, visa proteger a saúde econômica de grupos empresariais e blindar ativos de oscilações normais do mercado ou riscos de execuções fiscais e trabalhistas.',
      'Uma holding familiar controla a participação em outras empresas do grupo e gerencia o patrimônio imobiliário de maneira centralizada, reduzindo custos tributários decorrentes de tributação sobre distribuição de lucros e herança societária.',
      'Trata-se de uma estratégia corporativa voltada para grandes e médias empresas que desejam blindar seus negócios contra disputas pessoais de sócios ou processos sucessórios ineficientes.'
    ]
  },
  {
    id: 23,
    category: 'Direito Societário',
    title: 'Responsabilidade dos administradores de empresas',
    slug: 'responsabilidade-administradores-empresas',
    summary: 'Os deveres de lealdade e diligência impostos aos gestores empresariais e quando há risco de desconsideração da personalidade jurídica.',
    image: '/img/societário.webp',
    content: [
      'Os sócios e diretores executivos possuem dever de diligência e lealdade na condução dos negócios corporativos, agindo sempre no melhor interesse da companhia, nos limites de suas atribuições estatutárias.',
      'Embora a regra geral seja a limitação de responsabilidade patrimonial ao capital social integralizado, a lei permite o redirecionamento de cobranças de dívidas aos administradores (Desconsideração da Personalidade Jurídica) em casos de desvio de finalidade ou confusão patrimonial.',
      'A gestão corporativa atenta às boas práticas de governança e contabilidade clara é a melhor vacina para afastar a responsabilização pessoal dos dirigentes da empresa.'
    ]
  },
  {
    id: 24,
    category: 'Direito Societário',
    title: 'Sucessão empresarial de sócios',
    slug: 'sucessao-empresarial-socios',
    summary: 'Mecanismos contratuais para regulamentar a entrada de herdeiros ou liquidação de cotas em caso de falecimento de sócios.',
    image: '/img/societário.webp',
    content: [
      'A morte de um dos sócios de uma sociedade limitada pode desestabilizar gravemente a gestão e o fluxo de caixa do negócio se o contrato social não dispuser de regras claras sobre a destinação das quotas e a entrada de herdeiros.',
      'A redação de cláusulas sucessórias personalizadas e a instituição de acordos de acionistas regulamentam se os herdeiros serão admitidos na empresa ou se as cotas serão liquidadas mediante pagamento de haveres de forma parcelada, preservando a continuidade operacional.',
      'O planejamento sucessório empresarial evita brigas familiares nas dependências da companhia e impede que a operação seja paralisada em decorrência de inventários bloqueados na justiça.'
    ]
  },
  {
    id: 25,
    category: 'Direito Trabalhista',
    title: 'Terceirização e responsabilidade subsidiária',
    slug: 'terceirizacao-responsabilidade-subsidiaria',
    summary: 'Entenda os limites da responsabilidade do contratante final perante os encargos e obrigações trabalhistas não pagos pela terceirizada.',
    image: '/img/trabalhista.webp',
    content: [
      'A terceirização de atividades-fim e meio é amplamente praticada na economia nacional. Contudo, a Súmula 331 do Tribunal Superior do Trabalho (TST) impõe a responsabilidade subsidiária da empresa tomadora de serviços pelas obrigações laborais inadimplidas pela terceirizada.',
      'Isso significa que, se a empresa prestadora falir ou desaparecer sem pagar salários e verbas rescisórias de seus funcionários terceirizados, a empresa que se beneficiou diretamente daquela força de trabalho será obrigada judicialmente a quitar a conta.',
      'Para mitigar esse risco de passivo trabalhista oculto, a tomadora de serviços deve realizar auditoria preventiva periódica exigindo comprovantes de depósitos de FGTS, guias previdenciárias e holerites dos trabalhadores terceirizados sob pena de sofrer penhoras patrimoniais.'
    ]
  },
  {
    id: 26,
    category: 'Direito Trabalhista',
    title: 'Acidentes de trabalho e doenças ocupacionais',
    slug: 'acidentes-de-trabalho-doencas-ocupacionais',
    summary: 'Saiba quando há direito à estabilidade, indenização por danos morais/materiais e os deveres preventivos das empresas.',
    image: '/img/trabalhista.webp',
    content: [
      'Acidentes ocorridos durante o expediente de trabalho ou doenças desenvolvidas em decorrência das atividades laborais (como LER/DORT ou distúrbios psicológicos relacionados ao estresse profissional extremo) geram direitos protetivos e indenizatórios importantes aos trabalhadores.',
      'O trabalhador vitimado tem direito à estabilidade provisória no emprego de 12 meses após a cessação do auxílio-acidentário do INSS. Caso demonstrada negligência da empresa no fornecimento de EPIs ou na ergonomia, o empregador responde civilmente pelo pagamento de indenizações por danos materiais, morais e estéticos.',
      'A prevenção corporativa, combinada à análise técnica de riscos, protege o empregado e resguarda as organizações de ações judiciais de alto valor financeiro.'
    ]
  },
  {
    id: 27,
    category: 'Direito Tributário',
    title: 'Teses tributárias no STF e STJ',
    slug: 'teses-tributarias-stf-stj',
    summary: 'Acompanhe as principais teses em julgamento pelas cortes superiores que podem trazer economia fiscal significativa às empresas.',
    image: '/img/direito-tributario.webp',
    content: [
      'O Superior Tribunal de Justiça (STJ) e o Supremo Tribunal Federal (STF) julgam teses fiscais de grande impacto econômico, definindo a constitucionalidade de impostos, taxas e a base de cálculo de contribuições sociais das empresas.',
      'Teses consagradas, como a exclusão do ICMS da base de cálculo do PIS e da COFINS (conhecida como a "Tese do Século"), permitiram que milhares de companhias recuperassem valores pagos indevidamente ao Fisco Federal nos últimos anos.',
      'Para empresários, o acompanhamento preventivo das decisões dessas altas cortes e o ajuizamento de ações específicas são medidas de inteligência tributária fundamentais para reduzir a pesada carga de impostos e otimizar o fluxo de caixa empresarial.'
    ]
  }
]
