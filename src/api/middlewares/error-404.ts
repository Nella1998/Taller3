import { Request, Response } from 'express'

const error404 = () => {
  return function(req: Request, resp: Response, next){
    if ('GET' == req.method){
      var resource = req.path.split('.');
      var extensions = ['css', 'js', 'png', 'jpg', ];
      if(extensions.indexOf(resource[resource.length - 1]) == -1){
        resp.redirect('/error/access/404');
      }else {
        return next();
      }
    }else{
      var rpta = 'Recurso no encontrado';
      resp.status(404).send(rpta);
    }
  }
}

export default error404