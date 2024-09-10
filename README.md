# Documentação do Projeto

## Inicializando o Projeto

Para instalar este projeto basta apenas digitar `npm i` todas as dependencias serão instaladas
Para ter uma melhor vizualização do banco de dados digite `npx prisma studio`
Para rodar este projeto basta apenas executar o comando `npm run dev` no terminal, e o servidor estar  pronto para uso.

## Testando as Rotas

Para testar as rotas do projeto, voce  pode usar o comando `npm run test` no terminal. Isso ira  executar todos os testes unit rios e de integra o escritos para o projeto.

As rotas disponveis, caso tenha interesse em colaborar basta subir um PR, apôs a vericação posso subir para a branch principal.

* `GET /color`: Retorna uma lista de cores cadastradas.
* `GET /color/:id`: Retorna uma cor espec fica pelo id passado na url
* `POST /color`: Cadastra uma nova cor.
* `PUT /color/:id`: Atualiza uma cor existente atravez do parametro passado na url
* `DELETE /color/:id`: Deleta uma cor existente.

* `GET /vehicle`: Retorna uma lista de ve culos cadastrados.
* `GET /vehicle/:id`: Retorna um ve culo espec fico pelo id.
* `POST /vehicle`: Cadastra um novo ve culo.
* `PUT /vehicle/:id`: Atualiza um ve culo existente.
* `DELETE /vehicle/:id`: Deleta um ve culo existente.

* `GET /typevehicle`: Retorna uma lista de tipos de ve culos cadastrados.
* `GET /typevehicle/:id`: Retorna um tipo de ve culo espec fico pelo id.
* `POST /typevehicle`: Cadastra um novo tipo de ve culo.
* `PUT /typevehicle/:id`: Atualiza um tipo de ve culo existente.
* `DELETE /typevehicle/:id`: Deleta um tipo de ve culo existente.

* `GET /brand`: Retorna uma lista de marcas cadastradas.
* `GET /brand/:id`: Retorna uma marca espec fica pelo id.
* `POST /brand`: Cadastra uma nova marca.
* `PUT /brand/:id`: Atualiza uma marca existente.
* `DELETE /brand/:id`: Deleta uma marca existente.

* `GET /model`: Retorna uma lista de modelos cadastrados.
* `GET /model/:id`: Retorna um modelo espec fico pelo id.
* `POST /model`: Cadastra um novo modelo.
* `PUT /model/:id`: Atualiza um modelo existente.
* `DELETE /model/:id`: Deleta um modelo existente.

* `GET /location`: Retorna uma lista de loca es cadastradas.
* `GET /location/:id`: Retorna uma loca o espec fica pelo id.
* `POST /location`: Cadastra uma nova loca o.
* `PUT /location/:id`: Atualiza uma loca o existente.
* `DELETE /location/:id`: Deleta uma loca o existente.

* `GET /custumer`: Retorna uma lista de clientes cadastrados.
* `GET /custumer/:id`: Retorna um cliente espec fico pelo id.
* `POST /custumer`: Cadastra um novo cliente.
* `PUT /custumer/:id`: Atualiza um cliente existente.
* `DELETE /custumer/:id`: Deleta um cliente existente.

* `GET /enterprise`: Retorna uma lista de empresas cadastradas.
* `GET /enterprise/:id`: Retorna uma empresa espec fica pelo id.
* `POST /enterprise`: Cadastra uma nova empresa.
* `PUT /enterprise/:id`: Atualiza uma empresa existente.
* `DELETE /enterprise/:id`: Deleta uma empresa existente.


# A fazer:
  * MODEL: 
  - criar rota para detail pelo id
  - criar rota para de detail pelo id
  - criar rota para update
  - para listar modelo
  - Rota para deletar

  * COLOR:
  - criar rota para update
  - Rota para deletar

  * BRAND:
  - Rota para listar todos
  - Listar detalhado
  - Rota para realizar Update
  - Rota para deletar

  * TYPE VEHICLE:
  - Rota detalhar 
  - Rota list
  - Rota Update
  - Rota para deletar

  * VEHICLE:
  - Rota para deletar


  * ENTERPRISE:
  - Rota para criar 
  - Rota para deletar
  - Rota para update
  - Rota para deletar

  * CUSTOMER:
  - Rota para criar cliente
  - Rota para deletar
  - Rota para update
  - Rota para deletar
 




# Em caso de duvida, segue as documentaçoes das tecnologias usadas.
* https://www.prisma.io/docs/getting-started `migrations para o banco e crude`
* https://fastify.dev/docs/latest/Guides/Getting-Started/ `fastify router, criaçao de rotas`
* https://console.neon.tech/ `banco de dados cloud`