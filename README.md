# Spotify Backend


## Descripcion

Esta aplicacion es una API REST que es la encargada de servir data entre
la aplicacion del Front-End, maneja tokens para la autenticacion del usuario. 


## Requerimientos
1. nodeJS y npm
2. MongoDB 

## Instalacion

1. Instalar dependencias:
    `npm install`

2. Crear archivo **.env** y establecer los siguientes valores
    ```
    URL_PUBLIC=localhost
    URL_SERVER=localhost
    PORT=3002
    JWT_SECRET= MiToken
    DB_PORT=10101
    DB_SERVER=localhost
    ```


## Run server

Para correr ejecuta:
    `npm start`


## REST API

#### Login:
Peticion HTTP:
    `POST http://localhost:3002/api/v1.0/auth/login`

Body:
```
{
    "email": "example@example.com",
    "password": "123456",
}
```

#### Create User:
Peticion HTTP:
    `POST http://localhost:3002/api/v1.0/auth/register`

Body:
```
{
    "email": "example@example.com",
    "password": "123456",
    "name": "my_name",
    "fecha_nac" : "2022-02-10",
    "creadoPorEmail":"true"
}
```


#### Get All Tracks:
Peticion HTTP:
    `GET http://localhost:3002/api/v1.0/tracks/`

Headers:
`authorization`:`Bearer $tokenSesion`


