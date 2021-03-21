import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
            paddingTop: theme.spacing(2),
            paddingBottom: theme.spacing(2),
            width: '100%',
            height: 'auto',
        },
    },
}));

export default function FileUploadForm() {
    const classes = useStyles();

    function handleChange(event) {
        document.getElementById('fileholder').innerText = `${event.target.files[0].name}`;
    }
    return (
        <div className={classes.root}>
            <Paper>
                <Typography variant={"h3"} className={classes.title}>
                    Upload Your Resume
                </Typography>
                <Typography variant={"h6"} className={classes.heading}>
                    See what an employer's resume crawlers see!
                </Typography>
                <div>
                    <input
                        accept={".pdf,.docx"}
                        className={classes.input}
                        style={{display: 'none'}}
                        id={"fileuploadbutton"}
                        multiple
                        type={'file'}
                        onChange={handleChange}
                        />
                    <label htmlFor={"fileuploadbutton"}>
                        <Button variant={"raised"} component={"span"} color="inherit">
                            Select File...
                        </Button>
                        <Typography variant={"p"} id={'fileholder'} />
                    </label>
                    <Button variant={"raised"} component={"span"} color="inherit" enabled={false}>
                        Submit!
                    </Button>
                </div>
            </Paper>
        </div>
    );
}