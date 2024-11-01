import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { SelectOption } from "./form"
import { useState } from "react";

type SelectOptionsProps = {
    placeholder: string,
    options: SelectOption[],
    defaultValue: string,
    onSelect: (value: string) => void,
}

const SelectOptions = ({ placeholder, options, defaultValue, onSelect }: SelectOptionsProps) => {
    const [selectedValue, setSelectedValue] = useState<string>(defaultValue);

    const handleSelectChange = (value: string) => {
        setSelectedValue(value);
        onSelect(value);
    };

    return (
        <Select onValueChange={handleSelectChange} defaultValue={selectedValue}>
            <SelectTrigger>
                <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
                {options.map((option, index) => (
                    <SelectItem key={index} value={option.value}>{option.label}</SelectItem>)
                )}
            </SelectContent>
        </Select>
    )
}

export { SelectOptions }