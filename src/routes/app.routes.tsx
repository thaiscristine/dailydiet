import { createNativeStackNavigator } from "@react-navigation/native-stack";    

import { Dashboard } from "@screens/Dashboard";
import { NewMeal } from "@screens/NewMeal";
import { Statistics } from "@screens/Statistics";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }} >
      <Screen name="dashboard" component={Dashboard} />
      <Screen name="statistics" component={Statistics} />
      <Screen name="newMeal" component={NewMeal} />
    </Navigator>
  );
}