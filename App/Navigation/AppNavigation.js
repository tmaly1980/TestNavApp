import { StackNavigator } from 'react-navigation'
import Test1Screen from '../Containers/Test1Screen'
import Test2Screen from '../Containers/Test2Screen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  Test1Screen: { screen: Test1Screen },
  Test2Screen: { screen: Test2Screen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'Test1Screen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
