import { createContext } from "react";
import { App } from "@/types/App";

const AppContext = createContext<App>({} as App);

export default AppContext;