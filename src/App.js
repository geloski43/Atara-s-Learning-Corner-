import React, { useRef, useEffect, useState } from 'react';
import WebViewer from '@pdftron/webviewer';
import './App.css';
import { docs } from './components/PDFData';
import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import { Icon } from '@iconify/react';
import Avatar from '@material-ui/core/Avatar';
import Menu from '@material-ui/core/Menu';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import UpdateDialog from './components/UpdateDialog';
import SelectForm from './components/SelectForm';

import ava from './images/ava.jpg';
import cocomelon from './images/cocomelon.jpg';
import peppa from './images/peppa.jpg';

const images = [
  {
    id: '0',
    name: 'Ava',
    source: ava,
  },
  {
    id: '1',
    name: 'Cocomelon',
    source: cocomelon,
  },
  {
    id: '2',
    name: 'Peppa',
    source: peppa,
  },
];

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

const App = () => {
  const [pdfFile, setPdfFile] = useState(undefined);
  const [instance, setInstance] = useState(null);

  const [student, setStudent] = useState('Atara');
  const [nameTrigger, setNameTrigger] = useState('Atara');
  const [studentAvatar, setStudentAvatar] = useState(ava);

  const [openNameChange, setOpenNameChange] = useState(false);
  const [openAvatarChange, setOpenAvatarChange] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const [checked, setChecked] = useState([ava]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    // console.log("checked", value)
    setStudentAvatar(value);
    setChecked(newChecked);
  };

  const handleClickOpenName = () => {
    setOpenNameChange(true);
  };

  const handleCloseName = () => {
    setOpenNameChange(false);
  };

  const handleClickOpenAvatar = () => {
    setOpenAvatarChange(true);
  };

  const handleCloseAvatar = () => {
    setOpenAvatarChange(false);
  };

  const handleClickMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const viewer = useRef(null);

  const classes = useStyles();

  const handlePdfChange = (e) => {
    setPdfFile(e.target.value);
  };

  let defaultFilePath = !!pdfFile
    ? docs.filter((x) => {
        return x.id === pdfFile;
      })
    : docs[0];

  useEffect(() => {
    WebViewer(
      {
        path: '/webviewer/lib',
        initialDoc: defaultFilePath.path,
      },
      viewer.current
    ).then((instance) => {
      setInstance(instance);
      const { documentViewer, annotationManager, Annotations } = instance.Core;
      documentViewer.addEventListener('documentLoaded', () => {
        const rectangleAnnot = new Annotations.RectangleAnnotation({
          PageNumber: 1,
          // values are in page coordinates with (0, 0) in the top left
          X: 100,
          Y: 150,
          Width: 200,
          Height: 50,
          Author: annotationManager.getCurrentUser(),
        });

        annotationManager.addAnnotation(rectangleAnnot);
        // need to draw the annotation otherwise it won't show up until the page is refreshed
        annotationManager.redrawAnnotation(rectangleAnnot);
      });
    });
  }, []);

  useEffect(() => {
    if (instance && pdfFile) {
      const file = docs.filter((doc) => {
        return doc.id === pdfFile;
      });
      if (file.length) {
        // console.log(file, file[0].path)
        instance.loadDocument(file[0].path);
      }
    }
  }, [pdfFile, instance]);

  return (
    <div className="App">
      <div
        className="header"
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <Avatar alt="Favorite Character" src={studentAvatar} />
          <span style={{ marginTop: 13, marginLeft: 5 }}>{`${student}`}</span>
        </div>

        <div style={{ marginTop: 13, cursor: 'pointer' }}>
          <Icon onClick={handleClickMenu} icon="fa-solid:user-cog" />

          <StyledMenu
            id="customized-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleCloseMenu}
          >
            <StyledMenuItem
              onClick={() => {
                handleClickOpenName();
              }}
            >
              <ListItemIcon>
                <Icon
                  width="35"
                  height="35"
                  icon="openmoji:european-name-badge"
                />
              </ListItemIcon>
              <ListItemText primary="Edit Student Name" />
            </StyledMenuItem>
            <StyledMenuItem
              onClick={() => {
                handleClickOpenAvatar();
              }}
            >
              <ListItemIcon>
                <Icon icon="whh:avatar" width="35" height="35" />
              </ListItemIcon>
              <ListItemText primary="Change Avatar" />
            </StyledMenuItem>
          </StyledMenu>
        </div>

        <UpdateDialog
          openNameChange={openNameChange}
          handleCloseName={handleCloseName}
          setNameTrigger={setNameTrigger}
          nameTrigger={nameTrigger}
          setStudent={setStudent}
          openAvatarChange={openAvatarChange}
          handleCloseAvatar={handleCloseAvatar}
          classes={classes}
          images={images}
          handleToggle={handleToggle}
          checked={checked}
        />
      </div>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <SelectForm
          docs={docs}
          classes={classes}
          student={student}
          handlePdfChange={handlePdfChange}
        />
      </div>

      <div className="webviewer" ref={viewer}></div>
    </div>
  );
};

export default App;
