-- Active: 1720629609817@@localhost@3306@biblioteca
CREATE DATABASE biblioteca;

USE biblioteca;

CREATE TABLE editorial (
    cod_editorial INT(4) PRIMARY KEY,
    editorial VARCHAR(100)
);

CREATE TABLE pais (
    cod_pais INT(4) PRIMARY KEY,
    pais VARCHAR(100)
);

CREATE TABLE tipolibro (
    cod_tipolibro INT(4) PRIMARY KEY,
    tipo VARCHAR(100)
);

CREATE TABLE libro (
    cod_libro INT(4) PRIMARY KEY,
    ISBN VARCHAR(50),
    titulo VARCHAR(100),
    cod_editorial INT(4),
    cod_pais INT(4),
    cod_tipolibro INT(4),
    fechaLanzamiento INT(4),
    edicion VARCHAR(100),
    FOREIGN KEY (cod_editorial) REFERENCES editorial(cod_editorial),
    FOREIGN KEY (cod_pais) REFERENCES pais(cod_pais),
    FOREIGN KEY (cod_tipolibro) REFERENCES tipolibro(cod_tipolibro)
);

CREATE TABLE area (
    cod_area INT(4) PRIMARY KEY,
    area VARCHAR(100)
);

CREATE TABLE autor (
    cod_autor INT(4) PRIMARY KEY,
    autor VARCHAR(150)
);

CREATE TABLE librosporarea (
    cod_libroarea INT AUTO_INCREMENT PRIMARY KEY,
    cod_libro INT(4),
    cod_area INT(4),
    FOREIGN KEY (cod_libro) REFERENCES libro(cod_libro),
    FOREIGN KEY (cod_area) REFERENCES area(cod_area)
);

CREATE TABLE librosporautor (
    cod_libroautor INT AUTO_INCREMENT PRIMARY KEY,
    cod_libro INT(4),
    cod_autor INT(4),
    FOREIGN KEY (cod_libro) REFERENCES libro(cod_libro),
    FOREIGN KEY (cod_autor) REFERENCES autor(cod_autor)
);

CREATE TABLE afiliado (
    cod_afiliado INT(4) PRIMARY KEY,
    nombre VARCHAR(200),
    apellido1 VARCHAR(150),
    apellido2 VARCHAR(150),
    documento VARCHAR(200),
    fechaNacimiento VARCHAR(10),
    telefono VARCHAR(25),
    direccion VARCHAR(250)
);

CREATE TABLE tipoprestamo (
    cod_tipoprestamo CHAR(1) PRIMARY KEY,
    tipoPrestamo VARCHAR(25)
);

CREATE TABLE estado (
    cod_estado INT(1) PRIMARY KEY,
    estado VARCHAR(25)
);

CREATE TABLE librosporexistencia (
    cod_existencia INT(7) PRIMARY KEY,
    cod_libro INT(4),
    FOREIGN KEY (cod_libro) REFERENCES libro(cod_libro)
);

CREATE TABLE prestamo (
    cod_prestamo INT(4) PRIMARY KEY,
    cod_existencia INT(7),
    cod_afiliado INT(4),
    fechaprestamo VARCHAR(10),
    horaprestamo VARCHAR(10),
    fechaentrega VARCHAR(10),
    horaentrega VARCHAR(10),
    cod_tipoprestamo CHAR(1),
    cod_estado INT(1),
    FOREIGN KEY (cod_existencia) REFERENCES librosporexistencia(cod_existencia),
    FOREIGN KEY (cod_afiliado) REFERENCES afiliado(cod_afiliado),
    FOREIGN KEY (cod_tipoPrestamo) REFERENCES tipoprestamo(cod_tipoPrestamo),
    FOREIGN KEY (cod_estado) REFERENCES estado(cod_estado)
);

CREATE TABLE estadoporexistencia (
    cod_estadoexistencia INT AUTO_INCREMENT PRIMARY KEY,
    cod_existencia INT(7),
    cod_estado INT(1),
    FOREIGN KEY (cod_existencia) REFERENCES librosporexistencia(cod_existencia),
    FOREIGN KEY (cod_estado) REFERENCES estado(cod_estado)
);

