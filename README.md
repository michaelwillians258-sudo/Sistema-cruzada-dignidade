# Plataforma Institucional – Associação Cruzada pela Dignidade

Portal institucional em página única (*single-page*) desenvolvido como projeto extensionista do curso de Análise e Desenvolvimento de Sistemas (UniEVANGÉLICA) para a **Associação Cruzada pela Dignidade**, em Anápolis – GO.

🔗 **Acesse o site online (GitHub Pages):** https://michaelwillians258-sudo.github.io/Sistema-cruzada-dignidade/

🔗 **Repositório:** https://github.com/michaelwillians258-sudo/Sistema-cruzada-dignidade

---

## 📋 Sobre o Projeto

O sistema apresenta a identidade institucional, os projetos sociais realizados, a rede de parceiros, a localização da entidade e um módulo interativo de apoio financeiro voltado à comunidade.

### Funcionalidades Implementadas (Versão 3.0 / Sprint 03)
* **Navegação Responsiva:** Cabeçalho fixo com menu hambúrguer (`#menu-btn`) adaptado para dispositivos móveis e tablets (`<= 768px`).
* **Apresentação Institucional:** Seções *Início* e *Sobre Nós* detalhando a missão e atuação social da entidade.
* **Catálogo de Ações e Projetos:** Grade responsiva com modais interativos (`<dialog>`) exibindo detalhes das campanhas realizadas.
* **Carrossel de Parceiros:** Exibição contínua das instituições apoiadoras com suporte à redução de movimento (`prefers-reduced-motion`).
* **Módulo de Doações via Pix (Modo Simulação):** Interface em abas permitindo copiar um código Pix Copia e Cola de demonstração ou selecionar/inserir valores personalizados para simulação de contribuição.
* **Localização e Contato:** Mapa incorporado via Google Maps e links diretos para Instagram e WhatsApp.

## ⚠️ Limitações Atuais e Bugs Conhecidos (Escopo MVP)

Por se tratar de uma aplicação estática (*front-end* puro) hospedada no GitHub Pages, o sistema possui restrições técnicas e ajustes mapeados no quadro Trello da equipe:

1. **Operação Exclusiva em Modo de Simulação:** Não há servidor *back-end*, banco de dados ou integração com APIs bancárias/PSP. O QR Code e o código *Pix Copia e Cola* são estáticos de demonstração, e o fluxo de valor personalizado exibe apenas uma confirmação simulada.
2. **Bug – Reconhecimento e Formatação de Números Decimais no Campo Personalizado (`RF04`):**
   * **Rastreamento:** [Card #31 – Ajuste no campo de valor personalizado: reconhecimento de números decimais](https://trello.com/c/w5WVqTH3/31-rf04-ajuste-no-campo-de-valor-personalizado-reconhecimento-de-n%C3%BAmeros-decimais).
   * **Comportamento atual:** O campo `<input type="number" step="0.01">` apresenta inconsistências entre teclados móveis/navegadores na entrada de separadores decimais (vírgula `,` vs. ponto `.`), além de não formatar o valor monetário em padrão brasileiro (`R$ 0,00`) nem bloquear entradas inválidas antes da confirmação.
3. **Sem Persistência de Histórico ou Comprovantes:** As simulações de doação e interações do usuário não são armazenadas após o recarregamento da página.
4. **Dependência de Serviços Externos:** O mapa de localização (Google Maps), os ícones externos e a geração da imagem de QR Code de demonstração dependem de conexão ativa com a internet e disponibilidade de terceiros.


## 🚀 O Que Pode Melhorar (Próximos Passos)

* **Correção do `RF04` (Máscara Monetária e Validação):** Substituir o tratamento simples do input type="number" por uma máscara de moeda em JavaScript Formato BRL que reconheça vírgula e ponto corretamente e valide valores mínimos (>= R$ 1,00).
* **Geração Dinâmica de Payload Pix (EMV):** Gerar o código *Pix Copia e Cola* e o QR Code dinamicamente no front-end conforme o valor digitado pelo usuário na aba personalizada.
* **Polimento de Interface e Conteúdo:** Corrigir a duplicação textual no título do segundo card de projeto e vincular o botão *"Saiba Mais"* da seção *Sobre Nós* a um modal institucional dedicado.

---

## 📌 Histórico de Versões (Tags)

* **`v1.0` (Sprint 01):** Estrutura base em HTML5/CSS3, cabeçalho, seções institucionais e contatos.
* **`v2.0` (Sprint 02):** Inclusão da grade de projetos com modais, carrossel de parceiros e estrutura visual da seção de doações.
* **`v3.0` (Sprint 03):** Correção da responsividade mobile (`menu-btn`), atualização da documentação de escopo simulado e mapeamento de melhorias do `RF04`

> ⚠️ **Nota de Escopo:** Este projeto é um MVP (*Minimum Viable Product*) estático hospedado no GitHub Pages, sem servidor back-end ou integração bancária. Todas as interações na seção de **Doações** operam exclusivamente em **modo de simulação**.

---

## 🛠️ Tecnologias Utilizadas

* **HTML5** (estrutura semântica e modal nativo `<dialog>`)
* **CSS3** (variáveis CSS, Flexbox, CSS Grid, animações e *Media Queries* para responsividade mobile)
* **JavaScript Vanilla** (controle do menu mobile, alternância de abas, seleção de valores e cópia para área de transferência)
* **Git & GitHub Pages** (controle de versão por tags `v1.0`, `v2.0`, `v3.0` e hospedagem estática)
* **Trello** (gestão ágil do backlog, sprints e rastreamento de bugs)
* **Inteligência Artificial** (utilizadas como apoio durante o desenvolvimento, auxiliando na análise e na correção do código, na implementação de melhorias)

---

## 📁 Estrutura de Arquivos

```text
Sistema-cruzada-dignidade/
├── index.html      # Estrutura principal da aplicação
├── style.css       # Estilização e regras responsivas (desktop, tablet e mobile)
├── script.js       # Lógica de interatividade (menu mobile, modais, abas e simulação Pix)
└── README.md       # Documentação do repositório
```
---
*Projeto acadêmico extensionista — Associação Cruzada pela Dignidade.*
