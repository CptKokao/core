"use client";

import { AppSessionProvider } from "@/entities/session/app-session-privider";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { useState } from "react";
import { ThemeProvider } from "@/features/theme/theme-provider";
import { queryClient } from "@/shared/api/query-client";
// import { AppSessionProvider } from "@/kernel/lib/next-auth/client";
import { ComposeChildren } from "@/shared/lib/react";
import { QueryClientProvider } from "@tanstack/react-query";
// import { sharedApi } from "@/kernel/lib/trpc/client";
// import { TRPCUntypedClient, httpBatchLink } from "@trpc/client";
// import { publicConfig } from "@/shared/config/public";
// import { AnyRouter } from "@trpc/server";

export function AppProvider({ children }: { children: React.ReactNode }) {
  //   const [queryClient] = useState(() => new QueryClient());
  //   const [trpcClient] = useState<TRPCUntypedClient<AnyRouter>>(() =>
  //     sharedApi.createClient({
  //       links: [
  //         httpBatchLink({
  //           url: `${publicConfig.PUBLIC_URL}/api/trpc`,
  //         }),
  //       ],
  //     }),
  //   );

  return (
    <ComposeChildren>
      {/* <sharedApi.Provider client={trpcClient} queryClient={queryClient}>
        <></>
      </sharedApi.Provider> */}
      <ThemeProvider />
      <AppSessionProvider />
      <QueryClientProvider client={queryClient} />
      {children}
    </ComposeChildren>
  );
}
