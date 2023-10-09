import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
export default function App() {
useEffect(()=>{
    (async function () {
    const cal = await getCalApi();
    cal("ui", {"styles":{"branding":{"brandColor":"#22242f"}},"hideEventTypeDetails":false,"layout":"month_view"});
    })();
}, [])
return <button
    className="bg-space-600 p-4 rounded-xl m-4 font-bold"
    data-cal-link="jeansilas/intro-call"
    data-cal-config='{"layout":"month_view"}'
    >Schedule an Intro Call</button>;
};
  