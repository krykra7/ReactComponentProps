import React, {LegacyRef} from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import {Box, Button} from "@mui/material";
import {makeStyles} from "tss-react/mui";
import AssignmentIcon from "@mui/icons-material/Assignment";
import {Item} from "../common/Item";

const useStyles = makeStyles()((theme) => ({
    buttonBox: {
        bottom: theme.spacing(2),
        alignSelf: "flex-end",
        marginBottom: theme.spacing(2),
        marginRight: theme.spacing(2),
        display: "flex",
        justifyContent: "flex-end",
    },
    button: {
        margin: theme.spacing(1),
        borderRadius: 20
    },
    prescriptionCount: {
        display: "flex",
        alignItems: "center",
        gap: theme.spacing(1),
        flexWrap: "wrap",
    }
}))

export default function ListItem(params: Item, ref?: LegacyRef<HTMLDivElement> | null) {
    const {classes} = useStyles();

    return (
        <Paper {...{ref: ref} as any} key={params.id} elevation={24} variant="outlined">
            <Box>
                <Typography>{params.date}</Typography>
                <Box className={classes.prescriptionCount}>
                    <Typography>{params.prescriptionCount}</Typography>
                    <AssignmentIcon color={"primary"}/>
                </Box>
            </Box>
            <Divider/>
            <Typography>{params.syndrome}</Typography>
            <Box className={classes.buttonBox}>
                <Button className={classes.button}
                        onClick={() => {}}
                        variant="outlined">
                    Cancel
                </Button>
                <Button className={classes.button}
                        onClick={() => {}}
                        variant="contained">
                    Save
                </Button>
            </Box>
        </Paper>
    )
}
