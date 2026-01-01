import { BsCloudCheck } from "react-icons/bs"
export const DocumentInput = () => {

    return (
        <div className="flex items-center gap-2">
            <span className="text-lg truncate px-1.5 cursor-pointer">Untitled Document</span>
            <BsCloudCheck />
        </div>
    )
}