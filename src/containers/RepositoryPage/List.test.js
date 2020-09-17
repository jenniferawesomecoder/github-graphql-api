import React from 'react';
import { render } from '@testing-library/react';

import List from './List';
import { packageJsonData } from '../../fixtures/graphQLFixtures';
import { aosData } from '../../fixtures/aosFixtures';

describe('List componnet', () => {
    describe('when loading is false', () => {
        it('should render', () => {
            const props = {
                node: packageJsonData,
                loading: false,
                loadMore: jest.fn(),
                librariesData: [aosData],
                vulnerablePackages: ["aos"]

            }

            const { getByTestId, queryByTestId, queryAllByTestId } = render(<List { ...props } />);

            expect(queryByTestId('list-ispackagejson-header-test-id')).toBeInTheDocument();
            expect(queryByTestId('list-outdated-header-test-id')).toBeInTheDocument();
            expect(queryByTestId('list-vulnerable-header-test-id')).toBeInTheDocument();
            expect(queryAllByTestId('list-nodes-element-test-id')).toHaveLength(5);
            expect(queryByTestId('list-loadmore-button-test-id').innerHTML).toEqual('Load more ... ');
            expect(queryByTestId('list-loadmore-button-spinner-icon-test-id')).not.toBeInTheDocument();
        })
    })

    describe('when loading is true', () => {
        it('should render', () => {
            const props = {
                node: packageJsonData,
                loading: true,
                loadMore: jest.fn(),
                librariesData: [aosData],
                vulnerablePackages: ["aos"]

            }

            const { getByTestId, queryByTestId, queryAllByTestId } = render(<List { ...props } />);

            expect(queryByTestId('list-ispackagejson-header-test-id')).toBeInTheDocument();
            expect(queryByTestId('list-outdated-header-test-id')).toBeInTheDocument();
            expect(queryByTestId('list-vulnerable-header-test-id')).toBeInTheDocument();
            expect(queryAllByTestId('list-nodes-element-test-id')).toHaveLength(5);
            expect(queryByTestId('list-loadmore-button-test-id')).toBeInTheDocument();
            expect(queryByTestId('list-loadmore-button-spinner-icon-test-id')).toBeInTheDocument();
        })
    })
})