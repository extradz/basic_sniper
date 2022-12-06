const tokens = { 
router: "0x10ED43C718714eb63d5aA57B78B54704E256024E", // PCSv2Router 
purchaseAmount: "0", 
pair: [ 
"0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c", // WBNB 
"0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82", // CAKE 
], 
gasLimit: "2000000", 
gasPrice: "5", 
buyDelay: 0, 
buyRetries: 1, 
retryMinTimeout: 250, 
retryMaxTimeout: 3000, 
deadline: 30, 
}; 
module.exports = tokens;
