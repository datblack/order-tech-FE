import { toast } from 'react-toastify';

function notice(status: boolean, message: string) {
    status ? toast.success(message) : toast.error(message);
}

export default notice;
