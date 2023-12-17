import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import image from './IMAGES/img3.jpg';
import './component/Home.css';
import { Frontpage } from './Frontpage/Frontpage';
import { About } from './about/About';
import { Education } from './Education/Education';
import {Myskills} from './Skills/Myskills';
import Image from './IMAGES/img3.jpg';




;
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
      
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 6, bgcolor: 'black', display: 'flex', height: 1,tabSize:'40px'}}
      > <div className='pa'>
        <img src={Image} alt="hii"/>
      <Tabs
     
      
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        
        textColor='inherit'
      
        
        sx={{ borderRight: 1, borderColor: 'divider' ,color: 'white'}}
  >
       
        <Tab label="Home"{...a11yProps(0)} />
       <Tab label='About me'  {...a11yProps(1)} />
        <Tab label="Education" {...a11yProps(2)} />
        <Tab label="MY skills" {...a11yProps(3)} />
       
        <Tab label="PortFolio" {...a11yProps(4)} />
        <Tab label="ContactMe" {...a11yProps(5)} />
        <Tab label="" {...a11yProps(6)} />
      
      </Tabs>
      </div>
      <TabPanel value={value} index={0}>
     <Frontpage />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <About />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Education />
      </TabPanel>
      <TabPanel value={value} index={3}>
     <Myskills />
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>
    </Box>
  );
}