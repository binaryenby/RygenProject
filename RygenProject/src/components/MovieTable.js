import { ImageListItemBar } from '@material-ui/core'
import {ImageListItem} from '@material-ui/core'
import React from 'react';
import { Table, Button } from 'react-bootstrap'
import {ImageList} from '@material-ui/core';

/*const TableRow = ({movies}) => {
    return (
        <ImageList cols={3} gap={8}>
            {movies.map((movie) => (
                <ImageListItem key={movie.Poster}>
                    <img src={movie.Poster}/>
                    <ImageListItemBar position="below"
                        title={movie.Title}
                        subtitle={movie.Year}
                        />
                </ImageListItem>
            ))}
        </ImageList>
    )
}*/
export default function MovieTable(props) {
    return (
        <ImageList sx={{width: 400, height: 500}} cols={6} gap={8} rowHeight={400}>
            {props.movies.map((movie) => (
                <ImageListItem key={movie.imdbID}>
                    <img src={movie.Poster}/>
                    <ImageListItemBar position="bottom"
                        title={movie.Title}
                        subtitle={movie.Year}
                        />
                </ImageListItem>
            ))}
        </ImageList>
    );
}

