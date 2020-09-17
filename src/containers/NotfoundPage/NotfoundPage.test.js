import React from 'react';
import { render } from '@testing-library/react';

import NotfoundPage from './index';

describe('NotfoundPage component', () => {
    it('should render', () => {
        const { queryByTestId } = render(<NotfoundPage />);

        expect(queryByTestId('notfound-page-test-id')).toBeInTheDocument();
    })
})