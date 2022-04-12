var express = require('express')
var router = express.Router()
const { PrismaClient } = require('@prisma/client')
const { delay } = require('../utils')

const prisma = new PrismaClient()

router.get('/', async (req, res) => {
    await delay(1000)
    const usersList = await prisma.user.findMany()

    res.json(usersList)
})

router.get('/names', async (req, res) => {
    const usersList = await prisma.user.findMany()
    const namesString = usersList.map((а) => а.name).join(', ')
    res.json(namesString)
})

router.get('/admins', async (req, res) => {
    const adminsList = await prisma.user.findMany({
        where: {
            role: 'admin',
        },
    })
    res.json(adminsList)
})

router.post('/', async (req, res) => {
    try {
        const { name, email } = req.body
        await prisma.user.create({
            data: {
                name,
                email,
                pass: 'hakera',
            },
        })
        res.json('Ok')
    } catch (error) {
        res.json('Fail')
    }
})

router.patch('/', async (req, res) => {
    await prisma.user.update({
        where: {
            id: 1,
        },
        data: {
            role: 'admin',
        },
    })
})

router.delete('/', async (req, res) => {
    await prisma.user.delete({
        where: {
            id: Number(req.query.id),
        },
    })
    res.json('Ok')
})

module.exports = router

// `We found the following user: ${myUser.name}`
