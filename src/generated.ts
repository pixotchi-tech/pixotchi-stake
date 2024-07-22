import {
  createUseReadContract,
  createUseWriteContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
} from 'wagmi/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// LeafToken
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xe78ee52349d7b031e2a6633e07c037c3147db116)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x33feeD5a3eD803dc03BBF4B6041bB2b86FACD6C4)
 */
export const leafTokenAbi = [
  { type: 'constructor', inputs: [], stateMutability: 'nonpayable' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'delegator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'fromDelegate',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'toDelegate',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'DelegateChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'delegate',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'previousBalance',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'newBalance',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'DelegateVotesChanged',
  },
  { type: 'event', anonymous: false, inputs: [], name: 'EIP712DomainChanged' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'platformFeeRecipient',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'flatFee',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'FlatPlatformFeeUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'version', internalType: 'uint8', type: 'uint8', indexed: false },
    ],
    name: 'Initialized',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'platformFeeRecipient',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'platformFeeBps',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'PlatformFeeInfoUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'feeType',
        internalType: 'enum IPlatformFee.PlatformFeeType',
        type: 'uint8',
        indexed: false,
      },
    ],
    name: 'PlatformFeeTypeUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'recipient',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'PrimarySaleRecipientUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'previousAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'newAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
    ],
    name: 'RoleAdminChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleGranted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleRevoked',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'mintedTo',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'quantityMinted',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'TokensMinted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'signer',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'mintedTo',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'mintRequest',
        internalType: 'struct ITokenERC20.MintRequest',
        type: 'tuple',
        components: [
          { name: 'to', internalType: 'address', type: 'address' },
          {
            name: 'primarySaleRecipient',
            internalType: 'address',
            type: 'address',
          },
          { name: 'quantity', internalType: 'uint256', type: 'uint256' },
          { name: 'price', internalType: 'uint256', type: 'uint256' },
          { name: 'currency', internalType: 'address', type: 'address' },
          {
            name: 'validityStartTimestamp',
            internalType: 'uint128',
            type: 'uint128',
          },
          {
            name: 'validityEndTimestamp',
            internalType: 'uint128',
            type: 'uint128',
          },
          { name: 'uid', internalType: 'bytes32', type: 'bytes32' },
        ],
        indexed: false,
      },
    ],
    name: 'TokensMintedWithSignature',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [],
    name: 'CLOCK_MODE',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'DEFAULT_ADMIN_ROLE',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'DOMAIN_SEPARATOR',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'amount', internalType: 'uint256', type: 'uint256' }],
    name: 'burn',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'burnFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'pos', internalType: 'uint32', type: 'uint32' },
    ],
    name: 'checkpoints',
    outputs: [
      {
        name: '',
        internalType: 'struct ERC20VotesUpgradeable.Checkpoint',
        type: 'tuple',
        components: [
          { name: 'fromBlock', internalType: 'uint32', type: 'uint32' },
          { name: 'votes', internalType: 'uint224', type: 'uint224' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'clock',
    outputs: [{ name: '', internalType: 'uint48', type: 'uint48' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'contractType',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [],
    name: 'contractURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'contractVersion',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'subtractedValue', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'decreaseAllowance',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'delegatee', internalType: 'address', type: 'address' }],
    name: 'delegate',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'delegatee', internalType: 'address', type: 'address' },
      { name: 'nonce', internalType: 'uint256', type: 'uint256' },
      { name: 'expiry', internalType: 'uint256', type: 'uint256' },
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'delegateBySig',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'delegates',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'eip712Domain',
    outputs: [
      { name: 'fields', internalType: 'bytes1', type: 'bytes1' },
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'version', internalType: 'string', type: 'string' },
      { name: 'chainId', internalType: 'uint256', type: 'uint256' },
      { name: 'verifyingContract', internalType: 'address', type: 'address' },
      { name: 'salt', internalType: 'bytes32', type: 'bytes32' },
      { name: 'extensions', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'timepoint', internalType: 'uint256', type: 'uint256' }],
    name: 'getPastTotalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'timepoint', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getPastVotes',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getPlatformFeeInfo',
    outputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'uint16', type: 'uint16' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'role', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getRoleAdmin',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'index', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getRoleMember',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'role', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getRoleMemberCount',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'getVotes',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'grantRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'hasRole',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'addedValue', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'increaseAllowance',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_defaultAdmin', internalType: 'address', type: 'address' },
      { name: '_name', internalType: 'string', type: 'string' },
      { name: '_symbol', internalType: 'string', type: 'string' },
      { name: '_contractURI', internalType: 'string', type: 'string' },
      {
        name: '_trustedForwarders',
        internalType: 'address[]',
        type: 'address[]',
      },
      {
        name: '_primarySaleRecipient',
        internalType: 'address',
        type: 'address',
      },
      {
        name: '_platformFeeRecipient',
        internalType: 'address',
        type: 'address',
      },
      { name: '_platformFeeBps', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'forwarder', internalType: 'address', type: 'address' }],
    name: 'isTrustedForwarder',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'mintTo',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: '_req',
        internalType: 'struct ITokenERC20.MintRequest',
        type: 'tuple',
        components: [
          { name: 'to', internalType: 'address', type: 'address' },
          {
            name: 'primarySaleRecipient',
            internalType: 'address',
            type: 'address',
          },
          { name: 'quantity', internalType: 'uint256', type: 'uint256' },
          { name: 'price', internalType: 'uint256', type: 'uint256' },
          { name: 'currency', internalType: 'address', type: 'address' },
          {
            name: 'validityStartTimestamp',
            internalType: 'uint128',
            type: 'uint128',
          },
          {
            name: 'validityEndTimestamp',
            internalType: 'uint128',
            type: 'uint128',
          },
          { name: 'uid', internalType: 'bytes32', type: 'bytes32' },
        ],
      },
      { name: '_signature', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'mintWithSignature',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [{ name: 'data', internalType: 'bytes[]', type: 'bytes[]' }],
    name: 'multicall',
    outputs: [{ name: 'results', internalType: 'bytes[]', type: 'bytes[]' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'nonces',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'numCheckpoints',
    outputs: [{ name: '', internalType: 'uint32', type: 'uint32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'permit',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'primarySaleRecipient',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'renounceRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'revokeRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_uri', internalType: 'string', type: 'string' }],
    name: 'setContractURI',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: '_platformFeeRecipient',
        internalType: 'address',
        type: 'address',
      },
      { name: '_platformFeeBps', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'setPlatformFeeInfo',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_saleRecipient', internalType: 'address', type: 'address' },
    ],
    name: 'setPrimarySaleRecipient',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: '_req',
        internalType: 'struct ITokenERC20.MintRequest',
        type: 'tuple',
        components: [
          { name: 'to', internalType: 'address', type: 'address' },
          {
            name: 'primarySaleRecipient',
            internalType: 'address',
            type: 'address',
          },
          { name: 'quantity', internalType: 'uint256', type: 'uint256' },
          { name: 'price', internalType: 'uint256', type: 'uint256' },
          { name: 'currency', internalType: 'address', type: 'address' },
          {
            name: 'validityStartTimestamp',
            internalType: 'uint128',
            type: 'uint128',
          },
          {
            name: 'validityEndTimestamp',
            internalType: 'uint128',
            type: 'uint128',
          },
          { name: 'uid', internalType: 'bytes32', type: 'bytes32' },
        ],
      },
      { name: '_signature', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'verify',
    outputs: [
      { name: '', internalType: 'bool', type: 'bool' },
      { name: '', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'view',
  },
] as const

/**
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xe78ee52349d7b031e2a6633e07c037c3147db116)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x33feeD5a3eD803dc03BBF4B6041bB2b86FACD6C4)
 */
export const leafTokenAddress = {
  8453: '0xE78ee52349D7b031E2A6633E07c037C3147DB116',
  84532: '0x33feeD5a3eD803dc03BBF4B6041bB2b86FACD6C4',
} as const

/**
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xe78ee52349d7b031e2a6633e07c037c3147db116)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x33feeD5a3eD803dc03BBF4B6041bB2b86FACD6C4)
 */
export const leafTokenConfig = {
  address: leafTokenAddress,
  abi: leafTokenAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SeedToken
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x546D239032b24eCEEE0cb05c92FC39090846adc7)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xc64F740D216B6ec49e435a8a08132529788e8DD0)
 */
export const seedTokenAbi = [
  { type: 'constructor', inputs: [], stateMutability: 'nonpayable' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'isExcluded',
        internalType: 'bool',
        type: 'bool',
        indexed: false,
      },
    ],
    name: 'ExcludeFromFees',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'pair', internalType: 'address', type: 'address', indexed: true },
      { name: 'value', internalType: 'bool', type: 'bool', indexed: true },
    ],
    name: 'SetAutomatedMarketMakerPair',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'tokensSwapped',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'ethReceived',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'tokensIntoLiquidity',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'SwapAndLiquify',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'newAddress',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'oldAddress',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'UpdateUniswapV2Router',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'newWallet',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'oldWallet',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'revShareWalletUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'newWallet',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'oldWallet',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'teamWalletUpdated',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: '_isExcludedMaxTransactionAmount',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'acknowledgement',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'automatedMarketMakerPairs',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'buyLiquidityFee',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'buyRevShareFee',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'buyTeamFee',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'buyTotalFees',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'subtractedValue', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'decreaseAllowance',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'excluded', internalType: 'bool', type: 'bool' },
    ],
    name: 'excludeFromFees',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'updAds', internalType: 'address', type: 'address' },
      { name: 'isEx', internalType: 'bool', type: 'bool' },
    ],
    name: 'excludeFromMaxTransaction',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'addedValue', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'increaseAllowance',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'isExcludedFromFees',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'limitsInEffect',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'maxTransactionAmount',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'maxWallet',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'removeLimits',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'revShareWallet',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'risks',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [],
    name: 'sellLiquidityFee',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'sellRevShareFee',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'sellTeamFee',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'sellTotalFees',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'pair', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'bool', type: 'bool' },
    ],
    name: 'setAutomatedMarketMakerPair',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'swapEnabled',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'swapTokensAtAmount',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'teamWallet',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'tokensForLiquidity',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'tokensForRevShare',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'tokensForTeam',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'uniswapV2Pair',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'uniswapV2Router',
    outputs: [
      { name: '', internalType: 'contract IRouter02', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_revShareFee', internalType: 'uint256', type: 'uint256' },
      { name: '_liquidityFee', internalType: 'uint256', type: 'uint256' },
      { name: '_teamFee', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'updateBuyFees',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newNum', internalType: 'uint256', type: 'uint256' }],
    name: 'updateMaxTxnAmount',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newNum', internalType: 'uint256', type: 'uint256' }],
    name: 'updateMaxWalletAmount',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'newRevShareWallet', internalType: 'address', type: 'address' },
    ],
    name: 'updateRevShareWallet',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_revShareFee', internalType: 'uint256', type: 'uint256' },
      { name: '_liquidityFee', internalType: 'uint256', type: 'uint256' },
      { name: '_teamFee', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'updateSellFees',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'enabled', internalType: 'bool', type: 'bool' }],
    name: 'updateSwapEnabled',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newAmount', internalType: 'uint256', type: 'uint256' }],
    name: 'updateSwapTokensAtAmount',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newWallet', internalType: 'address', type: 'address' }],
    name: 'updateTeamWallet',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'toAddr', internalType: 'address', type: 'address' }],
    name: 'withdrawStuckEth',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_token', internalType: 'address', type: 'address' },
      { name: '_to', internalType: 'address', type: 'address' },
    ],
    name: 'withdrawStuckToken',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  { type: 'receive', stateMutability: 'payable' },
] as const

/**
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x546D239032b24eCEEE0cb05c92FC39090846adc7)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xc64F740D216B6ec49e435a8a08132529788e8DD0)
 */
export const seedTokenAddress = {
  8453: '0x546D239032b24eCEEE0cb05c92FC39090846adc7',
  84532: '0xc64F740D216B6ec49e435a8a08132529788e8DD0',
} as const

/**
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x546D239032b24eCEEE0cb05c92FC39090846adc7)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xc64F740D216B6ec49e435a8a08132529788e8DD0)
 */
export const seedTokenConfig = {
  address: seedTokenAddress,
  abi: seedTokenAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// StakeContract
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xf15d93c3617525054af05338cc6ccf18886bd03a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xEA6fBFDb8c846323f56cd819350fB63f1D8aFdce)
 */
