# Huggy Wuggy & Kissy Missy

TODO: добавить описание игры

ссылка на дизайн в [Figma](https://www.figma.com/design/MGI2RDA8C7ZdQKD2iP95ei/sprint_game?node-id=0-1&t=7QbY9cBO0UgrBmd9-0)

Демо-видео на [Youtube](https://www.youtube.com/watch?v=43CW8S9K87w)
## sprint 1

- Сверстаны следующие страницы:
  - Главная страница “/”
  - Страница входа “/login” и страница регистрации “/reg”
  - страница настроек пользователя “/settings”
  - Страница лидерборда “/leaders” и страница форума “/forum”
  - Страница игры “/loadinggame” и “/game”
- Добавлен redux toolkit
- Сделана основная механика игры на Canvas API [Game.tsx](packages/client/src/logic/Game)

### Как запускать?

1. Убедитесь что у вас установлен `node` и `docker`
2. Выполните команду `yarn bootstrap` - это обязательный шаг, без него ничего работать не будет :)
3. Выполните команду `yarn dev` чтобы запустить только клиент
4. Выполните команду `yarn dev:ssr` чтобы собрать бандл ssr и запустить только server

### Как добавить зависимости?

В этом проекте используется `monorepo` на основе [`lerna`](https://github.com/lerna/lerna)

Чтобы добавить зависимость для клиента
`yarn lerna add {your_dep} --scope client`

Для сервера
`yarn lerna add {your_dep} --scope server`

И для клиента и для сервера
`yarn lerna add {your_dep}`

Если вы хотите добавить dev зависимость, проделайте то же самое, но с флагом `dev`
`yarn lerna add {your_dep} --dev --scope server`

### Тесты

Для клиента используется [`react-testing-library`](https://testing-library.com/docs/react-testing-library/intro/)

`yarn test`

### Линтинг

`yarn lint`

### Форматирование prettier

`yarn format`

### Production build

`yarn build`

И чтобы посмотреть что получилось

`yarn preview --scope client`
`yarn preview --scope server`

## Хуки

В проекте используется [lefthook](https://github.com/evilmartians/lefthook)
Если очень-очень нужно пропустить проверки, используйте `--no-verify` (но не злоупотребляйте :)

## Ой, ничего не работает :(

Откройте issue, я приду :)

## Автодеплой статики на vercel

Зарегистрируйте аккаунт на [vercel](https://vercel.com/)
Следуйте [инструкции](https://vitejs.dev/guide/static-deploy.html#vercel-for-git)
В качестве `root directory` укажите `packages/client`

Все ваши PR будут автоматически деплоиться на vercel. URL вам предоставит деплоящий бот

## Production окружение в докере

Перед первым запуском выполните `node init.js`

`docker compose up` - запустит три сервиса

1. nginx, раздающий клиентскую статику (client)
2. node, ваш сервер (server)
3. postgres, вашу базу данных (postgres)

Если вам понадобится только один сервис, просто уточните какой в команде
`docker compose up {sevice_name}`, например `docker compose up server`
