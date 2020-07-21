CREATE DATABASE db_cla;

USE db_cla;

CREATE TABLE users(
    email VARCHAR(50) NOT NULL,
    password VARCHAR(60) NOT NULL
);

DESCRIBE users;