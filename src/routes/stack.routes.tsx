import { createStackNavigator } from '@react-navigation/stack'
import { Home } from '../screens/Home/Home'
import { Forms } from '../screens/Forms/Forms'


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
      <Screen
        name='Forms'
        component={Forms}
        options={{
          headerShown: false
        }}  />
    </Navigator>
  )
}