export const stakeContractAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: '_nativeTokenWrapper', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'prevURI',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
      {
        name: 'newURI',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
    ],
    name: 'ContractURIUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'version', internalType: 'uint8', type: 'uint8', indexed: false },
    ],
    name: 'Initialized',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: '_amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'RewardTokensDepositedByAdmin',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: '_amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'RewardTokensWithdrawnByAdmin',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'staker',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'rewardAmount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'RewardsClaimed',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'previousAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'newAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
    ],
    name: 'RoleAdminChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleGranted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleRevoked',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'staker',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'TokensStaked',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'staker',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'TokensWithdrawn',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'oldAmount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'newAmount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'UpdatedMinStakeAmount',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'oldNumerator',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'newNumerator',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'oldDenominator',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'newDenominator',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'UpdatedRewardRatio',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'oldTimeUnit',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'newTimeUnit',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'UpdatedTimeUnit',
  },
  {
    type: 'function',
    inputs: [],
    name: 'DEFAULT_ADMIN_ROLE',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'claimRewards',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'contractType',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [],
    name: 'contractURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'contractVersion',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: '_amount', internalType: 'uint256', type: 'uint256' }],
    name: 'depositRewardTokens',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getRewardRatio',
    outputs: [
      { name: '_numerator', internalType: 'uint256', type: 'uint256' },
      { name: '_denominator', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getRewardTokenBalance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'role', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getRoleAdmin',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'index', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getRoleMember',
    outputs: [{ name: 'member', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'role', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getRoleMemberCount',
    outputs: [{ name: 'count', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_staker', internalType: 'address', type: 'address' }],
    name: 'getStakeInfo',
    outputs: [
      { name: '_tokensStaked', internalType: 'uint256', type: 'uint256' },
      { name: '_rewards', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getTimeUnit',
    outputs: [{ name: '_timeUnit', internalType: 'uint80', type: 'uint80' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'grantRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'hasRole',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'hasRoleWithSwitch',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_defaultAdmin', internalType: 'address', type: 'address' },
      { name: '_contractURI', internalType: 'string', type: 'string' },
      {
        name: '_trustedForwarders',
        internalType: 'address[]',
        type: 'address[]',
      },
      { name: '_rewardToken', internalType: 'address', type: 'address' },
      { name: '_stakingToken', internalType: 'address', type: 'address' },
      { name: '_timeUnit', internalType: 'uint80', type: 'uint80' },
      {
        name: '_rewardRatioNumerator',
        internalType: 'uint256',
        type: 'uint256',
      },
      {
        name: '_rewardRatioDenominator',
        internalType: 'uint256',
        type: 'uint256',
      },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'forwarder', internalType: 'address', type: 'address' }],
    name: 'isTrustedForwarder',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'data', internalType: 'bytes[]', type: 'bytes[]' }],
    name: 'multicall',
    outputs: [{ name: 'results', internalType: 'bytes[]', type: 'bytes[]' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'renounceRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'revokeRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'rewardToken',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'rewardTokenDecimals',
    outputs: [{ name: '', internalType: 'uint16', type: 'uint16' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_uri', internalType: 'string', type: 'string' }],
    name: 'setContractURI',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_numerator', internalType: 'uint256', type: 'uint256' },
      { name: '_denominator', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'setRewardRatio',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_timeUnit', internalType: 'uint80', type: 'uint80' }],
    name: 'setTimeUnit',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_amount', internalType: 'uint256', type: 'uint256' }],
    name: 'stake',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'stakers',
    outputs: [
      { name: 'timeOfLastUpdate', internalType: 'uint128', type: 'uint128' },
      {
        name: 'conditionIdOflastUpdate',
        internalType: 'uint64',
        type: 'uint64',
      },
      { name: 'amountStaked', internalType: 'uint256', type: 'uint256' },
      { name: 'unclaimedRewards', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'stakersArray',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'stakingToken',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'stakingTokenBalance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'stakingTokenDecimals',
    outputs: [{ name: '', internalType: 'uint16', type: 'uint16' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_amount', internalType: 'uint256', type: 'uint256' }],
    name: 'withdraw',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_amount', internalType: 'uint256', type: 'uint256' }],
    name: 'withdrawRewardTokens',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  { type: 'receive', stateMutability: 'payable' },
] as const

/**
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xf15d93c3617525054af05338cc6ccf18886bd03a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xEA6fBFDb8c846323f56cd819350fB63f1D8aFdce)
 */
export const stakeContractAddress = {
  8453: '0xF15D93c3617525054aF05338CC6Ccf18886BD03A',
  84532: '0xEA6fBFDb8c846323f56cd819350fB63f1D8aFdce',
} as const

/**
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xf15d93c3617525054af05338cc6ccf18886bd03a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xEA6fBFDb8c846323f56cd819350fB63f1D8aFdce)
 */
export const stakeContractConfig = {
  address: stakeContractAddress,
  abi: stakeContractAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// erc20
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc20Abi = [
  {
    type: 'event',
    inputs: [
      { name: 'owner', type: 'address', indexed: true },
      { name: 'spender', type: 'address', indexed: true },
      { name: 'value', type: 'uint256', indexed: false },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    inputs: [
      { name: 'from', type: 'address', indexed: true },
      { name: 'to', type: 'address', indexed: true },
      { name: 'value', type: 'uint256', indexed: false },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', type: 'address' },
      { name: 'spender', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'recipient', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'sender', type: 'address' },
      { name: 'recipient', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ type: 'bool' }],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link leafTokenAbi}__
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xe78ee52349d7b031e2a6633e07c037c3147db116)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x33feeD5a3eD803dc03BBF4B6041bB2b86FACD6C4)
 */
export const useReadLeafToken = /*#__PURE__*/ createUseReadContract({
  abi: leafTokenAbi,
  address: leafTokenAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link leafTokenAbi}__ and `functionName` set to `"CLOCK_MODE"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xe78ee52349d7b031e2a6633e07c037c3147db116)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x33feeD5a3eD803dc03BBF4B6041bB2b86FACD6C4)
 */
export const useReadLeafTokenClockMode = /*#__PURE__*/ createUseReadContract({
  abi: leafTokenAbi,
  address: leafTokenAddress,
  functionName: 'CLOCK_MODE',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link leafTokenAbi}__ and `functionName` set to `"DEFAULT_ADMIN_ROLE"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xe78ee52349d7b031e2a6633e07c037c3147db116)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x33feeD5a3eD803dc03BBF4B6041bB2b86FACD6C4)
 */
export const useReadLeafTokenDefaultAdminRole =
  /*#__PURE__*/ createUseReadContract({
    abi: leafTokenAbi,
    address: leafTokenAddress,
    functionName: 'DEFAULT_ADMIN_ROLE',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link leafTokenAbi}__ and `functionName` set to `"DOMAIN_SEPARATOR"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xe78ee52349d7b031e2a6633e07c037c3147db116)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x33feeD5a3eD803dc03BBF4B6041bB2b86FACD6C4)
 */
export const useReadLeafTokenDomainSeparator =
  /*#__PURE__*/ createUseReadContract({
    abi: leafTokenAbi,
    address: leafTokenAddress,
    functionName: 'DOMAIN_SEPARATOR',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link leafTokenAbi}__ and `functionName` set to `"allowance"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xe78ee52349d7b031e2a6633e07c037c3147db116)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x33feeD5a3eD803dc03BBF4B6041bB2b86FACD6C4)
 */
export const useReadLeafTokenAllowance = /*#__PURE__*/ createUseReadContract({
  abi: leafTokenAbi,
  address: leafTokenAddress,
  functionName: 'allowance',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link leafTokenAbi}__ and `functionName` set to `"balanceOf"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xe78ee52349d7b031e2a6633e07c037c3147db116)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x33feeD5a3eD803dc03BBF4B6041bB2b86FACD6C4)
 */
export const useReadLeafTokenBalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: leafTokenAbi,
  address: leafTokenAddress,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link leafTokenAbi}__ and `functionName` set to `"checkpoints"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xe78ee52349d7b031e2a6633e07c037c3147db116)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x33feeD5a3eD803dc03BBF4B6041bB2b86FACD6C4)
 */
export const useReadLeafTokenCheckpoints = /*#__PURE__*/ createUseReadContract({
  abi: leafTokenAbi,
  address: leafTokenAddress,
  functionName: 'checkpoints',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link leafTokenAbi}__ and `functionName` set to `"clock"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xe78ee52349d7b031e2a6633e07c037c3147db116)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x33feeD5a3eD803dc03BBF4B6041bB2b86FACD6C4)
 */
export const useReadLeafTokenClock = /*#__PURE__*/ createUseReadContract({
  abi: leafTokenAbi,
  address: leafTokenAddress,
  functionName: 'clock',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link leafTokenAbi}__ and `functionName` set to `"contractType"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xe78ee52349d7b031e2a6633e07c037c3147db116)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x33feeD5a3eD803dc03BBF4B6041bB2b86FACD6C4)
 */
export const useReadLeafTokenContractType = /*#__PURE__*/ createUseReadContract(
  {
    abi: leafTokenAbi,
    address: leafTokenAddress,
    functionName: 'contractType',
  },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link leafTokenAbi}__ and `functionName` set to `"contractURI"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xe78ee52349d7b031e2a6633e07c037c3147db116)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x33feeD5a3eD803dc03BBF4B6041bB2b86FACD6C4)
 */
export const useReadLeafTokenContractUri = /*#__PURE__*/ createUseReadContract({
  abi: leafTokenAbi,
  address: leafTokenAddress,
  functionName: 'contractURI',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link leafTokenAbi}__ and `functionName` set to `"contractVersion"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xe78ee52349d7b031e2a6633e07c037c3147db116)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x33feeD5a3eD803dc03BBF4B6041bB2b86FACD6C4)
 */
export const useReadLeafTokenContractVersion =
  /*#__PURE__*/ createUseReadContract({
    abi: leafTokenAbi,
    address: leafTokenAddress,
    functionName: 'contractVersion',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link leafTokenAbi}__ and `functionName` set to `"decimals"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xe78ee52349d7b031e2a6633e07c037c3147db116)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x33feeD5a3eD803dc03BBF4B6041bB2b86FACD6C4)
 */
export const useReadLeafTokenDecimals = /*#__PURE__*/ createUseReadContract({
  abi: leafTokenAbi,
  address: leafTokenAddress,
  functionName: 'decimals',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link leafTokenAbi}__ and `functionName` set to `"delegates"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xe78ee52349d7b031e2a6633e07c037c3147db116)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x33feeD5a3eD803dc03BBF4B6041bB2b86FACD6C4)
 */
export const useReadLeafTokenDelegates = /*#__PURE__*/ createUseReadContract({
  abi: leafTokenAbi,
  address: leafTokenAddress,
  functionName: 'delegates',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link leafTokenAbi}__ and `functionName` set to `"eip712Domain"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xe78ee52349d7b031e2a6633e07c037c3147db116)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x33feeD5a3eD803dc03BBF4B6041bB2b86FACD6C4)
 */
export const useReadLeafTokenEip712Domain = /*#__PURE__*/ createUseReadContract(
  {
    abi: leafTokenAbi,
    address: leafTokenAddress,
    functionName: 'eip712Domain',
  },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link leafTokenAbi}__ and `functionName` set to `"getPastTotalSupply"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xe78ee52349d7b031e2a6633e07c037c3147db116)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x33feeD5a3eD803dc03BBF4B6041bB2b86FACD6C4)
 */
export const useReadLeafTokenGetPastTotalSupply =
  /*#__PURE__*/ createUseReadContract({
    abi: leafTokenAbi,
    address: leafTokenAddress,
    functionName: 'getPastTotalSupply',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link leafTokenAbi}__ and `functionName` set to `"getPastVotes"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xe78ee52349d7b031e2a6633e07c037c3147db116)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x33feeD5a3eD803dc03BBF4B6041bB2b86FACD6C4)
 */
export const useReadLeafTokenGetPastVotes = /*#__PURE__*/ createUseReadContract(
  {
    abi: leafTokenAbi,
    address: leafTokenAddress,
    functionName: 'getPastVotes',
  },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link leafTokenAbi}__ and `functionName` set to `"getPlatformFeeInfo"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xe78ee52349d7b031e2a6633e07c037c3147db116)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x33feeD5a3eD803dc03BBF4B6041bB2b86FACD6C4)
 */
export const useReadLeafTokenGetPlatformFeeInfo =
  /*#__PURE__*/ createUseReadContract({
    abi: leafTokenAbi,
    address: leafTokenAddress,
    functionName: 'getPlatformFeeInfo',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link leafTokenAbi}__ and `functionName` set to `"getRoleAdmin"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xe78ee52349d7b031e2a6633e07c037c3147db116)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x33feeD5a3eD803dc03BBF4B6041bB2b86FACD6C4)
 */
export const useReadLeafTokenGetRoleAdmin = /*#__PURE__*/ createUseReadContract(
  {
    abi: leafTokenAbi,
    address: leafTokenAddress,
    functionName: 'getRoleAdmin',
  },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link leafTokenAbi}__ and `functionName` set to `"getRoleMember"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xe78ee52349d7b031e2a6633e07c037c3147db116)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x33feeD5a3eD803dc03BBF4B6041bB2b86FACD6C4)
 */
export const useReadLeafTokenGetRoleMember =
  /*#__PURE__*/ createUseReadContract({
    abi: leafTokenAbi,
    address: leafTokenAddress,
    functionName: 'getRoleMember',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link leafTokenAbi}__ and `functionName` set to `"getRoleMemberCount"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xe78ee52349d7b031e2a6633e07c037c3147db116)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x33feeD5a3eD803dc03BBF4B6041bB2b86FACD6C4)
 */
export const useReadLeafTokenGetRoleMemberCount =
  /*#__PURE__*/ createUseReadContract({
    abi: leafTokenAbi,
    address: leafTokenAddress,
    functionName: 'getRoleMemberCount',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link leafTokenAbi}__ and `functionName` set to `"getVotes"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xe78ee52349d7b031e2a6633e07c037c3147db116)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x33feeD5a3eD803dc03BBF4B6041bB2b86FACD6C4)
 */
export const useReadLeafTokenGetVotes = /*#__PURE__*/ createUseReadContract({
  abi: leafTokenAbi,
  address: leafTokenAddress,
  functionName: 'getVotes',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link leafTokenAbi}__ and `functionName` set to `"hasRole"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xe78ee52349d7b031e2a6633e07c037c3147db116)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x33feeD5a3eD803dc03BBF4B6041bB2b86FACD6C4)
 */
export const useReadLeafTokenHasRole = /*#__PURE__*/ createUseReadContract({
  abi: leafTokenAbi,
  address: leafTokenAddress,
  functionName: 'hasRole',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link leafTokenAbi}__ and `functionName` set to `"isTrustedForwarder"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xe78ee52349d7b031e2a6633e07c037c3147db116)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x33feeD5a3eD803dc03BBF4B6041bB2b86FACD6C4)
 */
export const useReadLeafTokenIsTrustedForwarder =
  /*#__PURE__*/ createUseReadContract({
    abi: leafTokenAbi,
    address: leafTokenAddress,
    functionName: 'isTrustedForwarder',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link leafTokenAbi}__ and `functionName` set to `"name"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xe78ee52349d7b031e2a6633e07c037c3147db116)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x33feeD5a3eD803dc03BBF4B6041bB2b86FACD6C4)
 */
export const useReadLeafTokenName = /*#__PURE__*/ createUseReadContract({
  abi: leafTokenAbi,
  address: leafTokenAddress,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link leafTokenAbi}__ and `functionName` set to `"nonces"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xe78ee52349d7b031e2a6633e07c037c3147db116)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x33feeD5a3eD803dc03BBF4B6041bB2b86FACD6C4)
 */
export const useReadLeafTokenNonces = /*#__PURE__*/ createUseReadContract({
  abi: leafTokenAbi,
  address: leafTokenAddress,
  functionName: 'nonces',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link leafTokenAbi}__ and `functionName` set to `"numCheckpoints"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xe78ee52349d7b031e2a6633e07c037c3147db116)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x33feeD5a3eD803dc03BBF4B6041bB2b86FACD6C4)
 */
export const useReadLeafTokenNumCheckpoints =
  /*#__PURE__*/ createUseReadContract({
    abi: leafTokenAbi,
    address: leafTokenAddress,
    functionName: 'numCheckpoints',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link leafTokenAbi}__ and `functionName` set to `"primarySaleRecipient"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xe78ee52349d7b031e2a6633e07c037c3147db116)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x33feeD5a3eD803dc03BBF4B6041bB2b86FACD6C4)
 */
export const useReadLeafTokenPrimarySaleRecipient =
  /*#__PURE__*/ createUseReadContract({
    abi: leafTokenAbi,
    address: leafTokenAddress,
    functionName: 'primarySaleRecipient',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link leafTokenAbi}__ and `functionName` set to `"supportsInterface"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xe78ee52349d7b031e2a6633e07c037c3147db116)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x33feeD5a3eD803dc03BBF4B6041bB2b86FACD6C4)
 */
export const useReadLeafTokenSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: leafTokenAbi,
    address: leafTokenAddress,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link leafTokenAbi}__ and `functionName` set to `"symbol"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xe78ee52349d7b031e2a6633e07c037c3147db116)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x33feeD5a3eD803dc03BBF4B6041bB2b86FACD6C4)
 */
