import React from 'react'
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { polygonMumbai, polygon } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public'
const { provider, webSocketProvider } = configureChains([polygon, polygonMumbai], [publicProvider()]);

import { LensConfig, staging, LensProvider } from '@lens-protocol/react-web';
import { bindings as wagmiBindings } from '@lens-protocol/wagmi';

const lensConfig: LensConfig = {
  bindings: wagmiBindings(),
  environment: staging,
};

const client = createClient({
  autoConnect: true,
  provider,
  webSocketProvider,
});

export default function HomePage() {

  return <WagmiConfig client={client}>
    <LensProvider config={lensConfig}>
      <div>Hello!</div>
    </LensProvider>
  </WagmiConfig>

}
