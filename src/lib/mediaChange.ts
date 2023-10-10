import { useEffect, useMemo, useState } from "react";

export function useMediaQuery(mediaQueryString: string) {
  const queryString = removeReservedMediaKeyWord(mediaQueryString);
  const [matches, setMatches] = useState(false); // Default to false

  useEffect(() => {
    const query = window.matchMedia(queryString);

    // Update the initial matches state
    setMatches(query.matches);

    const listener = (e: any) => setMatches(e.matches);
    query.addEventListener('change', listener);

    // Clean up the listener when the component unmounts
    return () => query.removeEventListener('change', listener);
  }, [queryString]);

  return matches;
}

function removeReservedMediaKeyWord(mediaQueryString: string) {
  return mediaQueryString.replace('@media', '').trim();
}
