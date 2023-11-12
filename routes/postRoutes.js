const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

router.get("/", (req, res) => {
    Controllers.postController.getPost(res);
});

router.post('/', (req, res) => {
    Controllers.postController.createPost(req.body, res)
})

module.exports = router;