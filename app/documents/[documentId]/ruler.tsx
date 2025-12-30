const markers = Array.from({ length: 83 }, (_, i) => i);

export const Ruler = () => {
    return (
        <div className="h-6 border-b border-gray-300 flex items-end relative select-none print:hidden ">
            <div id="ruler-container" className="m-w-[816px] mx-auto w-full h-full relative">

            </div>
        </div>
    )
}
