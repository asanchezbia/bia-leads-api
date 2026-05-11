const db = require('../config/database');

const Lead = {
  getAll: () => {
    return db.prepare('SELECT * FROM leads ORDER BY created_at DESC').all();
  },

  getById: (id) => {
    return db.prepare('SELECT * FROM leads WHERE id = ?').get(id);
  },

  create: (data) => {
    const stmt = db.prepare(`
      INSERT INTO leads (
        nombre_empresa, nombre_contacto, telefono, ciudad,
        consumo_kwh, valor_factura_cop, factura_compartida,
        tiene_curva_consumo, canal_entrada, fecha_entrada,
        fecha_ultimo_contacto, numero_intentos_contacto,
        ultimo_resultado, etapa, notas
      ) VALUES (
        @nombre_empresa, @nombre_contacto, @telefono, @ciudad,
        @consumo_kwh, @valor_factura_cop, @factura_compartida,
        @tiene_curva_consumo, @canal_entrada, @fecha_entrada,
        @fecha_ultimo_contacto, @numero_intentos_contacto,
        @ultimo_resultado, @etapa, @notas
      )
    `);
    const result = stmt.run(data);
    return Lead.getById(result.lastInsertRowid);
  },

  update: (id, data) => {
    const stmt = db.prepare(`
      UPDATE leads SET
        nombre_empresa = @nombre_empresa,
        nombre_contacto = @nombre_contacto,
        telefono = @telefono,
        ciudad = @ciudad,
        consumo_kwh = @consumo_kwh,
        valor_factura_cop = @valor_factura_cop,
        factura_compartida = @factura_compartida,
        tiene_curva_consumo = @tiene_curva_consumo,
        canal_entrada = @canal_entrada,
        fecha_entrada = @fecha_entrada,
        fecha_ultimo_contacto = @fecha_ultimo_contacto,
        numero_intentos_contacto = @numero_intentos_contacto,
        ultimo_resultado = @ultimo_resultado,
        etapa = @etapa,
        notas = @notas
      WHERE id = @id
    `);
    stmt.run({ ...data, id });
    return Lead.getById(id);
  },

  delete: (id) => {
    return db.prepare('DELETE FROM leads WHERE id = ?').run(id);
  }
};

module.exports = Lead;