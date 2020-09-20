import React from "react";
import { Breadcrumb, Nav, Navbar } from "react-bootstrap";
import Search from "../Search";
import Credentials from '../Credentials';

function Layout({ children, ...rest }) {
  const { owner, name } = rest.match.params;

  return (
    <>
      <Navbar bg="dark" variant="dark" data-testid="layout-navbar-test-id">
        <Navbar.Brand>Github GraphQL</Navbar.Brand>
        <Nav className="mr-auto">
          <Credentials />
        </Nav>
        <Search owner={owner} name={name} />
      </Navbar>
      <div className="bg-light ">
        <Breadcrumb>
          <Breadcrumb.Item
            target={"_blank"}
            href={`https://github.com/${owner}`}
          >
            <i className="fa fa-github text-dark"></i> {owner}
          </Breadcrumb.Item>
          <Breadcrumb.Item
            target={"_blank"}
            href={`https://github.com/${owner}/${name}`}
          >
            {name}
          </Breadcrumb.Item>
        </Breadcrumb>
        <div className="container-fluid">{children}</div>
      </div>
    </>
  );
}

export default Layout;
