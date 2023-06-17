import { prisma } from '../config/prisma.js';

const fetchBoms = async (req, res) => {
  try {
    const booms = await prisma.bom.findMany();
    res.status(200).json(booms);
  } catch (error) {
    res.status(500).json(error);
  }
};

export { fetchBoms };
