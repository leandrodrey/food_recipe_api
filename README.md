# Ejercicio Recetario
"Food Recipes" es una aplicación web de recetas de comida.

Este repositorio conforma el Backend de la aplicación.

Frontend: [https://github.com/leandrodrey/food_recipe](https://github.com/leandrodrey/food_recipe)

## Consigna
Puedes ver la consigna completa en [EjercicioRecetario.pdf](https://github.com/leandrodrey/food_recipe/blob/master/EjercicioRecetario.pdf).

## Endpoints

### GET /recipes/:searchTerm
- Obtiene todas las recetas.
- Parámetros:
  - `search` (opcional): Filtra las recetas por nombre y por ingredientes.

### GET /recipes/detail/:id
- Obtiene una receta por su ID.
- Parámetros:
  - `id`: ID de la receta.

### PATCH /recipes/rating/:id
- Actualiza la calificación de una receta.
- Parámetros:
  - `id`: ID de la receta.
- Body:
- `rating` (int): Calificación de la receta.

### GET /recipes/rating/:sort
- Obtiene todas las recetas ordenadas por calificación.
- Parámetros:
  - `sort` (opcional): Ordena las recetas por calificación de forma ascendente o descendente.
  - `asc` (ascendente) o `des` (descendente).

## Tecnologías utilizadas
- Node.js
- Express

## Instalación

### 1. Clonar el repositorio
```bash
git clone https://github.com/leandrodrey/food_recipe_api
```

### 2. Instalar las dependencias
En el directorio del proyecto, ejecutar
:
```bash
yarn install
```

### 3. Iniciar el servidor de desarrollo
En el directorio del proyecto, ejecutar
```bash
yarn dev
```

### 4. Abrir la aplicación
Abrir [http://localhost:4000](http://localhost:4000) en el navegador para ver la aplicación.

### 5. Ejemplo de uso
En el archivo REQUESTS.http se encuentran ejemplos de uso de los diferentes endpoints.
