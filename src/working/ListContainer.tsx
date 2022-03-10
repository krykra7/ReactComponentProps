import {makeStyles} from "tss-react/mui";
import React, {useEffect, useState} from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
import ListItem from "./ListItem";
import {apiCall} from "../common/ApiMock";
import Items from "../common/Items";
import {Item} from "../common/Item";
import InfiniteList, {PaginationCallerOutput} from "./InfiniteList";

const useStyles = makeStyles()((theme) => ({
    header: {
        display: "flex",
        alignItems: "center",
        gap: theme.spacing(1),
        flexWrap: "wrap",
    },
    body: {
        [theme.breakpoints.down('xs')]: {
            maxHeight: "20vh"
        },
        [theme.breakpoints.up('sm')]: {
            maxHeight: "40vh"
        },
        [theme.breakpoints.up('md')]: {
            maxHeight: "60vh"
        },
        [theme.breakpoints.up('lg')]: {
            maxHeight: "70vh"
        },
        [theme.breakpoints.up('xl')]: {
            maxHeight: "80vh"
        },
        overflowY: "auto",
        "::-webkit-scrollbar": {
            display: "none"
        }
    }
}))

type Props = {
    patientId: number;
}

const useVisitsCaller = (pageNumber: number, patientId: number):
    PaginationCallerOutput<Item> => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [hasMore, setHasMore] = useState(false)
    const [data, setData] = useState([] as Item[])

    useEffect(() => {
        setLoading(true);
        setError(false);
        apiCall(pageNumber, 8, patientId)
            .then((resp: Items) => {
                setData((prevData) => {
                    return [...prevData, ...resp.content];
                });
                setHasMore((resp.number) * resp.size < resp.totalElements);
                setLoading(false);
            }).catch(() => {
            setError(true);
        });
    }, [pageNumber, patientId])

    return {loading, error, data, hasMore} as PaginationCallerOutput<Item>;
};

export function ListContainer({patientId}: Props) {
    const {classes} = useStyles();

    return (
        <Box>
            <Box className={classes.header}>
                <Typography variant="h5">List</Typography>
                <IconButton size="large" onClick={() => {}}>
                    <AddBoxRoundedIcon color={"primary"}/>
                </IconButton>
            </Box>
            <Box className={classes.body}>
                <InfiniteList patientId={patientId}
                              dataLoader={useVisitsCaller}
                              renderItem={ListItem}
                />
            </Box>
        </Box>
    );
}
