import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Loading from './index';

describe('Loading Component', () => {
    describe('when loading true', () => {
        it('should render', () => {
            const props = {
                loading: true
            }

            const { queryByTestId, queryAllByTestId } = render(<Loading { ...props } />);

            expect(queryByTestId('loading-true-test-id')).toBeInTheDocument();
            expect(queryAllByTestId('error-message-node-test-id')).toHaveLength(0);
        })
    })

    describe('when error present', () => {
        it('should render', () => {
            const props = {
                error: { graphQLErrors: [{ message: 'Testing' }] }
            }

            const { queryByTestId, queryAllByTestId } = render(<Loading { ...props } />);

            expect(queryByTestId('loading-true-test-id')).not.toBeInTheDocument();
            expect(queryAllByTestId('error-message-node-test-id')).toHaveLength(1);
        })
    })

    describe('when children present', () => {
        it('should render', () => {
            const props = {
                children: <div data-testid="loading-children-test-id">Hello</div>
            }

            const { queryByTestId, queryAllByTestId } = render(<Loading { ...props } />);

            expect(queryByTestId('loading-true-test-id')).not.toBeInTheDocument();
            expect(queryAllByTestId('error-message-node-test-id')).toHaveLength(0);
            expect(queryByTestId('loading-children-test-id')).toBeInTheDocument();
        })
    })
})