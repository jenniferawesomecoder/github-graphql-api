import React from "react";

export default function Item({
  node,
  librariesData,
  isPackageJson,
  vulnerablePackages,
}) {
  const nodeLibraryData = librariesData.filter(
    (f) => f.name === node.packageName
  )[0];
  const nodeVersion = node?.requirements
    ?.split(".")[0]
    ?.replace("^", "")
    ?.trim();
  const nodeLibraryDataVersion = nodeLibraryData?.latest_release_number
    ?.split(".")[0]
    ?.replace("^", "")
    ?.trim();
  let outDated = "No";

  if (!isNaN(nodeVersion) && !isNaN(nodeLibraryDataVersion)) {
    outDated =
      parseInt(nodeLibraryDataVersion) > parseInt(nodeVersion) ? "Yes" : "No";
  }

  const isVulnerable = vulnerablePackages.includes(node.packageName)
    ? "Yes"
    : "No";

  return (
    <>
      <td style={{ width: "1%" }}>
        <i className="fa fa-chevron-right"></i>
      </td>
      <td data-testid="package-test-id">
        <img
          className="d-inline mr-2 rounded-circle"
          width={20}
          height={20}
          src={node.repository.owner.avatarUrl}
        />
        <a target="_blank" href={`https://github.com/${node.packageName}`}>
          {node.packageName}
        </a>
      </td>
      <td className="text-center">{node.requirements}</td>
      {isPackageJson && (
        <td className="text-center" data-testid="latest-release-number-test-id">
          {nodeLibraryData?.latest_release_number}
        </td>
      )}
      {isPackageJson && (
        <td className="text-center" data-testid="outdated-test-id">
          {outDated}
        </td>
      )}
      <td className="text-center" data-testid="isvulnerable-test-id">
        {isVulnerable}
      </td>
    </>
  );
}
