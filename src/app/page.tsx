'use client'
import * as React from 'react';
import Typography from '@mui/material/Typography';
import NavBar from '@/components/NavBar';
import { Container } from '@mui/material';
import {makeStyles} from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    minHeight: '100vh'
  },
  wrapper: {
    width: '40%',
  }
}))

export default function HomePage() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Container className={classes.wrapper}>
        <NavBar />
        <Typography>
          I love making and sharing things.
        </Typography>
        <Typography>
          I share everything I know in form of a personal documentation here.
        </Typography>
        <Typography>
          Feel free to ask me anything.
        </Typography>
      </Container>
    </div>
  );
}
