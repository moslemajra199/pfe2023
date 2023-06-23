import { prisma } from '../config/prisma.js';

const fetchComponents = async (req, res) => {
  try {
    const components = await prisma.component.findMany({
      include: {
        bom: true,
      },
    });

    res.status(200).json(components);
  } catch (error) {
    res.status(500).json(error);
  }
};

const createComponent = async (req, res) => {
  const component = req.body;

  try {
    const component = await prisma.component.create({
      data: {
        ...req.body,
      },
    });

    res.status(201).json(component);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getComponent = async (req, res) => {
  const { id } = req.params;

  try {
    const component = await prisma.component.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!component) {
      return res.status(404).json({
        error: `Product with id = ${id} was not found`,
      });
    }

    res.status(200).json(component);
  } catch (error) {
    res.status(500).json(error);
  }
};

const updateComponent = async (req, res) => {
  const { id } = req.params;

  try {
    const component = await prisma.component.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!component) {
      return res.status(404).json({
        error: `Component with id  = ${id} was not found`,
      });
    }

    const updated = await prisma.component.update({
      where: {
        id: Number(id),
      },

      data: {
        ...req.body,
      },
    });

    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json(error);
  }
};

const removeComponent = async (req, res) => {
  const { id } = req.params;

  try {
    const component = await prisma.component.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!component) {
      return res.status(404).json({
        error: `Component with id = ${id} was not found`,
      });
    } else {
      const removed = await prisma.component.delete({
        where: {
          id: Number(id),
        },
      });
      res.status(200).json(removed);
    }
  } catch (error) {
    res.status(500).json(error);
  }
};
export {
  fetchComponents,
  createComponent,
  getComponent,
  updateComponent,
  removeComponent,
};
