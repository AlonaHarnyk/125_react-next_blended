// Задача 2

// Опис: Є функція, яка приймає суму (число) та тип валюти.
interface Currency {
  amount: number;
  currency: "USD" | "EUR" | "UAH";
}
function convertCurrency({ amount, currency }: Currency): void {
  console.log(`Converting ${amount} to ${currency}`);
}

// Завдання:

// Типізуйте параметри функції дозволивши властивості currency лише одне із значень "USD", "EUR", "UAH".
// Типізуйте повернення функції.
