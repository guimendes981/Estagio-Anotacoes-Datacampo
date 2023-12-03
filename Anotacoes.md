##### OVERVIEW

- Suporte: usar o admin do wordpress para realizar tarefas dentro do admin dos sites ja criados, como alterar paginas, remover ou adicionar conteudo, etc.
    -Exemplo: remover funcionario do quadro de funcionarios, adicionar marca d'agua nas fotos da galeria, etc.


- Projeto: escola de ingles, refazer o sistema do aluno ead usando react/ redux/ (next?)

- Next: é um framework para react, que permite fazer SSR (server side rendering) e SSG (static site generation)

- Redux: é uma biblioteca para gerenciar o estado da aplicação, que é um dos principais problemas do react

- Apontar as horas no programa clickup, quando comecar a tarefa apertar o play e quando terminar apertar o stop

- (Usaremos pedaços do projeto for-truck que já estão prontos como os forms.)

- Usados typescript

## ESTIMATIVA PARA MARÇO DE 2024

## For-truck
- Como rodar: npm run dev = next dev, que roda o servidor de desenvolvimento, localhost:3000 ou 4000


- Npx prisma migrate dev = cria o banco de dados, e cria as tabelas, e as migrations, e o prisma client, que é um ORM (object relational mapping), que é uma biblioteca que permite fazer queries no banco de dados usando javascript, e ele é gerado a partir do schema do ba


- Usaremos pedaços do for-truck para o novo projeto


- O for-truck usa o next, que é um framework para react, que permite fazer SSR (server side rendering) e SSG (static site generation)


- O for-truck usa o prisma, que é um ORM (object relational mapping), que é uma biblioteca que permite fazer queries no banco de dados usando javascript, e ele é gerado a partir do schema do banco de dados


- Tambem usa o redux, que é uma biblioteca para gerenciar o estado da aplicação, que é um dos principais problemas do react


## REDUX

- O redux é uma biblioteca para gerenciar o estado da aplicação, que é um dos principais problemas do react

- Exemplo: quando o usuario clica em um botao, o estado da aplicacao muda, e comportamentos diferentes sao ativados, como por exemplo, mostrar um modal, ou mudar o texto de um botao, etc.


- Store: é o estado da aplicacao, que é um objeto javascript, que contem todos os dados da aplicacao, e que pode ser acessado de qualquer lugar da aplicacao

- Actions: sao objetos javascript que contem informacoes sobre o que aconteceu na aplicacao, como por exemplo, o usuario clicou em um botao, e que sao enviadas para a store

- Reducers: sao funcoes que recebem as actions, e atualizam o estado da store, e que sao chamadas automaticamente quando uma action é disparada

- Dispatch: é uma funcao que envia uma action para a store

- Subscribe: é uma funcao que recebe uma funcao, e que é chamada automaticamente quando o estado da store é atualizado

- Provider: é um componente que recebe a store, e que permite que os componentes filhos tenham acesso a store

- Connect: é uma funcao que recebe um componente, e que retorna um novo componente, que tem acesso a store

- mapStateToProps: é uma funcao que recebe o estado da store, e que retorna um objeto, que contem as propriedades que o componente precisa ter acesso

- Exemplo: o componente precisa ter acesso a propriedade "name", entao a funcao retorna um objeto com a propriedade "name"

- Em resumo, o redux faz o seguinte: o usuario clica em um botao, e uma action é disparada, e o reducer é chamado, e o estado da store é atualizado, e o componente é atualizado, e o usuario ve o resultado na tela



## NEXT

- O next é um framework para react, que permite fazer SSR (server side rendering) e SSG (static site generation)


- SSR: é quando o servidor renderiza a pagina, e envia o html pronto para o navegador, e o navegador apenas exibe o html, e o javascript é executado apenas quando o usuario interage com a pagina

- SSG: é quando o servidor renderiza a pagina, e envia o html pronto para o navegador, e o navegador apenas exibe o html, e o javascript é executado apenas quando o usuario interage com a pagina, e o html é gerado apenas uma vez, e salvo em cache, e reutilizado para todos os usuarios


- O next usa o prisma, que é um ORM (object relational mapping), que é uma biblioteca que permite fazer queries no banco de dados usando javascript, e ele é gerado a partir do schema do banco de dados


- Tambem usa o redux, que é uma biblioteca para gerenciar o estado da aplicação, que é um dos principais problemas do react


- O next tem uma pasta chamada pages, que contem as paginas da aplicacao, e que sao acessadas pelo usuario, e que sao renderizadas pelo servidor, e que sao enviadas para o navegador, e que sao exibidas pelo navegador


- O next tem uma pasta chamada public, que contem os arquivos estaticos da aplicacao, como por exemplo, imagens, videos, etc.


- O next tem uma pasta chamada styles, que contem os arquivos css da aplicacao


- O next tem uma pasta chamada components, que contem os componentes da aplicacao


- O next tem uma pasta chamada utils, que contem funcoes que podem ser usadas em qualquer lugar da aplicacao


- O next tem uma pasta chamada services, que contem funcoes que fazem requisicoes para a api


- O next tem uma pasta chamada store, que contem o redux da aplicacao


- O next tem uma pasta chamada pages/api, que contem as rotas da api


- O next tem uma pasta chamada pages/api/auth, que contem as rotas de autenticacao da api



# ESTRUTURA DO PROJETO

- src/@core: contem os componentes que sao usados em todas as paginas

- src/layouts: contem os layouts das paginas, que sao usados em todas as paginas, layouts sao componentes que contem outros componentes

- src/navigation/vertical: contem os componentes da sidebar, que sao usados em todas as paginas

- src/navigation/horizontal: contem os componentes do header, que sao usados em todas as paginas

- src/pages: contem as paginas da aplicacao

- src/store: contem o redux da aplicacao, basicamente contem o estado da aplicacao, que é um objeto javascript, que contem todos os dados da aplicacao, e que pode ser acessado de qualquer lugar da aplicacao


- src/views: contem os componentes das paginas, que sao usados apenas nas paginas, views sao componentes que nao contem outros componentes como os layouts

- views/apps/aderentes: contem os componentes da pagina aderentes

- views/apps/carteira: contem os componentes da pagina carteira

- views/home: contem os componentes da pagina home

- views/pages/auth: contem os componentes da pagina auth

- views/pages: contem os componentes da pagina pages



##### PASTAS

- src/@core: contem os componentes que sao usados em todas as paginas

- src/layouts: contem os layouts das paginas, que sao usados em todas as paginas, layouts sao componentes que contem outros componentes

- src/navigation: contem os componentes da sidebar e header, que sao usados em todas as paginas

- src/store: contem o redux da aplicacao, basicamente contem o estado da aplicacao, que é um objeto javascript, que contem todos os dados da aplicacao, e que pode ser acessado de qualquer lugar da aplicacao

- src/types: contem os tipos de dados da aplicacao

- src/types/apps: contem os tipos de dados da aplicacao

- src/types/forms: contem os tipos de dados dos forms

- src/views: contem os componentes das paginas, que sao usados.

- src/views/apps: contem os componentes das paginas apps

- src/views/home: contem os componentes das paginas home

- src/views/pages: contem os componentes das paginas pages

