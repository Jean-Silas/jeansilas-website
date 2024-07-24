import { getCalApi } from '@calcom/embed-react';
import { useEffect } from 'react';
export default function MyApp() {
  useEffect(()=>{
    (async function () {
      const cal = await getCalApi({"namespace":"intro-call"});
      cal("ui", { 
        "theme": "dark",
        "cssVarsPerTheme": {
            "dark": {
                "cal-brand": "#22242f"
            }
        },
        "hideEventTypeDetails":false,
        "layout":"month_view"
      });
    })();
  }, [])

  return (
    <button
        className="m-4 rounded-xl bg-space-600 p-4 font-bold"
        data-cal-namespace="intro-call"
        data-cal-link="jean-silas/intro-call"
        data-cal-config='{"layout":"month_view"}'
    >
        Schedule an Intro Call
    </button>);
};
