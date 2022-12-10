import Image from 'next/image';
import { FormControl, InputAdornment, InputBase } from '@mui/material';
import { ManageSearch, PermIdentityOutlined, BookmarksOutlined } from '@mui/icons-material';

import notebookLogo from '../../assets/images/notebook-logo.png';
import { HeaderWrapper } from "./styled";

export default function Header() {
    return (
        <HeaderWrapper>
            <div className="wrapper">
                <h1>
                    <Image src={notebookLogo} alt='Notebbok-Logo' width={30} height={30} />
                    <span>NoteBook</span>
                </h1>
                <div className='header-actions'>
                    <FormControl className='search-form'>
                        <InputBase
                            placeholder="Searchs"
                            inputProps={{ 'aria-label': 'search' }}
                            startAdornment={
                                <InputAdornment position="start">
                                    <ManageSearch />
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                    <div className='header-icon'>
                        <PermIdentityOutlined fontSize='small' />
                    </div>
                    <div className='header-icon'>
                        <BookmarksOutlined fontSize='small' />
                    </div>
                </div>
            </div>
        </HeaderWrapper>
    )
}