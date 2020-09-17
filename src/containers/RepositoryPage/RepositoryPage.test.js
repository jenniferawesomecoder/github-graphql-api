import React from "react";
import { render, fireEvent } from "@testing-library/react";

import * as ApolloClient from "@apollo/client";
import { graphqlData } from "../../fixtures/graphQLFixtures";
import { aosData } from '../../fixtures/aosFixtures';

ApolloClient.useApolloClient = jest
  .fn()
  .mockReturnValue({ link: { options: { headers: { Accept: "" } } } });
ApolloClient.useQuery = jest
  .fn()
  .mockReturnValue({
    loading: false,
    error: false,
    data: graphqlData.data,
    refetch: jest.fn(),
    fetchMore: jest.fn(),
    networkStatus: 7,
  });

import RepositoryPage from "./index";

describe("RepositoryPage", () => {
  describe("without valid props", () => {
    it("should render without owner value", () => {
      const { queryByTestId } = render(
        <RepositoryPage
          match={{ params: {} }}
        />
      );

      expect(queryByTestId("repository-page-tset-id")).toBeInTheDocument();
    });

    it("should render without name value", () => {
        const { queryByTestId } = render(
          <RepositoryPage
            match={{ params: { owner: 'facebook' } }}
          />
        );
  
        expect(queryByTestId("repository-page-tset-id")).toBeInTheDocument();
      });
  });

  describe("with valid props", () => {
    it("should render", () => {
      const mockJsonPromise = Promise.resolve(aosData);
      const mockFetchPromise = Promise.resolve({
        json: () => mockJsonPromise,
      });
      jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);

      const { queryByTestId, queryAllByTestId } = render(
        <RepositoryPage
          match={{ params: { owner: 'facebook', name: 'react' } }}
        />
      );

      expect(queryByTestId("repository-page-tset-id")).not.toBeInTheDocument();
      expect(queryAllByTestId('list-loadmore-button-test-id')[0]).toBeInTheDocument();

      fireEvent.click(queryAllByTestId('list-loadmore-button-test-id')[0]);
    });
  });
});
