import React, { useState } from "react"
import Select from "react-dropdown-select"

export default function DropdownSelect() {
    const [value, setValue] = useState([])
    const options = [
        { id: "Red", name: 1 },
        { id: "Green", name: 2 },
        { id: "Navy", name: 3 },
        { id: "Pink", name: 4 },
        { id: "Yellow", name: 5 }
    ]
    return (
        <div>
            DropdownSelect
            <Select className="form-control"
                name="tags"
                options={options}
                labelField="id"
                valueField="name"
                multi
                onChange={value => setValue(value)}
                dropdownPosition="bottom"
                searchable="true"

            >

            </Select>
        </div>
    )
}
