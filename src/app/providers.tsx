// app/providers.tsx
"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider>
        {children}{" "}
        <ProgressBar
          height="4px"
          color="blue"
          options={{ showSpinner: false }}
          shallowRouting
        />
      </ChakraProvider>
    </CacheProvider>
  );
}
