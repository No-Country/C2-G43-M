import React from 'react';
import { Nav, NavLink, NavItem } from 'reactstrap';
import { sidebar } from '../assets/sidebar.css';
import Charts from './Charts';
function Sidebar() {
  return (
    <div className="row mt-5 p-2">
      <div className="row justify-content-start col-3">
        <div className="sidebar">
          <p>List Based</p>
          <Nav color="dark" vertical>
            <NavItem>
              <NavLink href="#">Link</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Link</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Another Link</NavLink>
            </NavItem>
            <NavItem>
              <NavLink disabled href="#">
                Disabled Link
              </NavLink>
            </NavItem>
          </Nav>
          <hr />
          <p>Link based</p>
          <Nav vertical>
            <NavLink href="#">Link</NavLink> <NavLink href="#">Link</NavLink>{' '}
            <NavLink href="#">Another Link</NavLink>{' '}
            <NavLink disabled href="#">
              Disabled Link
            </NavLink>
          </Nav>
        </div>
      </div>
      <div className="row justify-content-end col">
        <Charts />
      </div>
    </div>
  );
}

export default Sidebar;
