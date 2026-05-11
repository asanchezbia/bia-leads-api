const Lead = require('../models/Lead');

const leadController = {
  getAll: (req, res) => {
    try {
      const leads = Lead.getAll();
      res.json({ success: true, data: leads, total: leads.length });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  },

  getById: (req, res) => {
    try {
      const lead = Lead.getById(req.params.id);
      if (!lead) return res.status(404).json({ success: false, error: 'Lead no encontrado' });
      res.json({ success: true, data: lead });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  },

  create: (req, res) => {
    try {
      if (!req.body.nombre_empresa) {
        return res.status(400).json({ success: false, error: 'nombre_empresa es requerido' });
      }
      const lead = Lead.create(req.body);
      res.status(201).json({ success: true, data: lead });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  },

  update: (req, res) => {
    try {
      const existing = Lead.getById(req.params.id);
      if (!existing) return res.status(404).json({ success: false, error: 'Lead no encontrado' });
      const lead = Lead.update(req.params.id, { ...existing, ...req.body });
      res.json({ success: true, data: lead });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  },

  delete: (req, res) => {
    try {
      const existing = Lead.getById(req.params.id);
      if (!existing) return res.status(404).json({ success: false, error: 'Lead no encontrado' });
      Lead.delete(req.params.id);
      res.json({ success: true, message: 'Lead eliminado correctamente' });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  }
};

module.exports = leadController;