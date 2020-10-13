import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import HomeScreen from "./src/screens/HomeScreen";
import ListImagesScreen from "./src/screens/ListImagesScreen";
import ListScreen from "./src/screens/ListScreen";
import CounterScreen from "./src/screens/CounterScreen";
import ColorScreen from "./src/screens/ColorScreen";
import ColorSeclectorScreen from "./src/screens/ColorSeclectorScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen,
    ListImages: ListImagesScreen,
    Counter: CounterScreen,
    Color: ColorScreen,
    ColorSeclector: ColorSeclectorScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
