import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Dependencies from './Dependencies';
import { graphqlData } from '../../fixtures/graphQLFixtures';
import { aosData } from '../../fixtures/aosFixtures';

describe('Dependencies component', () => {
    const props = {
        repo: graphqlData.data.repository,
        networkStatus: 7,
        loadMore: jest.fn(),
        librariesData: [aosData]
    }

    it('should render', () => {
        const { queryByTestId, queryAllByTestId } = render(<Dependencies { ...props } />);

        expect(queryByTestId('dependencies-test-id')).toBeInTheDocument();
        expect(queryAllByTestId('list-loadmore-button-test-id')[0]).toBeInTheDocument();

        fireEvent.click(queryAllByTestId('list-loadmore-button-test-id')[0]);
        expect(props.loadMore).toHaveBeenCalled();
    })
})