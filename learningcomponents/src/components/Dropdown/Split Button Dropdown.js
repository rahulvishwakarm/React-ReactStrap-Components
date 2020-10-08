import React,{useState} from 'react';
import {ButtonDropdown ,Button ,DropdownToggle ,DropdownItem ,DropdownMenu} from 'reactstrap';

const SpliButtonDropdown = (props) =>{
    const [dropdownOpen, setOpen] = useState(false);
    const toggle = () => setOpen(!dropdownOpen);

    return(
        <div>
            <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
                <Button id="caret" color="primary">Split Button</Button>
                <DropdownToggle caret color="primary"/>
            <DropdownMenu>
                <DropdownItem header>Header</DropdownItem>
                <DropdownItem disabled>Action</DropdownItem>
                <DropdownItem>Another Action</DropdownItem>
                <DropdownItem divider/>
                <DropdownItem>Another Action</DropdownItem>
            </DropdownMenu>
            </ButtonDropdown>
            
        </div>
    )
}

export default SpliButtonDropdown;