
import PropTypes from "prop-types"
import React from "react"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

class header extends React.Component {
    constructor(props) {
      super(props)
      this.toggle= this.toggle.bind(this)
      this.state={
        isOpen=false,
      }
    }
    toggle(){
      this.setState({
        isOpen: !this.state.isOpen,
      })
    }
    render(){

    
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/components/">الرئيسية</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">من نحن</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  قائمة
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    اختيار 1
                  </DropdownItem>
                  <DropdownItem>
                    اختيار 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    عودة
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
            <NavbarText>Simple Text</NavbarText>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header;
export default Example;