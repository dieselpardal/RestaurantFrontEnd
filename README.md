FRONTEND PARA SISTEMA DE VOTAÇÃO DO RESTAURANTE FAVORITO DA SEMANA
=
- versão 1.0 por desenolvedor Full Stack **Ivan Diesel**
- dieselpardal@gmail.com
- whatsapp 51991453527

### ESCOPO:

#### OBJETIVO
Temos apenas uma oportunidade para atuar como Front End. 

Os times da DBServer enfrentam um grande problema, como eles são muito democráticos, 
todos os dias gastam 30 minutos decidindo onde irão almoçar. Vamos fazer um pequeno 
sistema que auxilie essa tomada de decisão!

#### COMO UTILIZAR

Na página "Os Favoritos de Restaurantes", observa-se uma tabela com o nome dos dias da semana, o número da semana correspondente e espaços que serão preenchidos com os nomes dos restaurantes mais votados.

Logo abaixo existe uma lista com botões nomeados com os nomes de oito restaurantes diferentes. Ao clicar no nome do restaurante um voto é adicionado para o mesmo, adicionando seu nome na tabela da semana correspondente indicado pelo rótulo “Semana Atual”.

É possível ver a quantidade de votos que um restaurante recebeu em uma tabela ao final da página.

Ao final da semana o restaurante com maior votação será o favorito da semana seguinte.

Regra: o usuário não pode votar mais de uma vez no mesmo restaurante para o mesmo número da semana. O mesmo restaurante só pode ser votado novamente quando trocar o número da semana.


#### DESENVOLVIMENTO
Entendimento e execução do escopo, organização, execução de códigos,
uso de técnicas de programação, padrões de projeto e nível de documentação.

Páginas responsivas.

Implementação em FrontEnd

IDE: VSC (Visual Studio Code).

Todas informações no código estão em inglês.


#### VERSÃO
- http-server: 0.12.0

- mocha: 6.2.2

#### INSTALAÇÃO

1) Instalacão de Visual Studio Code

2) Instalação de http-server

    Ter Node.js instalado no sistema.

    No Terminal, executar o comando **npm install http-server -g**

    Executar o comando **http-server**

    No navegador web, digitar o endereço **localhost:8080**   


3) Instalação de MOCHA (teste unitário)

    `$ npm install -g mocha`

     Criar uma pasta "test".

    Executar os testes: `$ mocha`
    

4) Instalação de modulo Simon, jsdom, mock e jquery para Mocha.

    `$ npm install sinon`

    `$ npm install --save-dev --save-exact jsdom jsdom-global`

    `$ npm install jquery`


### Executar no localhost:
  Digitar `$ http-server` no terminal e abrir na pagina localhost:8080/.
  
### Efetuar Testar:
   Clique `$ mocha` na pasta de projeto no terminal.

