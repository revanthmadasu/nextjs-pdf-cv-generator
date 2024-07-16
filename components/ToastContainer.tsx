import { useContext } from "react"
import { ToastContext } from "../contexts/ToastContext"
import ToastComponent from "./Toast";

export const ToastContainer = () => {
    const {addToast, removeToast, toasts} = useContext(ToastContext);
    return <>
        <div className="absolute top-4 right-4">
            <div className="flex flex-col gap-3">
                {toasts.map(toast => {
                    return <ToastComponent removeToast={removeToast} toast={toast}/>
                })}
            </div>
        </div>
    </>
}