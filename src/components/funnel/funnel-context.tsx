"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { ServicePickerModal } from "./service-picker-modal";

type FunnelContextValue = {
  open: boolean;
  preselected: string[];
  openFunnel: (preselect?: string | string[]) => void;
  closeFunnel: () => void;
};

const FunnelContext = createContext<FunnelContextValue | null>(null);

export function useFunnel(): FunnelContextValue {
  const ctx = useContext(FunnelContext);
  if (!ctx) throw new Error("useFunnel must be used within <FunnelProvider>");
  return ctx;
}

export function FunnelProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [preselected, setPreselected] = useState<string[]>([]);

  const openFunnel = useCallback((preselect?: string | string[]) => {
    if (preselect) setPreselected(Array.isArray(preselect) ? preselect : [preselect]);
    else setPreselected([]);
    setOpen(true);
  }, []);

  const closeFunnel = useCallback(() => setOpen(false), []);

  // Deep-link: /?quote=1 (or ?funnel=open) auto-opens the funnel, so a QR/link
  // can drop a visitor straight into the "Select your service" flow.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const trigger = params.get("quote") || params.get("funnel");
    if (trigger) {
      const svc = params.get("service");
      openFunnel(svc || undefined);
    }
  }, [openFunnel]);

  const value = useMemo(
    () => ({ open, preselected, openFunnel, closeFunnel }),
    [open, preselected, openFunnel, closeFunnel],
  );

  return (
    <FunnelContext.Provider value={value}>
      {children}
      <ServicePickerModal />
    </FunnelContext.Provider>
  );
}