export const useReadLeafTokenSymbol = /*#__PURE__*/ createUseReadContract({
  abi: leafTokenAbi,
  address: leafTokenAddress,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link leafTokenAbi}__ and `functionName` set to `"totalSupply"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xe78ee52349d7b031e2a6633e07c037c3147db116)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x33feeD5a3eD803dc03BBF4B6041bB2b86FACD6C4)
 */
export const useReadLeafTokenTotalSupply = /*#__PURE__*/ createUseReadContract({
  abi: leafTokenAbi,
  address: leafTokenAddress,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link leafTokenAbi}__ and `functionName` set to `"verify"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xe78ee52349d7b031e2a6633e07c037c3147db116)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x33feeD5a3eD803dc03BBF4B6041bB2b86FACD6C4)
 */
export const useReadLeafTokenVerify = /*#__PURE__*/ createUseReadContract({
  abi: leafTokenAbi,
  address: leafTokenAddress,
  functionName: 'verify',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link leafTokenAbi}__
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xe78ee52349d7b031e2a6633e07c037c3147db116)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x33feeD5a3eD803dc03BBF4B6041bB2b86FACD6C4)
 */
export const useWriteLeafToken = /*#__PURE__*/ createUseWriteContract({
  abi: leafTokenAbi,
  address: leafTokenAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link leafTokenAbi}__ and `functionName` set to `"approve"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xe78ee52349d7b031e2a6633e07c037c3147db116)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x33feeD5a3eD803dc03BBF4B6041bB2b86FACD6C4)
 */
export const useWriteLeafTokenApprove = /*#__PURE__*/ createUseWriteContract({
  abi: leafTokenAbi,
  address: leafTokenAddress,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link leafTokenAbi}__ and `functionName` set to `"burn"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xe78ee52349d7b031e2a6633e07c037c3147db116)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x33feeD5a3eD803dc03BBF4B6041bB2b86FACD6C4)
 */
export const useWriteLeafTokenBurn = /*#__PURE__*/ createUseWriteContract({
  abi: leafTokenAbi,
  address: leafTokenAddress,
  functionName: 'burn',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link leafTokenAbi}__ and `functionName` set to `"burnFrom"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xe78ee52349d7b031e2a6633e07c037c3147db116)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x33feeD5a3eD803dc03BBF4B6041bB2b86FACD6C4)
 */
export const useWriteLeafTokenBurnFrom = /*#__PURE__*/ createUseWriteContract({
  abi: leafTokenAbi,
  address: leafTokenAddress,
  functionName: 'burnFrom',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link leafTokenAbi}__ and `functionName` set to `"decreaseAllowance"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xe78ee52349d7b031e2a6633e07c037c3147db116)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x33feeD5a3eD803dc03BBF4B6041bB2b86FACD6C4)
 */
export const useWriteLeafTokenDecreaseAllowance =
  /*#__PURE__*/ createUseWriteContract({
    abi: leafTokenAbi,
    address: leafTokenAddress,
    functionName: 'decreaseAllowance',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link leafTokenAbi}__ and `functionName` set to `"delegate"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xe78ee52349d7b031e2a6633e07c037c3147db116)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x33feeD5a3eD803dc03BBF4B6041bB2b86FACD6C4)
 */
export const useWriteLeafTokenDelegate = /*#__PURE__*/ createUseWriteContract({
  abi: leafTokenAbi,
  address: leafTokenAddress,
  functionName: 'delegate',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link leafTokenAbi}__ and `functionName` set to `"delegateBySig"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xe78ee52349d7b031e2a6633e07c037c3147db116)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x33feeD5a3eD803dc03BBF4B6041bB2b86FACD6C4)
 */
export const useWriteLeafTokenDelegateBySig =
  /*#__PURE__*/ createUseWriteContract({
    abi: leafTokenAbi,
    address: leafTokenAddress,
    functionName: 'delegateBySig',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link leafTokenAbi}__ and `functionName` set to `"grantRole"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xe78ee52349d7b031e2a6633e07c037c3147db116)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x33feeD5a3eD803dc03BBF4B6041bB2b86FACD6C4)
 */
export const useWriteLeafTokenGrantRole = /*#__PURE__*/ createUseWriteContract({
  abi: leafTokenAbi,
  address: leafTokenAddress,
  functionName: 'grantRole',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link leafTokenAbi}__ and `functionName` set to `"increaseAllowance"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xe78ee52349d7b031e2a6633e07c037c3147db116)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x33feeD5a3eD803dc03BBF4B6041bB2b86FACD6C4)
 */
export const useWriteLeafTokenIncreaseAllowance =
  /*#__PURE__*/ createUseWriteContract({
    abi: leafTokenAbi,
    address: leafTokenAddress,
    functionName: 'increaseAllowance',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link leafTokenAbi}__ and `functionName` set to `"initialize"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xe78ee52349d7b031e2a6633e07c037c3147db116)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x33feeD5a3eD803dc03BBF4B6041bB2b86FACD6C4)
 */
export const useWriteLeafTokenInitialize = /*#__PURE__*/ createUseWriteContract(
  { abi: leafTokenAbi, address: leafTokenAddress, functionName: 'initialize' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link leafTokenAbi}__ and `functionName` set to `"mintTo"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xe78ee52349d7b031e2a6633e07c037c3147db116)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x33feeD5a3eD803dc03BBF4B6041bB2b86FACD6C4)
 */
export const useWriteLeafTokenMintTo = /*#__PURE__*/ createUseWriteContract({
  abi: leafTokenAbi,
  address: leafTokenAddress,
  functionName: 'mintTo',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link leafTokenAbi}__ and `functionName` set to `"mintWithSignature"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xe78ee52349d7b031e2a6633e07c037c3147db116)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x33feeD5a3eD803dc03BBF4B6041bB2b86FACD6C4)
 */
export const useWriteLeafTokenMintWithSignature =
  /*#__PURE__*/ createUseWriteContract({
    abi: leafTokenAbi,
    address: leafTokenAddress,
    functionName: 'mintWithSignature',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link leafTokenAbi}__ and `functionName` set to `"multicall"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xe78ee52349d7b031e2a6633e07c037c3147db116)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x33feeD5a3eD803dc03BBF4B6041bB2b86FACD6C4)
 */
export const useWriteLeafTokenMulticall = /*#__PURE__*/ createUseWriteContract({
  abi: leafTokenAbi,
  address: leafTokenAddress,
  functionName: 'multicall',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link leafTokenAbi}__ and `functionName` set to `"permit"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xe78ee52349d7b031e2a6633e07c037c3147db116)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x33feeD5a3eD803dc03BBF4B6041bB2b86FACD6C4)
 */
export const useWriteLeafTokenPermit = /*#__PURE__*/ createUseWriteContract({
  abi: leafTokenAbi,
  address: leafTokenAddress,
  functionName: 'permit',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link leafTokenAbi}__ and `functionName` set to `"renounceRole"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xe78ee52349d7b031e2a6633e07c037c3147db116)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x33feeD5a3eD803dc03BBF4B6041bB2b86FACD6C4)
 */
export const useWriteLeafTokenRenounceRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: leafTokenAbi,
    address: leafTokenAddress,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link leafTokenAbi}__ and `functionName` set to `"revokeRole"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xe78ee52349d7b031e2a6633e07c037c3147db116)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x33feeD5a3eD803dc03BBF4B6041bB2b86FACD6C4)
 */
export const useWriteLeafTokenRevokeRole = /*#__PURE__*/ createUseWriteContract(
  { abi: leafTokenAbi, address: leafTokenAddress, functionName: 'revokeRole' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link leafTokenAbi}__ and `functionName` set to `"setContractURI"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xe78ee52349d7b031e2a6633e07c037c3147db116)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x33feeD5a3eD803dc03BBF4B6041bB2b86FACD6C4)
 */
export const useWriteLeafTokenSetContractUri =
  /*#__PURE__*/ createUseWriteContract({
    abi: leafTokenAbi,
    address: leafTokenAddress,
    functionName: 'setContractURI',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link leafTokenAbi}__ and `functionName` set to `"setPlatformFeeInfo"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xe78ee52349d7b031e2a6633e07c037c3147db116)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x33feeD5a3eD803dc03BBF4B6041bB2b86FACD6C4)
 */
export const useWriteLeafTokenSetPlatformFeeInfo =
  /*#__PURE__*/ createUseWriteContract({
    abi: leafTokenAbi,
    address: leafTokenAddress,
    functionName: 'setPlatformFeeInfo',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link leafTokenAbi}__ and `functionName` set to `"setPrimarySaleRecipient"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xe78ee52349d7b031e2a6633e07c037c3147db116)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x33feeD5a3eD803dc03BBF4B6041bB2b86FACD6C4)
 */
export const useWriteLeafTokenSetPrimarySaleRecipient =
  /*#__PURE__*/ createUseWriteContract({
    abi: leafTokenAbi,
    address: leafTokenAddress,
    functionName: 'setPrimarySaleRecipient',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link leafTokenAbi}__ and `functionName` set to `"transfer"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xe78ee52349d7b031e2a6633e07c037c3147db116)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x33feeD5a3eD803dc03BBF4B6041bB2b86FACD6C4)
 */
export const useWriteLeafTokenTransfer = /*#__PURE__*/ createUseWriteContract({
  abi: leafTokenAbi,
  address: leafTokenAddress,
  functionName: 'transfer',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link leafTokenAbi}__ and `functionName` set to `"transferFrom"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xe78ee52349d7b031e2a6633e07c037c3147db116)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x33feeD5a3eD803dc03BBF4B6041bB2b86FACD6C4)
 */
export const useWriteLeafTokenTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: leafTokenAbi,
    address: leafTokenAddress,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link leafTokenAbi}__
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xe78ee52349d7b031e2a6633e07c037c3147db116)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x33feeD5a3eD803dc03BBF4B6041bB2b86FACD6C4)
 */
export const useSimulateLeafToken = /*#__PURE__*/ createUseSimulateContract({
  abi: leafTokenAbi,
  address: leafTokenAddress,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link leafTokenAbi}__ and `functionName` set to `"approve"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xe78ee52349d7b031e2a6633e07c037c3147db116)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x33feeD5a3eD803dc03BBF4B6041bB2b86FACD6C4)
 */
export const useSimulateLeafTokenApprove =
  /*#__PURE__*/ createUseSimulateContract({
    abi: leafTokenAbi,
    address: leafTokenAddress,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link leafTokenAbi}__ and `functionName` set to `"burn"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xe78ee52349d7b031e2a6633e07c037c3147db116)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x33feeD5a3eD803dc03BBF4B6041bB2b86FACD6C4)
 */
export const useSimulateLeafTokenBurn = /*#__PURE__*/ createUseSimulateContract(
  { abi: leafTokenAbi, address: leafTokenAddress, functionName: 'burn' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link leafTokenAbi}__ and `functionName` set to `"burnFrom"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xe78ee52349d7b031e2a6633e07c037c3147db116)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x33feeD5a3eD803dc03BBF4B6041bB2b86FACD6C4)
 */
export const useSimulateLeafTokenBurnFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: leafTokenAbi,
    address: leafTokenAddress,
    functionName: 'burnFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link leafTokenAbi}__ and `functionName` set to `"decreaseAllowance"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xe78ee52349d7b031e2a6633e07c037c3147db116)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x33feeD5a3eD803dc03BBF4B6041bB2b86FACD6C4)
 */
export const useSimulateLeafTokenDecreaseAllowance =
  /*#__PURE__*/ createUseSimulateContract({
    abi: leafTokenAbi,
    address: leafTokenAddress,
    functionName: 'decreaseAllowance',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link leafTokenAbi}__ and `functionName` set to `"delegate"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xe78ee52349d7b031e2a6633e07c037c3147db116)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x33feeD5a3eD803dc03BBF4B6041bB2b86FACD6C4)
 */
export const useSimulateLeafTokenDelegate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: leafTokenAbi,
    address: leafTokenAddress,
    functionName: 'delegate',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link leafTokenAbi}__ and `functionName` set to `"delegateBySig"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xe78ee52349d7b031e2a6633e07c037c3147db116)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x33feeD5a3eD803dc03BBF4B6041bB2b86FACD6C4)
 */
export const useSimulateLeafTokenDelegateBySig =
  /*#__PURE__*/ createUseSimulateContract({
    abi: leafTokenAbi,
    address: leafTokenAddress,
    functionName: 'delegateBySig',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link leafTokenAbi}__ and `functionName` set to `"grantRole"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xe78ee52349d7b031e2a6633e07c037c3147db116)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x33feeD5a3eD803dc03BBF4B6041bB2b86FACD6C4)
 */
export const useSimulateLeafTokenGrantRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: leafTokenAbi,
    address: leafTokenAddress,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link leafTokenAbi}__ and `functionName` set to `"increaseAllowance"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xe78ee52349d7b031e2a6633e07c037c3147db116)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x33feeD5a3eD803dc03BBF4B6041bB2b86FACD6C4)
 */
export const useSimulateLeafTokenIncreaseAllowance =
  /*#__PURE__*/ createUseSimulateContract({
    abi: leafTokenAbi,
    address: leafTokenAddress,
    functionName: 'increaseAllowance',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link leafTokenAbi}__ and `functionName` set to `"initialize"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xe78ee52349d7b031e2a6633e07c037c3147db116)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x33feeD5a3eD803dc03BBF4B6041bB2b86FACD6C4)
 */
export const useSimulateLeafTokenInitialize =
  /*#__PURE__*/ createUseSimulateContract({
    abi: leafTokenAbi,
    address: leafTokenAddress,
    functionName: 'initialize',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link leafTokenAbi}__ and `functionName` set to `"mintTo"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xe78ee52349d7b031e2a6633e07c037c3147db116)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x33feeD5a3eD803dc03BBF4B6041bB2b86FACD6C4)
 */
export const useSimulateLeafTokenMintTo =
  /*#__PURE__*/ createUseSimulateContract({
    abi: leafTokenAbi,
    address: leafTokenAddress,
    functionName: 'mintTo',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link leafTokenAbi}__ and `functionName` set to `"mintWithSignature"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xe78ee52349d7b031e2a6633e07c037c3147db116)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x33feeD5a3eD803dc03BBF4B6041bB2b86FACD6C4)
 */
export const useSimulateLeafTokenMintWithSignature =
  /*#__PURE__*/ createUseSimulateContract({
    abi: leafTokenAbi,
    address: leafTokenAddress,
    functionName: 'mintWithSignature',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link leafTokenAbi}__ and `functionName` set to `"multicall"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xe78ee52349d7b031e2a6633e07c037c3147db116)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x33feeD5a3eD803dc03BBF4B6041bB2b86FACD6C4)
 */
export const useSimulateLeafTokenMulticall =
  /*#__PURE__*/ createUseSimulateContract({
    abi: leafTokenAbi,
    address: leafTokenAddress,
    functionName: 'multicall',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link leafTokenAbi}__ and `functionName` set to `"permit"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xe78ee52349d7b031e2a6633e07c037c3147db116)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x33feeD5a3eD803dc03BBF4B6041bB2b86FACD6C4)
 */
export const useSimulateLeafTokenPermit =
  /*#__PURE__*/ createUseSimulateContract({
    abi: leafTokenAbi,
    address: leafTokenAddress,
    functionName: 'permit',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link leafTokenAbi}__ and `functionName` set to `"renounceRole"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xe78ee52349d7b031e2a6633e07c037c3147db116)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x33feeD5a3eD803dc03BBF4B6041bB2b86FACD6C4)
 */
export const useSimulateLeafTokenRenounceRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: leafTokenAbi,
    address: leafTokenAddress,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link leafTokenAbi}__ and `functionName` set to `"revokeRole"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xe78ee52349d7b031e2a6633e07c037c3147db116)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x33feeD5a3eD803dc03BBF4B6041bB2b86FACD6C4)
 */
export const useSimulateLeafTokenRevokeRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: leafTokenAbi,
    address: leafTokenAddress,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link leafTokenAbi}__ and `functionName` set to `"setContractURI"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xe78ee52349d7b031e2a6633e07c037c3147db116)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x33feeD5a3eD803dc03BBF4B6041bB2b86FACD6C4)
 */
export const useSimulateLeafTokenSetContractUri =
  /*#__PURE__*/ createUseSimulateContract({
    abi: leafTokenAbi,
    address: leafTokenAddress,
    functionName: 'setContractURI',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link leafTokenAbi}__ and `functionName` set to `"setPlatformFeeInfo"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xe78ee52349d7b031e2a6633e07c037c3147db116)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x33feeD5a3eD803dc03BBF4B6041bB2b86FACD6C4)
 */
export const useSimulateLeafTokenSetPlatformFeeInfo =
  /*#__PURE__*/ createUseSimulateContract({
    abi: leafTokenAbi,
    address: leafTokenAddress,
    functionName: 'setPlatformFeeInfo',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link leafTokenAbi}__ and `functionName` set to `"setPrimarySaleRecipient"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xe78ee52349d7b031e2a6633e07c037c3147db116)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x33feeD5a3eD803dc03BBF4B6041bB2b86FACD6C4)
 */
export const useSimulateLeafTokenSetPrimarySaleRecipient =
  /*#__PURE__*/ createUseSimulateContract({
    abi: leafTokenAbi,
    address: leafTokenAddress,
    functionName: 'setPrimarySaleRecipient',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link leafTokenAbi}__ and `functionName` set to `"transfer"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xe78ee52349d7b031e2a6633e07c037c3147db116)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x33feeD5a3eD803dc03BBF4B6041bB2b86FACD6C4)
 */
export const useSimulateLeafTokenTransfer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: leafTokenAbi,
    address: leafTokenAddress,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link leafTokenAbi}__ and `functionName` set to `"transferFrom"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xe78ee52349d7b031e2a6633e07c037c3147db116)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x33feeD5a3eD803dc03BBF4B6041bB2b86FACD6C4)
 */
export const useSimulateLeafTokenTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: leafTokenAbi,
    address: leafTokenAddress,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link leafTokenAbi}__
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xe78ee52349d7b031e2a6633e07c037c3147db116)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x33feeD5a3eD803dc03BBF4B6041bB2b86FACD6C4)
 */
export const useWatchLeafTokenEvent = /*#__PURE__*/ createUseWatchContractEvent(
  { abi: leafTokenAbi, address: leafTokenAddress },
)

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link leafTokenAbi}__ and `eventName` set to `"Approval"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xe78ee52349d7b031e2a6633e07c037c3147db116)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x33feeD5a3eD803dc03BBF4B6041bB2b86FACD6C4)
 */
export const useWatchLeafTokenApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: leafTokenAbi,
    address: leafTokenAddress,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link leafTokenAbi}__ and `eventName` set to `"DelegateChanged"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xe78ee52349d7b031e2a6633e07c037c3147db116)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x33feeD5a3eD803dc03BBF4B6041bB2b86FACD6C4)
 */
export const useWatchLeafTokenDelegateChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: leafTokenAbi,
    address: leafTokenAddress,
    eventName: 'DelegateChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link leafTokenAbi}__ and `eventName` set to `"DelegateVotesChanged"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xe78ee52349d7b031e2a6633e07c037c3147db116)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x33feeD5a3eD803dc03BBF4B6041bB2b86FACD6C4)
 */
export const useWatchLeafTokenDelegateVotesChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: leafTokenAbi,
    address: leafTokenAddress,
    eventName: 'DelegateVotesChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link leafTokenAbi}__ and `eventName` set to `"EIP712DomainChanged"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xe78ee52349d7b031e2a6633e07c037c3147db116)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x33feeD5a3eD803dc03BBF4B6041bB2b86FACD6C4)
 */
export const useWatchLeafTokenEip712DomainChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: leafTokenAbi,
    address: leafTokenAddress,
    eventName: 'EIP712DomainChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link leafTokenAbi}__ and `eventName` set to `"FlatPlatformFeeUpdated"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xe78ee52349d7b031e2a6633e07c037c3147db116)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x33feeD5a3eD803dc03BBF4B6041bB2b86FACD6C4)
 */
export const useWatchLeafTokenFlatPlatformFeeUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: leafTokenAbi,
    address: leafTokenAddress,
    eventName: 'FlatPlatformFeeUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link leafTokenAbi}__ and `eventName` set to `"Initialized"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xe78ee52349d7b031e2a6633e07c037c3147db116)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x33feeD5a3eD803dc03BBF4B6041bB2b86FACD6C4)
 */
export const useWatchLeafTokenInitializedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: leafTokenAbi,
    address: leafTokenAddress,
    eventName: 'Initialized',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link leafTokenAbi}__ and `eventName` set to `"PlatformFeeInfoUpdated"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xe78ee52349d7b031e2a6633e07c037c3147db116)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x33feeD5a3eD803dc03BBF4B6041bB2b86FACD6C4)
 */
export const useWatchLeafTokenPlatformFeeInfoUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: leafTokenAbi,
    address: leafTokenAddress,
    eventName: 'PlatformFeeInfoUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link leafTokenAbi}__ and `eventName` set to `"PlatformFeeTypeUpdated"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xe78ee52349d7b031e2a6633e07c037c3147db116)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x33feeD5a3eD803dc03BBF4B6041bB2b86FACD6C4)
 */
export const useWatchLeafTokenPlatformFeeTypeUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: leafTokenAbi,
    address: leafTokenAddress,
    eventName: 'PlatformFeeTypeUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link leafTokenAbi}__ and `eventName` set to `"PrimarySaleRecipientUpdated"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xe78ee52349d7b031e2a6633e07c037c3147db116)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x33feeD5a3eD803dc03BBF4B6041bB2b86FACD6C4)
 */
export const useWatchLeafTokenPrimarySaleRecipientUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: leafTokenAbi,
    address: leafTokenAddress,
    eventName: 'PrimarySaleRecipientUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link leafTokenAbi}__ and `eventName` set to `"RoleAdminChanged"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xe78ee52349d7b031e2a6633e07c037c3147db116)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x33feeD5a3eD803dc03BBF4B6041bB2b86FACD6C4)
 */
export const useWatchLeafTokenRoleAdminChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: leafTokenAbi,
    address: leafTokenAddress,
    eventName: 'RoleAdminChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link leafTokenAbi}__ and `eventName` set to `"RoleGranted"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xe78ee52349d7b031e2a6633e07c037c3147db116)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x33feeD5a3eD803dc03BBF4B6041bB2b86FACD6C4)
 */
export const useWatchLeafTokenRoleGrantedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: leafTokenAbi,
    address: leafTokenAddress,
    eventName: 'RoleGranted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link leafTokenAbi}__ and `eventName` set to `"RoleRevoked"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xe78ee52349d7b031e2a6633e07c037c3147db116)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x33feeD5a3eD803dc03BBF4B6041bB2b86FACD6C4)
 */
export const useWatchLeafTokenRoleRevokedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: leafTokenAbi,
    address: leafTokenAddress,
    eventName: 'RoleRevoked',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link leafTokenAbi}__ and `eventName` set to `"TokensMinted"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xe78ee52349d7b031e2a6633e07c037c3147db116)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x33feeD5a3eD803dc03BBF4B6041bB2b86FACD6C4)
 */
export const useWatchLeafTokenTokensMintedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: leafTokenAbi,
    address: leafTokenAddress,
    eventName: 'TokensMinted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link leafTokenAbi}__ and `eventName` set to `"TokensMintedWithSignature"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xe78ee52349d7b031e2a6633e07c037c3147db116)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x33feeD5a3eD803dc03BBF4B6041bB2b86FACD6C4)
 */
export const useWatchLeafTokenTokensMintedWithSignatureEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: leafTokenAbi,
    address: leafTokenAddress,
    eventName: 'TokensMintedWithSignature',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link leafTokenAbi}__ and `eventName` set to `"Transfer"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xe78ee52349d7b031e2a6633e07c037c3147db116)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x33feeD5a3eD803dc03BBF4B6041bB2b86FACD6C4)
 */
export const useWatchLeafTokenTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: leafTokenAbi,
    address: leafTokenAddress,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link seedTokenAbi}__
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x546D239032b24eCEEE0cb05c92FC39090846adc7)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xc64F740D216B6ec49e435a8a08132529788e8DD0)
 */
export const useReadSeedToken = /*#__PURE__*/ createUseReadContract({
  abi: seedTokenAbi,
  address: seedTokenAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link seedTokenAbi}__ and `functionName` set to `"_isExcludedMaxTransactionAmount"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x546D239032b24eCEEE0cb05c92FC39090846adc7)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xc64F740D216B6ec49e435a8a08132529788e8DD0)
 */
export const useReadSeedTokenIsExcludedMaxTransactionAmount =
  /*#__PURE__*/ createUseReadContract({
    abi: seedTokenAbi,
    address: seedTokenAddress,
    functionName: '_isExcludedMaxTransactionAmount',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link seedTokenAbi}__ and `functionName` set to `"acknowledgement"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x546D239032b24eCEEE0cb05c92FC39090846adc7)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xc64F740D216B6ec49e435a8a08132529788e8DD0)
 */
export const useReadSeedTokenAcknowledgement =
  /*#__PURE__*/ createUseReadContract({
    abi: seedTokenAbi,
    address: seedTokenAddress,
    functionName: 'acknowledgement',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link seedTokenAbi}__ and `functionName` set to `"allowance"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x546D239032b24eCEEE0cb05c92FC39090846adc7)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xc64F740D216B6ec49e435a8a08132529788e8DD0)
 */
export const useReadSeedTokenAllowance = /*#__PURE__*/ createUseReadContract({
  abi: seedTokenAbi,
  address: seedTokenAddress,
  functionName: 'allowance',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link seedTokenAbi}__ and `functionName` set to `"automatedMarketMakerPairs"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x546D239032b24eCEEE0cb05c92FC39090846adc7)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xc64F740D216B6ec49e435a8a08132529788e8DD0)
 */
export const useReadSeedTokenAutomatedMarketMakerPairs =
  /*#__PURE__*/ createUseReadContract({
    abi: seedTokenAbi,
    address: seedTokenAddress,
    functionName: 'automatedMarketMakerPairs',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link seedTokenAbi}__ and `functionName` set to `"balanceOf"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x546D239032b24eCEEE0cb05c92FC39090846adc7)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xc64F740D216B6ec49e435a8a08132529788e8DD0)
 */
export const useReadSeedTokenBalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: seedTokenAbi,
  address: seedTokenAddress,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link seedTokenAbi}__ and `functionName` set to `"buyLiquidityFee"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x546D239032b24eCEEE0cb05c92FC39090846adc7)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xc64F740D216B6ec49e435a8a08132529788e8DD0)
 */
export const useReadSeedTokenBuyLiquidityFee =
  /*#__PURE__*/ createUseReadContract({
    abi: seedTokenAbi,
    address: seedTokenAddress,
    functionName: 'buyLiquidityFee',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link seedTokenAbi}__ and `functionName` set to `"buyRevShareFee"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x546D239032b24eCEEE0cb05c92FC39090846adc7)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xc64F740D216B6ec49e435a8a08132529788e8DD0)
 */
export const useReadSeedTokenBuyRevShareFee =
  /*#__PURE__*/ createUseReadContract({
    abi: seedTokenAbi,
    address: seedTokenAddress,
    functionName: 'buyRevShareFee',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link seedTokenAbi}__ and `functionName` set to `"buyTeamFee"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x546D239032b24eCEEE0cb05c92FC39090846adc7)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xc64F740D216B6ec49e435a8a08132529788e8DD0)
 */
export const useReadSeedTokenBuyTeamFee = /*#__PURE__*/ createUseReadContract({
  abi: seedTokenAbi,
  address: seedTokenAddress,
  functionName: 'buyTeamFee',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link seedTokenAbi}__ and `functionName` set to `"buyTotalFees"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x546D239032b24eCEEE0cb05c92FC39090846adc7)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xc64F740D216B6ec49e435a8a08132529788e8DD0)
 */
export const useReadSeedTokenBuyTotalFees = /*#__PURE__*/ createUseReadContract(
  {
    abi: seedTokenAbi,
    address: seedTokenAddress,
    functionName: 'buyTotalFees',
  },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link seedTokenAbi}__ and `functionName` set to `"decimals"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x546D239032b24eCEEE0cb05c92FC39090846adc7)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xc64F740D216B6ec49e435a8a08132529788e8DD0)
 */
export const useReadSeedTokenDecimals = /*#__PURE__*/ createUseReadContract({
  abi: seedTokenAbi,
  address: seedTokenAddress,
  functionName: 'decimals',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link seedTokenAbi}__ and `functionName` set to `"isExcludedFromFees"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x546D239032b24eCEEE0cb05c92FC39090846adc7)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xc64F740D216B6ec49e435a8a08132529788e8DD0)
 */
