
import { registerRootComponent } from "expo";

import App from "./app/App";
import app2 from "./app/app2";
import app3 from "./app/app3";
import app4 from "./app/app4";
import app5 from "./app/app5";
import lap2cro2 from "./lap2/app";


// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(lap2cro2);
