# Console Application CEP

Esta aplicação roda em linha de comando, tem como função buscar o CEP digitado como parâmetro e cadastrar no banco de dados.
Outro comando valido para o script é o de listar todos dados cadastrados no banco de dados.

## Utilização Passo a Passo
>Clone o repositório e instale as depêndencias do projeto:
```
npm i.
```
>renomeie o arquivo.example.env para .env e configure de acordo com seu banco de dados:

>Execute as Migrations para criar a tabela de dados_cep:
```
knex migrate:latest
```
>Crie comando 'smarkio' digitando npm link no terminal:
```
npm link
```
>Visualize todos comandos:
```
smarkio --help
```
>Buscar e Inserir Cep:
```
smarkio -c 37500290 ou smarkio --cep 37500290
```
>Listar Dados do Banco:
```
smarkio -l ou smarkio -list
```
>Para desinstalar o comando digite:
```
npm uninstall -g get-cep-command-line
```

## O Projeto
O desafio era criar um Command Line App, para maior segurança os dados sensíveis foram salvos em variáveis de ambiente.
Feito também as Migrations, que funciona como se fosse um histórico de alteração na base de dados, para que se o projeto fosse em equipe, todos saberem quais alterações foram feitas.
A organização de pastas foi em MVC, a interface(CLI) manda para o controller as informações, o controller processa os dados e entrega o model fazer a inserção ou listagem do banco de dados.

## Meta

Gabriel Mussolini – gabrielmussolini@hotmail.com

[https://github.com/gabrielmussolini984](https://github.com/gabrielmussolini984?)