# Gerenciamento-de-visitas
<h3>Aplicação para gerenciar e gerar relatórios de visitas para uma empresa de engenharia. Feito com Node.js, Express e MongoDB</h3>

![Node Version](https://img.shields.io/badge/node-v19.3.0-yellowgreen.svg)
![ExpressVersion](https://img.shields.io/badge/express-v4.18.2-yellowgreen.svg)
![NPM Version](https://img.shields.io/badge/npm-v9.2.0-blue.svg)
![MongoDB Version](https://img.shields.io/badge/mongodb-v6.0-blue.svg)
![Mongoose Version](https://img.shields.io/badge/mongoose-v8.8.1-blue.svg)

Neste repositório reproduzi de forma simplificada o backend de uma aplicação para uma empresa de engenharia.
Os consultores da empresa realizam visitas em outras empresas que precisam ser registradas para depois serem consultadas.

A solicitação foi que a API armazenasse os dados de uma visita para fins de gerar documentos de apropriação de serviços.
O projeto foi desenvolvido no padrão MVC, utilizando JavaScript, MongoDB, Mongoose e Express para as requisições http.

Visitas: A coleção visitas contém hora inicial e final, data, descrição e o total de horas que é calculado no controller.

Consultas: A coleção de consultas tem as datas de inicio e fim definidas pelo usuário e os demais atributos são calculados dentro do controller.
A partir da consulta é gerado o relatório de apropriação de serviço. 

Para testar o código ou implementar alterações basta baixar o repositório, instalar o MongoDB (ou usar a versão web).
```bash
git clone https://github.com/FelipeGuglielmeli/Gerenciamento-de-visitas
```

Instalar as dependências:
```bash
npm instal
```

Definir a String de conexão com o banco de dados no arquivo connect.js:
```bash
 mongoose.connect("mongodb://suaString:27017/")
```

O server está definido para executar na porta 3000, e pode ser inicializado com o comando:
```bash
npm run devStart
```
