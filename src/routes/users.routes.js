import { Router } from "express";

const router = Router();

router.get('/users', (req, res) => {
    res.send('obteniendo usuarios')
})

router.get('/users/:id', (req, res) => {
    const {id} = req.params
    res.send('obteniendo usuarios' + id)
})

router.post('/users', (req, res) => {
    res.send('creando usuario')
})

router.get('/users', (req, res) => {
    res.send('obteniendo usuarios')
})

router.get('/users', (req, res) => {
    res.send('obteniendo usuarios')
})

export default router;