import { useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState } from "../Redux/Store";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;