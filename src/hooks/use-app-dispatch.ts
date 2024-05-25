import { ApplicationDispatch } from "@/store";
import { useDispatch } from "react-redux";

export const useAppDispatch: () => ApplicationDispatch = useDispatch;
