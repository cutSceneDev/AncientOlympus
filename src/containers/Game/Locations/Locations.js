import React, { Component } from 'react'
import styles from './Locations.css'

import Dungeons from './Dungeons/Dungeons'
import Market from './Market/Market'
import Inventory from './Inventory/Inventory'
import NavTab from '../../../components/NavTab/NavTab'

class Locations extends Component {
  state = {
    currentTab: 'inventory'
  }
  
  components = {
    inventory: Inventory,
    dungeons: Dungeons,
    market: Market
  }

  handleTabChange = (tab) => {
    this.setState({currentTab: tab})
  }

  render() {
    const ActiveComponent = this.components[this.state.currentTab]
    const tabsKeys = Object.keys(this.components)
    const tabs = tabsKeys.map((tab, index) => {
      return (
        <NavTab 
          onClick={() => this.handleTabChange(tabsKeys[index])}
          active={this.state.currentTab === tabsKeys[index]}
          key={tab}
        >
          {tab}
        </NavTab>
      )
    })

    return (
      <div className={styles.Locations}>
        <div className={styles.Nav}>
          {tabs}
        </div>
        <div className={styles.Content}>
          <ActiveComponent />
        </div>
      </div>
    )
  }
}

export default Locations