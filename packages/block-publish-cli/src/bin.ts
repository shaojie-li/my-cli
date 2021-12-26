#!/usr/bin/env node

import { argv } from "process";

interface IParam {
    a: number;
    b: number;
}

export function sum(pram: IParam) {
    return pram.a + pram.b;
}

console.log("Hello sj cli! Hi!", sum({ a: 1, b: 2 }), argv);
