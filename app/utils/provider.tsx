"use client"

import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";


const queryClient = new QueryClient();

export default function QueryProviders({children}: React.PropsWithChildren) {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}
      
    