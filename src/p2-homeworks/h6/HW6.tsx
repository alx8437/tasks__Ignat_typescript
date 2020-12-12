import React, {useState} from "react";
import SuperEditableSpan from "./common/c4-SuperEditableSpan/SuperEditableSpan";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import {restoreState, saveState} from "./localStorage/localStorage";
import s from "../../p1-main/m1-ui/u1-app/App.module.css";

function HW6() {
    const [value, setValue] = useState<string>("");

    const save = () => {
        saveState<string>("editable-span-value", value);
        setValue(value)
        setValue("") // сделал зануление инпута
    };
    const restore = () => {
        const restore = restoreState("editable-span-value", value)
        setValue(restore);
    };

    return (
        <div>
            homeworks 6
            <div className={s.wrapperContent_HW}>
                <SuperEditableSpan
                    autoFocus
                    value={value}
                    onChangeText={setValue}
                    spanProps={{
                        children: value ? undefined : "Enter text...",
                    }}
                />
                <SuperButton onClick={save}>save</SuperButton>
                <SuperButton onClick={restore}>restore</SuperButton>
            </div>
        </div>
    );
}

export default HW6;
