import express from 'express';
import { getProducts, createProduct } from '../controllers/productController.js';
const router = express.Router();

router.get('/', getProducts);
router.post('/', createProduct); // optionally add admin auth

export default router;
