const celciusInput = document.querySelector('#celcius > input');
const fahrenheitInput = document.querySelector('#fahrenheite > input');
const kelvinInput = document.querySelector('#kelvin > input');

function roundNum(num)
{
    return Math.round(num*100)/100;
}
function celToFahAndKel ()
{
    const c = parseFloat(celciusInput.value);
    const f = (c * (9 / 5)) + 32;
    const k = c + 273.15;
    fahrenheitInput.value = roundNum(f);
    kelvinInput.value = roundNum(k);
}

function fahToCelAndKel()
{
    const f = parseFloat(fahrenheitInput.value);
    const c = (f-32) * (5/9);
    const k = (f + 459.67) * (5 / 9);
    celciusInput.value = roundNum(c);
    kelvinInput.value = roundNum(k);

}
function kelToCelAndFah() {
    const k = parseFloat(kelvinInput.value);
    const c =  k-273.15;
    const f = 9/5 * (k-273) + 32;
    celciusInput.value = roundNum(c);
    fahrenheitInput.value = roundNum(f);

}
function main()
{
    celciusInput.addEventListener('input', celToFahAndKel);
    fahrenheitInput.addEventListener('input', fahToCelAndKel);
    kelvinInput.addEventListener('input', kelToCelAndFah);


}

main();