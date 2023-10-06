import { useEffect, useMemo, useState } from "react"
/**
 * Check if a media query matches the UI
 * Example:
 *    useMediaQuery('(max-width: 600px)');
 *    useMediaQuery('only screen and (min-width: 600px)');
 *    useMediaQuery('@media only screen and (min-width: 600px)');
 */
export function useMediaQuery(mediaQueryString:string) {
    const queryString = removeReservedMediaKeyWord(mediaQueryString)
    const query = useMemo(() => window.matchMedia(queryString), [queryString])
    const [matches, setMatches] = useState(query.matches) // one-time, instantaneous check
    useEffect(() => {
      const listener = (e:any) => setMatches(e.matches)
      query.addEventListener('change', listener)
      return () => query.removeEventListener('change', listener)
    }, [query])
    return matches
  }
  function removeReservedMediaKeyWord(mediaQueryString:string) {
    return mediaQueryString.replace('@media', '').trim()
  }