export const useReadSeedTokenIsExcludedFromFees =
  /*#__PURE__*/ createUseReadContract({
    abi: seedTokenAbi,
    address: seedTokenAddress,
    functionName: 'isExcludedFromFees',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link seedTokenAbi}__ and `functionName` set to `"limitsInEffect"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x546D239032b24eCEEE0cb05c92FC39090846adc7)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xc64F740D216B6ec49e435a8a08132529788e8DD0)
 */
export const useReadSeedTokenLimitsInEffect =
  /*#__PURE__*/ createUseReadContract({
    abi: seedTokenAbi,
    address: seedTokenAddress,
    functionName: 'limitsInEffect',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link seedTokenAbi}__ and `functionName` set to `"maxTransactionAmount"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x546D239032b24eCEEE0cb05c92FC39090846adc7)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xc64F740D216B6ec49e435a8a08132529788e8DD0)
 */
export const useReadSeedTokenMaxTransactionAmount =
  /*#__PURE__*/ createUseReadContract({
    abi: seedTokenAbi,
    address: seedTokenAddress,
    functionName: 'maxTransactionAmount',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link seedTokenAbi}__ and `functionName` set to `"maxWallet"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x546D239032b24eCEEE0cb05c92FC39090846adc7)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xc64F740D216B6ec49e435a8a08132529788e8DD0)
 */
export const useReadSeedTokenMaxWallet = /*#__PURE__*/ createUseReadContract({
  abi: seedTokenAbi,
  address: seedTokenAddress,
  functionName: 'maxWallet',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link seedTokenAbi}__ and `functionName` set to `"name"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x546D239032b24eCEEE0cb05c92FC39090846adc7)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xc64F740D216B6ec49e435a8a08132529788e8DD0)
 */
export const useReadSeedTokenName = /*#__PURE__*/ createUseReadContract({
  abi: seedTokenAbi,
  address: seedTokenAddress,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link seedTokenAbi}__ and `functionName` set to `"owner"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x546D239032b24eCEEE0cb05c92FC39090846adc7)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xc64F740D216B6ec49e435a8a08132529788e8DD0)
 */
export const useReadSeedTokenOwner = /*#__PURE__*/ createUseReadContract({
  abi: seedTokenAbi,
  address: seedTokenAddress,
  functionName: 'owner',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link seedTokenAbi}__ and `functionName` set to `"revShareWallet"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x546D239032b24eCEEE0cb05c92FC39090846adc7)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xc64F740D216B6ec49e435a8a08132529788e8DD0)
 */
export const useReadSeedTokenRevShareWallet =
  /*#__PURE__*/ createUseReadContract({
    abi: seedTokenAbi,
    address: seedTokenAddress,
    functionName: 'revShareWallet',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link seedTokenAbi}__ and `functionName` set to `"risks"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x546D239032b24eCEEE0cb05c92FC39090846adc7)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xc64F740D216B6ec49e435a8a08132529788e8DD0)
 */
export const useReadSeedTokenRisks = /*#__PURE__*/ createUseReadContract({
  abi: seedTokenAbi,
  address: seedTokenAddress,
  functionName: 'risks',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link seedTokenAbi}__ and `functionName` set to `"sellLiquidityFee"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x546D239032b24eCEEE0cb05c92FC39090846adc7)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xc64F740D216B6ec49e435a8a08132529788e8DD0)
 */
export const useReadSeedTokenSellLiquidityFee =
  /*#__PURE__*/ createUseReadContract({
    abi: seedTokenAbi,
    address: seedTokenAddress,
    functionName: 'sellLiquidityFee',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link seedTokenAbi}__ and `functionName` set to `"sellRevShareFee"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x546D239032b24eCEEE0cb05c92FC39090846adc7)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xc64F740D216B6ec49e435a8a08132529788e8DD0)
 */
export const useReadSeedTokenSellRevShareFee =
  /*#__PURE__*/ createUseReadContract({
    abi: seedTokenAbi,
    address: seedTokenAddress,
    functionName: 'sellRevShareFee',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link seedTokenAbi}__ and `functionName` set to `"sellTeamFee"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x546D239032b24eCEEE0cb05c92FC39090846adc7)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xc64F740D216B6ec49e435a8a08132529788e8DD0)
 */
export const useReadSeedTokenSellTeamFee = /*#__PURE__*/ createUseReadContract({
  abi: seedTokenAbi,
  address: seedTokenAddress,
  functionName: 'sellTeamFee',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link seedTokenAbi}__ and `functionName` set to `"sellTotalFees"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x546D239032b24eCEEE0cb05c92FC39090846adc7)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xc64F740D216B6ec49e435a8a08132529788e8DD0)
 */
export const useReadSeedTokenSellTotalFees =
  /*#__PURE__*/ createUseReadContract({
    abi: seedTokenAbi,
    address: seedTokenAddress,
    functionName: 'sellTotalFees',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link seedTokenAbi}__ and `functionName` set to `"swapEnabled"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x546D239032b24eCEEE0cb05c92FC39090846adc7)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xc64F740D216B6ec49e435a8a08132529788e8DD0)
 */
export const useReadSeedTokenSwapEnabled = /*#__PURE__*/ createUseReadContract({
  abi: seedTokenAbi,
  address: seedTokenAddress,
  functionName: 'swapEnabled',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link seedTokenAbi}__ and `functionName` set to `"swapTokensAtAmount"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x546D239032b24eCEEE0cb05c92FC39090846adc7)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xc64F740D216B6ec49e435a8a08132529788e8DD0)
 */
export const useReadSeedTokenSwapTokensAtAmount =
  /*#__PURE__*/ createUseReadContract({
    abi: seedTokenAbi,
    address: seedTokenAddress,
    functionName: 'swapTokensAtAmount',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link seedTokenAbi}__ and `functionName` set to `"symbol"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x546D239032b24eCEEE0cb05c92FC39090846adc7)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xc64F740D216B6ec49e435a8a08132529788e8DD0)
 */
export const useReadSeedTokenSymbol = /*#__PURE__*/ createUseReadContract({
  abi: seedTokenAbi,
  address: seedTokenAddress,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link seedTokenAbi}__ and `functionName` set to `"teamWallet"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x546D239032b24eCEEE0cb05c92FC39090846adc7)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xc64F740D216B6ec49e435a8a08132529788e8DD0)
 */
export const useReadSeedTokenTeamWallet = /*#__PURE__*/ createUseReadContract({
  abi: seedTokenAbi,
  address: seedTokenAddress,
  functionName: 'teamWallet',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link seedTokenAbi}__ and `functionName` set to `"tokensForLiquidity"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x546D239032b24eCEEE0cb05c92FC39090846adc7)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xc64F740D216B6ec49e435a8a08132529788e8DD0)
 */
export const useReadSeedTokenTokensForLiquidity =
  /*#__PURE__*/ createUseReadContract({
    abi: seedTokenAbi,
    address: seedTokenAddress,
    functionName: 'tokensForLiquidity',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link seedTokenAbi}__ and `functionName` set to `"tokensForRevShare"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x546D239032b24eCEEE0cb05c92FC39090846adc7)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xc64F740D216B6ec49e435a8a08132529788e8DD0)
 */
export const useReadSeedTokenTokensForRevShare =
  /*#__PURE__*/ createUseReadContract({
    abi: seedTokenAbi,
    address: seedTokenAddress,
    functionName: 'tokensForRevShare',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link seedTokenAbi}__ and `functionName` set to `"tokensForTeam"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x546D239032b24eCEEE0cb05c92FC39090846adc7)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xc64F740D216B6ec49e435a8a08132529788e8DD0)
 */
export const useReadSeedTokenTokensForTeam =
  /*#__PURE__*/ createUseReadContract({
    abi: seedTokenAbi,
    address: seedTokenAddress,
    functionName: 'tokensForTeam',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link seedTokenAbi}__ and `functionName` set to `"totalSupply"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x546D239032b24eCEEE0cb05c92FC39090846adc7)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xc64F740D216B6ec49e435a8a08132529788e8DD0)
 */
export const useReadSeedTokenTotalSupply = /*#__PURE__*/ createUseReadContract({
  abi: seedTokenAbi,
  address: seedTokenAddress,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link seedTokenAbi}__ and `functionName` set to `"uniswapV2Pair"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x546D239032b24eCEEE0cb05c92FC39090846adc7)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xc64F740D216B6ec49e435a8a08132529788e8DD0)
 */
export const useReadSeedTokenUniswapV2Pair =
  /*#__PURE__*/ createUseReadContract({
    abi: seedTokenAbi,
    address: seedTokenAddress,
    functionName: 'uniswapV2Pair',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link seedTokenAbi}__ and `functionName` set to `"uniswapV2Router"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x546D239032b24eCEEE0cb05c92FC39090846adc7)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xc64F740D216B6ec49e435a8a08132529788e8DD0)
 */
export const useReadSeedTokenUniswapV2Router =
  /*#__PURE__*/ createUseReadContract({
    abi: seedTokenAbi,
    address: seedTokenAddress,
    functionName: 'uniswapV2Router',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link seedTokenAbi}__
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x546D239032b24eCEEE0cb05c92FC39090846adc7)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xc64F740D216B6ec49e435a8a08132529788e8DD0)
 */
export const useWriteSeedToken = /*#__PURE__*/ createUseWriteContract({
  abi: seedTokenAbi,
  address: seedTokenAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link seedTokenAbi}__ and `functionName` set to `"approve"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x546D239032b24eCEEE0cb05c92FC39090846adc7)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xc64F740D216B6ec49e435a8a08132529788e8DD0)
 */
export const useWriteSeedTokenApprove = /*#__PURE__*/ createUseWriteContract({
  abi: seedTokenAbi,
  address: seedTokenAddress,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link seedTokenAbi}__ and `functionName` set to `"decreaseAllowance"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x546D239032b24eCEEE0cb05c92FC39090846adc7)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xc64F740D216B6ec49e435a8a08132529788e8DD0)
 */
export const useWriteSeedTokenDecreaseAllowance =
  /*#__PURE__*/ createUseWriteContract({
    abi: seedTokenAbi,
    address: seedTokenAddress,
    functionName: 'decreaseAllowance',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link seedTokenAbi}__ and `functionName` set to `"excludeFromFees"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x546D239032b24eCEEE0cb05c92FC39090846adc7)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xc64F740D216B6ec49e435a8a08132529788e8DD0)
 */
export const useWriteSeedTokenExcludeFromFees =
  /*#__PURE__*/ createUseWriteContract({
    abi: seedTokenAbi,
    address: seedTokenAddress,
    functionName: 'excludeFromFees',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link seedTokenAbi}__ and `functionName` set to `"excludeFromMaxTransaction"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x546D239032b24eCEEE0cb05c92FC39090846adc7)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xc64F740D216B6ec49e435a8a08132529788e8DD0)
 */
export const useWriteSeedTokenExcludeFromMaxTransaction =
  /*#__PURE__*/ createUseWriteContract({
    abi: seedTokenAbi,
    address: seedTokenAddress,
    functionName: 'excludeFromMaxTransaction',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link seedTokenAbi}__ and `functionName` set to `"increaseAllowance"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x546D239032b24eCEEE0cb05c92FC39090846adc7)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xc64F740D216B6ec49e435a8a08132529788e8DD0)
 */
export const useWriteSeedTokenIncreaseAllowance =
  /*#__PURE__*/ createUseWriteContract({
    abi: seedTokenAbi,
    address: seedTokenAddress,
    functionName: 'increaseAllowance',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link seedTokenAbi}__ and `functionName` set to `"removeLimits"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x546D239032b24eCEEE0cb05c92FC39090846adc7)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xc64F740D216B6ec49e435a8a08132529788e8DD0)
 */
export const useWriteSeedTokenRemoveLimits =
  /*#__PURE__*/ createUseWriteContract({
    abi: seedTokenAbi,
    address: seedTokenAddress,
    functionName: 'removeLimits',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link seedTokenAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x546D239032b24eCEEE0cb05c92FC39090846adc7)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xc64F740D216B6ec49e435a8a08132529788e8DD0)
 */
export const useWriteSeedTokenRenounceOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: seedTokenAbi,
    address: seedTokenAddress,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link seedTokenAbi}__ and `functionName` set to `"setAutomatedMarketMakerPair"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x546D239032b24eCEEE0cb05c92FC39090846adc7)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xc64F740D216B6ec49e435a8a08132529788e8DD0)
 */
export const useWriteSeedTokenSetAutomatedMarketMakerPair =
  /*#__PURE__*/ createUseWriteContract({
    abi: seedTokenAbi,
    address: seedTokenAddress,
    functionName: 'setAutomatedMarketMakerPair',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link seedTokenAbi}__ and `functionName` set to `"transfer"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x546D239032b24eCEEE0cb05c92FC39090846adc7)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xc64F740D216B6ec49e435a8a08132529788e8DD0)
 */
export const useWriteSeedTokenTransfer = /*#__PURE__*/ createUseWriteContract({
  abi: seedTokenAbi,
  address: seedTokenAddress,
  functionName: 'transfer',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link seedTokenAbi}__ and `functionName` set to `"transferFrom"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x546D239032b24eCEEE0cb05c92FC39090846adc7)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xc64F740D216B6ec49e435a8a08132529788e8DD0)
 */
export const useWriteSeedTokenTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: seedTokenAbi,
    address: seedTokenAddress,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link seedTokenAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x546D239032b24eCEEE0cb05c92FC39090846adc7)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xc64F740D216B6ec49e435a8a08132529788e8DD0)
 */
export const useWriteSeedTokenTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: seedTokenAbi,
    address: seedTokenAddress,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link seedTokenAbi}__ and `functionName` set to `"updateBuyFees"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x546D239032b24eCEEE0cb05c92FC39090846adc7)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xc64F740D216B6ec49e435a8a08132529788e8DD0)
 */
export const useWriteSeedTokenUpdateBuyFees =
  /*#__PURE__*/ createUseWriteContract({
    abi: seedTokenAbi,
    address: seedTokenAddress,
    functionName: 'updateBuyFees',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link seedTokenAbi}__ and `functionName` set to `"updateMaxTxnAmount"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x546D239032b24eCEEE0cb05c92FC39090846adc7)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xc64F740D216B6ec49e435a8a08132529788e8DD0)
 */
