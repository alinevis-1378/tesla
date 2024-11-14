

function Footer() {
  return (
    <div className="bg-black pt-[3rem]">
    <ul className="flex flex-col gap-2">
        <li className="text-[#e7e5e5] text-[13px] font-[vw]"><a href="/about">Tesla © 2024</a></li>
        <li className="text-[#e7e5e5] text-[13px] font-[vw]"><a href="/legal">Privacy & Legal</a></li>
        <li className="text-[#e7e5e5] text-[13px] font-[vw]"><a href="https://service.tesla.com/en-US/vin-recall-search">Vehicle Recalls</a></li>
        <li className="text-[#e7e5e5] text-[13px] font-[vw]"><a href="/blog">News</a></li>
    </ul>
    </div>
  )
}

export default Footer