let dateEnd = new Date ('2025-01-01 00:00:00');
let dateNow = new Date ();
let date = Math.floor((dateEnd.getTime() - dateNow.getTime()) / 1000);

function clock() {
    let dateLeft = date;
    let dateTemp;
    dateTemp = Math.floor (dateLeft / (24 * 60 * 60));
    dateLeft -= dateTemp * 24 * 60 * 60;
    if (dateTemp < 100) dateTemp = "0" + dateTemp;
    if (dateTemp < 10) dateTemp = "00" + dateTemp;
    document.querySelector('.days span').innerHTML = dateTemp;

    dateTemp = Math.floor (dateLeft / ( 60 * 60));
    dateLeft -= dateTemp * 60 * 60;
    if (dateTemp < 10) dateTemp = "0" + dateTemp;
    document.querySelector('.hours span').innerHTML = dateTemp;

    dateTemp = Math.floor (dateLeft / 60);
    dateLeft -= dateTemp * 60;
    if (dateTemp < 10) dateTemp = "0" + dateTemp;
    document.querySelector('.minutes span').innerHTML = dateTemp;

    dateTemp= dateLeft;
    if (dateTemp < 10) dateTemp = "0" + dateTemp;
    document.querySelector('.seconds span').innerHTML = dateTemp;

    date--;
}

setInterval(clock, 1000);