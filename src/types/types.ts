export type MenuItemTypes = {
    text: string,
    href: string,
    type: string,
}
export type Steps = {
    heading: string,
    step1: {
        head: string,
        text: [string,string],
        strong?: [string, string],
        stepNav: string
    },
    step2: {
        head: string,
        text: [string, string],
        strong?: [string,string],
        stepNav: string
    },
    step3?: {
        head: string,
        text: [string],
        strong?: [string,string] ,
        stepNav: string
    },
}
export type Promoution = {
    heading: string,
    text: string,
    text1: string,
    textBtn: string 
}
export type AboutCurrency = {
    head: string,
    description: string,
    advantage: string,
    advantage1: string
}
export type Statictic = {
    heading: string,
    claims: {
        amount: number,
        description: string
    }
    users: {
        amount: number,
        description: string
    }
    earned: {
        amount: number,
        description: string
    }
}
export type Reviews = {
    heading: string,
    btnText: string,
    slide: Array <{name: string, description: string,src1: any}> 
}