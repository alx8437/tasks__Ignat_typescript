import React from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import s from "../../p1-main/m1-ui/u1-app/App.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./bll/store";
import {toggleFalseAC, toggleTrueAC} from "./bll/loadingReducer";
import preloader from "../../assets/preloader.gif"



function HW10() {

    const dispatch = useDispatch();
    const loading = useSelector<AppRootStateType>(state => state.loading.toggle)

    const setLoading = () => {
        dispatch(toggleTrueAC(true));

        setTimeout(() => {
            dispatch(toggleFalseAC(false));
        }, 2000);
    };

    return (
        <div>
            homeworks 10
            <div className={s.wrapperContent_HW}>
                {loading
                    ? (
                        <div>
                            <img style={{width: "70px"}} src={preloader} alt="preloader"/>
                        </div>
                    ) : (
                        <div>
                            <SuperButton onClick={setLoading}>set loading...</SuperButton>
                        </div>
                    )
                }
            </div>
            <hr/>
        </div>
    );
}

export default HW10;
