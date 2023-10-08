import { Protocol } from '@/composables/useProtocols';
import { CSP_ISSUE_POOL_IDS } from '@/constants/pool-lists/csp-issue';
import { PoolFeature, PoolWarning, Pools } from '@/types/pools';
import { Network } from '../types';

const pools: Pools = {
  IdsMap: {},
  Pagination: {
    PerPage: 10,
    PerPool: 10,
    PerPoolInitial: 5,
  },
  BoostsEnabled: false,
  DelegateOwner: '0xba1ba1ba1ba1ba1ba1ba1ba1ba1ba1ba1ba1ba1b',
  ZeroAddress: '0x0000000000000000000000000000000000000000',
  DynamicFees: {
    Gauntlet: [],
  },
  BlockList: [''],
  IncludedPoolTypes: [
    'Weighted',
    'Stable',
    'MetaStable',
    'ComposableStable',
    'FX',
    'Gyro2',
    'Gyro3',
    'GyroE',
  ],
  Stable: {
    AllowList: [
      '0xa1d14d922a575232066520eda11e27760946c991000000000000000000000012', // Boosted Aave v3 USD
      '0xa154009870e9b6431305f19b09f9cfd7284d4e7a000000000000000000000013', // sAVAX/Boosted Aave v3 WAVAX
      '0xece571847897fd61e764d455dc15cf1cd9de8d6f000000000000000000000014', // yyAVAX/Boosted Aave v3 WAVAX
      '0x054e7b0c73e1ee5aed6864fa511658fc2b54bcaa000000000000000000000015', // ggAVAX/Boosted Aave v3 WAVAX
      '0x670734d704eb7ef424d75321670f921fbf42e9cf000000000000000000000016', // sAVAX-ankrAVAX
      '0xc13546b97b9b1b15372368dc06529d7191081f5b00000000000000000000001d', // ggAVAX/wavax
      '0xb26f0e66317846bd5fe0cbaa1d269f0efeb05c9600000000000000000000001e', // usdc/usdt
      '0xfd2620c9cfcec7d152467633b3b0ca338d3d78cc00000000000000000000001c', // sAVAX/wavax
      '0x9fa6ab3d78984a69e712730a2227f20bcc8b5ad900000000000000000000001f', // yyAVAX/wavax
    ],
  },
  Investment: {
    AllowList: [''],
  },
  Weighted: {
    // Only effective after given timestamp here: usePool.ts#createdAfterTimestamp
    // see useDisabledJoinPool.ts#nonAllowedWeightedPoolAfterTimestamp for logic.
    AllowList: [
      '0xe4a4565ad31a3af8286bc6e6dbb20ba76752557700010000000000000000000b',
      '0x3bde1563903ebb564ca37d5736afbb850929cfd7000200000000000000000017', // ankrAVAX-ankrETH
      '0x3396cca90c9335565ecdbae3a260dafb13a7959e000200000000000000000018', // BETS-sAVAX
      '0xb06fdbd2941d2f42d60accee85086198ac72923600020000000000000000001a', // HATCHY-WAVAX
      '0x3f1a2c4a3a751f6626bd90ef16e104f0772d4d6b00020000000000000000001b', // btc/bbausd
      '0x96518f83d66bdc6a5812f01c54f8e022f6796399000200000000000000000020', // btc.b/usd
      '0x1f43a5286c57813f75fb8edeef8b2c5e1878ec2d000100000000000000000025', // 33BTC.b-33USDt-33USDC
      '0x3441a6f48f0f5a1ada460885df5b461deb2ee494000200000000000000000024', // 50BTC.b-50USDC
    ],
  },
  Factories: {
    '0x230a59f4d9adc147480f03b0d3fffecd56c3289a': 'weightedPool',
    '0x3b1eb8eb7b43882b385ab30533d9a2bef9052a98': 'composableStablePool',
    '0xe42ffa682a26ef8f25891db4882932711d42e467': 'composableStablePool',
    '0x81fe9e5b28da92ae949b705dfdb225f7a7cc5134': 'fx',
  },
  Stakable: {
    VotingGaugePools: [
      '0x9fa6ab3d78984a69e712730a2227f20bcc8b5ad900000000000000000000001f',
      '0xfd2620c9cfcec7d152467633b3b0ca338d3d78cc00000000000000000000001c',
      '0xc13546b97b9b1b15372368dc06529d7191081f5b00000000000000000000001d',
      '0xb26f0e66317846bd5fe0cbaa1d269f0efeb05c9600000000000000000000001e',
      '0x55bec22f8f6c69137ceaf284d9b441db1b9bfedc000200000000000000000011', // USDC/EUROC
    ],
    AllowList: [
      '0xece571847897fd61e764d455dc15cf1cd9de8d6f000000000000000000000014',
      '0xa154009870e9b6431305f19b09f9cfd7284d4e7a000000000000000000000013',
      '0xa1d14d922a575232066520eda11e27760946c991000000000000000000000012',
      '0x054e7b0c73e1ee5aed6864fa511658fc2b54bcaa000000000000000000000015',
      '0x670734d704eb7ef424d75321670f921fbf42e9cf000000000000000000000016',
      '0x3bde1563903ebb564ca37d5736afbb850929cfd7000200000000000000000017',
      '0x3f1a2c4a3a751f6626bd90ef16e104f0772d4d6b00020000000000000000001b', // 50BTC.b-50bb-a-USD
      '0x96518f83d66bdc6a5812f01c54f8e022f6796399000200000000000000000020',
    ],
  },
  Metadata: {
    '0xa1d14d922a575232066520eda11e27760946c991000000000000000000000012': {
      name: 'Balancer Boosted Aave v3 USD',
      hasIcon: false,
      features: {
        [PoolFeature.Boosted]: {
          featureProtocols: [Protocol.Aave],
        },
      },
    },
    '0xa154009870e9b6431305f19b09f9cfd7284d4e7a000000000000000000000013': {
      name: 'sAVAX/Boosted Aave v3 WAVAX',
      hasIcon: false,
      features: {
        [PoolFeature.Boosted]: {
          featureProtocols: [Protocol.Aave],
        },
      },
    },
    '0xece571847897fd61e764d455dc15cf1cd9de8d6f000000000000000000000014': {
      name: 'yyAVAX/Boosted Aave v3 WAVAX',
      hasIcon: false,
      features: {
        [PoolFeature.Boosted]: {
          featureProtocols: [Protocol.Aave],
        },
      },
    },
    '0x054e7b0c73e1ee5aed6864fa511658fc2b54bcaa000000000000000000000015': {
      name: 'ggAVAX/Boosted Aave v3 WAVAX',
      hasIcon: false,
      features: {
        [PoolFeature.Boosted]: {
          featureProtocols: [Protocol.Aave],
        },
      },
    },
    '0x3f1a2c4a3a751f6626bd90ef16e104f0772d4d6b00020000000000000000001b': {
      name: 'BTC.b/Boosted Aave V3 USD',
      hasIcon: false,
      features: {
        [PoolFeature.Boosted]: {
          featureProtocols: [Protocol.Aave],
        },
      },
    },
  },
  Deep: [
    '0xa1d14d922a575232066520eda11e27760946c991000000000000000000000012', // Boosted Aave v3 USD
    '0xa154009870e9b6431305f19b09f9cfd7284d4e7a000000000000000000000013', // sAVAX/Boosted Aave v3 WAVAX
    '0xece571847897fd61e764d455dc15cf1cd9de8d6f000000000000000000000014', // yyAVAX/Boosted Aave v3 WAVAX
    '0x054e7b0c73e1ee5aed6864fa511658fc2b54bcaa000000000000000000000015', // ggAVAX/Boosted Aave v3 WAVAX
    '0x3f1a2c4a3a751f6626bd90ef16e104f0772d4d6b00020000000000000000001b', // btc/bbausd
    '0x96518f83d66bdc6a5812f01c54f8e022f6796399000200000000000000000020', // btc.b/usd
  ],
  BoostedApr: [],
  DisabledJoins: [...CSP_ISSUE_POOL_IDS[Network.AVALANCHE]],
  Deprecated: {
    '0xa154009870e9b6431305f19b09f9cfd7284d4e7a000000000000000000000013': {
      newPool:
        '0xfd2620c9cfcec7d152467633b3b0ca338d3d78cc00000000000000000000001c',
      description: 'deprecatedPool.hasNewPool.description',
    },
    '0x054e7b0c73e1ee5aed6864fa511658fc2b54bcaa000000000000000000000015': {
      newPool:
        '0xc13546b97b9b1b15372368dc06529d7191081f5b00000000000000000000001d',
      description: 'deprecatedPool.hasNewPool.description',
    },
    '0xa1d14d922a575232066520eda11e27760946c991000000000000000000000012': {
      newPool:
        '0xb26f0e66317846bd5fe0cbaa1d269f0efeb05c9600000000000000000000001e',
      description: 'deprecatedPool.hasNewPool.description',
    },
    '0xece571847897fd61e764d455dc15cf1cd9de8d6f000000000000000000000014': {
      newPool:
        '0x9fa6ab3d78984a69e712730a2227f20bcc8b5ad900000000000000000000001f',
      description: 'deprecatedPool.hasNewPool.description',
    },
    '0x3f1a2c4a3a751f6626bd90ef16e104f0772d4d6b00020000000000000000001b': {
      newPool:
        '0x96518f83d66bdc6a5812f01c54f8e022f6796399000200000000000000000020',
      description: 'deprecatedPool.hasNewPool.description',
    },
  },
  GaugeMigration: {},
  BrandedRedirect: {
    FX: 'xave',
    Gyro2: 'gyro',
    Gyro3: 'gyro',
    GyroE: 'gyro',
  },
  Issues: {
    [PoolWarning.CspPoolVulnWarning]: CSP_ISSUE_POOL_IDS[Network.AVALANCHE],
  },
};

export default pools;
