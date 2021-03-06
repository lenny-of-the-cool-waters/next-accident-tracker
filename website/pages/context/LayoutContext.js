import { createContext, useContext, useReducer } from "react";

const LayoutStateContext = createContext();
const LayoutDispatchContext = createContext();

const layoutReducer = (state, action) => {
    switch(action.type) {
        case "TOGGLE_SIDEBAR":
            return { ...state, isSideBarOpened: !state.isSideBarOpened };
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}

const LayoutProvider = ({ children }) => {
    const [state, dispatch] = useReducer(layoutReducer, { isSideBarOpened: true });

    return (
        <LayoutStateContext.Provider value={state}>
            <LayoutDispatchContext.Provider value={dispatch}>
                { children }
            </LayoutDispatchContext.Provider>
        </LayoutStateContext.Provider>
    );
}

const useLayoutState = () => {
    let context = useContext(LayoutStateContext);
    if(context === undefined) {
        throw new Error("useLayoutState must be used within a LayoutProvider");
    }

    return context;
}

const useLayoutDispatch = () => {
    let context = useContext(LayoutDispatchContext);
    if(context === undefined) {
        throw new Error("useLayoutDispatch must be used within a LayoutProvider");
    }

    return context;
}

const toggleSideBar = () => {
    dispatch({ type: "TOGGLE_SIDEBAR" })
}

export { LayoutProvider, useLayoutState, useLayoutDispatch, toggleSideBar}