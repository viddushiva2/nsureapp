const express = require('express');
const router = express.Router();
const multer=require('multer')
const storage = multer.memoryStorage();
const { check, user,uploads,userscore } = require('../controllers/user');
const upload = multer({ storage: storage });
// Route handlers
router.get('/', check);
router.post('/user', user);
// router.post('/userscore', userscore);

router.post('/upload',upload.single('pdf'),uploads);


module.exports = router;
