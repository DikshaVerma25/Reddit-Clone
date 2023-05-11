import {MikroORM} from "@mikro-orm/core";
import { _prod_ } from "./entities/constants";

const main = async () => {
   
    const orm = await MikroORM.init({
        dbName: 'reddit',
        type: 'postgresql',
        debug: !_prod_
    });

};

console.log("Hello , HII, everyone");

main();