import { Router } from 'express';
import Products from '../dao/dbManager/products.dbManager.js';
import Carts from '../dao/dbManager/carts.dbManager.js';

const productManager = new Products();
const cartManager = new Carts();
const router = Router();

router.get('/products', async (req, res) => {
    const { limit = 10, page = 1, query = false, sort } = req.query;

    if (sort) {
        if (sort !== 'desc' && sort !== 'asc') {
            return res.render('products', { status: 'error', error: 'This sort no exist' });
        };
    };

    try {
        const products = await productManager.getAll(limit, page, query, sort);

        if (page > products.totalPages || page <= 0) {
            return res.render('products', { status: 'error', error: 'This page no exist' });
        };

        const url = '/products?'
        products.prevLink = products.hasPrevPage ? `${url}page=${products.prevPage}` : null;
        products.nextLink = products.hasNextPage ? `${url}page=${products.nextPage}` : null;
        
        res.render('products', products);

    } catch (error) {
       res.render('products' ,{ status: 'error', error });
    };
});

router.get('/carts/:cid', async (req, res) => {
    const { cid } = req.params;
    try {
        const result = await cartManager.getById(cid);
        res.render('carts', {result});
    } catch (error) {
        res.render('carts', { error: 'Error', error });
    };
});

export default router;