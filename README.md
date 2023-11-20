# Júlia Lima / Turma 13 - Serratec

## Descrição do Projeto
<p align="center">Trabalho Final Individual da Matéria de DESENVOLVIMENTO DE APLICATIVO MOBILE ministrada pelo professor João Felipe da Silva Braçanca para a turma 13 - Residência SERRATEC/2023.2
</p>

## Instalação e execução do projeto
<p>-Git clone: https://github.com/juliafclima/cloneMarvegram.git</p>

## Funcionalidades do projeto
Projeto Disciplina DESENVOLVIMENTO DE APLICATIVO MOBILE
Entrega via link do Github.

Clonar uma tela de algum app a sua escolha, pode ser algum aplicativo que você tenha, goste, ou qualquer tela que você achar ao pesquisar na internet.

Requisitos:
- Conter um README.md com a descrição do projeto, print da tela a ser clonada e o print do clone;
- Instalar o React Navigation e configurar 2 rotas;
- Ter um botão na página clonada habilitado para navegar para a segunda Rota;
- A segunda rota deve conter um Input vinculado a um State e um Botão TouchableOpacity;

Extra: Salvar a informação do input no dispositivo ao clicar no botão!

## Screens

Tela clonada: Instagram

<img src="./prints/pagina_clonada.jpg" alt="Mensagem" width="200"/>


GIF Marvelgram

![GIF Marvelgram](./prints/gif.gif)

- Home - tela principal do aplicativo
   
<img src="./prints/pagina_home.png" alt="Mensagem" width="200"/>
A página exibe histórias de personagens da Marvel, representadas por imagens importadas. O estado do componente é gerenciado pelo Hook useState, abrangendo tanto os comentários quanto as postagens curtidas. Além disso, a página inclui a funcionalidade de navegação para uma tela de mensagens.

- Posibilidade de dar Like na publicação e utilizar o input do comentário
<img src="./prints/like_comentario.png" alt="Mensagem" width="200"/>
A interface do usuário é projetada de forma a permitir a visualização das histórias e postagens, com elementos interativos para interações do     
usuário, como curtir e comentar.

- Mensagem

<img src="./prints/segunda_rota1.png" alt="Mensagem" width="200"/>
<img src="./prints/extra_envio_mensagem.png" alt="Mensagem" width="200"/>
O código gerencia o estado do componente por meio do Hook useState. O estado messages armazena uma lista de mensagens, enquanto newMessage guarda o conteúdo da nova mensagem inserida pelo usuário. A função handleSendMessage adiciona uma nova mensagem à lista após verificar se a mensagem não está vazia. A interface exibe as mensagens em uma FlatList. A interação do usuário ocorre por meio de um campo de entrada de texto e um botão "Enviar".


- Pagina de manutenção

<img src="./prints/tela_manutencao1.png" alt="Mensagem" width="200"/>
<img src="./prints/tela_manutencao.png" alt="Mensagem" width="200"/>
A interface consiste em um cabeçalho exibindo o nome do aplicativo e ícones de opções (coração e mensagem), indicando funcionalidades indisponíveis durante a manutenção. Além disso, há um botão "Voltar para Home", que, quando pressionado, direciona o usuário de volta à tela principal ("Home") por meio do React Navigation.

## Ferramentas e tecnologias
- [Git](https://git-scm.com/) <img loading="lazy" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" width="30" height="30"/>

- [GitHub](https://github.com/) <img loading="lazy" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" width="30" height="30"/>

- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) <img loading="lazy" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="40" height="40"/>

- [React](https://react.dev/) <img loading="lazy" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" width="40" height="40"/>

- [Node](https://nodejs.org/en) <img loading="lazy" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" width="40" height="40"/>

- [NPM](https://www.npmjs.com/) <img loading="lazy" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" width="40" height="40"/>

## Autora

<a href="https://www.linkedin.com/in/juliafclima/">
 <img style="border-radius: 100%;" src="https://media.licdn.com/dms/image/C4D03AQF0dd3FxSn28Q/profile-displayphoto-shrink_800_800/0/1660857281772?e=1701907200&v=beta&t=VEiNZlpWiycGdsak5RhPgD9OTZuXjPiRf5q_VPEtvKc" width="100px;" alt="Minha foto de perfil"/>
 <br></a>
 
[![Linkedin Badge](https://img.shields.io/badge/-Júliafclima-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/juliafclima/)](https://www.linkedin.com/in/juliafclima/) 

## Licença
Esse repositório está licenciado pelo MIT LICENSE(https://opensource.org/license/mit/). Para mais informações detalhadas, leia o arquivo LICENSE contido nesse repositório.
