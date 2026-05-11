# Diagrama de base de datos — Bia Leads API

## Tabla: leads

| Columna | Tipo | Descripción |
|---------|------|-------------|
| id | INTEGER PK | Autoincremental |
| nombre_empresa | TEXT | Obligatorio |
| nombre_contacto | TEXT | Nombre del contacto |
| telefono | TEXT | Teléfono de contacto |
| ciudad | TEXT | Ciudad del lead |
| consumo_kwh | REAL | Consumo mensual en kWh |
| valor_factura_cop | INTEGER | Valor última factura en COP |
| factura_compartida | INTEGER | 0=no, 1=sí (default 0) |
| tiene_curva_consumo | INTEGER | 0=no, 1=sí (default 0) |
| canal_entrada | TEXT | formulario_web, referido, llamada_fria, evento, base_de_datos |
| fecha_entrada | TEXT | Fecha que llegó el lead |
| fecha_ultimo_contacto | TEXT | Último contacto registrado |
| numero_intentos_contacto | INTEGER | Intentos de contacto (default 0) |
| ultimo_resultado | TEXT | no_contesta, interesado, no_interesado, solicito_info, agendado, pendiente |
| etapa | TEXT | nuevo, en_gestion, caliente, agendado, descartado |
| notas | TEXT | Observaciones del SDR |
| created_at | TEXT | Fecha de creación automática |

## Operaciones CRUD

| Operación | Endpoint | Descripción |
|-----------|----------|-------------|
| Listar todos | GET /leads | Retorna array con total |
| Ver uno | GET /leads/:id | Retorna lead por ID |
| Crear | POST /leads | Crea nuevo lead |
| Actualizar | PUT /leads/:id | Actualiza lead existente |
| Eliminar | DELETE /leads/:id | Elimina lead por ID |
| Salud | GET /health | Estado del servidor |