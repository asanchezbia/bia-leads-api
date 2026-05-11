const Database = require('better-sqlite3');
const path = require('path');

const db = new Database(path.join(__dirname, '../../leads.db'));

db.exec(`
  CREATE TABLE IF NOT EXISTS leads (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre_empresa TEXT NOT NULL,
    nombre_contacto TEXT,
    telefono TEXT,
    ciudad TEXT,
    consumo_kwh REAL,
    valor_factura_cop INTEGER,
    factura_compartida INTEGER DEFAULT 0,
    tiene_curva_consumo INTEGER DEFAULT 0,
    canal_entrada TEXT DEFAULT 'base_de_datos',
    fecha_entrada TEXT,
    fecha_ultimo_contacto TEXT,
    numero_intentos_contacto INTEGER DEFAULT 0,
    ultimo_resultado TEXT DEFAULT 'pendiente',
    etapa TEXT DEFAULT 'nuevo',
    notas TEXT,
    created_at TEXT DEFAULT (datetime('now'))
  )
`);

module.exports = db;
