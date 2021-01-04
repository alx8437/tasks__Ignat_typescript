import React, {useState} from "react";
import SuperSelect from "./common/c5-SuperSelect/SuperSelect";
import SuperRadio from "./common/c6-SuperRadio/SuperRadio";
import s from "../../p1-main/m1-ui/u1-app/App.module.css"

const arr = ["x", "y", "z"];

function HW7() {
    const [value, onChangeOption] = useState<Array<string>>(arr);
    console.log(value)

    return (
        <div>
            <hr/>
            homeworks 7
            <div className={s.wrapperContent_HW}>
                <div>
                    <SuperSelect
                        options={arr}
                        value={value}
                        onChangeOption={onChangeOption}
                    />
                </div>
                <div>
                    <SuperRadio
                        name={"radio"}
                        options={arr}
                        value={value}
                        onChangeOption={onChangeOption}
                    />
                </div>
            </div>
            <hr/>
        </div>

    );
}

export default HW7;
