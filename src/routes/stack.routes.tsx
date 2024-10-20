import { createStackNavigator } from '@react-navigation/stack'
import { Home } from '../screens/Home/Home'


const { Screen, Navigator } = createStackNavigator()


export function StackRoutes() {
  return (
    <Navigator>
      <Screen
        name='Home'
        component={Home}
        options={{
          headerShown: false
          }
        }
      />
    </Navigator>
  )
}