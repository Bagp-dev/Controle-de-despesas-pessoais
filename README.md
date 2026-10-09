# Controle-de-despesas-pessoais
Sistema feito para registrar gastos e acompanhar pagamentos

## Identificação nome do projeto 

  nome dos integrantes: Beatriz Araújo gomes Pereira
  disciplina: Programação Web 
  unidade: I 
  turma: CCO - 6º período - Manhã

## Descrição

O projeto tem como objetivo  ajudar pessoas a cultivarem uma vida financeira mais organizada, e ter o controle dos seus gastos finaceiros. A partir do conceito “Plante seu futuro”, a aplicação mostra que as pequenas atitudes de organização financeira de agora podem contribuir para a construção de um futuro. Basicamente, quando uma pessoa tem noção de suas despesas, acompanha os pagamentos e se planeja, torna-se mais fácil administrar o próprio dinheiro e criar oportunidades para poupar e investir em seus objetivos. A aplicação permite cadastrar e organizar despesas, classificá-las por categoria, filtrar os registros e acompanhar quais pagamentos já foram realizados e quais continuam pendentes. Também apresenta um resumo dos valores e das despesas, ajudando o usuário a visualizar quanto ainda precisa pagar. Mais do que organizar contas, a proposta é incentivar o planejamento financeiro consciente, ajudando o usuário a investir seu dinheiro para construir uma reserva para que seus planos e sonhos futuros não sejam atrasados por falta de planejamento. Portanto, plantar seu futuro começa com as escolhas que você faz hoje.

## Funcionalidades 

1. Cadastro de despesas - Registra despesas pelo nome, data de registro, forma de pagamento, categoria e valor
2. Listagem e visualização de despesas - Exibe as despesas cadastradas em uma tabela, com descrição, id , data de registro, forma de pagamento, categoria, valor e status
3. Pesquisa e filtro - Pesquisa despesas pelo nome e exibi apenas o registro correspondente. Além disso, filtra os registros por data, forma de pagamento e categoria
4. Status de pagamento - Permite alterar o status de cada despesa entre Pendente e Pago
5. Exclusão de despesas - Botão responsável por remover uma despesa cadastrada. E Após a exclusão, a tabela é atualizados.
6. Painel de resumo financeiro - Mostra a quantidade total de despesas cadastradas, total de despesas pendentes,total de despesas pagas e quanto ainda tem de valor de despesas pendentes.

## Tecnologias 
- HTML5 (estrutura e esqueleto do projeto)
- CSS3 (design e estilizaçào)
- JavaScript (automação e interação)
- Git e GitHub (commits, atualizações e registros)
- Figma (design UI do projeto)

## Estrutura do projeto 

O projeto está organizado em arquivos localizados na raiz do repositório, separados conforme suas funções: 

- **`index.html`**: Contém a estrutura da página e os elementos da interface.
- **`style.css`**: Estilização, o layout e a aparência visual da aplicação.
- **`Script.js`**: Implementa as funcionalidades de cadastro, listagem, pesquisa, filtros, exclusão de despesas e atualização do painel financeiro.
- **`README.md`**: Apresenta a documentação do projeto, incluindo sua proposta, funcionalidades, estrutura e uso de inteligência artificial.
- **`capa.png`**: Arquivo de imagem destinado à capa do projeto.
- **`marca.png`**: Recurso visual relacionado à identidade da aplicação.
- **`slogan.png`** , **`background_slogan.png`**: Imagens relacionadas à segunda seção da página - slogan.
- **`Controlador_despesas.png`**, **`Growing Money.png`**, **`girl.png`**, **`sticker_girl.png`** , **`sticker_pig.png`**: Arquivos de ilustração e elementos gráficos associados à identidade visual do projeto.

## Como executar 

1. Baixe ou clone o repositório do projeto para o computador.
2. Acesse a pasta do projeto.
3. Localize o arquivo `index.html`.
4. Abra o arquivo com um navegador Brave.

Após abrir o arquivo, a aplicação estará disponível para uso. Não é necessário instalar dependências ou configurar um banco de dados para executar a versão atual.

## Histórico de desenvolvimento

O desenvolvimento do projeto foi dividido em várias etapas. Inicialmente, foram definidos o conceito, a identidade visual e a organização da interface no figma e pinterest com o auxílio da IA para gerar algumas ilustrações. Em seguida, foram desenvolvidas a estrutura HTML e a estilização CSS. Por último, foi implementada a lógica em Java Script para permitir a interação com os registros de despesas. As primeiras funcionalidades foram a criação do formulário de cadastro e a exibição das despesas em uma tabela. Depois, foram adicionadas a pesquisa, os filtros por data, forma de pagamento e categoria, a alteração do status de pagamento e a exclusão de registros. Também foi implementado um painel com o resumo das despesas cadastradas, pagas e pendentes. Durante o desenvolvimento, foram realizados testes para identificar e corrigir problemas, principalmente no funcionamento da pesquisa e dos filtros. Os ajustes foram feitos para que os resultados exibidos correspondessem aos critérios informados pelo usuário e para que a tabela e o painel fossem atualizados após as alterações. A organização do trabalho envolveu a evolução dos arquivos `index.html`, `style.css` e `Script.js`, mantendo a estrutura, a apresentação visual e a lógica da aplicação separadas.

**Branches utilizadas:** Main e Developer

## Decisões técnicas

