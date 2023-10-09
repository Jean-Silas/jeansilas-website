/* First make sure that you have installed the package */
  
  /* If you are using yarn */
  // yarn add @calcom/embed-react
  
  /* If you are using npm */
  // npm install @calcom/embed-react
  
  import { getCalApi } from "@calcom/embed-react";
  import { useEffect } from "react";
  export default function App() {
	useEffect(()=>{
	  (async function () {
		const cal = await getCalApi();
		cal("floatingButton", {"calLink":"jeansilas/intro-call","config":{"layout":"week_view"},"hideButtonIcon":false});
		cal("ui", {"styles":{"branding":{"brandColor":"#22242f"}},"hideEventTypeDetails":false,"layout":"week_view"});
	  })();
	}, [])
  };
  