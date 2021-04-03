import React, { createContext, useState } from "react";


export const WatchListContext = createContext();

export const WatchListContextProvider = props => {
    const [watchlist, setWatchList] = useState(["bitcoin", "ethereum", "litecoin"])

    return (
        <WatchListContext.Provider value={{ watchlist }}>
            {props.children}
        </WatchListContext.Provider>
    )
}