

function Hello ({text,updatemode,remove}){
    return(
        <>
            <div className="border w-[300px] h-32 bg-[#8739F9] flex justify-center flex-col items-center rounded-lg border-t-4 border-t-[#37B9F1] mt-3 mb-3">
                <div >
                    <h2 className="text-white text-[1.25rem] font-bold">{text}</h2>
                </div>
                <div className="flex gap-5 relative bottom-[-25px]">
                    <button onClick={updatemode} className="border rounded-md p-1 text-white bg-green-500">Edit</button>
                    <button onClick={remove} className="border rounded-md p-1 text-white bg-red-500">Delete</button>
                </div>
            </div>
            
        </>
    )
}


export default Hello
