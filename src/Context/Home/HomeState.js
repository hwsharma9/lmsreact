import { useContext, useEffect, useState } from "react";
import HomeContext from "./HomeContext";
import useFetch from "../../Hooks/useFetch";

const HomeState = (props) => {
    const home_state = {
        'title': 'Home Page',
        'description': "Home Page Description",
        'our_cources': ""
    };
    const [state, setState] = useState(home_state);
    const updateCources = (cources) => {
        setState({ ...state, our_cources: cources });
    }
    const getCources = () => {
        return state.our_cources;
    }
    useEffect(() => {
        async function fetchData() {
            const cources = await fetch(
                "http://127.0.0.1:80/wqc_for_live/api/home/index",
                {}
            );
            const json = await cources.json();
            setState({ ...state, our_cources: json });
        }
        fetchData();
    }, [state.our_cources]);
    return (
        <HomeContext.Provider value={{ state, updateCources, getCources }}>
            {props.children}
        </HomeContext.Provider>
    )
}

// export function GetAPI() {
//     const context = useContext(HomeState);
//     console.log(context);
//     if (context === undefined) {
//         throw new Error("Context must be used within a Provider");
//     }
//     return context;
// }

export default HomeState;