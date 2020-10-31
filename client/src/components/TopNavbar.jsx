import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container,
} from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export class TopNavbar extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
      isAuthenticated: false,
      searchOpen: false,
      cartOpen: false,
    };
  }

  toggleNavbar = () => this.setState({ isOpen: !this.state.isOpen });

  toggleSearch = () => this.setState({ searchOpen: !this.state.searchOpen });

  toggleCart = () => this.setState({ cartOpen: !this.state.cartOpen });

  renderUserControls = media => {
    const primaryClasses =
      media === 'mobile'
        ? 'main-nav__control main-nav__user-control main-nav__user-control--mobile'
        : 'main-nav__control main-nav__user-control main-nav__user-control--desktop';

    if (this.state.isAuthenticated) {
      return (
        <UncontrolledDropdown
          nav
          inNavbar
          className={
            media === 'mobile' ? 'dropdown-mobile' : 'dropdown-desktop'
          }
        >
          <DropdownToggle
            nav
            caret
            className={`${primaryClasses} main-nav__user-setting`}
          >
            <span className="btn-icon">
              <FontAwesomeIcon icon={['fas', 'user-cog']} />
            </span>
            <span className="btn-text">Joe</span>
          </DropdownToggle>

          <DropdownMenu right>
            <DropdownItem>Orders History</DropdownItem>
            <DropdownItem>Account Settings</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Logout</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      );
    } else {
      return (
        <React.Fragment>
          <Link
            to="/login"
            className={`${primaryClasses} main-nav__user-login`}
          >
            <span className="btn-icon">
              <FontAwesomeIcon icon={['fas', 'user']} />
            </span>
            <span className="btn-text">Login</span>
          </Link>

          <Link
            to="/register"
            className={`${primaryClasses} main-nav__user-register`}
          >
            <span className="btn-icon">
              <FontAwesomeIcon icon={['fas', 'user-plus']} />
            </span>
            <span className="btn-text">Register</span>
          </Link>
        </React.Fragment>
      );
    }
  };

  render() {
    return (
      <header className="page-header">
        <Navbar color="light" light expand="md" className="main-nav">
          <Container className="main-nav__container">
            <Link to="/" className="main-nav__brand navbar-brand">
              SisBabywear
            </Link>

            <div className="main-nav__controls">
              <button
                className={`main-nav__control main-nav__main-control main-nav__search ${
                  this.state.searchOpen ? 'active' : ''
                }`}
                onClick={this.toggleSearch}
              >
                <span className="btn-icon">
                  <FontAwesomeIcon icon={['fas', 'search']} />
                </span>
                <span className="btn-text">Search</span>
              </button>

              <button
                className={`main-nav__control main-nav__main-control main-nav__cart ${
                  this.state.cartOpen ? 'active' : ''
                }`}
                onClick={this.toggleCart}
              >
                <span className="btn-icon">
                  <FontAwesomeIcon icon={['fas', 'shopping-cart']} />
                </span>
                <span className="btn-text">Cart</span>
              </button>

              {this.renderUserControls('desktop')}

              <NavbarToggler
                className="main-nav__control main-nav__toggler"
                onClick={this.toggleNavbar}
              >
                <span className="btn-icon">
                  <FontAwesomeIcon icon={['fas', 'bars']} />
                </span>
                <span className="btn-text">Menu</span>
              </NavbarToggler>
            </div>

            <Collapse
              isOpen={this.state.isOpen}
              navbar
              className="main-nav__menu"
            >
              <Nav navbar>
                <NavItem>
                  <NavLink
                    to="/"
                    className="nav-link main-nav__link main-nav__link--home"
                    activeClassName="active"
                    exact
                  >
                    Home
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink
                    to="/shop"
                    className="nav-link main-nav__link main-nav__link--shop"
                    activeClassName="active"
                  >
                    Shop
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink
                    to="/contact"
                    className="nav-link main-nav__link main-nav__link--contact"
                    activeClassName="active"
                  >
                    Contact
                  </NavLink>
                </NavItem>

                {this.renderUserControls('mobile')}
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}
