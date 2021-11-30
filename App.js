import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ExOneComponent from "./src/screens/ExOneComponent";
const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    ExOne: ExOneComponent
  },
  {
    initialRouteName: "ExOne",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
