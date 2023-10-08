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
  subgraph: '',
  balancerApi: 'https://api.balancer.fi',
  poolsUrlV2:
    '',
  subgraphs: {
    main: [
      '',
    ],
    aave: '',
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
