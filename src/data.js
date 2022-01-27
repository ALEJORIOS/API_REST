var contenedores = {
    "Brinsa": 1500,
    "Transporte": 700,
    "Bodega": 300,
    "Cliente": 500,
    "Total": 2000,
    "TipoA": 650,
    "TipoB": 750,
    "TipoC": 600
}

var cilindros =[
        {
            "serial": "123456",
            "propietario": "cocacola",
            "fechaBrinsa": "26-01-2022",
            "fechaTransito": "27-01-2022",
            "fechaCliente": "28-01-2022",
            "ultimoCliente": "el pepe",
        },
        {
            "serial": "123457",
            "propietario": "pepsi",
            "fechaBrinsa": "26-01-2022",
            "fechaTransito": "27-01-2022",
            "fechaCliente": "28-01-2022",
            "ultimoCliente": "etezech",
        }
    ]

var clientes = [
    {
        "NIT": "127.96320.19-9",
        "nombre": "el pepe",
        "email": "pepe@pepas.com",
        "celular": "3102426959",
        "activo": true,
        "fcreacion": "25-01-2022",
        "factivo": "25-01-2022",
        "contenedores": 32,
        "tcontenedor": "tipo A"
    },
    {
        "NIT": "127.96320.19-10",
        "nombre": "el pepe",
        "email": "pepe@pepas.com",
        "celular": "3188501911",
        "activo": false,
        "fcreacion": "25-01-2022",
        "factivo": "25-01-2022",
        "contenedores": 45,
        "tcontenedor": "tipo B"

    }
]

module.exports.contenedores = contenedores;
module.exports.infoContenedores = cilindros;
module.exports.clientes = clientes;