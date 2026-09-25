# MovieApp Workshop

Proyecto final del taller educativo de **React + TypeScript + Vite**. La app permite buscar películas consumiendo la API pública de **OMDb**.

## Ruta del proyecto

El proyecto Vite está en:

- `movie-app/`

> Todos los comandos deben ejecutarse dentro de `movie-app/`.

## Requisitos

- Node.js 20+
- npm
- API key de OMDb

## Obtener API key de OMDb

1. Ir a https://www.omdbapi.com/apikey.aspx
2. Solicitar una key gratuita.
3. Copiar `movie-app/.env.example` como `.env` y completar el valor:

```bash
VITE_OMDB_API_KEY=tu_api_key_real
```

## Instalación y ejecución

```bash
cd movie-app
npm install
npm run dev
```

## Build de producción

```bash
cd movie-app
npm run build
```

## Estructura de carpetas

```text
movie-app/
  src/
    MovieApp.tsx
    index.css
    main.tsx
    shared/
      components/
        CustomHeader.tsx
        SearchBar.tsx
        PreviousSearches.tsx
    movies/
      interfaces/
        movie.interface.ts
        omdb.response.ts
      api/
        omdb.api.ts
      actions/
        get-movies-by-query.action.ts
      hooks/
        useMovies.ts
      components/
        MovieCard.tsx
        MovieList.tsx
    mock-data/
      movies.mock.ts
  public/
    no-poster.png
  .env.example
```

## Niveles del taller (0-10)

| Nivel | Concepto principal | Concepto secundario |
|---|---|---|
| 0 | Scaffolding Vite | Estructura de carpetas |
| 1 | Componentes funcionales / JSX | Exportación de componentes |
| 2 | Props + TypeScript | Props opcionales, valores por defecto |
| 3 | Renderizado de listas (`.map`) | `key`, componentes de presentación |
| 4 | `useState` | Eventos (`onClick`, `onChange`) |
| 5 | Callbacks como props | Eventos de teclado |
| 6 | `useEffect` | Cleanup, debounce |
| 7 | Consumo de API (`axios`) | Interfaces externas (OMDb) vs dominio (`Movie`) |
| 8 | Integración estado + API | Vacíos, errores y placeholder de poster |
| 9 | Custom Hooks | Separación de responsabilidades |
| 10 | `useRef` | Patrón de caché |

## Resumen funcional

- Header tipado (`CustomHeader`) con props opcionales.
- Buscador tipado (`SearchBar`) con input controlado, Enter/click y debounce (700ms).
- Historial de búsquedas (`PreviousSearches`) conectado a estado real.
- Búsqueda de películas con OMDb usando axios.
- Mapeo de interfaz externa `OMDbResponse` a interfaz de dominio `Movie`.
- `useMovies` encapsula lógica de estado, búsqueda e historial.
- Caché de resultados con `useRef` para evitar peticiones repetidas.
