import { StrategyError } from "./Error";

const serverError: StrategyError = async (e, done) => {
     console.log(`❌ [server] ${e}`);
     return (done as (e: unknown, user: boolean) => void)(e, false);
};

export default serverError;
