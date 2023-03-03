# Ejemplo de API RESTFull

Proyecto de ejemplo que crea una API REST para los objetos:

- Clientes
- Facturas

## Dependencias

- NodeJS
- Express
- mongoose
- nodemon
- path
- cors

Una vez clonado el proyecto, instalar las dependencias

```bash
npm install
```

## Persistencia

Los datos se almacenan en una base de datos de `Mongodb 6.0.4` identificada como `sales` y que contiene dos colecciones

- customers
- bills

Los clientes usan un colección de objetos embebidos para mantener referencias a las facturas que tiene cada uno. Por su parte, las facturas mantienen una referencia a través de un _ObjectId al cliente a que pertenece la factura

## Servidor

El servidor se configura con Express y se inicia por defecto por el puerto 3000 o por el número de puerto especificado en la variable de entorno `PORT`. El comando para iniciar el servidor

```bash
npm start
```

## API

### Customers

Estructura JSON

```json
{
    "nit":"99999",
    "name":"Xxxxxx Xxxxxx",
    "birthday":"2000/10/20"
}
```

Usa el prefijo `/customers` en la URI. Se usan los métodos correspondientes del protocolo HTTP para interactuar con la API

- GET
- POST
- PUT
- DELETE

```json
{
    "number":"99999",
    "dateBill":"2020/10/12",
    "value":999999
}
```

Usa el prefijo `/bills` en la URI. Se usan los métodos correspondientes del protocolo HTTP para interactuar con la API

- GET
- POST
- PUT
- DELETE

Para crear la factura se envía el parámetro del ObjectId del cliente a quien pertenece la factura
