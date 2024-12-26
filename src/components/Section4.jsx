const Section4 = () => {
    return (
        <section className=" mb-[100px] pl-[80px] pr-[80px] font-bold">
            <h1 className="text-3xl mb-4">Accomodations</h1>
            <div className="grid grid-cols-4 gap-x-2">
                <div>
                    <img src="/Accomodations-1.png" className="w-full h-full rounded-lg" />
                    <h3 className="mt-3">Houses</h3>
                </div>
                <div>
                    <img src="/Accomodations-2.png" className="w-full h-full rounded-lg" />
                    <h3 className="mt-3">Log Cabins & Country Houses</h3>
                </div>
                <div>
                    <img src="/Accomodations-3.png" className="w-full h-full rounded-lg" />
                    <h3 className="mt-3">Unique Spaces</h3>
                </div>
                <div>
                    <img src="/Accomodations-4.png" className="w-full h-full rounded-lg" />
                    <h3 className="mt-3">Hot Tubs</h3>
                </div>

            </div>
        </section>
    )
}
export default Section4