import { StrategyError } from "./Error";

const serverError: StrategyError = async (e, done) => {
     console.log(`❌ [server] ${e}`);
     return done(e, false);
};

export default serverError;
