import React,{ useState } from 'react';
import { ButtonDropdown,DropdownToggle,DropdownMenu,DropdownItem} from 'reactstrap';

const SingleButtonDropdown = (props) =>{
    const [isOpen, setOpen] = useState(false);

    const toggle = () => setOpen(!isOpen);

    return (
        <div>
             <ButtonDropdown isOpen={isOpen} toggle={toggle}>
                <DropdownToggle caret color="primary">
                    Text
                </DropdownToggle>
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

export default SingleButtonDropdown;

