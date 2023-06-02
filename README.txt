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