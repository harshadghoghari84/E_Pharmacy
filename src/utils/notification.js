import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const toastStyle = {
    autoClose: 1500,
    hideProgressBar: true
}

export const successNotification = (message) => toast.success(message, toastStyle);
export const errorNotification = (message) => toast.error(message, toastStyle);