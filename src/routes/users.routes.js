import { Router } from "express";
import {pool} from "../db.js";

const router = Router();

router.get('/users', async (req, res) => {
    const {rows} = await pool.query('SELECT * FROM users')
    // console.log(result);
    res.json(rows);

})

router.get('/users/:id', async (req, res) => {
    const {id} = req.params
    const {rows} = await pool.query('SELECT * FROM users WHERE id = $1', [id]);

    if (rows.length === 0) {
        return res.status(404).json(
            {
                mesange: 'don found the user'
            }
        );
    }

    // res.send('obteniendo usuarios' + id)
    res.json(rows);
})

router.post('/users', async (req, res) => {

    const {rows} = await pool.query('INSERT INTO useres (name, email, created_at) VALUES (1, )');
    res.send('creando usuario')
})

router.delete('/users/:id', async (req, res) => {
    const {id} = req.params
    const {rows} = await pool.query('DELETE FROM users WHERE id = $1', [d1]);

    if (rows.length === 0) {
        return res.status(429).json({
            message: "Don't found the users for delete"
        });
    }
    
    res.json(rows);
})

router.put('/users/:id', (req, res) => {
    res.send('Actualizando usuario')
})

export default router;