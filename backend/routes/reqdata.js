const express = require('express');
const router = express.Router();
const user = require('../models/user');

router.post('/createuser', async(req, res)=>{
    const { name, roomid, userid, days} = req.body
    try {
        let User = await user.findOne({ userid: userid })
        if(User){
            return res.status(400).json({ errors: 'A user with same userid exists!!' });
        }
        User = await user.findOne({ roomid: roomid })
        if(User){
            return res.status(400).json({ errors: 'A user with same roomid exists!!' });
        }
        User = await user.create({
            name,
            roomid,
            userid,
            days
        })
        res.json(User)
    } catch (error) {
        res.status(500).send('INTERNAL SERVER ERROR')
    }
})

router.get('/getuser/:userid', async(req, res)=>{
    try {
        let User = await user.findOne({ userid: req.params.userid })
        if(!User){
            return res.status(400).json({ errors: 'User not found!!' });
        }
        res.json(User)
    } catch (error) {
        res.status(500).send('INTERNAL SERVER ERROR')
    }
})

router.get('/getalluser', async(req, res)=>{
    try {
        const data = await user.find({})
        res.json(data)
    } catch (error) {
        res.status(500).send('INTERNAL SERVER ERROR')
    }
})

module.exports = router