//W HTML znajduje się znacznik formularza, w którego pola użytkownik będzie wprowadzał pierwsze opóźnienie w milisekundach, 
//stopień zwiększenia opóźnienia dla każdej kolejnej obietnicy i liczbę obietnic, które należy utworzyć.
//napisz skrypt który po wysłaniu formularza wywoła f.createPromise tyle razy ile wprowadzone w pole amount
//Po każdym wywołaniu przekaż jej numer utworzonej obietnicy (position) i opóźnienie, 
//uwzględniając wprowadzone przez użytkownika pierwsze opóźnienie (delay) i stopień (step).
//Uzupełnij kod funkcji createPromise tak, aby przywracała jedną obietnicę, która wykonuje się przez delay czasu. 
//Wartością obietnicy powinien być obiekt, w którym będą właściwości position i delay z wartościami parametrów o tej samej nazwie.
//Użyj kodu początkowego funkcji, aby wybrać to, co należy zrobić z obietnicą - resolve lub reject.
//------------------
//Korzystam z biblioteki Notiflix: to czysta biblioteka JavaScript do nieblokujących powiadomień po stronie klienta,
//wyskakujących okienek, wskaźników ładowania i innych elementów
//Korzystając z podanego szkieletu f. createPromise modyfikuje ją zgodnie z zadaniem
//Dodaje detektor zdarzeń .addEventListener do button
//Anuluje domyślne działanie przeglądarki za pomocą metody .preventDefault()
//Korzystam z pętli for aby uzupełnić podaną f.createPromise w zadaniu

import Notiflix from 'notiflix';

const delay = document.querySelector('input[name="delay"]');
const step = document.querySelector('input[name="step"]');
const amount = document.querySelector('input[name="amount"]');
const button = document.querySelector('button[type="submit"]');


function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay })
      } else {
        reject({ position, delay });
      }
    }, delay);
  })
  return promise;
}

button.addEventListener('click', (e) => {
  e.preventDefault();

  for (let i = 0; i < amount.value; i++) {
    createPromise(1 + i, Number(delay.value) + Number(step.value * i))

      .then(({ position, delay }) => {
        Notiflix.Notify.info(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.info(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
})
