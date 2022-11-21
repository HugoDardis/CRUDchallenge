# CRUDchallenge
Aplicação básica de CRUD com dados de nome, aniversário, cpf, endereço e idade.

RESOURCES

Node.JS
Postgresql 

DEPENDENCIES

• express 
• Postgresql 
• path
• sequelize
• sequelize-cli
• nodemon 

Installation

$ npm install

Run the App

$ npx sequelize db:create

$ npx sequelize db:migrate

$ npx sequelize db:seed:all

$ npm run dev 

Routes

• POST http://localhost:3000/users to createUser
• GET http://localhost:3000/users to showAllUsers
• GET http://localhost:3000/users/:id to showUserId
• PUT http://localhost:3000/users/:id to updateUser
• DELETE http://localhost:3000/users/:id to deleteUser