**1. Separação entre HTML, CSS e JavaScript**

O projeto foi dividido em arquivos diferentes para facilitar a organização e a manutenção do código. Sendo o HTML responsável pela estrutura, o CSS pelo visual e o JavaScript pelas funcionalidades e interações.

**2. Utilização de um array para armazenar as despesas**

As despesas são armazenadas em um array JavaScript durante a execução da aplicação. Essa escolha simplifica o cadastro sem exigir a configuração de um banco de dados.

**3. Atualização da tabela a partir dos filtros aplicados**

A pesquisa por descrição e os filtros por data, forma de pagamento e categoria são combinados para exibir somente as despesas correspondentes aos critérios informados. Quando nenhum registro corresponde aos filtros, a tabela permanece sem resultados.

## Programação assíncrona

- Onde existe programação assíncrona? Na declaração da função `atualizar_painel()`, no arquivo `Script.js`, por meio da palavra-chave `async`.
- Qual operação ela representa? A função atualiza o painel de resumo financeiro, apresentando a quantidade total de despesas, as despesas pendentes, as pagas e a soma dos valores pendentes.
- Onde são utilizados `Promise`, `async` e/ou `await`? A palavra-chave `async` é utilizada na declaração de `atualizar_painel()`. Não foram utilizados `await` ou chamadas explícitas a `Promise` nessa função.
- O que aparece na interface enquanto a operação é realizada? Não existe uma tela ou mensagem de carregamento, pois a função executa os cálculos e atualiza o painel imediatamente, sem aguardar uma operação assíncrona.

## Limitações e melhorias futuras

**Limitações atuais:**

- Os registros são armazenados apenas em memória, por meio de um array JavaScript. Ao atualizar ou fechar a página, as despesas cadastradas são perdidas.
- O sistema não possui cadastro de receitas, portanto não calcula o saldo disponível do usuário.
- Não existe integração com banco de dados ou API.
- Não é possível editar todos os dados de uma despesa já cadastrada; a interação com o registro permite alterar seu status de pagamento ou excluí-lo.
- O sistema não possui autenticação nem contas individuais para diferentes usuários.
- Não há metas de economia, planejamento de investimentos ou acompanhamento de objetivos financeiros.

**Melhorias futuras:**

- Implementar armazenamento persistente para manter os registros após fechar ou atualizar a página.
- Permitir o cadastro de receitas e calcular o saldo disponível a partir das receitas e despesas.
- Adicionar a edição das informações de despesas já cadastradas.
- Integrar a aplicação a uma API e a um banco de dados.
- Criar autenticação para que cada usuário possa acessar seus próprios registros.
- Implementar metas de economia e acompanhar o progresso dos objetivos financeiros.
- Adicionar gráficos para facilitar a visualização dos gastos por categoria e por período.


## Uso de IA

As ferramentas de inteligência artificial foram utilizadas como apoio em diferentes etapas do projeto. A concepção visual, o planejamento da interface e das funcionalidades foram realizados por mim, com diferentes níveis de auxílio da IA durante a implementação.

| Data | Descrição do modelo | Prompt utilizado | Onde foi usado |
|---|---|---|---|
| 06/10/2026 | ChatGPT — modelo utilizado na conversa | Tirar pequenas dúvidas e possíveis ajustes na estrutura HTML, utilizando meus conhecimentos prévios como base. | HTML — estrutura da página. |
| 07/10/2026 | ChatGPT — modelo utilizado na conversa | Ajustes de estilização, consultando também referências externas. | CSS — estilização e apresentação da interface. |
| 08/10/2026 | ChatGPT — modelo utilizado na conversa | Expliquei o planejamento das funcionalidades de cadastro, listagem, filtros, exclusão e atualização de despesas e solicitei a geração, correção e adaptação do JavaScript conforme os comportamentos esperados. | JavaScript — implementação das funcionalidades e manipulação do DOM. |
| [Data a confirmar] | ChatGPT — modelo utilizado na conversa | Solicitei a geração de ilustrações para utilizar no design que planejei e desenvolvi no Figma. | Ilustrações utilizadas na interface. |

**Revisão e adaptação:** No HTML e CSS, utilizei meus conhecimentos prévios, consultei referências externas e alguns ajustes em casos de erro. No JavaScript, testei as funcionalidades, identifiquei problemas e solicitei explicações detalhadas para compreender o código. Reconheço que essa etapa contou com participação significativa da IA na geração do código. No Figma, fui responsável pela concepção visual e pela composição do design, incluindo elementos desenvolvidos manualmente, e adaptei as ilustrações geradas ao projeto.

## Rodapé do autor

Sendo bem sicera,  eu esperava mais de mim mesma, estou dece0pcionada comigo, queria dar o meu melhor neste projeto, mas não consegui, a parte de  Html e Css de boas consegui fazer direitinho com os meu conhecimentos, porém quando chegou na parte de programação com JavaScript foi só decepção, pois além de utilizar a IA para implementar as funcionalidades eu praticamnte copiei o código referente ao javascript, mesmo que eu tenha pedido explicações detalhadas sobre o código, para compreender a lógica e tentar cada parte do código para ter u,a certa autonomia no futuro, eu ainda estou frustada por ter copiado essa parte e não me orgulho disso e se o senhor não quiser pontuar a parte de javascript eu vou entender plenamente. Desde já agradeço pela atençào.
