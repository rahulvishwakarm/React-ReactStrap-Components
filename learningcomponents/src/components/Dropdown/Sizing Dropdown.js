import React,{useState} from 'react';
import {ButtonDropdown  ,DropdownToggle ,DropdownItem ,DropdownMenu} from 'reactstrap';

const SizingButton = (props) =>{
    const [dropdownOpen, setOpen] = useState(false);
    const toggle = () => setOpen(!dropdownOpen);

    return(
        <div>
            <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle caret size="lg">
                    Large Button
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem>Another Action</DropdownItem>
                    <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
            </ButtonDropdown>
        </div>
    )
}

export default SizingButton;