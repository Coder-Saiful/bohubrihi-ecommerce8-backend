module.exports = (error, req, res, next) => {
    return res.status(400).send({ message: "Something Failed!" });
} 