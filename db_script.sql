-- Active: 1720629609817@@localhost@3306@biblioteca
CREATE DATABASE biblioteca;

USE biblioteca;

CREATE TABLE editorial (
    cod_editorial INT(4) AUTO_INCREMENT PRIMARY KEY,
    editorial VARCHAR(100)
);

CREATE TABLE pais (
    cod_pais INT(4) AUTO_INCREMENT PRIMARY KEY,
    pais VARCHAR(100)
);

CREATE TABLE tipolibro (
    cod_tipolibro INT(4) AUTO_INCREMENT PRIMARY KEY,
    tipo VARCHAR(100)
);

CREATE TABLE libro (
    cod_libro INT(4) AUTO_INCREMENT PRIMARY KEY,
    ISBN VARCHAR(50),
    titulo VARCHAR(100),
    cod_editorial INT(4),
    cod_pais INT(4),
    cod_tipolibro INT(4),
    fechalanzamiento INT(4),
    edicion VARCHAR(100),
    FOREIGN KEY (cod_editorial) REFERENCES editorial(cod_editorial)
        ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (cod_pais) REFERENCES pais(cod_pais)
        ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (cod_tipolibro) REFERENCES tipolibro(cod_tipolibro)
        ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE area (
    cod_area INT(4) AUTO_INCREMENT PRIMARY KEY,
    area VARCHAR(100)
);

CREATE TABLE autor (
    cod_autor INT(4) AUTO_INCREMENT PRIMARY KEY,
    autor VARCHAR(150)
);

CREATE TABLE librosporarea (
    cod_libroarea INT AUTO_INCREMENT PRIMARY KEY,
    cod_libro INT(4),
    cod_area INT(4),
    FOREIGN KEY (cod_libro) REFERENCES libro(cod_libro)
        ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (cod_area) REFERENCES area(cod_area)
        ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE librosporautor (
    cod_libroautor INT AUTO_INCREMENT PRIMARY KEY,
    cod_libro INT(4),
    cod_autor INT(4),
    FOREIGN KEY (cod_libro) REFERENCES libro(cod_libro)
        ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (cod_autor) REFERENCES autor(cod_autor)
        ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE afiliado (
    cod_afiliado INT(4) AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(200),
    apellido1 VARCHAR(150),
    apellido2 VARCHAR(150),
    documento VARCHAR(200),
    fechanacimiento VARCHAR(10),
    telefono VARCHAR(25),
    direccion VARCHAR(250)
);

CREATE TABLE tipoprestamo (
    cod_tipoprestamo CHAR(1) PRIMARY KEY,
    tipoprestamo VARCHAR(25)
);

CREATE TABLE estado (
    cod_estado INT(1) AUTO_INCREMENT PRIMARY KEY,
    estado VARCHAR(25)
);

CREATE TABLE librosporexistencia (
    cod_existencia INT(7) AUTO_INCREMENT PRIMARY KEY,
    cod_libro INT(4),
    FOREIGN KEY (cod_libro) REFERENCES libro(cod_libro)
        ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE prestamo (
    cod_prestamo INT(4) AUTO_INCREMENT PRIMARY KEY,
    cod_existencia INT(7),
    cod_afiliado INT(4),
    fechaprestamo VARCHAR(10),
    horaprestamo VARCHAR(10),
    fechaentrega VARCHAR(10),
    horaentrega VARCHAR(10),
    cod_tipoprestamo CHAR(1),
    cod_estado INT(1),
    FOREIGN KEY (cod_existencia) REFERENCES librosporexistencia(cod_existencia)
        ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (cod_afiliado) REFERENCES afiliado(cod_afiliado)
        ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (cod_tipoprestamo) REFERENCES tipoprestamo(cod_tipoprestamo)
        ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (cod_estado) REFERENCES estado(cod_estado)
        ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE estadoporexistencia (
    cod_estadoexistencia INT AUTO_INCREMENT PRIMARY KEY,
    cod_existencia INT(7),
    cod_estado INT(1),
    FOREIGN KEY (cod_existencia) REFERENCES librosporexistencia(cod_existencia)
        ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (cod_estado) REFERENCES estado(cod_estado)
        ON DELETE CASCADE ON UPDATE CASCADE
);


-- INSERTS
INSERT INTO editorial (editorial) VALUES
('Editorial Alpha'),
('Editorial Beta'),
('Editorial Gamma'),
('Editorial Delta'),
('Editorial Epsilon');

INSERT INTO pais (pais) VALUES
('Estados Unidos'),
('España'),
('México'),
('Argentina'),
('Colombia');

INSERT INTO tipolibro (tipo) VALUES
('Ficción'),
('No Ficción'),
('Ciencia'),
('Tecnología'),
('Matemáticas');

INSERT INTO libro (ISBN, titulo, cod_editorial, cod_pais, cod_tipolibro, fechalanzamiento, edicion) VALUES
('978-3-16-148410-0', 'Libro Ficción 1', 1, 1, 1, 2020, 'Primera'),
('978-1-23-456789-7', 'Libro No Ficción 1', 2, 2, 2, 2019, 'Segunda'),
('978-0-12-345678-9', 'Libro Ciencia 1', 3, 3, 3, 2021, 'Primera'),
('978-3-16-148411-7', 'Libro Tecnología 1', 4, 4, 4, 2018, 'Primera'),
('978-1-23-456788-0', 'Libro Matemáticas 1', 5, 5, 5, 2017, 'Primera');

INSERT INTO area (area) VALUES
('Literatura'),
('Historia'),
('Ciencia'),
('Tecnología'),
('Matemáticas');

INSERT INTO autor (autor) VALUES
('Autor Uno'),
('Autor Dos'),
('Autor Tres'),
('Autor Cuatro'),
('Autor Cinco');

INSERT INTO librosporarea (cod_libro, cod_area) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5);

INSERT INTO librosporautor (cod_libro, cod_autor) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5);

INSERT INTO afiliado (nombre, apellido1, apellido2, documento, fechaNacimiento, telefono, direccion) VALUES
('Juan', 'Pérez', 'López', '123456789', '1990-01-01', '555-1234', 'Calle Falsa 123'),
('María', 'Gómez', 'Martínez', '987654321', '1985-02-02', '555-5678', 'Avenida Siempreviva 456'),
('Luis', 'Rodríguez', 'Hernández', '456789123', '1975-03-03', '555-9101', 'Boulevard del Sol 789'),
('Ana', 'Fernández', 'García', '789123456', '1988-04-04', '555-1122', 'Calle Luna 321'),
('Carlos', 'Martínez', 'Ruiz', '321456789', '1992-05-05', '555-3344', 'Avenida Estrella 654');

INSERT INTO tipoprestamo (cod_tipoprestamo, tipoPrestamo) VALUES
('A', 'Corto Plazo'),
('B', 'Largo Plazo');

INSERT INTO estado (estado) VALUES
('Disponible'),
('Prestado');

INSERT INTO librosporexistencia (cod_libro) VALUES
(1),
(2),
(3),
(4),
(5);

INSERT INTO prestamo (cod_existencia, cod_afiliado, fechaprestamo, horaprestamo, fechaentrega, horaentrega, cod_tipoprestamo, cod_estado) VALUES
(1, 1, '2024-07-01', '10:00', '2024-07-10', '12:00', 'A', 2),
(2, 2, '2024-07-02', '11:00', '2024-07-15', '13:00', 'B', 2),
(3, 3, '2024-07-03', '12:00', '2024-07-20', '14:00', 'A', 2),
(4, 4, '2024-07-04', '13:00', '2024-07-25', '15:00', 'B', 2),
(5, 5, '2024-07-05', '14:00', '2024-08-01', '16:00', 'A', 2);

INSERT INTO estadoporexistencia (cod_existencia, cod_estado) VALUES
(1, 2),
(2, 2),
(3, 2),
(4, 2),
(5, 2);