export const contractAddresses = {
  erc20: {
    42: '0x9c55b6e6DE44b9D3D3d551C0cBB0Ee1c12A4b976',//kovan staking/ poll
    1: '0x63726dAe7C57d25e90ec829ce9a5C745Ffd984d3', // mainnet staking poll
  },
  farm: {
    42: '0x09789f6dcf25828fee3b917abcb9ed5aef30acdd', // kovan farm contract address 
    1: '0xbfd181cb0c8e23b65805dded3863dce6517402a7', // mainnet
  },
  weth: {
    42: '0xa050886815cfc52a24b9c4ad044ca199990b6690', 
    1: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
  }
}

export const supportedPools = [
  {
    pid: 0,
    lpAddresses: {
      42: '0x9c55b6e6DE44b9D3D3d551C0cBB0Ee1c12A4b976', // kovan staking / dai token address
      1: '0x856e90282961c0e7f6693fd2f62b35d5df9783cf',  //mainnet
    },
    tokenAddresses: {
      42: '0x9c55b6e6DE44b9D3D3d551C0cBB0Ee1c12A4b976', // kovan staking / poll
      1: '0x63726dAe7C57d25e90ec829ce9a5C745Ffd984d3', //mainnet
    },
    name: 'POLL-POLL',
    symbol: 'POLL-POLL UNI-V2 LP',
    tokenSymbol: 'POLL',
    icon: '',
    pool: '100%',
  }
]
