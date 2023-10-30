import { useEffect, useState } from "react";
import AppContext from "./AppContext";

const AppState = (props) => {
    const app_state = {
        lang: 'en',
        theme: 'theme1'
    };
    const [state, setState] = useState(app_state);
    const updateLang = (update_lang) => {
        setState({ ...state, lang: update_lang });
    }
    const updateTheme = (update_theme) => {
        setState({ ...state, theme: update_theme });
    }

    useEffect(() => {
        document.getElementById('jssDefault').setAttribute('href', `http://164.100.196.138/lms/assets/css/${state.theme}.css`)
    }, [state.theme]);
    return (
        <AppContext.Provider value={{ state, updateLang, updateTheme }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppState;