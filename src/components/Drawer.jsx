import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Link } from 'react-router-dom';
 


import Switcher from './Switcher';
import { useTranslation } from 'react-i18next';
export default function TemporaryDrawer() {


  const changeLanguage =(language) =>{
    i18n.changeLanguage(language)
  }

  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const {t,i18n} =useTranslation()
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 400 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      className="dark:bg-[#303134] dark:text-[white]"
    >
      <List className=''>
  <div className='p-10'>
    <h1 className='text-[30px] font-[700]'>Поисковый запрос</h1><br />
    <input className='border border-black w-[90%] py-2 rounded-[6px] bg-[#e6e4e4]' type="text" name="" id="" placeholder='  Поиск' />
  </div>
  <br /> <br /> 
    <hr /> 
    <br />
    <h1 className='text-[18px] font-[700] p-5'>Недавнее</h1>
      <h1 className='text-[#868686] font-[700] pt-48 ml-24'>Нет недавних запросов.</h1>
      </List>
    </Box>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>  <h1  className='text-[13px] text-black font-[600] pt-5'>Поисковый запрос</h1> </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}