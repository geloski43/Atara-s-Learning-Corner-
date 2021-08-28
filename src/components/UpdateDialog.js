import React from 'react';

import Avatar from '@material-ui/core/Avatar';

import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Checkbox from '@material-ui/core/Checkbox';

const UpdateDialog = ({
  openNameChange,
  handleCloseName,
  setNameTrigger,
  nameTrigger,
  setStudent,
  openAvatarChange,
  handleCloseAvatar,
  classes,
  images,
  handleToggle,
  checked,
}) => {
  return (
    <>
      <Dialog open={openNameChange} onClose={handleCloseName} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Edit Student Name</DialogTitle>
        <DialogContent>

          <TextField
            onChange={(e) => {
              setNameTrigger(e.target.value)
            }}
            value={nameTrigger}
            autoFocus
            margin="dense"
            id="name"
            label="Student"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseName} color="primary">
            Cancel
          </Button>
          <Button onClick={() => {
            setStudent(nameTrigger);
            handleCloseName();
          }} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={openAvatarChange} onClose={handleCloseAvatar} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Change Student Avatar</DialogTitle>
        <DialogContent>
          <List dense className={classes.root}>
            {images.map((value) => {
              const labelId = `checkbox-list-secondary-label-${value.name}`;
              return (
                <ListItem key={value.id} button>
                  <ListItemAvatar>
                    <Avatar
                      alt={`Avatar n°${value.name}`}
                      src={value.source}
                    />
                  </ListItemAvatar>
                  <ListItemText id={labelId} primary={`${value.name}`} />
                  <ListItemSecondaryAction>
                    <Checkbox
                      edge="end"
                      onChange={handleToggle(value.source)}
                      checked={checked.indexOf(value.source) !== -1}
                      inputProps={{ 'aria-labelledby': labelId }}
                    />
                  </ListItemSecondaryAction>
                </ListItem>
              );
            })}
          </List>
        </DialogContent>
      </Dialog>
    </>
  )
};

export default UpdateDialog;