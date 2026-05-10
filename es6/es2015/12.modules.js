//Export Statement
// Named exports

// module "my-module.js"

const PI = Math.PI;

function add(...args) {
    return args.reduce((num, tot) => tot + num);
}

function multiply(...args) {
    return args.reduce((num, tot) => tot * num);
}

// private function
function print(msg) {
    console.log(msg);
}

export { PI, add, multiply };

// Default exports
// module "my-module.js"

export default function add(...args) {
    return args.reduce((num, tot) => tot + num);
}

//Import Statement

// 1. Import an entire module's contents
import * as name from "my-module";

//2.Import a single export from a module
import { export1 } from "my-module";

//3.Import multiple exports from a module
import { export1 , export2 } from "my-module";

//4.Import default export from a module
import defaultExport from "my-module";

//5.Import an export with an alias
import { export1 as alias1 } from "my-module";

