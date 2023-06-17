import {prisma }from '../config/prisma.js';
import asyncHandler from 'express-async-handler';

const fetchProducts = async (req, res) => {
  try {
    const products = await prisma.product.findMany();

    res.status(200).json(products);
  } catch (error) {
    req.Status(500).json(error);
  }
};

const getProduct = asyncHandler(async (req, res, next) => {
  try {
    const id = +req.params.id;
    const product = await prisma.product.findUnique({
      where: {
        id: id,
      },
    });

    if (!product) {
      return res.status(404).send(`product with id = ${id} was not found`);
    }
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
});

const createProduct = async (req, res) => {
  try {
    const product = await prisma.product.create({
      data: {
        ...req.body,
      },
    });

    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({
      message: 'Something went wrong!',
    });
  }
};

const updateProduct = async (req, res) => {
  const id = +req.params.id;
  try {
    let product = await prisma.product.findUnique({
      where: {
        id,
      },
    });

    if (!product) {
      res.status(404).json({
        error: `Product with id = ${id} was not found`,
      });
    } else {
      product = await prisma.product.update({
        where: {
          id,
        },
        data: {
          ...req.body,
        },
      });
      res.status(200).json(product);
    }
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
};

const removeProduct = async (req, res) => {
  try {
    const id = +req.params.id;

    const product = await prisma.product.delete({
      where: {
        id,
      },
    });

    if (!product) {
      res.status(404).json({
        error: `PRoduct with id = ${id} was not found`,
      });
    } else {
      res.status(200).json(product);
    }
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
};

export {
  fetchProducts,
  getProduct,
  createProduct,
  updateProduct,
  removeProduct,
};
