const arguments = process.argv.slice(2);
const  pi = 3.14
function circle(radius ){
  let area = pi * radius **2;

  console.log(` Yarıçapı : ${radius} olan dairenin alanı: ${area}` );
}

circle(parseInt(arguments))