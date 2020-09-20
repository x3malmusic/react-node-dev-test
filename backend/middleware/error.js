export const errorHandler = (err, req, res, next) => {
    console.log(err.stack);
    const status = err.status || 500
    res.status(status).json({ error: err.message });
};