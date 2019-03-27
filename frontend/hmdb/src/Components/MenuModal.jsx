import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: 'none',
  },
});

class MenuModal extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  editPrice = () => {
    // TODO:
    // call API to add to invoice
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Button onClick={this.handleOpen}>Edit Price</Button>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div style={getModalStyle()} className={classes.paper}>
          <Typography>Edit Price</Typography>
          <TextField
            id="iid"
            label="Item ID"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
          />
            <TextField
            id="price"
            label="New Price"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Button onClick={this.editPrice}> Change </Button>
          <Button onClick={this.handleClose}> Close </Button>
          </div>
        </Modal>
      </div>
    );
  }
}
// We need an intermediary variable for handling the recursive nesting.
const MenuModalWrapped = withStyles(styles)(MenuModal);

export default MenuModalWrapped;