# AnsysAPDL-SCRtest
Описание

## Установка
`npm run install`

## Фомирование веб-отчета

## Фомирование печатного отчета

## Использование для скриншотного тетсирования
1. Разработка макроса в папке `src\entities\AnsysProject\Project`
2. Запуск итогового макроса `main.mac`
3. Фомирвоание списка скриншотов: `src/entities/AnsysProject/Img/Img.tsx`
4. Запуски приложения: `npm run start`
5. Запуск `storybook`: `npm run storybook`
6. Запуск скриншотных тестов: `npm run test:ui`
7. Создание отчета: `npm run test:ui:report`
8. Если изменение нас устравивают, то сохраняем их: `npm run test:ui:ok`
9. Если процедуру необходимо повторить, то удалите скриншоты: `npm run delete:scr`

