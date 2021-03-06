import React, {useState} from "react";
import Affairs from "./Affairs";
import s from "../../p1-main/m1-ui/u1-app/App.module.css";


// types
export type AffairPriorityType = "high" | "low" | "middle";
export type AffairType = {
    _id: number
    name: string
    priority: string
};
export type FilterType = "all" | AffairPriorityType;

// constants
const defaultAffairs: Array<AffairType> = [
    {_id: 1, name: "React", priority: "high"},
    {_id: 2, name: "anime", priority: "low"},
    {_id: 3, name: "games", priority: "low"},
    {_id: 4, name: "work", priority: "high"},
    {_id: 5, name: "html & css", priority: "middle"},
];

// pure helper functions
export const filterAffairs = (affairs: Array<AffairType>, filter: FilterType): Array<AffairType> => { // need to fix any
    switch (filter) {
        case "all":
            return affairs
        case "high":
            return affairs.filter(a => a.priority === "high")
        case "low":
            return affairs.filter(a => a.priority === "low")
        case "middle":
            return affairs.filter(a => a.priority === "middle")

        default:
            return affairs
    }
}
export const deleteAffair = (affairs: Array<AffairType>, id: number): Array<AffairType> => { // need to fix any
    return affairs.filter(a => a._id !== id)
}

function HW2() {
    const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs); // need to fix any
    const [filter, setFilter] = useState<FilterType>("all");

    const filteredAffairs = filterAffairs(affairs, filter);
    const deleteAffairCallback = (id: number) => setAffairs(deleteAffair(affairs, id)); // need to fix any

    return (
        <div className={s.wrapper_HW}>
            <hr/>
            homeworks 2


            <div className={s.wrapperContent_HW}>
                <Affairs
                    data={filteredAffairs}
                    setFilter={setFilter}
                    deleteAffairCallback={deleteAffairCallback}
                />
            </div>


        </div>
    );
}

export default HW2;
