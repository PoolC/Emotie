import { useState, useEffect } from "react";

import * as api from "../utils/api";
import * as defaultData from "../utils/defaultData";

function useProfileGuestbooks(memberId) {
    const [profileGuestbooks, setProfileGuestbooks] = useState(defaultData.guestbooks);

    // 프로필 방명록 불러오기
    const getProfileGuestbooks = async () => {
        try {
            const response = await api.getProfileGuestbooks(memberId, 0);
            setProfileGuestbooks(response.data);
        }
        catch(error) {
            setProfileGuestbooks(defaultData.guestbooks);
        }
    };
    useEffect(() => {
        getProfileGuestbooks();
        // eslint-disable-next-line
    }, [memberId]);

    return profileGuestbooks;
}

export default useProfileGuestbooks;