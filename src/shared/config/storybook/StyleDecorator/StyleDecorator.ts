import 'app/styles/index.scss'; // импортируе наши стили
import { Story } from '@storybook/react';

export const StyleDecorator = (story: () => Story) => story();
