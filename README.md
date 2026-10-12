# Sistema Cruzada pela Dignidade

Projeto extensionista de desenvolvimento de uma página web institucional para a **Associação Cruzada pela Dignidade**, organização com atuação em Anápolis–GO. A proposta é organizar e apresentar informações institucionais e projetos da associação, além de facilitar o acesso à área de doações.

> **Status atual:** versão inicial/incompleta. Este repositório documenta a estrutura inicial do front-end. As funcionalidades previstas no planejamento não devem ser consideradas concluídas sem implementação e testes verificáveis.

## Acesso ao projeto

- **Repositório GitHub:** https://github.com/michaelwillians258-sudo/Sistema-cruzada-dignidade
- **GitHub Pages (endereço de publicação informado):** https://michaelwillians258-sudo.github.io/Sistema-cruzada-dignidade/

A página publicada deve ser aberta e testada para confirmar que os arquivos, caminhos e recursos estão funcionando corretamente.

## Objetivo

Criar uma página institucional de fácil acesso para apresentar a associação, seu histórico, seus projetos e informações públicas autorizadas, com uma seção destinada a doações.

## Tecnologias

- **HTML5:** estrutura do conteúdo da página.
- **CSS3:** estilos e apresentação visual.
- **JavaScript:** referência prevista no projeto para possíveis interações; o funcionamento de `script.js` precisa ser conferido diretamente no repositório antes de afirmar que há recursos interativos implementados.

## Estrutura inicial

A estrutura observada no relatório inclui os seguintes arquivos e recursos:

```text
Sistema-cruzada-dignidade/
├── index.html
├── style.css
├── script.js
└── assets/
    └── img/
        └── logo2.png
```

> A estrutura acima é uma referência para os arquivos mencionados na documentação. Confira os nomes, a capitalização e a presença de cada arquivo no repositório. Em HTML, prefira caminhos relativos com barras `/`, por exemplo: `assets/img/logo2.png`.

## Estado atual e escopo

### Registrado na versão inicial

- Estrutura básica da página em HTML.
- Cabeçalho com identificação visual e menu de navegação.
- Estilização inicial em CSS.
- Repositório GitHub para armazenamento e versionamento do código.

### Previsto no planejamento, ainda sujeito a implementação e validação

- Apresentação do histórico e das informações institucionais.
- Seção com projetos e ações da associação.
- Seção de doações.
- Exibição inicial de um QR Code Pix fixo, desde que fornecido e autorizado pela instituição.
- Em etapa posterior, opções de valores de doação, valor personalizado, QR Code Pix dinâmico e código Pix Copia e Cola.
- Adaptação da interface a diferentes tamanhos de tela e dispositivos.

**Importante:** os itens previstos acima não são uma declaração de que estejam funcionando na versão atual. A documentação da Sprint 01 registra que a interface está incompleta e que não há evidências suficientes para confirmar navegação completa, responsividade, interações, funcionamento do Pix ou validação formal pela associação.

## Pontos técnicos a conferir

Antes de considerar a versão pronta, recomenda-se:

1. Conferir se os links do menu levam a seções que realmente existem.
2. Padronizar a classe da navegação no HTML e no CSS (o relatório registra divergência entre `.nav` e `.navbar`).
3. Confirmar o caminho e a exibição do arquivo da logo.
4. Verificar se `script.js` existe, está vinculado corretamente e funciona como esperado.
5. Testar a página em computador e celular.
6. Não publicar dados pessoais, sensíveis ou informações internas da associação sem autorização.
7. Confirmar com a instituição os dados e o QR Code Pix antes de disponibilizá-los.
8. Registrar evidências reais dos testes e, quando aplicável, da validação pela instituição.

## Como executar localmente

1. Faça o download ou clone este repositório.
2. Abra a pasta do projeto.
3. Abra `index.html` em um navegador.

Para testar a versão publicada, utilize o endereço do GitHub Pages informado acima. Caso algum arquivo não apareça, confira os caminhos relativos, a capitalização dos nomes e se todos os arquivos foram enviados ao repositório.

## Evidências e validação

Conforme o relatório técnico da Sprint 01:

- O código inicial em HTML e CSS foi considerado na revisão.
- A verificação completa da página publicada, da navegação, da logo, da responsividade e das interações permanece pendente de evidência.
- Capturas de tela de testes em computador e celular devem ser adicionadas somente depois de os testes serem realizados.
- A validação formal pela Associação Cruzada pela Dignidade não deve ser afirmada sem registro correspondente.

## Transparência sobre o desenvolvimento

Este projeto faz parte de uma atividade acadêmica extensionista. Ferramentas de inteligência artificial foram utilizadas como apoio na elaboração de código e/ou documentação. O uso dessas ferramentas deve ser informado de acordo com as orientações da instituição de ensino e acompanhado de revisão humana. A descrição do repositório não substitui a conferência do código, os testes ou a validação do trabalho pela equipe e pela instituição parceira.

## Equipe

Os integrantes registrados na documentação do projeto são:

- Michael Willians Protázio — `michaelwillians258-sudo`
- Geovana Araujo da Silva — `zequinhaapy`
- Warley da Silva Oliveira — `KMixzy`
- Ana Clara Nascimento Marques — `anaclarnascimentomarques-bot`

## Próximas etapas sugeridas

- Completar e revisar as seções institucionais.
- Corrigir e testar os links de navegação e os caminhos dos recursos.
- Verificar o JavaScript e implementar somente as interações planejadas.
- Testar a responsividade em diferentes telas.
- Confirmar e autorizar as informações de doação com a instituição.
- Anexar evidências reais de execução e validação.
- Atualizar este README à medida que as funcionalidades forem efetivamente implementadas.

---

**Projeto acadêmico extensionista — Associação Cruzada pela Dignidade.**
