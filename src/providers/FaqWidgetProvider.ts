/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

export const FaqWidgetProvider = React.createContext({
    open: false,
    setOpen: (_value: boolean) => {}
});
