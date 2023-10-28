'use client';
import Navbar from '@/components/Navbar'
import axios from 'axios'
import Link from 'next/link';
import { useState, useEffect } from 'react'
import ScrollToTop from '@/components/ScrollToTop'
import Bismillah from '@/components/Bismillah'

export default function Index() {
    const [originalData, setOriginalData] = useState([])
    const [data, setData] = useState([]);

    const fetchData = async () => {
        await axios.get(`https://equran.id/api/v2/surat`)
            .then(function (response) {
                setOriginalData(response.data.data);
                setData(response.data.data);
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    const cariSurat = (e) => {
        const keywords = e.target.value;
        if (keywords.length < 1) {
            setData(originalData)
            return
        }

        // Filter data asli
        const filteredResults = originalData.filter((item) =>
            item.arti.toLowerCase().includes(keywords.toLowerCase()) ||
            item.namaLatin.toLowerCase().includes(keywords.toLowerCase())
        )
        setData(filteredResults);
    }

    useEffect(() => {
        fetchData();
    }, []);
    return (
        <>

            <div className="grid lg:grid-cols-6 gap-4 mt-5 justify-center">
                <div className="card bg-base-100 mb-5 rounded-lg mt-5 p-2 shadow-xl col-start-2 col-span-4">
                    <div className="form-control">
                        <div className="input-group">
                            <input type="text" onChange={ cariSurat } placeholder="Search surah or mean..." className="input  w-full input-bordered" />
                            <button className="btn btn-square">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            { data.length >= 1 ? <Bismillah /> : '' }

            <div className="grid lg:grid-cols-3 gap-5">
                {
                    data.length >= 1 ?
                        data.map((item, i) => (
                            <Link key={ i } href={ `/quran-detail/${item.nomor}` }>
                                <div className="card bg-base-100 shadow-xl text-center">
                                    <div className="card-body">
                                        <h2 className="card-title justify-center ">{ `{${item.nomor}}` }. { item.nama }</h2>
                                        <u>{ item.namaLatin }</u>
                                        <span> <i>({ item.arti })</i></span>

                                    </div>
                                </div>
                            </Link>
                        )) :
                        <div className="card col-start-2 mt-5 mb-5 bg-base-100 shadow-xl text-center">
                            <div className="card-body">
                                <h2 className="card-title justify-center ">Sorry...</h2>
                                <p >Sorry, the surah you are looking for doesn't exist. try it in other words</p>

                            </div>
                        </div>
                }

                <ScrollToTop />

            </div>



        </>
    )

}