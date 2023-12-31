import { txResponseMock } from '@/__mocks__/transactions';
export let userAddress = '0xccc0c9C1b6C8537BeD0487C3fd64CF6140bd4664';

export default function Web3Service() {
  return {
    txBuilder: {
      contract: {
        sendTransaction: vi.fn().mockResolvedValue(txResponseMock),
      },
    },
    getUserAddress: vi.fn().mockImplementation(() => userAddress),
  };
}

export const web3Service = Web3Service();

export function setUserAddress(address: string) {
  userAddress = address;
}
