//W HTML mam przycisk start/stop
//Na przycisk start(kolory zmienniają się w sposób losowy co np.1s.)
//Na przycisk stop(kolor zatrzymuje się na obecnym)/ start(wznawia)
//Przycisk start ma być nieaktywny w momencie zmieniania się kolorów
//Do wygenerowania losowego koloru mam użyc funkcji getRandomHexColor
//----------------------
//Deklaruje zmienną let która bedzie    przerwa
//Kożystam z podanej funkcji getRandomHexColor
//Wykorzystuje metodę .setAttribute która ustawia nową wartość atrybutu
//Dodaje detektor zdarzeń do elementu .addEventListener 
//Na click (buttonStart)=> element w momencie kliknięcia(target) otrzymuje atrybut 'disabled'
//Na click (buttonStop) => z elementu zostaje usunięty atrybut 'disabled'
//Do zmiennej let dodaje metode .setInterval która powtarza ten sam kod w kółko
//Wykorzystując funkcje getRandomHexColor wywołuje losowe kolory w odstępie 0,5s
//Analogicznie do przycisku buttonStart obsługuje przycisk buttonStop

const bodyChangeColor = document.querySelector('body');
const buttonStart = document.querySelector('[data-start]');
const buttonStop = document.querySelector('[data-stop]');

let intervalId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

buttonStop.setAttribute('disabled', '');

buttonStart.addEventListener('click', element => {
  element.target.setAttribute('disabled', true);
  buttonStop.removeAttribute('disabled');

  intervalId = setInterval(() => {
    bodyChangeColor.style.backgroundColor = getRandomHexColor();
  }, 500);
});

buttonStop.addEventListener('click', element => {
  element.target.setAttribute('disabled', true);
  buttonStart.removeAttribute('disabled');

  clearInterval(intervalId);
});