export const useWriteSeedTokenUpdateMaxTxnAmount =
  /*#__PURE__*/ createUseWriteContract({
    abi: seedTokenAbi,
    address: seedTokenAddress,
    functionName: 'updateMaxTxnAmount',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link seedTokenAbi}__ and `functionName` set to `"updateMaxWalletAmount"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x546D239032b24eCEEE0cb05c92FC39090846adc7)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xc64F740D216B6ec49e435a8a08132529788e8DD0)
 */
export const useWriteSeedTokenUpdateMaxWalletAmount =
  /*#__PURE__*/ createUseWriteContract({
    abi: seedTokenAbi,
    address: seedTokenAddress,
    functionName: 'updateMaxWalletAmount',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link seedTokenAbi}__ and `functionName` set to `"updateRevShareWallet"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x546D239032b24eCEEE0cb05c92FC39090846adc7)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xc64F740D216B6ec49e435a8a08132529788e8DD0)
 */
export const useWriteSeedTokenUpdateRevShareWallet =
  /*#__PURE__*/ createUseWriteContract({
    abi: seedTokenAbi,
    address: seedTokenAddress,
    functionName: 'updateRevShareWallet',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link seedTokenAbi}__ and `functionName` set to `"updateSellFees"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x546D239032b24eCEEE0cb05c92FC39090846adc7)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xc64F740D216B6ec49e435a8a08132529788e8DD0)
 */
export const useWriteSeedTokenUpdateSellFees =
  /*#__PURE__*/ createUseWriteContract({
    abi: seedTokenAbi,
    address: seedTokenAddress,
    functionName: 'updateSellFees',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link seedTokenAbi}__ and `functionName` set to `"updateSwapEnabled"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x546D239032b24eCEEE0cb05c92FC39090846adc7)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xc64F740D216B6ec49e435a8a08132529788e8DD0)
 */
export const useWriteSeedTokenUpdateSwapEnabled =
  /*#__PURE__*/ createUseWriteContract({
    abi: seedTokenAbi,
    address: seedTokenAddress,
    functionName: 'updateSwapEnabled',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link seedTokenAbi}__ and `functionName` set to `"updateSwapTokensAtAmount"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x546D239032b24eCEEE0cb05c92FC39090846adc7)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xc64F740D216B6ec49e435a8a08132529788e8DD0)
 */
export const useWriteSeedTokenUpdateSwapTokensAtAmount =
  /*#__PURE__*/ createUseWriteContract({
    abi: seedTokenAbi,
    address: seedTokenAddress,
    functionName: 'updateSwapTokensAtAmount',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link seedTokenAbi}__ and `functionName` set to `"updateTeamWallet"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x546D239032b24eCEEE0cb05c92FC39090846adc7)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xc64F740D216B6ec49e435a8a08132529788e8DD0)
 */
export const useWriteSeedTokenUpdateTeamWallet =
  /*#__PURE__*/ createUseWriteContract({
    abi: seedTokenAbi,
    address: seedTokenAddress,
    functionName: 'updateTeamWallet',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link seedTokenAbi}__ and `functionName` set to `"withdrawStuckEth"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x546D239032b24eCEEE0cb05c92FC39090846adc7)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xc64F740D216B6ec49e435a8a08132529788e8DD0)
 */
export const useWriteSeedTokenWithdrawStuckEth =
  /*#__PURE__*/ createUseWriteContract({
    abi: seedTokenAbi,
    address: seedTokenAddress,
    functionName: 'withdrawStuckEth',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link seedTokenAbi}__ and `functionName` set to `"withdrawStuckToken"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x546D239032b24eCEEE0cb05c92FC39090846adc7)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xc64F740D216B6ec49e435a8a08132529788e8DD0)
 */
export const useWriteSeedTokenWithdrawStuckToken =
  /*#__PURE__*/ createUseWriteContract({
    abi: seedTokenAbi,
    address: seedTokenAddress,
    functionName: 'withdrawStuckToken',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link seedTokenAbi}__
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x546D239032b24eCEEE0cb05c92FC39090846adc7)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xc64F740D216B6ec49e435a8a08132529788e8DD0)
 */
export const useSimulateSeedToken = /*#__PURE__*/ createUseSimulateContract({
  abi: seedTokenAbi,
  address: seedTokenAddress,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link seedTokenAbi}__ and `functionName` set to `"approve"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x546D239032b24eCEEE0cb05c92FC39090846adc7)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xc64F740D216B6ec49e435a8a08132529788e8DD0)
 */
export const useSimulateSeedTokenApprove =
  /*#__PURE__*/ createUseSimulateContract({
    abi: seedTokenAbi,
    address: seedTokenAddress,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link seedTokenAbi}__ and `functionName` set to `"decreaseAllowance"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x546D239032b24eCEEE0cb05c92FC39090846adc7)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xc64F740D216B6ec49e435a8a08132529788e8DD0)
 */
export const useSimulateSeedTokenDecreaseAllowance =
  /*#__PURE__*/ createUseSimulateContract({
    abi: seedTokenAbi,
    address: seedTokenAddress,
    functionName: 'decreaseAllowance',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link seedTokenAbi}__ and `functionName` set to `"excludeFromFees"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x546D239032b24eCEEE0cb05c92FC39090846adc7)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xc64F740D216B6ec49e435a8a08132529788e8DD0)
 */
export const useSimulateSeedTokenExcludeFromFees =
  /*#__PURE__*/ createUseSimulateContract({
    abi: seedTokenAbi,
    address: seedTokenAddress,
    functionName: 'excludeFromFees',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link seedTokenAbi}__ and `functionName` set to `"excludeFromMaxTransaction"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x546D239032b24eCEEE0cb05c92FC39090846adc7)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xc64F740D216B6ec49e435a8a08132529788e8DD0)
 */
export const useSimulateSeedTokenExcludeFromMaxTransaction =
  /*#__PURE__*/ createUseSimulateContract({
    abi: seedTokenAbi,
    address: seedTokenAddress,
    functionName: 'excludeFromMaxTransaction',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link seedTokenAbi}__ and `functionName` set to `"increaseAllowance"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x546D239032b24eCEEE0cb05c92FC39090846adc7)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xc64F740D216B6ec49e435a8a08132529788e8DD0)
 */
export const useSimulateSeedTokenIncreaseAllowance =
  /*#__PURE__*/ createUseSimulateContract({
    abi: seedTokenAbi,
    address: seedTokenAddress,
    functionName: 'increaseAllowance',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link seedTokenAbi}__ and `functionName` set to `"removeLimits"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x546D239032b24eCEEE0cb05c92FC39090846adc7)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xc64F740D216B6ec49e435a8a08132529788e8DD0)
 */
export const useSimulateSeedTokenRemoveLimits =
  /*#__PURE__*/ createUseSimulateContract({
    abi: seedTokenAbi,
    address: seedTokenAddress,
    functionName: 'removeLimits',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link seedTokenAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x546D239032b24eCEEE0cb05c92FC39090846adc7)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xc64F740D216B6ec49e435a8a08132529788e8DD0)
 */
export const useSimulateSeedTokenRenounceOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: seedTokenAbi,
    address: seedTokenAddress,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link seedTokenAbi}__ and `functionName` set to `"setAutomatedMarketMakerPair"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x546D239032b24eCEEE0cb05c92FC39090846adc7)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xc64F740D216B6ec49e435a8a08132529788e8DD0)
 */
export const useSimulateSeedTokenSetAutomatedMarketMakerPair =
  /*#__PURE__*/ createUseSimulateContract({
    abi: seedTokenAbi,
    address: seedTokenAddress,
    functionName: 'setAutomatedMarketMakerPair',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link seedTokenAbi}__ and `functionName` set to `"transfer"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x546D239032b24eCEEE0cb05c92FC39090846adc7)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xc64F740D216B6ec49e435a8a08132529788e8DD0)
 */
export const useSimulateSeedTokenTransfer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: seedTokenAbi,
    address: seedTokenAddress,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link seedTokenAbi}__ and `functionName` set to `"transferFrom"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x546D239032b24eCEEE0cb05c92FC39090846adc7)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xc64F740D216B6ec49e435a8a08132529788e8DD0)
 */
export const useSimulateSeedTokenTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: seedTokenAbi,
    address: seedTokenAddress,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link seedTokenAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x546D239032b24eCEEE0cb05c92FC39090846adc7)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xc64F740D216B6ec49e435a8a08132529788e8DD0)
 */
export const useSimulateSeedTokenTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: seedTokenAbi,
    address: seedTokenAddress,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link seedTokenAbi}__ and `functionName` set to `"updateBuyFees"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x546D239032b24eCEEE0cb05c92FC39090846adc7)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xc64F740D216B6ec49e435a8a08132529788e8DD0)
 */
export const useSimulateSeedTokenUpdateBuyFees =
  /*#__PURE__*/ createUseSimulateContract({
    abi: seedTokenAbi,
    address: seedTokenAddress,
    functionName: 'updateBuyFees',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link seedTokenAbi}__ and `functionName` set to `"updateMaxTxnAmount"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x546D239032b24eCEEE0cb05c92FC39090846adc7)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xc64F740D216B6ec49e435a8a08132529788e8DD0)
 */
export const useSimulateSeedTokenUpdateMaxTxnAmount =
  /*#__PURE__*/ createUseSimulateContract({
    abi: seedTokenAbi,
    address: seedTokenAddress,
    functionName: 'updateMaxTxnAmount',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link seedTokenAbi}__ and `functionName` set to `"updateMaxWalletAmount"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x546D239032b24eCEEE0cb05c92FC39090846adc7)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xc64F740D216B6ec49e435a8a08132529788e8DD0)
 */
export const useSimulateSeedTokenUpdateMaxWalletAmount =
  /*#__PURE__*/ createUseSimulateContract({
    abi: seedTokenAbi,
    address: seedTokenAddress,
    functionName: 'updateMaxWalletAmount',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link seedTokenAbi}__ and `functionName` set to `"updateRevShareWallet"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x546D239032b24eCEEE0cb05c92FC39090846adc7)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xc64F740D216B6ec49e435a8a08132529788e8DD0)
 */
export const useSimulateSeedTokenUpdateRevShareWallet =
  /*#__PURE__*/ createUseSimulateContract({
    abi: seedTokenAbi,
    address: seedTokenAddress,
    functionName: 'updateRevShareWallet',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link seedTokenAbi}__ and `functionName` set to `"updateSellFees"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x546D239032b24eCEEE0cb05c92FC39090846adc7)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xc64F740D216B6ec49e435a8a08132529788e8DD0)
 */
export const useSimulateSeedTokenUpdateSellFees =
  /*#__PURE__*/ createUseSimulateContract({
    abi: seedTokenAbi,
    address: seedTokenAddress,
    functionName: 'updateSellFees',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link seedTokenAbi}__ and `functionName` set to `"updateSwapEnabled"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x546D239032b24eCEEE0cb05c92FC39090846adc7)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xc64F740D216B6ec49e435a8a08132529788e8DD0)
 */
export const useSimulateSeedTokenUpdateSwapEnabled =
  /*#__PURE__*/ createUseSimulateContract({
    abi: seedTokenAbi,
    address: seedTokenAddress,
    functionName: 'updateSwapEnabled',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link seedTokenAbi}__ and `functionName` set to `"updateSwapTokensAtAmount"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x546D239032b24eCEEE0cb05c92FC39090846adc7)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xc64F740D216B6ec49e435a8a08132529788e8DD0)
 */
export const useSimulateSeedTokenUpdateSwapTokensAtAmount =
  /*#__PURE__*/ createUseSimulateContract({
    abi: seedTokenAbi,
    address: seedTokenAddress,
    functionName: 'updateSwapTokensAtAmount',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link seedTokenAbi}__ and `functionName` set to `"updateTeamWallet"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x546D239032b24eCEEE0cb05c92FC39090846adc7)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xc64F740D216B6ec49e435a8a08132529788e8DD0)
 */
export const useSimulateSeedTokenUpdateTeamWallet =
  /*#__PURE__*/ createUseSimulateContract({
    abi: seedTokenAbi,
    address: seedTokenAddress,
    functionName: 'updateTeamWallet',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link seedTokenAbi}__ and `functionName` set to `"withdrawStuckEth"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x546D239032b24eCEEE0cb05c92FC39090846adc7)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xc64F740D216B6ec49e435a8a08132529788e8DD0)
 */
export const useSimulateSeedTokenWithdrawStuckEth =
  /*#__PURE__*/ createUseSimulateContract({
    abi: seedTokenAbi,
    address: seedTokenAddress,
    functionName: 'withdrawStuckEth',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link seedTokenAbi}__ and `functionName` set to `"withdrawStuckToken"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x546D239032b24eCEEE0cb05c92FC39090846adc7)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xc64F740D216B6ec49e435a8a08132529788e8DD0)
 */
export const useSimulateSeedTokenWithdrawStuckToken =
  /*#__PURE__*/ createUseSimulateContract({
    abi: seedTokenAbi,
    address: seedTokenAddress,
    functionName: 'withdrawStuckToken',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link seedTokenAbi}__
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x546D239032b24eCEEE0cb05c92FC39090846adc7)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xc64F740D216B6ec49e435a8a08132529788e8DD0)
 */
export const useWatchSeedTokenEvent = /*#__PURE__*/ createUseWatchContractEvent(
  { abi: seedTokenAbi, address: seedTokenAddress },
)

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link seedTokenAbi}__ and `eventName` set to `"Approval"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x546D239032b24eCEEE0cb05c92FC39090846adc7)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xc64F740D216B6ec49e435a8a08132529788e8DD0)
 */
export const useWatchSeedTokenApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: seedTokenAbi,
    address: seedTokenAddress,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link seedTokenAbi}__ and `eventName` set to `"ExcludeFromFees"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x546D239032b24eCEEE0cb05c92FC39090846adc7)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xc64F740D216B6ec49e435a8a08132529788e8DD0)
 */
export const useWatchSeedTokenExcludeFromFeesEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: seedTokenAbi,
    address: seedTokenAddress,
    eventName: 'ExcludeFromFees',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link seedTokenAbi}__ and `eventName` set to `"OwnershipTransferred"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x546D239032b24eCEEE0cb05c92FC39090846adc7)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xc64F740D216B6ec49e435a8a08132529788e8DD0)
 */
export const useWatchSeedTokenOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: seedTokenAbi,
    address: seedTokenAddress,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link seedTokenAbi}__ and `eventName` set to `"SetAutomatedMarketMakerPair"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x546D239032b24eCEEE0cb05c92FC39090846adc7)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xc64F740D216B6ec49e435a8a08132529788e8DD0)
 */
export const useWatchSeedTokenSetAutomatedMarketMakerPairEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: seedTokenAbi,
    address: seedTokenAddress,
    eventName: 'SetAutomatedMarketMakerPair',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link seedTokenAbi}__ and `eventName` set to `"SwapAndLiquify"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x546D239032b24eCEEE0cb05c92FC39090846adc7)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xc64F740D216B6ec49e435a8a08132529788e8DD0)
 */
