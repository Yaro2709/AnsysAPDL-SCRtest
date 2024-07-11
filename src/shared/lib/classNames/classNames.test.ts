import { classNames } from './classNames';

describe('classNames', () => {
    // Проверка 1 аргумента - cls
    test('with only first param', () => {
        expect(classNames('someClass')).toBe('someClass');
    });

    // Проверка 3 аргумента - additional
    test('with additional class', () => {
        const expected = 'someClass class1 class2';
        expect(classNames('someClass', {}, ['class1', 'class2']))
            .toBe(expected);
    });

    // Проверка 2 аргумента - mods (все true)
    test('with mods', () => {
        const expected = 'someClass class1 class2 hovered scrollable';
        expect(classNames(
            'someClass',
            { hovered: true, scrollable: true },
            ['class1', 'class2'],
        )).toBe(expected);
    });

    // Проверка 2 аргумента - mods (хотя бы один false)
    test('with mods false', () => {
        const expected = 'someClass class1 class2 hovered';
        expect(classNames(
            'someClass',
            { hovered: true, scrollable: false },
            ['class1', 'class2'],
        )).toBe(expected);
    });

    // Проверка 2 аргумента - mods (хотя бы один undefined)
    test('with mods undefined', () => {
        const expected = 'someClass class1 class2 hovered';
        expect(classNames(
            'someClass',
            { hovered: true, scrollable: undefined },
            ['class1', 'class2'],
        )).toBe(expected);
    });
});
