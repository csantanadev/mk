# mkplace-node-api  
Api node de gerenciamento de produtos.

## O problema
Um usuário quer visualizar a lista de produtos com possibilidade de filtrá-los por "nome", "marca", "vendedor" e "faixa de preço", e ver os detalhes de um produto
específico. Crie uma aplicação CRUD (salvar, alterar, consultar e excluir) com os 
seguintes critérios:
1. Listar produtos com filtro: /products;
2. Exibir detalhes do produto: /product/[slug-do-produto];

## Passos
### 1) Clone o repositório e instale as dependências
``` 
//local
git clone https://github.com/csantanadev/mkplace
cd mklpace
npm install
```
### 2) Renomear o .env.example para .env 
``` 
Preencha os dados de PORT=3333, DATABASE_URL=<sua url mongoDB atlas>
```
### 3) Rodando o servidor
``` 
npm run dev
```

## Endpoints
#### GET - /health-check
##### response - OK

<hr/>

#### POST - /products
##### request
```json
{
	"name": "Fone qcy",
	"brand": "qcy",
	"seller": "Magalu",
	"slug": "fone-qcy",
	"price": 200
}
```
##### response - 201
```json
{
	"name": "Fone qcy",
	"brand": "qcy",
	"seller": "Magalu",
	"slug": "fone-qcy",
	"price": 200,
	"_id": "63696b08ce7bc93c48d21fe0"
}
```
<hr/>

#### PUT - /products/:id
##### request
```json
{
	"brand" : "positivo"
}
```
##### response - 204 - NO CONTENT
<hr/>

#### DELETE - /products/:id
##### request - no body
##### response - 204 - NO CONTENT

<hr/>

#### GET - /products/:slug
##### request - no body
##### response - 200
```json
{
	"_id": "63695747a8885ff66e2eab4b",
	"name": "Caneca Tyeso",
	"brand": "Tyeso",
	"seller": "Magalu",
	"slug": "caneca-tyeso-inox",
	"price": 123.6
}
```
<hr/>

#### GET - /products/?filter
Filtros possíveis: name, brand, seller e price (1-100)
<br/>
Adicionado paginação: /products/?page=1
<br/>
Exemplo: /products/?price=1-100&page=1

##### request - no body
##### response - 200
```json
{
	"_id": "63695747a8885ff66e2eab4b",
	"name": "Caneca Tyeso",
	"brand": "Tyeso",
	"seller": "Magalu",
	"slug": "caneca-tyeso-inox",
	"price": 88.25
}
```




