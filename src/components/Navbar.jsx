import Link from 'next/link'
export default function Index() {
    return (
        <>
            <div className="navbar rounded-lg mt-3 bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={ 0 } className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={ 0 } className="menu font-bold menu-sm dropdown-content bg-base-100 mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link className='font-bold' href={ '/' }>HOME</Link></li>
                            <li>
                                <a>FEATURE</a>
                                <ul className="p-2 bg-base-100">
                                    <li><Link href={ '/quran' } className="whitespace-nowrap">AL-QURAN</Link></li>
                                    <li><a>HADIST</a></li>
                                    <li><a>DO'A SEHARI-HARI</a></li>
                                </ul>
                            </li>
                            <li><a>CONTACT</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">E-QURAN</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu font-bold menu-horizontal px-1">
                        <li><Link href={ '/' }>HOME</Link></li>
                        <li tabIndex={ 0 } className="z-40">
                            <details>
                                <summary>FEATURE</summary>
                                <ul className="p-2 bg-base-100">
                                    <li><Link href={ '/quran' } className="whitespace-nowrap">AL-QURAN</Link></li>
                                    <li><Link href={ '/hadist' } className="whitespace-nowrap">HADIST</Link></li>
                                    <li><a className="whitespace-nowrap">DO'A SEHARI-HARI</a></li>
                                </ul>
                            </details>
                        </li>
                        <li><a>CONTACT</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {/* <a className="btn">Button</a> */ }
                </div>
            </div>

        </>
    )
}