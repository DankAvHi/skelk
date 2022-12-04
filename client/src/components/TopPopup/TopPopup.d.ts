export type TopPopupTypes = "warning" | "error" | "succes" | "info";

export type TopPopupProps = { text: string; type?: TopPopupTypes; duration?: number };
export type TopPopupHookProps = { message: TopPopupProps; clearError?: null | Function };
export type TopPopupArray = TopPopupProps[] | [];
