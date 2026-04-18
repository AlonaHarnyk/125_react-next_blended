// Задача 1

// Опис: Є об'єкт settings, який містить налаштування.

interface Setting {
  darkMode: boolean;
  fontSize: number;
  language: string;
}
const settings: Setting = {
  darkMode: true,
  fontSize: 16,
  language: "en",
};

// Завдання:

// Створіть тип Settings, який описує цей об'єкт.
// Типізуйте settings через цей тип.
