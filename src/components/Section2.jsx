const Section2 = () => {
    return (
        <section className="relative h-dvh">
            <img src='/BackgroundImage.webp' alt="Background" className="absolute top-0 left-0 w-full h-dvh object-cover z-0" />
            <div className="relative z-10 text-white h-full">
                <div className="flex flex-row justify-between">
                    <div className="flex flex-row justify-start m-6 ml-20 mr-32">
                        <svg width="30" height="32" fill="#FFFFFF">
                            <path
                                d="M29.24 22.68c-.16-.39-.31-.8-.47-1.15l-.74-1.67-.03-.03c-2.2-4.8-4.55-9.68-7.04-14.48l-.1-.2c-.25-.47-.5-.99-.76-1.47-.32-.57-.63-1.18-1.14-1.76a5.3 5.3 0 00-8.2 0c-.47.58-.82 1.19-1.14 1.76-.25.52-.5 1.03-.76 1.5l-.1.2c-2.45 4.8-4.84 9.68-7.04 14.48l-.06.06c-.22.52-.48 1.06-.73 1.64-.16.35-.32.73-.48 1.15a6.8 6.8 0 007.2 9.23 8.38 8.38 0 003.18-1.1c1.3-.73 2.55-1.79 3.95-3.32 1.4 1.53 2.68 2.59 3.95 3.33A8.38 8.38 0 0022.75 32a6.79 6.79 0 006.75-5.83 5.94 5.94 0 00-.26-3.5zm-14.36 1.66c-1.72-2.2-2.84-4.22-3.22-5.95a5.2 5.2 0 01-.1-1.96c.07-.51.26-.96.52-1.34.6-.87 1.65-1.41 2.8-1.41a3.3 3.3 0 012.8 1.4c.26.4.45.84.51 1.35.1.58.06 1.25-.1 1.96-.38 1.7-1.5 3.74-3.21 5.95zm12.74 1.48a4.76 4.76 0 01-2.9 3.75c-.76.32-1.6.41-2.42.32-.8-.1-1.6-.36-2.42-.84a15.64 15.64 0 01-3.63-3.1c2.1-2.6 3.37-4.97 3.85-7.08.23-1 .26-1.9.16-2.73a5.53 5.53 0 00-.86-2.2 5.36 5.36 0 00-4.49-2.28c-1.85 0-3.5.86-4.5 2.27a5.18 5.18 0 00-.85 2.21c-.13.84-.1 1.77.16 2.73.48 2.11 1.78 4.51 3.85 7.1a14.33 14.33 0 01-3.63 3.12c-.83.48-1.62.73-2.42.83a4.76 4.76 0 01-5.32-4.07c-.1-.8-.03-1.6.29-2.5.1-.32.25-.64.41-1.02.22-.52.48-1.06.73-1.6l.04-.07c2.16-4.77 4.52-9.64 6.97-14.41l.1-.2c.25-.48.5-.99.76-1.47.26-.51.54-1 .9-1.4a3.32 3.32 0 015.09 0c.35.4.64.89.9 1.4.25.48.5 1 .76 1.47l.1.2c2.44 4.77 4.8 9.64 7 14.41l.03.03c.26.52.48 1.1.73 1.6.16.39.32.7.42 1.03.19.9.29 1.7.19 2.5z">
                            </path>
                        </svg>
                        <h1 className="font-bold ml-1 text-2xl">airbnb</h1>
                    </div>
                    <div className="felx flex-row justify-center m-8 space-x-6 font-semibold">
                        <span className="hover:underline line underline-offset-[14px]">Home</span>
                        <span className="hover:underline underline-offset-[14px]">Location</span>
                        <span className="hover:underline underline-offset-[14px]">About Us</span>
                    </div>
                    <div className="flex flex-row mr-20">
                        <div className="rounded-full h-8 hover:bg-slate-100 hover:bg-opacity-10 pl-4 pr-4 mt-7 flex justify-center items-center">
                            <p >Become a Host</p>
                        </div>
                        <div>

                        </div>
                        <div className="mt-7 h-9 w-9 rounded-full hover:bg-slate-100 hover:bg-opacity-10 flex justify-center items-center">
                            <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false"
                                style={{ height: "16px", width: "16px", fill: "currentcolor", position: "relative" }}>
                                <path
                                    d="m8.002.25a7.77 7.77 0 0 1 7.748 7.776 7.75 7.75 0 0 1 -7.521 7.72l-.246.004a7.75 7.75 0 0 1 -7.73-7.513l-.003-.245a7.75 7.75 0 0 1 7.752-7.742zm1.949 8.5h-3.903c.155 2.897 1.176 5.343 1.886 5.493l.068.007c.68-.002 1.72-2.365 1.932-5.23zm4.255 0h-2.752c-.091 1.96-.53 3.783-1.188 5.076a6.257 6.257 0 0 0 3.905-4.829zm-9.661 0h-2.75a6.257 6.257 0 0 0 3.934 5.075c-.615-1.208-1.036-2.875-1.162-4.686l-.022-.39zm1.188-6.576-.115.046a6.257 6.257 0 0 0 -3.823 5.03h2.75c.085-1.83.471-3.54 1.059-4.81zm2.262-.424c-.702.002-1.784 2.512-1.947 5.5h3.904c-.156-2.903-1.178-5.343-1.892-5.494l-.065-.007zm2.28.432.023.05c.643 1.288 1.069 3.084 1.157 5.018h2.748a6.275 6.275 0 0 0 -3.929-5.068z">
                                </path>
                            </svg>
                        </div>
                        <div className="bg-slate-200 flex flex-row w-20 justify-center items-center h-10 ml-1 mt-6 rounded-full">
                            <svg
                                viewBox="0 0 32 32"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                                role="presentation"
                                focusable="false"
                                style={{
                                    fill: "none",
                                    height: "16px",
                                    width: "16px",
                                    stroke: "currentColor",
                                    strokeWidth: 3,
                                    overflow: "visible",
                                    position: "relative",
                                    color: "black"
                                }}
                            >
                                <g fill="none" fillRule="nonzero">
                                    <path d="M2 16h28" />
                                    <path d="M2 24h28" />
                                    <path d="M2 8h28" />
                                </g>
                            </svg>
                            <svg
                                viewBox="0 0 32 32"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                                role="presentation"
                                focusable="false"
                                style={{
                                    height: "29px",
                                    width: "29px",
                                    fill: "currentColor",
                                    position: "relative",
                                    left: "6px",
                                }}
                            >
                                <g fill="gray" fillRule="nonzero">
                                    <path
                                        d="m16 .7c-8.437 0-15.3 6.863-15.3 15.3s6.863 15.3 15.3 15.3 15.3-6.863 15.3-15.3-6.863-15.3-15.3-15.3zm0 28c-4.021 0-7.605-1.884-9.933-4.81a12.425 12.425 0 0 1 6.451-4.4 6.507 6.507 0 0 1 -3.018-5.49c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5a6.513 6.513 0 0 1 -3.019 5.491 12.42 12.42 0 0 1 6.452 4.4c-2.328 2.925-5.912 4.809-9.933 4.809z"
                                    />
                                </g>
                            </svg>
                        </div>
                    </div>

                </div>
                <div className="flex justify-center items-center grid-">
                    <div className="bg-white w-4/6 p-2 rounded-full grid grid-cols-4 divide-x">
                        <div className="pl-8 hover:rounded-full hover:bg-gray-100">
                            <p className="text-black">Location</p>
                            <input type="text" className="hover:bg-gray-100 text-black" id="Location" placeholder="Where are you going?" />
                        </div>
                        <div className="pl-8 hover:rounded-full hover:bg-gray-100">
                            <p className="text-black">Check-In</p>
                            <input type="text" className="hover:bg-gray-100 text-black" id="CheckIn" placeholder="Date" />
                        </div>
                        <div className="pl-8 hover:rounded-full hover:bg-gray-100">
                            <p className="text-black">Check-Out</p>
                            <input type="text" className="hover:bg-gray-100 text-black" id="CheckOut" placeholder="Date" />
                        </div>
                        <div className="pl-8 grid grid-cols-3 hover:rounded-full hover:bg-gray-100">
                            <div className="col-span-2">
                                <p className="text-black">Guests</p>
                                <input type="number" className="hover:bg-gray-100 text-black" id="Guests" placeholder="Add Guests" />
                            </div>
                            <div className="rounded-full bg-pink-600 hover:bg-pink-800 w-12 h-12 justify-self-end place-items-center flex items-center justify-center">
                                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"
                                    style={{ display: "block", fill: "none", height: "16px", width: "16px", stroke: "#FFFFFF", strokewidth: "4", overflow: "visible" }}
                                    aria-hidden="true" role="presentation" focusable="false">
                                    <g fill="none">
                                        <path
                                            d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9">
                                        </path>
                                    </g>
                                </svg>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="mt-64 ml-20">
                    <h1 className="text-6xl 70 font-bold mb-6">Plan Your Trip,<br />Nearby Places</h1>
                    <a href="#" className="text-black bg-white p-2 pl-6 pr-6 text-sm font-bold rounded-lg">
                        Explore Locations
                    </a>
                </div>
            </div>
        </section >
    )
}

export default Section2