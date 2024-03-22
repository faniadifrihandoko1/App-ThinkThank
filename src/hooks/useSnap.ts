import { useEffect, useState } from "react";
import { MIDTRANS_CLIENT_ID } from "../utils/const";

declare global {
    interface Window {
        snap: any;
    }
}


const useSnap = () => {
    const [snap, setSnap] = useState<Window["snap"]>(null);
    useEffect(() => {
        const myMidtransClientKey = MIDTRANS_CLIENT_ID;    
        const script = document.createElement("script");
        script.src = `https://app.sandbox.midtrans.com/snap/snap.js`;
        script.setAttribute("data-client-key", myMidtransClientKey??"");
        script.onload = () => {
            setSnap(window.snap);
        }
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        }
    },[]);

    const snapEmbed = (snapToken: string, embedId: any, action: any) => {
     if(snap){
        snap.embed(snapToken, {
            embedId,
            onSuccess: function (result: any) {
                console.log("Success",result);
                action.onSuccess(result);
            },
            onPending: function (result: any) {
                console.log("Pending",result);
                action.onPending(result);
            },
            onClose: function () {
                action.onClose()
            }
        })   
    }
    return snapEmbed
}}