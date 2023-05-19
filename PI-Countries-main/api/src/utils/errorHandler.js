function errorHandler(err, req, res, next) {
    const status = err.status || 500;
    const message = err.message || 'Ocurrió un error en el servidor.';
    console.error(err);
    res.status(status).send(message);
  }
  
module.exports = errorHandler;