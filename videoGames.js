const express = require('express');
const router = express.Router();

const REPLACE_ME = 'HELP REPLACE ME!!!!';

const { getAllVideoGames,
    getVideoGameById,
    createVideoGame,
    updateVideoGame,
    deleteVideoGame } = require('../db/videoGames');


router.get('/', async (req, res, next) => {
    try {
        const videoGames = await getAllVideoGames();
        res.send(videoGames);
    } catch (error) {
        next(error);
    }
});


router.get('/:id', async (req, res, next) => {
    try {
        const videoGame = await getVideoGameById(req.params.id);
        res.send(videoGame);
    } catch (error) {
        next(error);
    }
});


router.patch('/', async (req, res, next) => {
    try{
        const result = await createVideoGame(req.body)
    }catch(err){
     next(error)   
    }
});



router.put('/:id', async (req, res, next) => {
});


router.delete('/:id', async (req, res, next) => {
});

module.exports = router;
