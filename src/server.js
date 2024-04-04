const express = require('express');
const { PrismaClient } = require('@prisma/client');
const app = express();
const port = 3001 || process.env.PORT; // Corrected the order of conditions

const prisma = new PrismaClient();

app.use(express.json());





app.get('/api/navbar', async (req, res) => {
    try {
        const response = await prisma.navbar.findMany();
        res.json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/api/shoes', async (req, res) => {
    try {
        const response = await prisma.shoes.findMany();
        res.json(response); // Sending the array directly
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

