import React from 'react';
import { StateProvider } from '@/context/StateProvider';
import reducer from '@/context/reducer';
import { initialState } from '@/context/initialState';

function MyApp({ Component, pageProps }: { Component: any, pageProps: any }) {
    return (
        <StateProvider reducer={reducer} initialState={initialState}>
            <Component {...pageProps} />
        </StateProvider>
    );
}
export default MyApp;
