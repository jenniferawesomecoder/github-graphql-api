import React from 'react';
import { render } from '@testing-library/react';

import Repo from './Repo';
import { graphqlData } from '../../fixtures/graphQLFixtures';

describe('Repo component', () => {
    it('should render', () => {
        const { queryByTestId } = render(<Repo repo={graphqlData.data.repository} />);

        expect(queryByTestId('repo-details-test-id')).toBeInTheDocument();
        expect(queryByTestId('repo-details-avatar-test-id')).toBeInTheDocument();
        expect(queryByTestId('repo-details-name-test-id')).toBeInTheDocument();
        expect(queryByTestId('repo-details-description-test-id')).toBeInTheDocument();
    })
})