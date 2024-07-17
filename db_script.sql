-- Active: 1720629609817@@localhost@3306@biblioteca
create database biblioteca;
use biblioteca;

create table editorial(
cod_editorial int(4) primary key,
editorial varchar(100) not null);

create table pais(
cod_pais int(4) primary key,
pais varchar(100)not null);

create table tipolibro(
cod_tipolibro int(4) primary key,
tipo varchar(100)not null);

create table libro (
    cod_libro int(4) primary key,
    isbn varchar(50) not null,
    titulo varchar(100) not null,
    cod_editorial int(4),
    cod_pais  int(4),
    cod_tipolibro  int(4),
    fechalanzamiento int(4) not null,
    edicion varchar(100),
    foreign key (cod_editorial) references editorial(cod_editorial),
    foreign key (cod_pais) references pais(cod_pais),
    foreign key (cod_tipolibro) references tipolibro(cod_tipolibro)
);

create table area(
cod_area int(4) primary key,
area varchar(150)not null);

create table autor(
cod_autor int(4) primary key,
autor varchar(150)not null);

create table librosporarea(
cod_libro int(4),
cod_area int(4),
foreign key(cod_libro) references libro(cod_libro),
foreign key(cod_area) references area(cod_area));

create table librosporautor(
cod_libro int(4),
cod_autor int(4),
foreign key(cod_libro) references libro(cod_libro),
foreign key(cod_autor) references autor(cod_autor));

create table afiliado(
cod_afiliado int(4) primary key,
nombre varchar(200),
apellido1 varchar(150),
apellido2 varchar(150),
documento varchar(200),
fechanacimiento varchar(10),
telefono varchar(25),
direccion varchar(250));

create table tipoprestamo(
cod_tipoprestamo char(1) primary key,
estado varchar(25));

create table estado(
cod_estado int(1) primary key,
estado varchar(25));

create table librosporexistencia(
cod_existencia int(7) primary key,
cod_libro int(4),
foreign key(cod_libro) references libro(cod_libro));


create table prestamo(
cod_prestamo int(4) primary key,
cod_existencia int(7),
foreign key(cod_existencia) references librosporexistencia(cod_existencia),
cod_afiliado int(4),
foreign key(cod_afiliado) references afiliado(cod_afiliado),
fechaprestamo varchar(10) not null,
horaprestamo varchar(10),
cod_tipoprestamo char(1),
foreign key(cod_tipoprestamo) references tipoprestamo(cod_tipoprestamo),
fechaentrega varchar(10),
horaentrega varchar(10));

create table estadoporexistencia(
cod_existencia int(7),
foreign key(cod_existencia) references librosporexistencia(cod_existencia),
cod_estado int (1),
foreign key(cod_estado) references estado(cod_estado));
