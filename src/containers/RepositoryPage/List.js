import React from "react";
import { Button, Card, Table } from "react-bootstrap";
import Item from "./Item";

export default function List({
  node,
  loading,
  loadMore,
  librariesData,
  vulnerablePackages,
}) {
  const isPackageJson = node.filename === "package.json";

  return (
    <Card className="mb-3">
      <Card.Header>
        <i className="fa fa-cubes"></i> Dependencies defined in{" "}
        <b>{node.filename}</b>{" "}
        <span className="badge badge-dark">{node.dependenciesCount}</span>
      </Card.Header>
      <Card.Body className="p-0">
        <Table hover>
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th className="text-center">Current Version</th>
              {isPackageJson && <th className="text-center" data-testid="list-ispackagejson-header-test-id">Latest Version</th>}
              {isPackageJson && <th className="text-center" data-testid="list-outdated-header-test-id">Outdated</th>}
              <th className="text-center" data-testid="list-vulnerable-header-test-id">Vulnerable</th>
            </tr>
          </thead>

          <tbody>
            {node.dependencies.nodes.map((dependency) => (
              <tr
                key={`${dependency.packageManager}/${dependency.packageName}`}
                data-testid="list-nodes-element-test-id"
              >
                <Item
                  node={dependency}
                  librariesData={librariesData}
                  isPackageJson={isPackageJson}
                  vulnerablePackages={vulnerablePackages}
                />
              </tr>
            ))}
          </tbody>

          {node.dependencies.pageInfo.hasNextPage && (
            <tfoot>
              <tr>
                <td colSpan="100">
                  <div className="text-center pt-2">
                    <div className="small mb-1">
                      {node.dependenciesCount - node.dependencies.nodes.length}{" "}
                      more dependencies
                    </div>
                    <Button size={"sm"} onClick={loadMore} disabled={loading} data-testid="list-loadmore-button-test-id">
                      {loading ? (
                        <>
                          <i className="fa fa-spin fa-spinner" data-testid="list-loadmore-button-spinner-icon-test-id"></i> Loading ...
                        </>
                      ) : (
                        "Load more ..."
                      )}{" "}
                    </Button>
                  </div>
                </td>
              </tr>
            </tfoot>
          )}
        </Table>
      </Card.Body>
    </Card>
  );
}
