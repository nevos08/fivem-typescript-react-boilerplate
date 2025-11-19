declare const window: {
  GetParentResourceName: () => string;
};

export const IsBrowser =
  typeof window === 'undefined'
    ? 0 // Game
    : typeof window.GetParentResourceName !== 'undefined'
      ? 1 // CEF
      : 2; // Browser

export const ResourceContext = IsBrowser ? 'web' : IsDuplicityVersion() ? 'server' : 'client';

export const ResourceName = IsBrowser
  ? IsBrowser === 1
    ? window.GetParentResourceName()
    : 'nui-frame-app'
  : GetCurrentResourceName();

export function LoadFile(path: string) {
  return LoadResourceFile(ResourceName, path);
}

export function LoadJsonFile<T = unknown>(path: string): T {
  if (!IsBrowser) return JSON.parse(LoadFile(path)) as T;

  const resp = fetch(`/${path}`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  });

  return resp.then((response) => response.json()) as T;
}
