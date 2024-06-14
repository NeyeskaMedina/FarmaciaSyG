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

CREATE TABLE Products_costs (
    id INT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price_neto DECIMAL(10, 2) NOT NULL,
    price_total DECIMAL(10, 2) NOT NULL,
    proveedor VARCHAR(255) NOT NULL
)