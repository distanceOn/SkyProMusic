# SkyProMusic

Реализация музыкального сервиса, аналогичного «Яндекс.Музыке».

## [Ссылка на сайт](https://distanceon.site/)

## Состав проекта

Проект состоит из двух частей: фронтенд и бэкенд.

### Фронтенд-часть

[Верстка](https://drive.google.com/file/d/1X4NXJdNTvsmBMQqc5dEWR7Ml_UCvW_9T/view)

[Верстка экрана логина или регистрации](https://drive.google.com/file/d/16zzbEkS2ZDk75V60JJ2NGRCXjwJMo44e/view)

#### Шрифт:

[example stratos font (6).zip](<https://s3-us-west-2.amazonaws.com/secure.notion-static.com/85a9bcf1-ec70-4640-8c7f-5472a0b3db82/example_stratos_font_(6).zip>)

### Бэкенд

[Бекэнд часть](https://github.com/Stasy-cmd/music_proj)

#### Основные возможности бэкенда:

Регистрация (log in)
Возможность залогиниться и разлогиниться (sign up, sign out)
Витрина с доступными треками
Встроенный в приложение плеер (прослушивание музыки, постановка на паузу и снятие с нее, перемотка, повтор трека, shuffle плейлиста)
Добавление трека в избранное
Список подборок

## Список экранов проекта

### Стартовый экран — экран «Войти».

Пользователю предлагается ввести логин и пароль, если он уже зарегистрирован, и нажать «Войти». Если пользователь еще не зарегистрирован, ему необходимо нажать «Зарегистрироваться».

### Экран регистрации

На экране регистрации пользователь придумывает логин и пароль, а также повторяет пароль. После этого он нажимает «Зарегистрироваться». После регистрации пользователь снова попадает на стартовый экран «Войти», где вводит логин и пароль заново.

### Экран «Треки»

Главный экран, на котором отражаются все доступные треки. Во время загрузки показывается экран скелетона.

Изначально нижний плеер скрыт. Он показывается, только когда пользователь нажимает на любой из треков. При перезагрузке страницы плеер тоже скрыт.

На главном экране реализуется сортировка треков. Пользователь вводит название трека в строке «Поиск», и происходит их фильтрация по названию. Это значит, что, если пользователь ввел «tro», ему выдаст трек с названием «Elektro» и все треки, в названиях которых есть строка tro: «Troelf», «FooTroBar».

#### Поиск по году выпуска

Осуществляется с помощью сортировки без притягивания бэкенда. Пользователь может сортировать треки двумя способами: от старых к новым и от новых к старым.

#### Поиск по исполнителю

Осуществляется с помощью бэкенда. При нажатии на «исполнителю» пользователь видит выпадающее меню, в котором показываются только первые пять элементов (остальные нужно скроллить)

Пользователь может выбрать несколько исполнителей одновременно.

#### Поиск по жанру

Осуществляется с помощью бэкенда. При нажатии на «жанру» пользователь видит выпадающее меню, в котором показываются только первые пять элементов (остальные нужно скроллить)

Пользователь может выбрать несколько жанров одновременно.

### Экраны подборок: «Плейлист дня», «100 танцевальных хитов», «Инди заряд»

В каждой подборке отображается список треков, которые в нее входят.

Поиск по исполнителю, жанру, году выпуска не осуществляется.

### Экран «Мои треки»

Экран с подборкой треков, которые пользователь добавил в избранное.
