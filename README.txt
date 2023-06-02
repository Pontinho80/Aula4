1- para rodar o banco de dados use os comando:
    docker run -d -p 3306:3306 -e MYSQL_ROOT_PASSWORD= -e MYSQL_DATABASE=aula4 -e MYSQL_USER=root -e MYSQL_PASSWORD= aula4-db
2- Execute os scripts abaixo de INSERT
CREATE DATABASE aula4;
CREATE TABLE produtos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100),
    descricao TEXT,
    preco DECIMAL(10, 2)
);

INSERT INTO produtos (nome, descricao, preco)
VALUES ('Produto 1', 'Descrição do Produto 1', 9.99);

INSERT INTO produtos (nome, descricao, preco)
VALUES ('Produto 2', 'Descrição do Produto 2', 19.99);

INSERT INTO produtos (nome, descricao, preco)
VALUES ('Produto 3', 'Descrição do Produto 3', 29.99);

3- Para executar a aplicação, rode o script abaixo:
    docker run -p 3000:3000 --name aula4-cc -d aula4:0.0.1 

4-  Abra a URL: http://localhost:3000/consultar-dados
5- O link do GitHub é: https://github.com/Pontinho80/Aula4.git e o link do docker hub é: https://hub.docker.com/repository/docker/pontinho80/aula-ead/general
6- se o banco de dados não rodar do docker hub utilizar o MySqlWorkbanque e rodar localmente.