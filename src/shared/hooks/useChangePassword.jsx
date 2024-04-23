import toast from "react-hot-toast";
import { changePassword as changePasswordRequest } from "../../services";

export const useChangePassword = () => {
    const changePassword = async (password,  newPassword) => {
        const responseData = await changePasswordRequest({password, newPassword})

        if(responseData.error){
            return toast.error(responseData.e?.response?.date || 'No se pudo actualizar la clave')
        }

        toast.success('Password actualizado con exito')
    }

    return {
        changePassword

    }
    
}