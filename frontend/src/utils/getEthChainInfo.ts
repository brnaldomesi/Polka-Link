export const getEthChainInfo = () => {
    let chainId: number = 42;
    let rpcUrl: string = 'https://kovan.infura.io/v3/c064c1a117f94e5a885a0897a6c1c3d9/';
    let ethscanType: string = 'kovan.';
    const href = window.location.href;
    if (/\/\/farm.deor.io/.test(href)) {
         chainId = 1;
         rpcUrl = 'wss://kovan.infura.io/ws/v3/c064c1a117f94e5a885a0897a6c1c3d9/';
         ethscanType = '';
    }
    return {
        chainId,
        rpcUrl,
        ethscanType
    }
};
