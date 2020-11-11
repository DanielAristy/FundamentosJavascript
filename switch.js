var signo = prompt('Cual es tu signo?').toLowerCase()

switch (signo) {
    case 'acuario':
        console.log('Intente aislarse del mundo!')
        break;

    case 'piscis':
        console.log('Sigue adelante aunque las personas que supuestamente te aman, te dejen a un lado')
        break;

    default:
        console.log('No es un signo del zodiaco válido!')
}