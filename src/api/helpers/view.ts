import { constants } from '../../configs/constants'

export let loadCss = function(csss) {
  var resp = ''
  console.log(constants.baseURL)
  if (typeof csss != 'undefined'){
    for(var i = 0; i < csss.length; i++){
      resp = resp + 
        '<link rel="stylesheet" type="text/css" href="'+ 
        constants.baseURL + 
        csss[i] + 
        '.css" />'
    }
  }
  return resp
}

export let loadJs = function(jss) {
  var rpta = '';
  if (typeof jss != 'undefined'){
    for(var i = 0; i < jss.length; i++){
      rpta = rpta + 
        '<script src="' + 
        constants.baseURL + 
        jss[i] + 
        '.js"></script>'
    }
  }
  return rpta;
}