export type Error = (error: unknown) => Promise<void> | void;
export type StrategyError = (e: unknown, done: any) => Promise<void>;
