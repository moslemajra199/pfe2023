import { prisma } from '../config/prisma.js';

/**
|--------------------------------------------------
| todo: validate bom using joy
|--------------------------------------------------
*/

const fetchBoms = async (req, res) => {
  try {
    const booms = await prisma.bom.findMany({
      include: {
        product: true,
        components: true,
      },
    });
    res.status(200).json(booms);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getBomById = async (req, res) => {
  const id = +req.params.id;

  try {
    const bom = await prisma.bom.findUnique({
      where: {
        id,
      },
    });

    if (!bom) {
      res.status(404).json({
        error: `Bill of material with id = ${id} was not found.`,
      });
    } else {
      res.status(200).json(bom);
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

const createBom = async (req, res) => {
  console.log(req.body);
  // const { productId, ...rest } = req.body;
  //console.log(rest, productId);
  try {
    const bom = await prisma.bom.create({
      data: {
        ...req.body,
      },
    });
    return res.status(201).json(bom);
  } catch (error) {
    res.status(500).json(error);
  }
};

const updateBom = async (req, res) => {
  const id = +req.params.id;

  try {
    const bom = await prisma.bom.findUnique({
      where: {
        id,
      },
    });

    if (!bom) {
      res.status(404).json({
        error: `Bom with id = ${id} was not found.`,
      });
    } else {
      const updated = await prisma.bom.update({
        where: {
          id,
        },
        data: {
          ...req.body,
        },
      });

      res.status(201).json(updated);
    }
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
};

const removeBom = async (req, res) => {
  const id = +req.params.id;

  try {
    let bom = await prisma.bom.findUnique({
      where: {
        id,
      },
    });

    if (!bom) {
      res.status(404).json({
        error: `Bill of material with id = ${id} was not found.`,
      });
    } else {
      bom = await prisma.bom.delete({
        where: {
          id,
        },
      });
      res.status(200).json(bom);
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

export { fetchBoms, getBomById, createBom, updateBom, removeBom };
