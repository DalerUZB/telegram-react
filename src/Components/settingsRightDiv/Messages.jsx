import * as React from 'react';
import './message.css'
import moment from "moment/moment";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useDispatch } from 'react-redux';
import { fetchDelete } from '../../store/action';
import { ClassicSpinner } from 'react-spinners-kit';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Messages = ({ createdBy, createdDate, message, _id }) => {
  const dispatch = useDispatch()
  const [open, setOpen] = React.useState(false);
  const [loader, setLoader] = React.useState(false)
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const colors = ['blue', 'yellow', 'black', 'red', 'brown', 'orange']

  const deleteMessage = (id) => {
    dispatch(fetchDelete(id))
    setLoader(true)
    setTimeout(() => {
      handleClose()
    }, 1000);
  }

  const randomColor = colors[Math.floor(Math.random() * colors.length)]

  return (
    <>
      <div className="wrapper-info-component">

        <div className="person" style={{ backgroundColor: randomColor }}>
        </div>

        <div className="wrapper-div-messages">

          <i className="personName">{createdBy}</i>

          <span className="messageSpan">
            {message}
          </span>

          <span>{moment(createdDate).subtract().calendar()}</span>

          <span className="forEditRemove" onClick={handleOpen}>
            <span></span>
            <span></span>
            <span></span>
          </span>

        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Delete this message ?
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <span className='modal'>
              {
                loader ?
                  <ClassicSpinner size={30} color="#686769" loading={true} />
                  :
                  <button onClick={() => deleteMessage(_id)}>Yes</button>
              }
              <button onClick={handleClose}> No</button>
            </span>
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default Messages;
