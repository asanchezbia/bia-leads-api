# Diagrama de estructura — Bia Leads API

## Arquitectura MVC

bia-leads-api/
├── index.js                  # Servidor Express, punto de entrada
├── leads.db                  # Base de datos SQLite
├── package.json
└── src/
    ├── config/
    │   └── database.js       # Conexión SQLite
    ├── models/
    │   └── Lead.js           # Acceso a datos
    ├── controllers/
    │   └── leadController.js # Lógica de negocio
    └── routes/
        └── leadRoutes.js     # Endpoints REST

## Flujo

Cliente → index.js → routes → controller → model → SQLite

## Capas

| Capa | Archivo | Responsabilidad |
|------|---------|----------------|
| Servidor | index.js | Inicia Express y registra rutas |
| Rutas | leadRoutes.js | Define los endpoints REST |
| Controlador | leadController.js | Valida y maneja errores |
| Modelo | Lead.js | Ejecuta queries SQL |
| Config | database.js | Crea la tabla si no existe |
