import * as React from 'react';
import './PopularCatagorys.css'
import logo from '../../../public/images/__next_static_media_title.b1cf2686.png'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import MedicalSuplies from '../MedicalSuplies/MedicalSuplies';
import Beauty from '../Beauty/Beauty';
import FaceMask from '../FaceMask/FaceMask';

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <div className="text-center">
                    <Box sx={{ p: 3 }}>
                        <Typography>{children}</Typography>
                    </Box>
                </div>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <div className="flex justify-center popular-container mt-10 mb-3">
                <img src={logo} alt="" />
                <h3 className='text-5xl ml-2'>Popular Categories</h3>
            </div>
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderColor: 'divider' }}>
                    <Tabs className='xl:ml-[500px]' value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Medical Supplies" {...a11yProps(0)} />
                        <Tab label="Beauty" {...a11yProps(1)} />
                        <Tab label="Face Masks" {...a11yProps(2)} />
                    </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                    <div className="xl:mx-24">
                        <MedicalSuplies></MedicalSuplies>
                    </div>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    <div className="xl:mx-24">
                        <Beauty></Beauty>
                    </div>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                    <div className="xl:mx-24">
                        <FaceMask></FaceMask>
                    </div>
                </CustomTabPanel>
            </Box>
        </>
    );
}
