//Esta función formatea números agregando comas
function FormatearNumeros(nStr){
  nStr += '';
  x = nStr.split('.');
  x1 = x[0];
  x2 = x.length > 1 ? '.' + x[1] : '';
  var rgx = /(\d+)(\d{3})/;
  while (rgx.test(x1))
    x1 = x1.replace(rgx, '$1' + ',' + '$2');
  return x1 + x2;
}

//Esta función eliminar caracteres no numericos
function EliminarCaracteres( str ){
  str += '';
  var rgx = /^\d|\.|-$/;
  var out = '';
  for( var i = 0; i < str.length; i++ ){
    if( rgx.test( str.charAt(i) ) ){
      if( !( ( str.charAt(i) == '.' && out.indexOf( '.' ) != -1 ) ||
             ( str.charAt(i) == '-' && out.length != 0 ) ) ){
        out += str.charAt(i);
      }
    }
  }
  return out;
}

