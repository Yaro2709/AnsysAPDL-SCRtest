import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from 'widgets/Sidebar/ui/Sidebar/Sidebar';
import {
    renderWithTranslation,
} from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';

describe('Sidebar', () => {
    test('with only first param', () => {
        renderWithTranslation(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('test toggle', () => {
        renderWithTranslation(<Sidebar />);
        // получаем кнопку с помощью которой сворачиваем и разворачиваем
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        // на эту кнопку надо нажать. Поэтому используем fireEvent с свойством click
        fireEvent.click(toggleBtn);
        // дальше мы ожидаем, что на sidebar повесился класс collapsed (что он свернут)
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
