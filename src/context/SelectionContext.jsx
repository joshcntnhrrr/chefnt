import { createContext, useCallback, useContext, useMemo, useState } from 'react';

const SelectionContext = createContext(null);

export function SelectionProvider({ children }) {
  const [selected, setSelected] = useState([]);

  const add = useCallback((id) => setSelected((s) => (s.includes(id) ? s : [...s, id])), []);
  const remove = useCallback((id) => setSelected((s) => s.filter((x) => x !== id)), []);
  const clear = useCallback(() => setSelected([]), []);

  const value = useMemo(() => ({ selected, add, remove, clear }), [selected, add, remove, clear]);
  return <SelectionContext.Provider value={value}>{children}</SelectionContext.Provider>;
}

export function useSelection() {
  const ctx = useContext(SelectionContext);
  if (!ctx) throw new Error('useSelection must be used inside SelectionProvider');
  return ctx;
}
