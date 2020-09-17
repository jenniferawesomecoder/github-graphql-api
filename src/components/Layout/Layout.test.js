import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Layout from './index';

describe('Layout component', () => {
    describe('with props', () => {
        it('should render', () => {
            const props = {
                match : { params: { owner: 'facebook', name: 'react' } },
                children: <div data-testid="layout-children-test-id">Test</div>
            }

            const { queryByTestId } = render(<Layout { ...props } />);
            expect(queryByTestId('layout-navbar-test-id')).toBeInTheDocument();
            expect(queryByTestId('layout-children-test-id')).toBeInTheDocument();
            expect(queryByTestId('search-form-owner-field-test-id')).toBeInTheDocument();
            expect(queryByTestId('search-form-owner-field-test-id').value).toBe('facebook');
            expect(queryByTestId('search-form-name-field-test-id')).toBeInTheDocument();
            expect(queryByTestId('search-form-name-field-test-id').value).toBe('react');
            expect(queryByTestId('search-form-submit-button-test-id')).toBeInTheDocument();
        })
    })
})
