import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from "react";
import s from "../c6-SuperRadio/SuperRadio.module.css"

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = React.memo((
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {

    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        if (onChangeOption) {
            onChangeOption(e.currentTarget.value)
        }
    }


    const mappedOptions: any[] = options ? options.map((o, i) => (
        <label key={name + "-" + i}>
            <input
                type={"radio"}
                name={name}
                value={o}
                onChange={onChangeCallback}
                checked={o === value}
            />
            {o}
        </label>
    )) : [];

    return (
        <div className={s.radioBtnWrapper}>
            {mappedOptions}
        </div>
    );
});

export default SuperRadio;
