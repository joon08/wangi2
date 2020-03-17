import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import './index.less'

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <Typography
      component='div'
      role='tabpanel'
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
}

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`
  }
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper
  }
}))

export default function ScrollableTabsButtonAuto() {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <div className={classes.root}>
      <AppBar position='static' color='default'>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor='primary'
          textColor='primary'
          variant='scrollable'
          scrollButtons='auto'
          aria-label='scrollable auto tabs example'
        >
          <Tab label='推荐' {...a11yProps(0)} />
          <Tab label='居家生活' {...a11yProps(1)} />
          <Tab label='服饰鞋包' {...a11yProps(2)} />
          <Tab label='美食酒水' {...a11yProps(3)} />
          <Tab label='个护清洁' {...a11yProps(4)} />
          <Tab label='母婴亲子' {...a11yProps(5)} />
          <Tab label='运动旅行' {...a11yProps(6)} />
          <Tab label='数码家电' {...a11yProps(7)} />
          <Tab label='全球特色' {...a11yProps(8)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        推荐
      </TabPanel>
      <TabPanel value={value} index={1}>
        居家生活
      </TabPanel>
      <TabPanel value={value} index={2}>
        服饰鞋包
      </TabPanel>
      <TabPanel value={value} index={3}>
        美食酒水
      </TabPanel>
      <TabPanel value={value} index={4}>
        个护清洁
      </TabPanel>
      <TabPanel value={value} index={5}>
        母婴亲子
      </TabPanel>
      <TabPanel value={value} index={6}>
        运动旅行
      </TabPanel>
      <TabPanel value={value} index={7}>
        数码家电
      </TabPanel>
      <TabPanel value={value} index={8}>
        全球特色
      </TabPanel>
    </div>
  )
}
