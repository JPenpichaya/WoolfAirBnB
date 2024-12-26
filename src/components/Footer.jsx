const Footer = () => {
    return (
        <footer className="bg-[#F7F7F7] pl-[80px] pr-[80px] mb-6">
            <div className="grid grid-cols-4 mt-[10px] pb-[10px] border-b-2 text-xs">
                <div className="flex flex-col gap-y-2">
                    <h4 className="font-bold">Introduce</h4>
                    <a href="#" className=" hover:underline">Guide to Use Airbnb</a>
                    <a href="#" className="hover:underline">Newsroom</a>
                    <a href="#" className=" hover:underline">Investor Information</a>
                    <a href="#" className=" hover:underline">Airbnb Plus</a>
                    <a href="#" className=" hover:underline">Airbnb Luxe</a>
                    <a href="#" className=" hover:underline">Hotel Tonight</a>
                    <a href="#" className=" hover:underline">Airbnb Business Program</a>
                    <a href="#" className=" hover:underline">Olympic</a>
                    <a href="#" className=" hover:underline">Jobs</a>
                </div>
                <div className="flex flex-col gap-y-2">
                    <h4 className="text-sm font-bold">Community</h4>
                    <a href="#" className=" hover:underline">Diversity</a>
                    <a href="#" className=" hover:underline">Accessibility</a>
                    <a href="#" className=" hover:underline">Airbnb Associate</a>
                    <a href="#" className=" hover:underline">Accomodation for Aid Workers</a>
                    <a href="#" className="hover:underline">Invite Friends</a>
                    <a href="#" className="hover:underline">Airbnb.org</a>
                </div>
                <div className="flex flex-col gap-y-2">
                    <h4 className="text-sm font-bold">To Host</h4>
                    <a href="#" className=" hover:underline">Accomodation Hosting</a>
                    <a href="#" className=" hover:underline">Host a Virtual Experience</a>
                    <a href="#" className=" hover:underline">Host Your Experience</a>
                    <a href="#" className="hover:underline">Responsible Hosting</a>
                    <a href="#" className=" hover:underline">Data Center</a>
                    <a href="#" className="hover:underline">Community Center</a>
                </div>
                <div className="flex flex-col gap-y-2">
                    <h4 className="text-sm font-bold">Airbnb Support</h4>
                    <a href="#" className=" hover:underline">Airbnb's response to COVID-19</a>
                    <a href="#" className=" hover:underline">Help Center</a>
                    <a href="#" className=" hover:underline">Reservation Cancellation</a>
                    <a href="#" className="hover:underline">Airbnb Neighbor Complaint Support</a>
                    <a href="#" className=" hover:underline">Trust and Safety</a>
                </div>
            </div>
            <div className="grid grid-cols-4 text-xs">
                <div className="col-span-2">
                    <div>© 2021 Airbnb, Inc. All rights reserved</div>
                    <div>
                        <a href="#">Privacy Policy</a> . <a href="#">Terms of Service</a> . <a href="#">Site Map</a> . <a href="#">Refund Policy</a> . <a href="#">Company Details</a>
                    </div>
                </div>
                <div className="flex flex-row justify-end mt-1">
                    <a href="#" className="flex flex-row mr-2">
                        <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false"
                            style={{ height: "16px", width: "16px", fill: "currentcolor", relative: "2px" }}>
                            <path
                                d="m8.002.25a7.77 7.77 0 0 1 7.748 7.776 7.75 7.75 0 0 1 -7.521 7.72l-.246.004a7.75 7.75 0 0 1 -7.73-7.513l-.003-.245a7.75 7.75 0 0 1 7.752-7.742zm1.949 8.5h-3.903c.155 2.897 1.176 5.343 1.886 5.493l.068.007c.68-.002 1.72-2.365 1.932-5.23zm4.255 0h-2.752c-.091 1.96-.53 3.783-1.188 5.076a6.257 6.257 0 0 0 3.905-4.829zm-9.661 0h-2.75a6.257 6.257 0 0 0 3.934 5.075c-.615-1.208-1.036-2.875-1.162-4.686l-.022-.39zm1.188-6.576-.115.046a6.257 6.257 0 0 0 -3.823 5.03h2.75c.085-1.83.471-3.54 1.059-4.81zm2.262-.424c-.702.002-1.784 2.512-1.947 5.5h3.904c-.156-2.903-1.178-5.343-1.892-5.494l-.065-.007zm2.28.432.023.05c.643 1.288 1.069 3.084 1.157 5.018h2.748a6.275 6.275 0 0 0 -3.929-5.068z">
                            </path>
                        </svg>
                        <span className="underline font-bold">English (EN)</span>
                    </a>
                    <a href="#">
                        <span className="font-bold hover:underline">฿ </span>
                        <span className="underline font-bold">THB</span>
                    </a>
                </div>
                <div className="flex flex-row justify-end mt-1">
                    <img src="/FB.png" className="w-4 h-4 mr-2" />
                    <img src="/twitter.png" className="w-4 h-4 mr-2" />
                    <img src="/images.png" className="w-4 h-4" />
                </div>
            </div>

        </footer>
    )
}

export default Footer