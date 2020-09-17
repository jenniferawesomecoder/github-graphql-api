import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Search from './index';

describe('Search component', () => {
    describe('without any props', () => {
        it('should render', () => {
            const props = {}

            const { queryByTestId } = render(<Search { ...props } />);
            expect(queryByTestId('search-form-owner-field-test-id')).toBeInTheDocument();
            expect(queryByTestId('search-form-owner-field-test-id').value).toBe('');
            expect(queryByTestId('search-form-name-field-test-id')).toBeInTheDocument();
            expect(queryByTestId('search-form-name-field-test-id').value).toBe('');
            expect(queryByTestId('search-form-submit-button-test-id')).toBeInTheDocument();
        })
    })

    describe('without valid props', () => {
        it('should render', () => {
            const props = {
                owner: 'facebook',
                name: 'react'
            }

            const { queryByTestId } = render(<Search { ...props } />);
            expect(queryByTestId('search-form-owner-field-test-id')).toBeInTheDocument();
            expect(queryByTestId('search-form-owner-field-test-id').value).toBe('facebook');
            fireEvent.change(queryByTestId('search-form-owner-field-test-id'), { target: { value: 'testing' } });
            expect(queryByTestId('search-form-owner-field-test-id').value).toBe('testing');

            expect(queryByTestId('search-form-name-field-test-id')).toBeInTheDocument();
            expect(queryByTestId('search-form-name-field-test-id').value).toBe('react');
            fireEvent.change(queryByTestId('search-form-name-field-test-id'), { target: { value: 'testing' } });
            expect(queryByTestId('search-form-name-field-test-id').value).toBe('testing');
            
            expect(queryByTestId('search-form-submit-button-test-id')).toBeInTheDocument();
        })
    })
})