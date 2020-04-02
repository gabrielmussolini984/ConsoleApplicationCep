# Console Application CEP

Esta aplicação roda em linha de comando, tem como função buscar o CEP digitado como parâmetro e cadastrar no banco de dados.
Outro comando valido para o script é o de listar todos dados cadastrados no banco de dados.
![](header.png)

## Utilização Passo a Passo
>Clone o repositório:
```
npm i.
```
>Configure as variaveis de ambiente no arquivo .env (modelo usado no .example.env):

>Executar as Migrations:
```
knex migrate:latest
```
>Criar comando global 'smarkio':
```
npm i -g .
```
>Visualizar todos comandos:
```
smarkio --help
```
>Buscar e Inserir Cep:
```
smarkio -c 37500290
```
>Listar Dados do Banco:
```
smarkio -l
```

## Release History

* 0.0.1
    * Work in progress

## Meta

Gabriel Mussolini – gabrielmussolini@hotmail.com

[https://github.com/gabrielmussolini984](https://github.com/gabrielmussolini984?)

<!-- Markdown link & img dfn's -->
[npm-image]: https://img.shields.io/npm/v/datadog-metrics.svg?style=flat-square
[npm-url]: https://npmjs.org/package/datadog-metrics
[npm-downloads]: https://img.shields.io/npm/dm/datadog-metrics.svg?style=flat-square
[travis-image]: https://img.shields.io/travis/dbader/node-datadog-metrics/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/dbader/node-datadog-metrics