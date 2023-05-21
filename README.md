**************************************************
Quary por categoria o stock.
?query=xxxxxxx (aqui va la categoría).
Las categorias existentes son: escolar, electro, ropa, carpinteria y foodPet.
**************************************************
En realidad lo que hice es un filtro que a partir de un numero de stock me diga igual o menor a ese numero.
para saber los productos sin stock, ?query=xx (numero) sería 0.

estos son los dos objetos que no tienen stock.

{
    "_id": "645d88e6febe12e5783d0ae8",
    "title": "tijeras",
    "description": "colores",
    "code": "9944aadfsds",
    "price": 100,
    "stock": 0,
    "category": "escolar",
    "thumbnails": [],
    "status": true,
    "__v": 0,
    "id": "645d88e6febe12e5783d0ae8"
},
{
    "_id": "6468e70ac50d23b897685e6a",
    "title": "Food caballo",
    "description": "comida vaballo 15kg",
    "code": "food752",
    "price": 300,
    "stock": 0,
    "category": "foodPet",
    "thumbnails": [],
    "status": true,
    "__v": 0,
    "id": "6468e70ac50d23b897685e6a"
}

***************************************************************************************
para el update del carrito que pide una lista aca te dejo una.

localhost:8080/api/carts/646a2cf81dfecefc09e433a5   (este carrito está vacio)
{
    "products": [
        {
            "product": "6468e5f3c50d23b897685e51",
            "quantity": 2
        },
        {
            "product": "6468e6e8c50d23b897685e64",
            "quantity": 3
        }
    ]
}

***************************************************************************************
para el update de quantity te dejo uno pre armado tambien
localhost:8080/api/carts/646a24e4d651194bad2a3edc/products/6468e3e2c50d23b897685e2d

{
    "quantity": 8
}

***************************************************************************************
para eliminar los productos de una carrito, te dejo una carrito con un producto ya hecho para que lo vacies
localhost:8080/api/carts/64668772054a62cfe2fff356/products/645d88e6febe12e5783d0ae8

*******************************************************************************************

Para ver un carrito con sus productos http://localhost:8080/carts/646a5540f86461c4696f9667

*******************************************************************************************

para ver todos los productos http://localhost:8080/products