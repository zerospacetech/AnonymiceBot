/*##############################################################################
# File: settings.js                                                            #
# Project: Anonymice - Discord Bot                                             #
# Author(s): Oliver Renner (@_orenner) & slingn.eth (@slingncrypto)            #
# © 2021                                                                       #
###############################################################################*/

const CreepzABI = require("../contracts/ColdBloodedCreepz.json");

const settings = {
  rules: [
    //example of a generic/standard verification rule
    //checks whether the signers wallet holds at least 1 
    //token from the specified contract
    // {
    //   name: "Baby Mice",
    //   roleId: "918771367074201631",
    //   executor: {
    //     type: "GenericContractVerificationRule.js",
    //     config: {
    //       contractAddress: "0x15cc16bfe6fac624247490aa29b6d632be549f00",
    //       contractAbi: AnonymiceBreedingABI,
    //       method: "balanceOf",
    //     },
    //   },
    // },
    // completely customized verification rule
	 {
	   name: "Lizard Hands",
	   roleId: "939774475405238292",
	   executor: {
		 type: "CreepzVerificationRule.js",
		 config: {
		   contractAddress: "0xfE8C6d19365453D26af321D0e8c910428c23873F",
		   contractAbi: CreepzABI,
		   method: "balanceOf",
		 },
	   },
	 },
	 {
	   name: "Lizard Lord",
	   roleId: "939774384946700308",
	   executor: {
		 type: "CreepzVerificationRuleBeta.js",
		 config: {
		   contractAddress: "0xfE8C6d19365453D26af321D0e8c910428c23873F",
		   contractAbi: CreepzABI,
		   method: "balanceOf",
		 },
	   },
	 },
	 {
	   name: "Big Lizard Energy",
	   roleId: "939774051990253649",
	   executor: {
		 type: "CreepzVerificationRuleGamma.js",
		 config: {
		   contractAddress: "0xfE8C6d19365453D26af321D0e8c910428c23873F",
		   contractAbi: CreepzABI,
		   method: "balanceOf",
		 },
	   },
	 },
  ],
};

module.exports = settings;
