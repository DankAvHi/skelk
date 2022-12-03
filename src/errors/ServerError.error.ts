import { Error } from "./Error";

const serverError: Error = async (error) => {
     console.log(`❌ [server] ${error}`);
};

export default serverError;
