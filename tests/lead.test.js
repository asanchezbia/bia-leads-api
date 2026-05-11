const request = require('supertest');
const app = require('../index');

describe('GET /health', () => {
  test('debe retornar status OK', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('OK');
  });
});

describe('GET /leads', () => {
  test('debe retornar lista de leads', async () => {
    const res = await request(app).get('/leads');
    expect(res.statusCode).toBe(200);
    expect(res.body.success).toBe(true);
    expect(Array.isArray(res.body.data)).toBe(true);
  });
});

describe('POST /leads', () => {
  test('debe crear un lead nuevo', async () => {
    const res = await request(app).post('/leads').send({
      nombre_empresa: 'Test Empresa',
      nombre_contacto: 'Test Contacto',
      telefono: '3001234567',
      ciudad: 'Bogota',
      consumo_kwh: 5000,
      valor_factura_cop: 8000000,
      factura_compartida: 1,
      tiene_curva_consumo: 0,
      canal_entrada: 'formulario_web',
      fecha_entrada: '2026-05-10',
      fecha_ultimo_contacto: '2026-05-10',
      numero_intentos_contacto: 1,
      ultimo_resultado: 'interesado',
      etapa: 'caliente',
      notas: 'Lead de prueba'
    });
    expect(res.statusCode).toBe(201);
    expect(res.body.success).toBe(true);
    expect(res.body.data.nombre_empresa).toBe('Test Empresa');
  });
});

describe('GET /leads/:id', () => {
  test('debe retornar 404 si el lead no existe', async () => {
    const res = await request(app).get('/leads/99999');
    expect(res.statusCode).toBe(404);
    expect(res.body.success).toBe(false);
  });
});

describe('DELETE /leads/:id', () => {
  test('debe retornar 404 si el lead no existe', async () => {
    const res = await request(app).delete('/leads/99999');
    expect(res.statusCode).toBe(404);
  });
});