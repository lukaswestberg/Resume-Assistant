import '../App.css';
import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ResumeUploadModal from "./ResumeUploadModal";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function TitleBar() {
    const classes = useStyles();
    return (
        <AppBar position={"static"}>
            <Toolbar variant={"dense"}>
               {/* <IconButton edge={"start"} className={classes.menuButton} color={"inherit"} aria-label={"menu"}>
                    <MenuIcon/>
                </IconButton>*/}
                <Typography variant={"h6"} className={classes.title}>
                    Resume Assistant
                </Typography>
                {/*<Button color={"inherit"}>
                    Upload Resume
                </Button>*/}
            </Toolbar>
        </AppBar>
    )
}