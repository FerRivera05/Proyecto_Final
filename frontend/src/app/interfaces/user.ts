export interface User {
    ctipou?: number | string;
    descripcion?: string | null;
}

export interface editorial {
    cod_editorial?: number | null;
    editorial?: string | null;
}

export interface pais {
    cod_pais?: number | null;
    pais?: string | null;
}

export interface tipolibro {
    cod_tipolibro?: number | null;
    tipo?: string | null;
}

export interface libro {
    cod_libro?: number | null;
    ISBN?: string | null;
    titulo?: string | null;
    cod_editorial?: number | null;
    cod_pais?: number | null;
    cod_tipolibro?: number | null;
    fechalanzamiento?: number | null;
    edicion?: string | null;
}

export interface area {
    cod_area?: number | null;
    area?: string | null;
}

export interface autor {
    cod_autor?: number | null;
    autor?: string | null;
}

export interface librosporarea {
    cod_libroarea?: number | null;
    cod_libro?: number | null;
    cod_area?: number | null;
}

export interface librosporautor {
    cod_libroautor?: number | null;
    cod_libro?: number | null;
    cod_autor?: number | null;
}

export interface afiliado {
    cod_afiliado?: number | null;
    nombre?: string | null;
    apellido1?: string | null;
    apellido2?: string | null;
    documento?: string | null;
    fechanacimiento?: string | null;
    telefono?: string | null;
    direccion?: string | null;
}

export interface tipoprestamo {
    cod_tipoprestamo?: string | null;
    tipoprestamo?: string | null;
}

export interface estado {
    cod_estado?: number | null;
    estado?: string | null;
}

export interface librosporexistencia {
    cod_existencia?: number | null;
    cod_libro?: number | null;
}

export interface prestamo {
    cod_prestamo?: number | null;
    cod_existencia?: number | null;
    cod_afiliado?: number | null;
    fechaprestamo?: string | null;
    horaprestamo?: string | null;
    fechaentrega?: string | null;
    horaentrega?: string | null;
    cod_tipoprestamo?: string | null;
    cod_estado?: number | null;
}

export interface estadoporexistencia {
    cod_estadoexistencia?: number | null;
    cod_existencia?: number | null;
    cod_estado?: number | null;
}