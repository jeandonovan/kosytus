// petits helpers utilitaires (pour l'instant léger)
// On peut étendre ici (decimation, LOD, etc.) si nécessaire.
export async function existsUrl(url: string) {
  try {
    const r = await fetch(url, { method: 'HEAD' });
    return r.ok;
  } catch {
    return false;
  }
}
