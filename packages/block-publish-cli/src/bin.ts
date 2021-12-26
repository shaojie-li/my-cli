#!/usr/bin/env node

import { argv } from "process";
import { TestLib } from "@lsjx/sj-test-lib";

const command = argv[2] as "init" | undefined;
const options = argv.slice(3) as Array<string | undefined>;
let [option, param] = options;
option = option?.replace("--", "");
console.log("command", command);
console.log("option", option);
console.log("param", param);

if (command) {
    if (TestLib[command]) {
        TestLib[command]({ option, param });
    } else {
        console.log(`Command ${command} not found`);
    }
} else {
    console.log("Command not found");
}

// 参数解析
if (command && /^-{1,2}.+$/.test(command)) {
    const globalOption = command.replace(/^-{1,2}/, "");
    console.log("globalOption", globalOption);
    if (globalOption === "version" || globalOption === "v") {
        console.log("1.0.0");
    }
}
