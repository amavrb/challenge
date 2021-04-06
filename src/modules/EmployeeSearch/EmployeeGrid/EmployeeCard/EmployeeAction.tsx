import React from 'react';
import { CardActions, IconButton, makeStyles, Theme } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';

const useStyles = makeStyles(({ spacing }: Theme) => ({
  cardActions: {
    padding: spacing(0, 0, 1, 1),
  },
  icon: {
    width: '0.75em',
    height: '0.75em',
  },
  iconButton: {
    padding: spacing(1),
  },
}));

interface EmployeeActionProps {
  twitter?: string;
  github?: string;
  linkedIn?: string;
}

export const EmployeeAction = ({
  twitter,
  github,
  linkedIn,
}: EmployeeActionProps) => {
  const classes = useStyles();

  return (
    <CardActions className={classes.cardActions}>
      {twitter && (
        <IconButton
          className={classes.iconButton}
          href={`https://twitter.com/${twitter}`}
          target="_blank"
        >
          <TwitterIcon className={classes.icon} titleAccess={twitter} />
        </IconButton>
      )}
      {github && (
        <IconButton
          className={classes.iconButton}
          href={`https://github.com/${github}`}
          target="_blank"
        >
          <GitHubIcon className={classes.icon} titleAccess={github} />
        </IconButton>
      )}
      {linkedIn && (
        <IconButton
          className={classes.iconButton}
          href={`https://linkedin.com/${linkedIn}`}
          target="_blank"
        >
          <LinkedInIcon className={classes.icon} titleAccess={linkedIn} />
        </IconButton>
      )}
    </CardActions>
  );
};
