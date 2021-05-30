import { useEffect, useRef } from "react";
// It will run 'func' if 'dependencies' changes, but not on initial render
const useEffectExcludingMount = (func, dependencies) => {
  const didMount = useRef(false);
  useEffect(() => {
    if (didMount.current) func();
    else didMount.current = true;
  }, dependencies);
};

export default useEffectExcludingMount;
