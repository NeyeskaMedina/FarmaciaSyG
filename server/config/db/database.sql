-- 1- Mostrar los 5 productos mas vendidos
-- 2- Mostrar lista de productos con stock y precio
-- 3 Los productos vienen en diferentes variantes


CREATE DATABASE farmacia;

\c farmacia;

CREATE TABLE Users (
    user_id INT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
)
-- Agregando usuario para realizar pruebas

INSERT INTO Users (user_id, username, password) 
VALUES (1, 'admin', 'admin');

CREATE TABLE Products (
    product_id INT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    product_type VARCHAR(255)
);

CREATE TABLE Variants (
    variant_id INT PRIMARY KEY,
    description TEXT NOT NULL,
    imageURL VARCHAR(255)NOT NULL,
    stockVariant INT NOT NULL,
    product_id INT REFERENCES Products(product_id),
    FOREIGN KEY (product_id) REFERENCES Products(product_id)
)

CREATE TABLE Price (
    price_id INT PRIMARY KEY,
    value DECIMAL(7,2) NOT NULL,
    value_taxes DECIMAL(7,2) NOT NULL,
    variant_id INT REFERENCES Variants(variant_id),
    FOREIGN KEY (variant_id) REFERENCES Variants(variant_id)
)

