// Para usar enums, siempre debe ser una coleccion de datos finitos
enum ERROR_TYPES {
    unauthorized,
    forbidden,
    notFound,
    serverError
}

const enum ERROR_TYPES_2 {
    unauthorized = 'unauthorized',
    forbidden = 'forbidden',
    notFound = 'notFound',
    serverError = 'serverError'
}

enum ERROR_TYPES_3 {
    unauthorized = 768,
    forbidden = 403,
    notFound = 404,
    serverError = 500
}
