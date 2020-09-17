import React from 'react';
import { render } from '@testing-library/react';

import Item from './Item';
import { node } from '../../fixtures/graphQLFixtures';
import { aosData } from '../../fixtures/aosFixtures';

describe('Item component', () => {
    describe('with isPackageJson true props', () => {
        const props = {
            node,
            librariesData: [aosData],
            isPackageJson: true,
            vulnerablePackages: ["aos"]
        }

        it('should render', () => {
            const { getByTestId } = render(<Item { ...props } />);

            expect(getByTestId('package-test-id')).toBeInTheDocument();
            expect(getByTestId('latest-release-number-test-id')).toBeInTheDocument();
            expect(getByTestId('latest-release-number-test-id').innerHTML).toEqual(aosData.latest_release_number);
            expect(getByTestId('outdated-test-id')).toBeInTheDocument();
            expect(getByTestId('isvulnerable-test-id')).toBeInTheDocument();
            expect(getByTestId('isvulnerable-test-id').innerHTML).toEqual('Yes');
        })
    })

    describe('with isPackageJson false props', () => {
        const props = {
            node,
            librariesData: [aosData],
            isPackageJson: false,
            vulnerablePackages: []
        }

        it('should render', () => {
            const { getByTestId, queryByTestId } = render(<Item { ...props } />);

            expect(getByTestId('package-test-id')).toBeInTheDocument();
            expect(queryByTestId('latest-release-number-test-id')).not.toBeInTheDocument();
            expect(queryByTestId('outdated-test-id')).not.toBeInTheDocument();
            expect(getByTestId('isvulnerable-test-id')).toBeInTheDocument();
            expect(getByTestId('isvulnerable-test-id').innerHTML).toEqual('No');
        })
    })
})