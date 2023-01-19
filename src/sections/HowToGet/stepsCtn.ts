import { Steps, AboutCurrency } from "../../types/types"

export const STEPS_CTN: Steps = {
    heading: 'How to get bitcoin',
    step1: {
        head: 'Step 1',
        text: ['Provide us your Bitcoin address and we send you the', 'and an email'],
        strong: ['$5.00', ''],
        stepNav: 'Start now'
    },
    step2: {
        head: 'Step 2',
        text: ['Register and verify your Stake US account. During registration you must enter', 'as a'],
        strong: ['FAUCET','CODE'],
        stepNav: 'Will open after 1-st step'
    }, 
    step3: {
        head: 'Step 3',
        text: [`You’ve completed the main steps and will recieve your BTC soon. You can share StakeFaucet.com below via Twitter/IG/FB`],
        strong: ['', ''],
        stepNav: 'Will open after 1-st step'
    }
}

export const ABOUT_CURRENCY: AboutCurrency = {
    head: 'What is a Bitcoin Faucet',
    description: `This is a simple easy way to get a small amount of Bitcoin for free! Our faucet takes 2-3 minutes to process and you'll have $5.00 of BTC in your wallet`,
    advantage: 'Our partner program will additionally give $1.00 free bitcoin every 24 hours',
    advantage1: 'Fast payment'
}