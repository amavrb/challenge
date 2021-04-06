import React, { useState } from 'react';
import {
  Card,
  CircularProgress,
  Grid,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core';

import { Employee } from '~api/types';
import { EmployeeAction } from './EmployeeAction';

const useStyles = makeStyles(({ spacing }: Theme) => ({
  card: {
    display: 'flex',
    padding: spacing(2),
    transition: 'box-shadow .3s',
    '&:hover': {
      cursor: 'pointer',
      boxShadow: '0 0 10px 1px rgba(128,197,101,1)',
    },
  },
  cardMedia: {
    height: '100%',
    maxHeight: 344,
  },
  bottomContainer: {
    flexGrow: 1,
    paddingTop: spacing(1),
  },
  topContainer: {
    flexGrow: 3,
  },
}));

interface EmployeeCardProps extends Employee {}

export const EmployeeCard = ({
  gitHub,
  imagePortraitUrl,
  linkedIn,
  name,
  office,
  twitter,
}: EmployeeCardProps) => {
  const [imageLoading, setImageLoading] = useState<boolean>(true);
  const classes = useStyles();
  const hasSocial = twitter || gitHub || linkedIn;

  const onImageLoaded = () => {
    setImageLoading(false);
  };

  const onImageLoadingError = () => {
    return null;
  };

  return (
    <Card className={classes.card}>
      <Grid container direction="column" alignContent="center" wrap="nowrap">
        <Grid
          className={classes.topContainer}
          item
          container
          xs={12}
          justify="center"
        >
          {imageLoading && <CircularProgress />}
          <img
            className={classes.cardMedia}
            style={{display: imageLoading ? 'none': 'block'}}
            src={imagePortraitUrl}
            alt={name}
            onLoad={onImageLoaded}
            onError={onImageLoadingError}
          />
        </Grid>
        <Grid
          className={classes.bottomContainer}
          item
          container
          justify="space-between"
          wrap="nowrap"
          xs={12}
        >
          <Grid item container direction="column" justify="space-between">
            <Typography noWrap variant="subtitle1">
              {name}
            </Typography>
            <Typography variant="caption">Office: {office}</Typography>
          </Grid>
          {hasSocial && (
            <Grid item>
              <EmployeeAction
                twitter={twitter}
                github={gitHub}
                linkedIn={linkedIn}
              />
            </Grid>
          )}
        </Grid>
      </Grid>
    </Card>
  );
};
