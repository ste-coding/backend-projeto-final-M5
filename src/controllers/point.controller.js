import { Point } from '../models/Point.model.js';

Point.sync()

export const createPoint = async (req, res) => {
    try {
        const point = await Point.create(req.body);
        res.status(201).json(point);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getPoints = async (req, res) => {
    try {
        const points = await Point.findAll();
        res.status(200).json(points);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getPointById = async (req, res) => {
    try {
        const point = await Point.findByPk(req.params.id);
        if (!point) return res.status(404).json({ error: 'Point not found' });
        res.status(200).json(point);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updatePoint = async (req, res) => {
    try {
        const [updated] = await Point.update(req.body, {
            where: { point_id: req.params.id },
        });
        if (!updated) return res.status(404).json({ error: 'Point not found' });
        const updatedPoint = await Point.findByPk(req.params.id);
        res.status(200).json(updatedPoint);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const deletePoint = async (req, res) => {
    try {
        const deleted = await Point.destroy({
            where: { point_id: req.params.id },
        });
        if (!deleted) return res.status(404).json({ error: 'Point not found' });
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
