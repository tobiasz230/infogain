import { useEffect, useState } from "react"
import { getRewardConfiguration } from "../../../_shared/services/_rewardProgram";

const useRewardConfiguration = () => {
    const [configuration, setConfiguration] = useState(null);

    const fetchConfiguration = async () => {
        const response = await getRewardConfiguration();
        if (response) setConfiguration(response);
    }

    useEffect(() => {
        fetchConfiguration()
    }, [])
    
    return {configuration};
}

export default useRewardConfiguration