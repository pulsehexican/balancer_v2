import { Config } from '../types';
import contracts from './contracts';
import keys from './keys';
import pools from './pools';
import tokenlists from './tokenlists';
import tokens from './tokens';
import rateProviders from './rateProviders';

const config: Config = {
  key: '369',
  chainId: 369,
  chainName: 'Pulsechain',
  name: 'Pulsechain Mainnet',
  shortName: 'Pulsechain',
  monorepoName: 'pulsechain',
  slug: 'pulsechain',
  network: 'pulsechain',
  trustWalletNetwork: 'pulsechain',
  unknown: false,
  visibleInUI: true,
  testNetwork: false,
  rpc: `https://rpc.pulsechain.com`,
  ws: `wss://rpc.pulsechain.com`,
  explorer: 'https://scan.pulsechain.com',
  explorerName: 'Etherscan',
  subgraph: 'https://api.thegraph.com/subgraphs/name/balancer-labs/balancer-v2',
  balancerApi: 'https://api.balancer.fi',
  poolsUrlV2:
    'https://storageapi.fleek.co/johngrantuk-team-bucket/poolsV2.json',
  subgraphs: {
    main: [
      'https://api.thegraph.com/subgraphs/name/balancer-labs/balancer-v2',
      `https://gateway.thegraph.com/api/${keys.graph}/subgraphs/id/GAWNgiGrA9eRce5gha9tWc7q5DPvN3fs5rSJ6tEULFNM`,
    ],
    aave: 'https://api.thegraph.com/subgraphs/name/aave/protocol-v2',
    gauge:
      'https://api.thegraph.com/subgraphs/name/balancer-labs/balancer-gauges',
    blocks:
      'https://api.thegraph.com/subgraphs/name/blocklytics/ethereum-blocks',
  },
  bridgeUrl: '',
  supportsEIP1559: true,
  supportsElementPools: true,
  blockTime: 10,
  nativeAsset: {
    name: 'Ether',
    address: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
    symbol: 'ETH',
    decimals: 18,
    deeplinkId: 'ether',
    logoURI: 'tokens/eth.png',
    minTransactionBuffer: '0.05',
  },
  thirdParty: {
    coingecko: {
      nativeAssetId: 'ethereum',
      platformId: 'pulsechain',
    },
    apyVision: {
      networkName: 'pls',
    },
  },
  addresses: {
    ...contracts,
  },
  pools,
  tokens,
  keys,
  gauges: {
    type: 2,
    weight: 100,
  },
  tokenlists,
  rateProviders,
};

export default config;
