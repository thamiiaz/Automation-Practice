# AutomationPractice

Testes E2E automatizados com Cypress para o site Automation Practice

Oi tudo bem? vou deixar aqui como configurar o projeto e fazer download das ferramentas que utilizei para o mesmo

Visual Studio Code: https://code.visualstudio.com -> aqui você vai encontrar a ferramenta que utulizei para desenvolver o codigo da automação e tudo que precisa para fazer o download da mesma.

Node.js: https://nodejs.org/en/download/ e fazer o download de no minimo a v14.16

--- Após fazer download no github do projeto ou clonar(depende do que você quiser fazer) quando abrir esse projeto no visual studio, e abrir o terminal do framework, digitar os seguintes comandos: 

npm install -> para instalar todas as dependencias nessessárias para executar o projeto 

yarn cypress open -> onde vai abrir uma nova aba com os cenários a serem executados (só clicando neles ja irão abri o executor)

(Caso de algum problema, deixarei 2 videos gravados da execução das automações)

Informações sobre as duas automações:

Cenário 1 - o cliente entra no site, navega para a sessão de vestidos, seleciona um vestido e o adciona ao carrinho, e começa o processo de checkout até chegar na pagina de criar uma nova conta ou entrar em conta ja existente.

Cenário 2 - o cliente já tem uma conta previamente cadastrada no site, loga nessa conta e visualiza detalhes dessa conta, como avisualização de wishlist e visualização de dados pessoais, e após isso volta a pagina principal do site.