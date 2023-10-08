import { Contracts } from '../types';
import * as pulsechain from '@/assets/data/contracts/pulsechain.json';

const contracts: Contracts = {
  merkleRedeem: '0x6d19b2bF3A36A61530909Ae65445a906D98A2Fa8',
  merkleOrchard: '0xdAE7e32ADc5d490a43cCba1f0c736033F2b4eFca',
  merkleOrchardV2: pulsechain.MerkleOrchard,
  multicall: '0x5ba1e12693dc8f9c48aad8770482f4739beed696',
  authorizer: pulsechain.Authorizer,
  vault: pulsechain.Vault,
  weightedPoolFactory: pulsechain.WeightedPoolFactory,
  stablePoolFactory: '0xc66Ba2B6595D3613CCab350C886aCE23866EDe24',
  lidoRelayer: '',
  balancerHelpers: pulsechain.BalancerHelpers,
  batchRelayer: pulsechain.BalancerRelayer,
  gaugeFactory: '0x4E7bBd911cf1EFa442BC1b2e9Ea01ffE785412EC',
  balancerMinter: pulsechain.BalancerMinter,
  gaugeController: '',
  tokenAdmin: '',
  veBAL: '',
  veDelegationProxy: pulsechain.VotingEscrowDelegationProxy,
  veBALHelpers: '',
  feeDistributor: '',
  feeDistributorDeprecated: '',
  faucet: '',
  gaugeRewardsHelper: pulsechain.ChildChainGaugeRewardHelper,
  gaugeWorkingBalanceHelper: pulsechain.ChildChainGaugeWorkingBalanceHelper,
  gaugeCheckpointer: pulsechain.ChildChainGaugeCheckpointer,
};

export default contracts;
