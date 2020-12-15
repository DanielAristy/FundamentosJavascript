const fp = require('find-free-port');

//Ejecutar node prueba.js
fp(9080, 9092).then(([freep]) => {
    console.log('found ' + freep);
}).catch((err)=>{
    console.error(err);
});