export const useWatchSeedTokenSwapAndLiquifyEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: seedTokenAbi,
    address: seedTokenAddress,
    eventName: 'SwapAndLiquify',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link seedTokenAbi}__ and `eventName` set to `"Transfer"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x546D239032b24eCEEE0cb05c92FC39090846adc7)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xc64F740D216B6ec49e435a8a08132529788e8DD0)
 */
export const useWatchSeedTokenTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: seedTokenAbi,
    address: seedTokenAddress,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link seedTokenAbi}__ and `eventName` set to `"UpdateUniswapV2Router"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x546D239032b24eCEEE0cb05c92FC39090846adc7)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xc64F740D216B6ec49e435a8a08132529788e8DD0)
 */
export const useWatchSeedTokenUpdateUniswapV2RouterEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: seedTokenAbi,
    address: seedTokenAddress,
    eventName: 'UpdateUniswapV2Router',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link seedTokenAbi}__ and `eventName` set to `"revShareWalletUpdated"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x546D239032b24eCEEE0cb05c92FC39090846adc7)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xc64F740D216B6ec49e435a8a08132529788e8DD0)
 */
export const useWatchSeedTokenRevShareWalletUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: seedTokenAbi,
    address: seedTokenAddress,
    eventName: 'revShareWalletUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link seedTokenAbi}__ and `eventName` set to `"teamWalletUpdated"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x546D239032b24eCEEE0cb05c92FC39090846adc7)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xc64F740D216B6ec49e435a8a08132529788e8DD0)
 */
export const useWatchSeedTokenTeamWalletUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: seedTokenAbi,
    address: seedTokenAddress,
    eventName: 'teamWalletUpdated',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stakeContractAbi}__
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xf15d93c3617525054af05338cc6ccf18886bd03a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xEA6fBFDb8c846323f56cd819350fB63f1D8aFdce)
 */
export const useReadStakeContract = /*#__PURE__*/ createUseReadContract({
  abi: stakeContractAbi,
  address: stakeContractAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stakeContractAbi}__ and `functionName` set to `"DEFAULT_ADMIN_ROLE"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xf15d93c3617525054af05338cc6ccf18886bd03a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xEA6fBFDb8c846323f56cd819350fB63f1D8aFdce)
 */
export const useReadStakeContractDefaultAdminRole =
  /*#__PURE__*/ createUseReadContract({
    abi: stakeContractAbi,
    address: stakeContractAddress,
    functionName: 'DEFAULT_ADMIN_ROLE',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stakeContractAbi}__ and `functionName` set to `"contractType"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xf15d93c3617525054af05338cc6ccf18886bd03a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xEA6fBFDb8c846323f56cd819350fB63f1D8aFdce)
 */
export const useReadStakeContractContractType =
  /*#__PURE__*/ createUseReadContract({
    abi: stakeContractAbi,
    address: stakeContractAddress,
    functionName: 'contractType',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stakeContractAbi}__ and `functionName` set to `"contractURI"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xf15d93c3617525054af05338cc6ccf18886bd03a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xEA6fBFDb8c846323f56cd819350fB63f1D8aFdce)
 */
export const useReadStakeContractContractUri =
  /*#__PURE__*/ createUseReadContract({
    abi: stakeContractAbi,
    address: stakeContractAddress,
    functionName: 'contractURI',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stakeContractAbi}__ and `functionName` set to `"contractVersion"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xf15d93c3617525054af05338cc6ccf18886bd03a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xEA6fBFDb8c846323f56cd819350fB63f1D8aFdce)
 */
export const useReadStakeContractContractVersion =
  /*#__PURE__*/ createUseReadContract({
    abi: stakeContractAbi,
    address: stakeContractAddress,
    functionName: 'contractVersion',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stakeContractAbi}__ and `functionName` set to `"getRewardRatio"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xf15d93c3617525054af05338cc6ccf18886bd03a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xEA6fBFDb8c846323f56cd819350fB63f1D8aFdce)
 */
export const useReadStakeContractGetRewardRatio =
  /*#__PURE__*/ createUseReadContract({
    abi: stakeContractAbi,
    address: stakeContractAddress,
    functionName: 'getRewardRatio',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stakeContractAbi}__ and `functionName` set to `"getRewardTokenBalance"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xf15d93c3617525054af05338cc6ccf18886bd03a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xEA6fBFDb8c846323f56cd819350fB63f1D8aFdce)
 */
export const useReadStakeContractGetRewardTokenBalance =
  /*#__PURE__*/ createUseReadContract({
    abi: stakeContractAbi,
    address: stakeContractAddress,
    functionName: 'getRewardTokenBalance',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stakeContractAbi}__ and `functionName` set to `"getRoleAdmin"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xf15d93c3617525054af05338cc6ccf18886bd03a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xEA6fBFDb8c846323f56cd819350fB63f1D8aFdce)
 */
export const useReadStakeContractGetRoleAdmin =
  /*#__PURE__*/ createUseReadContract({
    abi: stakeContractAbi,
    address: stakeContractAddress,
    functionName: 'getRoleAdmin',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stakeContractAbi}__ and `functionName` set to `"getRoleMember"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xf15d93c3617525054af05338cc6ccf18886bd03a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xEA6fBFDb8c846323f56cd819350fB63f1D8aFdce)
 */
export const useReadStakeContractGetRoleMember =
  /*#__PURE__*/ createUseReadContract({
    abi: stakeContractAbi,
    address: stakeContractAddress,
    functionName: 'getRoleMember',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stakeContractAbi}__ and `functionName` set to `"getRoleMemberCount"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xf15d93c3617525054af05338cc6ccf18886bd03a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xEA6fBFDb8c846323f56cd819350fB63f1D8aFdce)
 */
export const useReadStakeContractGetRoleMemberCount =
  /*#__PURE__*/ createUseReadContract({
    abi: stakeContractAbi,
    address: stakeContractAddress,
    functionName: 'getRoleMemberCount',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stakeContractAbi}__ and `functionName` set to `"getStakeInfo"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xf15d93c3617525054af05338cc6ccf18886bd03a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xEA6fBFDb8c846323f56cd819350fB63f1D8aFdce)
 */
export const useReadStakeContractGetStakeInfo =
  /*#__PURE__*/ createUseReadContract({
    abi: stakeContractAbi,
    address: stakeContractAddress,
    functionName: 'getStakeInfo',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stakeContractAbi}__ and `functionName` set to `"getTimeUnit"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xf15d93c3617525054af05338cc6ccf18886bd03a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xEA6fBFDb8c846323f56cd819350fB63f1D8aFdce)
 */
export const useReadStakeContractGetTimeUnit =
  /*#__PURE__*/ createUseReadContract({
    abi: stakeContractAbi,
    address: stakeContractAddress,
    functionName: 'getTimeUnit',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stakeContractAbi}__ and `functionName` set to `"hasRole"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xf15d93c3617525054af05338cc6ccf18886bd03a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xEA6fBFDb8c846323f56cd819350fB63f1D8aFdce)
 */
export const useReadStakeContractHasRole = /*#__PURE__*/ createUseReadContract({
  abi: stakeContractAbi,
  address: stakeContractAddress,
  functionName: 'hasRole',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stakeContractAbi}__ and `functionName` set to `"hasRoleWithSwitch"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xf15d93c3617525054af05338cc6ccf18886bd03a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xEA6fBFDb8c846323f56cd819350fB63f1D8aFdce)
 */
export const useReadStakeContractHasRoleWithSwitch =
  /*#__PURE__*/ createUseReadContract({
    abi: stakeContractAbi,
    address: stakeContractAddress,
    functionName: 'hasRoleWithSwitch',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stakeContractAbi}__ and `functionName` set to `"isTrustedForwarder"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xf15d93c3617525054af05338cc6ccf18886bd03a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xEA6fBFDb8c846323f56cd819350fB63f1D8aFdce)
 */
export const useReadStakeContractIsTrustedForwarder =
  /*#__PURE__*/ createUseReadContract({
    abi: stakeContractAbi,
    address: stakeContractAddress,
    functionName: 'isTrustedForwarder',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stakeContractAbi}__ and `functionName` set to `"rewardToken"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xf15d93c3617525054af05338cc6ccf18886bd03a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xEA6fBFDb8c846323f56cd819350fB63f1D8aFdce)
 */
export const useReadStakeContractRewardToken =
  /*#__PURE__*/ createUseReadContract({
    abi: stakeContractAbi,
    address: stakeContractAddress,
    functionName: 'rewardToken',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stakeContractAbi}__ and `functionName` set to `"rewardTokenDecimals"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xf15d93c3617525054af05338cc6ccf18886bd03a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xEA6fBFDb8c846323f56cd819350fB63f1D8aFdce)
 */
export const useReadStakeContractRewardTokenDecimals =
  /*#__PURE__*/ createUseReadContract({
    abi: stakeContractAbi,
    address: stakeContractAddress,
    functionName: 'rewardTokenDecimals',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stakeContractAbi}__ and `functionName` set to `"stakers"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xf15d93c3617525054af05338cc6ccf18886bd03a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xEA6fBFDb8c846323f56cd819350fB63f1D8aFdce)
 */
export const useReadStakeContractStakers = /*#__PURE__*/ createUseReadContract({
  abi: stakeContractAbi,
  address: stakeContractAddress,
  functionName: 'stakers',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stakeContractAbi}__ and `functionName` set to `"stakersArray"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xf15d93c3617525054af05338cc6ccf18886bd03a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xEA6fBFDb8c846323f56cd819350fB63f1D8aFdce)
 */
export const useReadStakeContractStakersArray =
  /*#__PURE__*/ createUseReadContract({
    abi: stakeContractAbi,
    address: stakeContractAddress,
    functionName: 'stakersArray',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stakeContractAbi}__ and `functionName` set to `"stakingToken"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xf15d93c3617525054af05338cc6ccf18886bd03a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xEA6fBFDb8c846323f56cd819350fB63f1D8aFdce)
 */
export const useReadStakeContractStakingToken =
  /*#__PURE__*/ createUseReadContract({
    abi: stakeContractAbi,
    address: stakeContractAddress,
    functionName: 'stakingToken',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stakeContractAbi}__ and `functionName` set to `"stakingTokenBalance"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xf15d93c3617525054af05338cc6ccf18886bd03a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xEA6fBFDb8c846323f56cd819350fB63f1D8aFdce)
 */
export const useReadStakeContractStakingTokenBalance =
  /*#__PURE__*/ createUseReadContract({
    abi: stakeContractAbi,
    address: stakeContractAddress,
    functionName: 'stakingTokenBalance',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stakeContractAbi}__ and `functionName` set to `"stakingTokenDecimals"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xf15d93c3617525054af05338cc6ccf18886bd03a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xEA6fBFDb8c846323f56cd819350fB63f1D8aFdce)
 */
export const useReadStakeContractStakingTokenDecimals =
  /*#__PURE__*/ createUseReadContract({
    abi: stakeContractAbi,
    address: stakeContractAddress,
    functionName: 'stakingTokenDecimals',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link stakeContractAbi}__
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xf15d93c3617525054af05338cc6ccf18886bd03a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xEA6fBFDb8c846323f56cd819350fB63f1D8aFdce)
 */
export const useWriteStakeContract = /*#__PURE__*/ createUseWriteContract({
  abi: stakeContractAbi,
  address: stakeContractAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link stakeContractAbi}__ and `functionName` set to `"claimRewards"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xf15d93c3617525054af05338cc6ccf18886bd03a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xEA6fBFDb8c846323f56cd819350fB63f1D8aFdce)
 */
export const useWriteStakeContractClaimRewards =
  /*#__PURE__*/ createUseWriteContract({
    abi: stakeContractAbi,
    address: stakeContractAddress,
    functionName: 'claimRewards',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link stakeContractAbi}__ and `functionName` set to `"depositRewardTokens"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xf15d93c3617525054af05338cc6ccf18886bd03a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xEA6fBFDb8c846323f56cd819350fB63f1D8aFdce)
 */
export const useWriteStakeContractDepositRewardTokens =
  /*#__PURE__*/ createUseWriteContract({
    abi: stakeContractAbi,
    address: stakeContractAddress,
    functionName: 'depositRewardTokens',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link stakeContractAbi}__ and `functionName` set to `"grantRole"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xf15d93c3617525054af05338cc6ccf18886bd03a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xEA6fBFDb8c846323f56cd819350fB63f1D8aFdce)
 */
export const useWriteStakeContractGrantRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: stakeContractAbi,
    address: stakeContractAddress,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link stakeContractAbi}__ and `functionName` set to `"initialize"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xf15d93c3617525054af05338cc6ccf18886bd03a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xEA6fBFDb8c846323f56cd819350fB63f1D8aFdce)
 */
export const useWriteStakeContractInitialize =
  /*#__PURE__*/ createUseWriteContract({
    abi: stakeContractAbi,
    address: stakeContractAddress,
    functionName: 'initialize',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link stakeContractAbi}__ and `functionName` set to `"multicall"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xf15d93c3617525054af05338cc6ccf18886bd03a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xEA6fBFDb8c846323f56cd819350fB63f1D8aFdce)
 */
export const useWriteStakeContractMulticall =
  /*#__PURE__*/ createUseWriteContract({
    abi: stakeContractAbi,
    address: stakeContractAddress,
    functionName: 'multicall',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link stakeContractAbi}__ and `functionName` set to `"renounceRole"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xf15d93c3617525054af05338cc6ccf18886bd03a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xEA6fBFDb8c846323f56cd819350fB63f1D8aFdce)
 */
export const useWriteStakeContractRenounceRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: stakeContractAbi,
    address: stakeContractAddress,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link stakeContractAbi}__ and `functionName` set to `"revokeRole"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xf15d93c3617525054af05338cc6ccf18886bd03a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xEA6fBFDb8c846323f56cd819350fB63f1D8aFdce)
 */
export const useWriteStakeContractRevokeRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: stakeContractAbi,
    address: stakeContractAddress,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link stakeContractAbi}__ and `functionName` set to `"setContractURI"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xf15d93c3617525054af05338cc6ccf18886bd03a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xEA6fBFDb8c846323f56cd819350fB63f1D8aFdce)
 */
export const useWriteStakeContractSetContractUri =
  /*#__PURE__*/ createUseWriteContract({
    abi: stakeContractAbi,
    address: stakeContractAddress,
    functionName: 'setContractURI',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link stakeContractAbi}__ and `functionName` set to `"setRewardRatio"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xf15d93c3617525054af05338cc6ccf18886bd03a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xEA6fBFDb8c846323f56cd819350fB63f1D8aFdce)
 */
