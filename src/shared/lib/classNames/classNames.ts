type Mods = Record<string, boolean | string>

export function classNames(cls: string, mods: Mods = {}, additional: string[] = []): string { // функция возвращает строку классов
    return [
        cls,
        ...additional.filter(Boolean),
        ...Object.entries(mods) // обрабатываем mods с помощью функции entries, с помощью которой можно получить как ключи, так и значения у объекта. По итогу функция возваращет массив
            .filter(([className, value]) => Boolean(value)) // оставляем элементы только с true
            .map(([className]) => className), // с помощью map формируем масисв из ключей, т.е. из навзвания классов
    ]
        .join(' '); // склеиваем итоговый массив с помощью join, т.е. межд элементами будут пробелы.
}
