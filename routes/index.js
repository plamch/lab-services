var express = require('express')
var router = express.Router()
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

/* GET home page. */

router.get('/', (req, res, next) => {
    res.render('index', { title: 'Express' })
})

router.get('/hello', async (req, res, next) => {
    // await prisma.user.create({
    //     data: {
    //         name: 'Alice',
    //         email: 'malice@prisma.io',
    //         posts: {
    //             create: { title: 'Hello World' },
    //         },
    //         profile: {
    //             create: { bio: 'I like turtles' },
    //         },
    //     },
    // })

    const post = await prisma.post.update({
        where: { id: 1 },
        data: { published: true },
    })

    const allUsers = await prisma.user.findMany({
        include: {
            posts: true,
            profile: true,
        },
    })
    console.dir(allUsers, { depth: null })

    res.json({ allUsers, greeting: 'respond with a resource' })
})

module.exports = router
