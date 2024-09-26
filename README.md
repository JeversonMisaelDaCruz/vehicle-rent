
# Documentação do Projeto

## Inicializando o Projeto

Para instalar as dependências do projeto, execute:

```bash
npm i
```

Para visualizar o banco de dados .
Primeiro precisamos iniciar a intancia docker.

```bash
 docker-compose up -d
```

Apos isso precisamos configurar nosso arquivo .ENV, basta criar um arquivo . ENV e passar as seguintes informações.
```bash
DATABASE_URL="postgresql://vehiclecontrol:488531@localhost:5433/vehiclecontrol"
```
Para vizualizar o banco de dados basta iniciar atraves do prisma.

```bash
npx prisma studio
```

Para iniciar o servidor de desenvolvimento, execute o comando:

```bash
npm run dev
```

O servidor estará disponível para uso.

## Testando as Rotas

Para testar as rotas e garantir que o projeto está funcionando corretamente, use o seguinte comando:

```bash
npm run test
```

Esse comando irá executar todos os testes unitários e de integração escritos para o projeto.

### Rotas Disponíveis

O projeto possui as seguintes rotas disponíveis. Se quiser contribuir, basta abrir um Pull Request (PR). Após a revisão, o PR poderá ser integrado à branch principal.

#### Rota `/color`
- `GET /color`: Retorna uma lista de cores cadastradas.
- `GET /color/:id`: Retorna uma cor específica pelo ID.
- `POST /color`: Cadastra uma nova cor.
- `PUT /color/:id`: Atualiza uma cor existente através do ID.
- `DELETE /color/:id`: Deleta uma cor existente.

#### Rota `/vehicle`
- `GET /vehicle`: Retorna uma lista de veículos cadastrados.
- `GET /vehicle/:id`: Retorna um veículo específico pelo ID.
- `POST /vehicle`: Cadastra um novo veículo.
- `PUT /vehicle/:id`: Atualiza um veículo existente.
- `DELETE /vehicle/:id`: Deleta um veículo existente.

#### Rota `/typevehicle`
- `GET /typevehicle`: Retorna uma lista de tipos de veículos cadastrados.
- `GET /typevehicle/:id`: Retorna um tipo de veículo específico pelo ID.
- `POST /typevehicle`: Cadastra um novo tipo de veículo.
- `PUT /typevehicle/:id`: Atualiza um tipo de veículo existente.
- `DELETE /typevehicle/:id`: Deleta um tipo de veículo existente.

#### Rota `/brand`
- `GET /brand`: Retorna uma lista de marcas cadastradas.
- `GET /brand/:id`: Retorna uma marca específica pelo ID.
- `POST /brand`: Cadastra uma nova marca.
- `PUT /brand/:id`: Atualiza uma marca existente.
- `DELETE /brand/:id`: Deleta uma marca existente.

#### Rota `/model`
- `GET /model`: Retorna uma lista de modelos cadastrados.
- `GET /model/:id`: Retorna um modelo específico pelo ID.
- `POST /model`: Cadastra um novo modelo.
- `PUT /model/:id`: Atualiza um modelo existente.
- `DELETE /model/:id`: Deleta um modelo existente.

#### Rota `/location`
- `GET /location`: Retorna uma lista de localizações cadastradas.
- `GET /location/:id`: Retorna uma localização específica pelo ID.
- `POST /location`: Cadastra uma nova localização.
- `PUT /location/:id`: Atualiza uma localização existente.
- `DELETE /location/:id`: Deleta uma localização existente.

#### Rota `/customer`
- `GET /customer`: Retorna uma lista de clientes cadastrados.
- `GET /customer/:id`: Retorna um cliente específico pelo ID.
- `POST /customer`: Cadastra um novo cliente.
- `PUT /customer/:id`: Atualiza um cliente existente.
- `DELETE /customer/:id`: Deleta um cliente existente.

#### Rota `/enterprise`
- `GET /enterprise`: Retorna uma lista de empresas cadastradas.
- `GET /enterprise/:id`: Retorna uma empresa específica pelo ID.
- `POST /enterprise`: Cadastra uma nova empresa.
- `PUT /enterprise/:id`: Atualiza uma empresa existente.
- `DELETE /enterprise/:id`: Deleta uma empresa existente.

## A fazer:

### `MODEL`
- Criar rota para detail pelo ID
- Criar rota para delete pelo ID
- Criar rota para update
- Rota para listar modelos
- Rota para deletar

### `COLOR`
- Rota para deletar


### `TYPE VEHICLE`
- Rota detalhar
- Rota listar
- Rota update
- Rota para deletar


### `ENTERPRISE`
- Rota para criar 
- Rota para update
- Rota para deletar

### `CUSTOMER`
- Rota para criar cliente
- Rota para update
- Rota para deletar

## Documentação das Tecnologias

- [Prisma](https://www.prisma.io/docs/getting-started): Para gerenciamento do banco de dados e CRUD.
- [Fastify](https://fastify.dev/docs/latest/Guides/Getting-Started/): Para criação de rotas.
- [Neon](https://console.neon.tech/): Banco de dados na nuvem.

```

