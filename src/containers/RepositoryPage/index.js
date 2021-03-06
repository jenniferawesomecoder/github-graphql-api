import React, { useState, useEffect } from "react";
import { NetworkStatus, useApolloClient, useQuery } from "@apollo/client";
import { FETCH_REPOSITORY } from "./queries";
import { Alert, Tab, Tabs } from "react-bootstrap";
import Loading from "../../components/Loading";
import Repo from "./Repo";
import Dependencies from "./Dependencies";
import Vulnerability from "./Vulnerability";

const LIBRARIES_ACCESS_KEY = localStorage.getItem('libraries-access-key');

function RepositoryPage(props) {
  const { owner = "", name = "" } = props.match.params;
  const client = useApolloClient();
  client.link.options.headers.Accept =
    "application/vnd.github.hawkgirl-preview+json";
  let { loading, error, data, refetch, fetchMore, networkStatus } = useQuery(
    FETCH_REPOSITORY,
    {
      client,
      notifyOnNetworkStatusChange: true,
      variables: { owner, name },
    }
  );

  const [librariesData, setLibrariesData] = useState([]);

  useEffect(() => {
    refetch({ owner, name });
  }, [owner, name, refetch]);

  useEffect(() => {
    const packageList =
      data?.repository?.dependencyGraphManifests?.nodes
        ?.filter((f) => f.filename === "package.json")[0]
        ?.dependencies?.nodes?.map((f) => f.packageName.replace("/", "%2F")) ||
      [];

    (async function newFunction() {
      Promise.all(
        packageList.map((f) =>
          fetch(
            `https://libraries.io/api/NPM/${f}?api_key=${LIBRARIES_ACCESS_KEY}`
          ).then((res) => res.json())
        )
      ).then((response) => {
        setLibrariesData(response);
      });
    })();
  }, [data]);

  if (!owner || !name) {
    return (
      <Alert variant="info" data-testid="repository-page-tset-id">
        Fetch repository of <b>Owner</b> and <b>Repository name</b> by the form
      </Alert>
    );
  }
  return (
    <Loading
      loading={
        networkStatus !== NetworkStatus.fetchMore &&
        (loading || networkStatus === NetworkStatus.refetch)
      }
      error={error}
    >
      {data && (
        <>
          <Repo repo={data.repository} />
          <Tabs defaultActiveKey="1" id="uncontrolled-tab-example">
            <Tab eventKey="contact" title="   " disabled></Tab>
            <Tab eventKey="1" title="Dependency Graph">
              <Dependencies
                networkStatus={networkStatus}
                repo={data.repository}
                librariesData={librariesData}
                loadMore={(node) => {
                  fetchMore({
                    variables: {
                      cursor: node.dependencies.pageInfo.endCursor,
                    },
                    updateQuery: (previousResult, { fetchMoreResult }) => {
                      const { repository } = previousResult;
                      const nodes = repository.dependencyGraphManifests.nodes.map(
                        (preNode) => {
                          if (preNode.filename === node.filename) {
                            const newNodes =
                              fetchMoreResult.repository.dependencyGraphManifests.nodes.find(
                                (newNode) => newNode.filename === node.filename
                              ) || {};
                            return {
                              ...preNode,
                              dependencies: {
                                nodes: [
                                  ...preNode.dependencies.nodes,
                                  ...newNodes.dependencies.nodes,
                                ],
                                pageInfo: newNodes.dependencies.pageInfo,
                              },
                            };
                          }
                          return preNode;
                        }
                      );
                      return {
                        repository: {
                          ...repository,
                          dependencyGraphManifests: {
                            ...repository.dependencyGraphManifests,
                            nodes: nodes,
                          },
                        },
                      };
                    },
                  });
                }}
              />
            </Tab>
            <Tab eventKey="2" title="Vulnerability Alerts">
              <Vulnerability repo={data.repository} />
            </Tab>
          </Tabs>
        </>
      )}
    </Loading>
  );
}

export default RepositoryPage;
