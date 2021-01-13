import React, {useEffect, useState} from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import s from "./Clock.module.css"

function Clock() {
    const [timerId, setTimerId] = useState<number>(0);
    const [date, setDate] = useState<Date>();
    const [show, setShow] = useState<boolean>(false);

    useEffect(() => {
        start();
        return () => {
            stop();
        }
    }, [])

    const stop = () => {
        clearTimeout(timerId)
    }
    const start = () => {
        stop();
        const id: number = window.setInterval(() => {
            setDate(new Date())
        }, 1000);
        setTimerId(id);
    }

    const onMouseEnter = () => {
        setShow(true);
    };
    const onMouseLeave = () => {
        setShow(false);
    };

    const stringTime = date?.toLocaleTimeString();
    const stringDate = date?.toLocaleDateString();

    //Чтобы не отображать стилизованный пустой div, т.к. useEffect сработает после отрисовки
    let styleWrapper = date ? `${s.timeWrapper}` : '';

    return (
        <div>
            <div
                className={styleWrapper}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {stringTime}
            </div>

            {show && (
                <div className={styleWrapper}>
                    {stringDate}
                </div>
            )}

            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>

        </div>
    );
}

export default Clock;
