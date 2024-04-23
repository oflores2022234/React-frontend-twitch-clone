import { useState, useEffect } from "react"
import toast from "react-hot-toast"
import { getChannelSettings } from "../../services"

export const useChannelSettings = () => {
    const [channelSettings, setChannelSettings] = useState(null)

    const fetchChannelSettings = async () => {
        const response = await getChannelSettings()

        if(response.error){
            return toast.error(
                response.e?.response?.data ||
                'Ocurrión un error al obtener los datos del canal'
            )
        }
        setChannelSettings({
            username: response.data.username,
            title: response.data.title,
            description: response.data.description,
            avatarUrl: response.data.avatarUrl,
            streamKey: response.data.streamKey
        })
    }

    useEffect(() =>{
        fetchChannelSettings()
    }, [])

  return {
    isFetching: !channelSettings,
    channelSettings
  }
}
