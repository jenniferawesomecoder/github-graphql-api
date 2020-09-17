import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import List from "./List";
import { NetworkStatus } from "@apollo/client";

export default function Dependencies({
  repo,
  networkStatus,
  loadMore,
  librariesData,
}) {
  const [loadMoreDependencies, setLoadMoreDependencies] = useState("");
  const vulnerablePackages = repo?.vulnerabilityAlerts?.nodes?.map(
    (f) => f?.securityVulnerability?.package?.name
  );

  return (
    <div className="py-3 bg-white" data-testid="dependencies-test-id">
      <Row>
        {repo.dependencyGraphManifests.nodes.map((node) => (
          <Col key={node.id} md={6}>
            <List
              vulnerablePackages={vulnerablePackages}
              librariesData={librariesData}
              node={node}
              loading={
                networkStatus === NetworkStatus.fetchMore &&
                node.filename === loadMoreDependencies
              }
              loadMore={() => {
                setLoadMoreDependencies(node.filename);
                loadMore(node);
              }}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
}
