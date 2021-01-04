import React, {ChangeEvent, DetailedHTMLProps, SelectHTMLAttributes} from "react";
import s from "../c5-SuperSelect/SuperSelect.module.css"

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = React.memo((
    {
        options,
        onChange, onChangeOption,
        ...restProps
    }
) => {


     const mappedOptions: any[] = options ? options.map((option, index) => {
            return <option value={option} key={index}>{option}</option>
        }) : [];



    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        if (onChangeOption) {
            onChangeOption(e.currentTarget.value)
        }
    }

    return (
        <div className={s.selectWrapper}>
            <select className={s.selectCss} onChange={onChangeCallback} {...restProps}>
                {mappedOptions}
            </select>
        </div>

    );
});

export default SuperSelect;
