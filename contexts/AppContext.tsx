import { createContext } from "react";
import { Navigation } from "@/types/App";

const AppContext = createContext<Navigation>({} as Navigation);

export default AppContext;