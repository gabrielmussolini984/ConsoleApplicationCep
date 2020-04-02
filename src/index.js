#!/usr/bin/env node
const yargs = require("yargs");
const chalk = require('chalk');
const boxen = require('boxen');
const Cep = require('./controllers/Cep');

const options = yargs
 .usage("Usage: -c <cep> or -s")
 .option("c", { alias: "cep", describe: "Cadastrar novo Cep", type: "number"})
 .option("l", { alias: "list", describe: "Lista de Ceps cadastrados"})
 .argv;

if (options.cep){
  (async function insertCep(){
    try {
      const data = await Cep.create(options.cep);
      if (data) {
        console.log(chalk.red.bold('Cep Inserido com Sucesso!'))
      }else{
        console.log('Erro Ao Inserir')
      }
    } catch (error) {
      console.log(error)
    }
    process.exit();
  })();
}else{
  if (options.list){
    (async function showCep(){
      const datas = await Cep.index();
      datas.forEach(res => {
        console.log(chalk.red.bold(boxen(`|${res.id}| ${res.endereco ? res.endereco+', ':'' }${res.bairro ? res.bairro +' - ' : ''}${res.cidade}/${res.estado} - ${res.cep}`, {padding: 0, margin: 0, borderStyle: 'single', borderColor: 'red'})));
      });
      process.exit();
    })();
  }else{
    console.log(chalk.red.bold('Digite smarkio --help para ver todos comandos.'));
  }
}