-- INSERTS
INSERT INTO editorial (cod_editorial, editorial) VALUES
(1, 'Editorial Alpha'),
(2, 'Editorial Beta'),
(3, 'Editorial Gamma'),
(4, 'Editorial Delta'),
(5, 'Editorial Epsilon');

INSERT INTO pais (cod_pais, pais) VALUES
(1, 'Estados Unidos'),
(2, 'España'),
(3, 'México'),
(4, 'Argentina'),
(5, 'Colombia');

INSERT INTO tipolibro (cod_tipolibro, tipo) VALUES
(1, 'Ficción'),
(2, 'No Ficción'),
(3, 'Ciencia'),
(4, 'Tecnología'),
(5, 'Matemáticas');

INSERT INTO libro (cod_libro, ISBN, titulo, cod_editorial, cod_pais, cod_tipolibro, fechaLanzamiento, edicion) VALUES
(1, '978-3-16-148410-0', 'Libro Ficción 1', 1, 1, 1, 2020, 'Primera'),
(2, '978-1-23-456789-7', 'Libro No Ficción 1', 2, 2, 2, 2019, 'Segunda'),
(3, '978-0-12-345678-9', 'Libro Ciencia 1', 3, 3, 3, 2021, 'Primera'),
(4, '978-3-16-148411-7', 'Libro Tecnología 1', 4, 4, 4, 2018, 'Primera'),
(5, '978-1-23-456788-0', 'Libro Matemáticas 1', 5, 5, 5, 2017, 'Primera');

INSERT INTO area (cod_area, area) VALUES
(1, 'Literatura'),
(2, 'Historia'),
(3, 'Ciencia'),
(4, 'Tecnología'),
(5, 'Matemáticas');

INSERT INTO autor (cod_autor, autor) VALUES
(1, 'Autor Uno'),
(2, 'Autor Dos'),
(3, 'Autor Tres'),
(4, 'Autor Cuatro'),
(5, 'Autor Cinco');

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

INSERT INTO afiliado (cod_afiliado, nombre, apellido1, apellido2, documento, fechaNacimiento, telefono, direccion) VALUES
(1, 'Juan', 'Pérez', 'López', '123456789', '1990-01-01', '555-1234', 'Calle Falsa 123'),
(2, 'María', 'Gómez', 'Martínez', '987654321', '1985-02-02', '555-5678', 'Avenida Siempreviva 456'),
(3, 'Luis', 'Rodríguez', 'Hernández', '456789123', '1975-03-03', '555-9101', 'Boulevard del Sol 789'),
(4, 'Ana', 'Fernández', 'García', '789123456', '1988-04-04', '555-1122', 'Calle Luna 321'),
(5, 'Carlos', 'Martínez', 'Ruiz', '321456789', '1992-05-05', '555-3344', 'Avenida Estrella 654');

INSERT INTO tipoprestamo (cod_tipoprestamo, tipoPrestamo) VALUES
('A', 'Corto Plazo'),
('B', 'Largo Plazo');

INSERT INTO estado (cod_estado, estado) VALUES
(1, 'Disponible'),
(2, 'Prestado');

INSERT INTO librosporexistencia (cod_existencia, cod_libro) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5);

INSERT INTO prestamo (cod_prestamo, cod_existencia, cod_afiliado, fechaprestamo, horaprestamo, fechaentrega, horaentrega, cod_tipoprestamo, cod_estado) VALUES
(1, 1, 1, '2024-07-01', '10:00', '2024-07-10', '12:00', 'A', 2),
(2, 2, 2, '2024-07-02', '11:00', '2024-07-15', '13:00', 'B', 2),
(3, 3, 3, '2024-07-03', '12:00', '2024-07-20', '14:00', 'A', 2),
(4, 4, 4, '2024-07-04', '13:00', '2024-07-25', '15:00', 'B', 2),
(5, 5, 5, '2024-07-05', '14:00', '2024-08-01', '16:00', 'A', 2);

INSERT INTO estadoporexistencia (cod_existencia, cod_estado) VALUES
(1, 2),
(2, 2),
(3, 2),
(4, 2),
(5, 2);