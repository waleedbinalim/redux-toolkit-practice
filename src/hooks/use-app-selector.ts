import { ApplicationState } from "@/store";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const useAppSelector: TypedUseSelectorHook<ApplicationState> =
  useSelector;