export const useWriteStakeContractSetRewardRatio =
  /*#__PURE__*/ createUseWriteContract({
    abi: stakeContractAbi,
    address: stakeContractAddress,
    functionName: 'setRewardRatio',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link stakeContractAbi}__ and `functionName` set to `"setTimeUnit"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xf15d93c3617525054af05338cc6ccf18886bd03a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xEA6fBFDb8c846323f56cd819350fB63f1D8aFdce)
 */
export const useWriteStakeContractSetTimeUnit =
  /*#__PURE__*/ createUseWriteContract({
    abi: stakeContractAbi,
    address: stakeContractAddress,
    functionName: 'setTimeUnit',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link stakeContractAbi}__ and `functionName` set to `"stake"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xf15d93c3617525054af05338cc6ccf18886bd03a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xEA6fBFDb8c846323f56cd819350fB63f1D8aFdce)
 */
export const useWriteStakeContractStake = /*#__PURE__*/ createUseWriteContract({
  abi: stakeContractAbi,
  address: stakeContractAddress,
  functionName: 'stake',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link stakeContractAbi}__ and `functionName` set to `"withdraw"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xf15d93c3617525054af05338cc6ccf18886bd03a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xEA6fBFDb8c846323f56cd819350fB63f1D8aFdce)
 */
export const useWriteStakeContractWithdraw =
  /*#__PURE__*/ createUseWriteContract({
    abi: stakeContractAbi,
    address: stakeContractAddress,
    functionName: 'withdraw',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link stakeContractAbi}__ and `functionName` set to `"withdrawRewardTokens"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xf15d93c3617525054af05338cc6ccf18886bd03a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xEA6fBFDb8c846323f56cd819350fB63f1D8aFdce)
 */
export const useWriteStakeContractWithdrawRewardTokens =
  /*#__PURE__*/ createUseWriteContract({
    abi: stakeContractAbi,
    address: stakeContractAddress,
    functionName: 'withdrawRewardTokens',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link stakeContractAbi}__
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xf15d93c3617525054af05338cc6ccf18886bd03a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xEA6fBFDb8c846323f56cd819350fB63f1D8aFdce)
 */
export const useSimulateStakeContract = /*#__PURE__*/ createUseSimulateContract(
  { abi: stakeContractAbi, address: stakeContractAddress },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link stakeContractAbi}__ and `functionName` set to `"claimRewards"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xf15d93c3617525054af05338cc6ccf18886bd03a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xEA6fBFDb8c846323f56cd819350fB63f1D8aFdce)
 */
export const useSimulateStakeContractClaimRewards =
  /*#__PURE__*/ createUseSimulateContract({
    abi: stakeContractAbi,
    address: stakeContractAddress,
    functionName: 'claimRewards',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link stakeContractAbi}__ and `functionName` set to `"depositRewardTokens"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xf15d93c3617525054af05338cc6ccf18886bd03a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xEA6fBFDb8c846323f56cd819350fB63f1D8aFdce)
 */
export const useSimulateStakeContractDepositRewardTokens =
  /*#__PURE__*/ createUseSimulateContract({
    abi: stakeContractAbi,
    address: stakeContractAddress,
    functionName: 'depositRewardTokens',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link stakeContractAbi}__ and `functionName` set to `"grantRole"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xf15d93c3617525054af05338cc6ccf18886bd03a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xEA6fBFDb8c846323f56cd819350fB63f1D8aFdce)
 */
export const useSimulateStakeContractGrantRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: stakeContractAbi,
    address: stakeContractAddress,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link stakeContractAbi}__ and `functionName` set to `"initialize"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xf15d93c3617525054af05338cc6ccf18886bd03a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xEA6fBFDb8c846323f56cd819350fB63f1D8aFdce)
 */
export const useSimulateStakeContractInitialize =
  /*#__PURE__*/ createUseSimulateContract({
    abi: stakeContractAbi,
    address: stakeContractAddress,
    functionName: 'initialize',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link stakeContractAbi}__ and `functionName` set to `"multicall"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xf15d93c3617525054af05338cc6ccf18886bd03a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xEA6fBFDb8c846323f56cd819350fB63f1D8aFdce)
 */
export const useSimulateStakeContractMulticall =
  /*#__PURE__*/ createUseSimulateContract({
    abi: stakeContractAbi,
    address: stakeContractAddress,
    functionName: 'multicall',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link stakeContractAbi}__ and `functionName` set to `"renounceRole"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xf15d93c3617525054af05338cc6ccf18886bd03a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xEA6fBFDb8c846323f56cd819350fB63f1D8aFdce)
 */
export const useSimulateStakeContractRenounceRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: stakeContractAbi,
    address: stakeContractAddress,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link stakeContractAbi}__ and `functionName` set to `"revokeRole"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xf15d93c3617525054af05338cc6ccf18886bd03a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xEA6fBFDb8c846323f56cd819350fB63f1D8aFdce)
 */
export const useSimulateStakeContractRevokeRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: stakeContractAbi,
    address: stakeContractAddress,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link stakeContractAbi}__ and `functionName` set to `"setContractURI"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xf15d93c3617525054af05338cc6ccf18886bd03a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xEA6fBFDb8c846323f56cd819350fB63f1D8aFdce)
 */
export const useSimulateStakeContractSetContractUri =
  /*#__PURE__*/ createUseSimulateContract({
    abi: stakeContractAbi,
    address: stakeContractAddress,
    functionName: 'setContractURI',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link stakeContractAbi}__ and `functionName` set to `"setRewardRatio"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xf15d93c3617525054af05338cc6ccf18886bd03a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xEA6fBFDb8c846323f56cd819350fB63f1D8aFdce)
 */
export const useSimulateStakeContractSetRewardRatio =
  /*#__PURE__*/ createUseSimulateContract({
    abi: stakeContractAbi,
    address: stakeContractAddress,
    functionName: 'setRewardRatio',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link stakeContractAbi}__ and `functionName` set to `"setTimeUnit"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xf15d93c3617525054af05338cc6ccf18886bd03a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xEA6fBFDb8c846323f56cd819350fB63f1D8aFdce)
 */
export const useSimulateStakeContractSetTimeUnit =
  /*#__PURE__*/ createUseSimulateContract({
    abi: stakeContractAbi,
    address: stakeContractAddress,
    functionName: 'setTimeUnit',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link stakeContractAbi}__ and `functionName` set to `"stake"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xf15d93c3617525054af05338cc6ccf18886bd03a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xEA6fBFDb8c846323f56cd819350fB63f1D8aFdce)
 */
export const useSimulateStakeContractStake =
  /*#__PURE__*/ createUseSimulateContract({
    abi: stakeContractAbi,
    address: stakeContractAddress,
    functionName: 'stake',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link stakeContractAbi}__ and `functionName` set to `"withdraw"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xf15d93c3617525054af05338cc6ccf18886bd03a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xEA6fBFDb8c846323f56cd819350fB63f1D8aFdce)
 */
export const useSimulateStakeContractWithdraw =
  /*#__PURE__*/ createUseSimulateContract({
    abi: stakeContractAbi,
    address: stakeContractAddress,
    functionName: 'withdraw',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link stakeContractAbi}__ and `functionName` set to `"withdrawRewardTokens"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xf15d93c3617525054af05338cc6ccf18886bd03a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xEA6fBFDb8c846323f56cd819350fB63f1D8aFdce)
 */
export const useSimulateStakeContractWithdrawRewardTokens =
  /*#__PURE__*/ createUseSimulateContract({
    abi: stakeContractAbi,
    address: stakeContractAddress,
    functionName: 'withdrawRewardTokens',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link stakeContractAbi}__
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xf15d93c3617525054af05338cc6ccf18886bd03a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xEA6fBFDb8c846323f56cd819350fB63f1D8aFdce)
 */
export const useWatchStakeContractEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: stakeContractAbi,
    address: stakeContractAddress,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link stakeContractAbi}__ and `eventName` set to `"ContractURIUpdated"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xf15d93c3617525054af05338cc6ccf18886bd03a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xEA6fBFDb8c846323f56cd819350fB63f1D8aFdce)
 */
export const useWatchStakeContractContractUriUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: stakeContractAbi,
    address: stakeContractAddress,
    eventName: 'ContractURIUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link stakeContractAbi}__ and `eventName` set to `"Initialized"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xf15d93c3617525054af05338cc6ccf18886bd03a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xEA6fBFDb8c846323f56cd819350fB63f1D8aFdce)
 */
export const useWatchStakeContractInitializedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: stakeContractAbi,
    address: stakeContractAddress,
    eventName: 'Initialized',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link stakeContractAbi}__ and `eventName` set to `"RewardTokensDepositedByAdmin"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xf15d93c3617525054af05338cc6ccf18886bd03a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xEA6fBFDb8c846323f56cd819350fB63f1D8aFdce)
 */
export const useWatchStakeContractRewardTokensDepositedByAdminEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: stakeContractAbi,
    address: stakeContractAddress,
    eventName: 'RewardTokensDepositedByAdmin',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link stakeContractAbi}__ and `eventName` set to `"RewardTokensWithdrawnByAdmin"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xf15d93c3617525054af05338cc6ccf18886bd03a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xEA6fBFDb8c846323f56cd819350fB63f1D8aFdce)
 */
export const useWatchStakeContractRewardTokensWithdrawnByAdminEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: stakeContractAbi,
    address: stakeContractAddress,
    eventName: 'RewardTokensWithdrawnByAdmin',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link stakeContractAbi}__ and `eventName` set to `"RewardsClaimed"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xf15d93c3617525054af05338cc6ccf18886bd03a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xEA6fBFDb8c846323f56cd819350fB63f1D8aFdce)
 */
export const useWatchStakeContractRewardsClaimedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: stakeContractAbi,
    address: stakeContractAddress,
    eventName: 'RewardsClaimed',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link stakeContractAbi}__ and `eventName` set to `"RoleAdminChanged"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xf15d93c3617525054af05338cc6ccf18886bd03a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xEA6fBFDb8c846323f56cd819350fB63f1D8aFdce)
 */
export const useWatchStakeContractRoleAdminChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: stakeContractAbi,
    address: stakeContractAddress,
    eventName: 'RoleAdminChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link stakeContractAbi}__ and `eventName` set to `"RoleGranted"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xf15d93c3617525054af05338cc6ccf18886bd03a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xEA6fBFDb8c846323f56cd819350fB63f1D8aFdce)
 */
export const useWatchStakeContractRoleGrantedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: stakeContractAbi,
    address: stakeContractAddress,
    eventName: 'RoleGranted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link stakeContractAbi}__ and `eventName` set to `"RoleRevoked"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xf15d93c3617525054af05338cc6ccf18886bd03a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xEA6fBFDb8c846323f56cd819350fB63f1D8aFdce)
 */
export const useWatchStakeContractRoleRevokedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: stakeContractAbi,
    address: stakeContractAddress,
    eventName: 'RoleRevoked',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link stakeContractAbi}__ and `eventName` set to `"TokensStaked"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xf15d93c3617525054af05338cc6ccf18886bd03a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xEA6fBFDb8c846323f56cd819350fB63f1D8aFdce)
 */
export const useWatchStakeContractTokensStakedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: stakeContractAbi,
    address: stakeContractAddress,
    eventName: 'TokensStaked',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link stakeContractAbi}__ and `eventName` set to `"TokensWithdrawn"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xf15d93c3617525054af05338cc6ccf18886bd03a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xEA6fBFDb8c846323f56cd819350fB63f1D8aFdce)
 */
export const useWatchStakeContractTokensWithdrawnEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: stakeContractAbi,
    address: stakeContractAddress,
    eventName: 'TokensWithdrawn',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link stakeContractAbi}__ and `eventName` set to `"UpdatedMinStakeAmount"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xf15d93c3617525054af05338cc6ccf18886bd03a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xEA6fBFDb8c846323f56cd819350fB63f1D8aFdce)
 */
export const useWatchStakeContractUpdatedMinStakeAmountEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: stakeContractAbi,
    address: stakeContractAddress,
    eventName: 'UpdatedMinStakeAmount',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link stakeContractAbi}__ and `eventName` set to `"UpdatedRewardRatio"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xf15d93c3617525054af05338cc6ccf18886bd03a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xEA6fBFDb8c846323f56cd819350fB63f1D8aFdce)
 */
export const useWatchStakeContractUpdatedRewardRatioEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: stakeContractAbi,
    address: stakeContractAddress,
    eventName: 'UpdatedRewardRatio',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link stakeContractAbi}__ and `eventName` set to `"UpdatedTimeUnit"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xf15d93c3617525054af05338cc6ccf18886bd03a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xEA6fBFDb8c846323f56cd819350fB63f1D8aFdce)
 */
export const useWatchStakeContractUpdatedTimeUnitEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: stakeContractAbi,
    address: stakeContractAddress,
    eventName: 'UpdatedTimeUnit',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__
 */
export const useReadErc20 = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"allowance"`
 */
export const useReadErc20Allowance = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'allowance',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadErc20BalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"decimals"`
 */
export const useReadErc20Decimals = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'decimals',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"name"`
 */
export const useReadErc20Name = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"symbol"`
 */
export const useReadErc20Symbol = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadErc20TotalSupply = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20Abi}__
 */
export const useWriteErc20 = /*#__PURE__*/ createUseWriteContract({
  abi: erc20Abi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"approve"`
 */
export const useWriteErc20Approve = /*#__PURE__*/ createUseWriteContract({
  abi: erc20Abi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transfer"`
 */
export const useWriteErc20Transfer = /*#__PURE__*/ createUseWriteContract({
  abi: erc20Abi,
  functionName: 'transfer',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteErc20TransferFrom = /*#__PURE__*/ createUseWriteContract({
  abi: erc20Abi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20Abi}__
 */
export const useSimulateErc20 = /*#__PURE__*/ createUseSimulateContract({
  abi: erc20Abi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"approve"`
 */
export const useSimulateErc20Approve = /*#__PURE__*/ createUseSimulateContract({
  abi: erc20Abi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transfer"`
 */
export const useSimulateErc20Transfer = /*#__PURE__*/ createUseSimulateContract(
  { abi: erc20Abi, functionName: 'transfer' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateErc20TransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc20Abi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20Abi}__
 */
export const useWatchErc20Event = /*#__PURE__*/ createUseWatchContractEvent({
  abi: erc20Abi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20Abi}__ and `eventName` set to `"Approval"`
 */
export const useWatchErc20ApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc20Abi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20Abi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchErc20TransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc20Abi,
    eventName: 'Transfer',
  })
