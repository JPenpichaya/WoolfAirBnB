const Section5 = () => {
    return (
        <section className="pt-[50px] pb-[100px] pr-[80px] pl-[80px] bg-black text-white">
            <div className="leading-tight mb-1">
                <h1 className="text-3xl font-bold">Unique Experiences and Activities</h1>
                <p className="text-sm">Meet with local experts.</p>
            </div>
            <div className="grid grid-cols-3 gap-x-2">
                <div>
                    <img src="/Virtual Experience.png" className="rounded-lg w-full h-full" />

                    <h3 className="text-lg font-bold">Virtual Experience</h3>
                    <p className="text-sm">Travel the World from home</p>

                </div>
                <div>
                    <img src="/Experience.png" className="rounded-lg w-full h-full" />

                    <h3 className="text-lg font-bold">Experience</h3>
                    <p className="text-sm">Experience from Anywhere!</p>


                </div>
                <div>
                    <img src="/Adventure.png" className="rounded-lg w-full h-full" />
                    <h3 className="text-lg font-bold">Adventure</h3>
                    <p className="text-sm">Multi-day trip with accomodation and meals.</p>

                </div>
            </div>
        </section>
    )
}

export default Section5