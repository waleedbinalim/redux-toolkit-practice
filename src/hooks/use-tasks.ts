// NOTE NOT REALLY A NECESSARY HOOK TO ADD BUT GIVES SLIGHT CONVIENIENCE

import { useMemo } from "react";
import { useAppSelector } from "./use-app-selector";

export const useTasks = () => {
  const tasks = useAppSelector((state) => state.tasks.entities);
  const loading = useAppSelector((state) => state.tasks.loading);

  return useMemo(() => [tasks, loading] as const, [tasks, loading]);
};

// TO IMPORT TO RELAVANT PLACES
//  const [tasks, loading] = useTasks
