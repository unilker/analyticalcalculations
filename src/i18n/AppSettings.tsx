import AsyncStorage from '@react-native-async-storage/async-storage';
import { getLocales } from 'expo-localization';
import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';

import { formatNumber } from '../core/format';
import type { L, Lang } from '../core/types';
import { STRINGS, type StringKey } from './strings';

const STORAGE_KEY = 'akh.settings.v1';

/** Phones: 'button' keeps the orientation and offers a switch when turned; 'auto' follows the device. */
export type RotationMode = 'button' | 'auto';

interface Persisted {
  lang: Lang;
  sigFigs: number;
  favorites: string[];
  rotation: RotationMode;
}

interface AppSettings extends Persisted {
  setLang: (lang: Lang) => void;
  setSigFigs: (n: number) => void;
  setRotation: (mode: RotationMode) => void;
  toggleFavorite: (id: string) => void;
  /** Static UI string. */
  t: (key: StringKey) => string;
  /** Localized content text. */
  tx: (text: L) => string;
  fmt: (x: number) => string;
}

function deviceLang(): Lang {
  try {
    return getLocales()[0]?.languageCode === 'tr' ? 'tr' : 'en';
  } catch {
    return 'tr';
  }
}

const Ctx = createContext<AppSettings | null>(null);

export function AppSettingsProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<Persisted>({ lang: deviceLang(), sigFigs: 4, favorites: [], rotation: 'button' });

  useEffect(() => {
    AsyncStorage.getItem(STORAGE_KEY)
      .then((raw) => raw && setState((s) => ({ ...s, ...(JSON.parse(raw) as Partial<Persisted>) })))
      .catch(() => undefined);
  }, []);

  const update = useCallback((patch: Partial<Persisted>) => {
    setState((s) => {
      const next = { ...s, ...patch };
      AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(next)).catch(() => undefined);
      return next;
    });
  }, []);

  const value = useMemo<AppSettings>(
    () => ({
      ...state,
      setLang: (lang) => update({ lang }),
      setSigFigs: (sigFigs) => update({ sigFigs }),
      setRotation: (rotation) => update({ rotation }),
      toggleFavorite: (id) =>
        update({ favorites: state.favorites.includes(id) ? state.favorites.filter((f) => f !== id) : [...state.favorites, id] }),
      t: (key) => STRINGS[key][state.lang],
      tx: (text) => text[state.lang],
      fmt: (x) => formatNumber(x, state.lang, state.sigFigs),
    }),
    [state, update],
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useApp(): AppSettings {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error('useApp must be used inside AppSettingsProvider');
  return ctx;
}
