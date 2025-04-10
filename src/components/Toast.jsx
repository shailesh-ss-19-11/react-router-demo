import { toast } from "react-toastify";

export const notify = () => {
    toast(CustomComponent, {
        autoClose: 8000,
        // removes the built-in progress bar
        customProgressBar: true
    });
};
