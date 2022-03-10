import {makeStyles} from "tss-react/mui";
import React, {Fragment, LegacyRef, useCallback, useRef, useState} from "react";
import {Box, Container} from "@mui/material";
import ListItem from "./ListItem";
import {Item} from "../common/Item";

const useStyles = makeStyles()((theme) => ({
    listContainer: {
        height: "100%",
    },
    list: {
        display: "flex",
        flexDirection: "column",
        gap: theme.spacing(1)
    }
}));

export type PaginationCallerOutput<T> = {
    loading: boolean;
    error: boolean;
    data: T[],
    hasMore: boolean;
}

type Props<T> = {
    patientId: number;
    renderItem: ({params, ref}: {params: T, ref?: any}) => React.ReactNode;
    dataLoader: (pageNumber: number, patientId: number) => PaginationCallerOutput<T>
}

export default function InfiniteList<T extends object>(props: Props<T>) {
    const {classes} = useStyles();
    const [page, setPage] = useState(1);
    const {renderItem, dataLoader, patientId} = props;

    const {
        loading,
        error,
        data,
        hasMore
    } = dataLoader(page, patientId)

    const lastItemObserver = useRef<IntersectionObserver>();
    const lastItemRef = useCallback((node: HTMLElement) => {
        if (loading) return;
        if (lastItemObserver.current) lastItemObserver.current.disconnect();
        lastItemObserver.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasMore) {
                setPage(prevPage => prevPage + 1);
            }
        })
        if (node) lastItemObserver.current.observe(node);
    }, [loading, hasMore])

    return (
        <>
            <Container className={classes.listContainer}>
                <Box className={classes.list}>
                    {data.map((item, index) => {
                        if (data.length === index + 1) {
                            // @ts-ignore
                             return <ListItem params={item as Item} ref={lastItemRef}/>
                        } else {
                             return <ListItem params={item as Item}/>
                        }
                    })}
                </Box>
                <div>{loading && 'Loading...'}</div>
                <div>{error && 'Error'}</div>
            </Container>
        </>
    );
}
