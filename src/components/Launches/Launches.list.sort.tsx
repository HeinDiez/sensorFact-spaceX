import React, { useState } from 'react';

// Material UI components
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

import { LaunchSortProps } from './launches.interface';

import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ClearIcon from '@mui/icons-material/Clear';
import SortByAlphaIcon from '@mui/icons-material/SortByAlpha';

export default function LaunchListSort({ setVariables, variables, getLaunches }: LaunchSortProps) {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>();
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const onClickSort = () => {
        let neuw = { ...variables };
        if (variables.order === 'desc') {
            neuw.order = 'asc';
        } else {
            neuw.order = 'desc';
        }
        setVariables({ ...neuw });
    };
    const onClearSort = () => {
        setVariables({ ...variables, order: '' });
    };
    return (
        <div className="card-header--actions">
            <div>
                <Button onClick={handleClick} data-testid="sortbtn" size="small" variant="text" className="btn-outline-primary d-30 p-0  d-flex align-items-center justify-content-center">
                    <SortByAlphaIcon className="w-50" /> 
                </Button>
                <Menu
                    className="dialog-sort-container"
                    anchorEl={anchorEl}
                    keepMounted
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right'
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right'
                    }}
                    open={Boolean(anchorEl)}
                    classes={{ list: 'p-0' }}
                    onClose={handleClose}
                >
                    <div className="dropdown-menu-lg overflow-hidden p-0" data-testid="sort-content">
                        <div className="font-weight-bold px-4 pt-3">Sort</div>
                        <div className="divider" />
                        <List component="div" className="nav-neutral-first nav-pills-rounded flex-column p-2">
                            <ListItem component="a" href="#/" onClick={onClickSort}>
                                <div className="mr-2">
                                    {variables.sort === 'mission_name' ? (
                                        <React.Fragment>{variables.order === 'desc' ? <ArrowUpwardIcon /> : variables.order === 'asc' ? <ArrowDownwardIcon /> : ''}</React.Fragment>
                                    ) : (
                                        ''
                                    )}
                                </div>
                                <span className="font-size-md">Mission Name</span>
                            </ListItem>
                            {variables.order && (
                                <ListItem component="a" className="text-warning" button href="#/" onClick={onClearSort}>
                                    <div className="mr-2">
                                        <ClearIcon />
                                    </div>
                                    <span className="font-size-md text-red">Clear</span>
                                </ListItem>
                            )}
                        </List>
                    </div>
                </Menu>
            </div>
        </div>
    );
}
