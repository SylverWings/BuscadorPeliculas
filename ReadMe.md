# Base de datos Videoclub
---
Para este proyecto se nos pidió que crearamos una DataBase(con una gestion de datos a escoger) para un "videoclub". Nosotros
elegimos como gestion de datos MongoDB. 


---
# Trabajo Realizado
---

Lo primero que hicimos fue juntarnos y crear en Trello las tablas y las diferentes tareas a realizar. Una vez tuvimos claro el
proceso a seguir, nos fuimos repartiendo las diferentes tareas.

Foto de Ejemplo
<img class= "foto" src="./trello.jpg" alt="trello">

Una vez acabamos todo el trabajo, repasamos que los controladores y las rutas esten bien. A continuacion, deployamos en Heroku la 
base de datos, que ya estaba vinculada a Mongo Atlas.

---

# Deploy en Heroku 
---

[Link del proyecto en heroku](https://proyecto-bucador-peliculas.herokuapp.com/) 🌎


---

# Instrucciones y endpoints

---

- Abrir el link de heroku para arrancar automáticamente el servidor. 

- Pasamos a postman donde copiaremos también el mismo link para empezar a lanzar peticiones.

---

## Endpoints

---

<h2>Usuarios</h2>

* "/api/register" para registrarnos como usurarios.

<br>

* "/api/login" para loggearnos como usuarios

<br>

* "/api/

<br>

* /Reservas/(numero de id) para buscar una reserva a través de su id.

<br>

* /Reservas/cliente/(NombreCliente) para buscar tantas reservas como haya hecho el nombre del cliente si existiera. 

<br>

* /Reservas/telefono/(numerotelefono) para buscar reservas filtrándolas por número de teléfono.

<br>

* /Reservas/email/(email) para buscar reservas filtrándolas por el email de la reserva.

<br>

* /Reservas/hotel/(nombreHotel) para buscar reservas filtrando por el nombre del hotel.

<br>

* /Reservas/FechaE/(Fecha de entrada) para buscar reservas filtrando por la fecha de entrada de la reserva.

<br>

* /Reservas/FechaS/(Fecha de Salida) para buscar reservas filtrando por la fecha de salida de la reserva.
