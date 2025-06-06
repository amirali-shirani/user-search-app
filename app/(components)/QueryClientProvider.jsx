'use client';

import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'

const queryClient = new QueryClient()

export function QueryProvider({children}) {

    return (
        <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={false}/>
            {children}
        </QueryClientProvider>
    );
}
