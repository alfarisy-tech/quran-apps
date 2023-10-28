'use client'
import React from 'react'
import Navbar from '@/components/Navbar'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link as ReactScrollLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import ScrollToTop from '@/components/ScrollToTop'

export default function Index({ params }) {
    const [originalData, setOriginalData] = useState([])
    const [data, setData] = useState([]);

    const fetchData = async () => {
        await axios.get(`https://equran.id/api/v2/surat/${params.surat}`)
            .then(function (response) {
                setOriginalData(response.data.data.ayat);
                setData(response.data.data.ayat);
                scrollSpy.update();
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
        // Initialize scrollSpy when the component mounts
        scrollSpy.update();

        // Watch for changes in 'data' and update scrollSpy accordingly
        scrollSpy.update();
    }, [data]);
    return (
        <>

            <div className="grid lg:grid-cols-6 gap-4 justify-center">
                <div className="card bg-accent mb-5 rounded-full mt-5 p-2 shadow-xl col-start-2 col-span-4">
                    <div className="form-control">
                        <div className="input-group">
                            <select defaultValue={ '' } className="select select-bordered" onChange={ (e) => {
                                const selectedAyat = e.target.value;
                                scroller.scrollTo(`section-${selectedAyat}`, {
                                    spy: true,
                                    smooth: true,
                                    offset: -50,
                                    duration: 500,
                                });

                                // Update scrollSpy when you manually scroll to an element
                                scrollSpy.update();
                            } }>
                                <option value="" disabled={ true }>Ayat</option>
                                { data.map((item, i) => (
                                    <option value={ item.nomorAyat } key={ i }>Ayat ke-{ item.nomorAyat }</option>
                                )) }
                            </select>

                            <input type="text" onChange={ cariSurat } placeholder="Search…" className="input w-full input-bordered" />
                            <button className="btn btn-square">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid lg:grid-cols-none gap-4">
                {
                    data.length >= 1 ?
                        data.map((item, i) => (
                            <Element name={ `section-${item.nomorAyat}` } className="element">
                                <div key={ i } className="card bg-accent-focus text-center shadow-xl">
                                    <div className="card-body">
                                        <p className="text-end">{ `{${item.nomorAyat}}` }. { item.teksArab }</p>
                                        <u className='text-end'>{ item.teksLatin }</u>
                                        <span className='text-end'>Artinya : <i>"({ item.teksIndonesia })"</i></span>

                                    </div>
                                </div>
                            </Element>

                        )) :
                        <div className="card col-start-2 bg-accent-focus shadow-xl text-center">
                            <div className="card-body">
                                <h2 className="card-title justify-center ">Maaf...</h2>
                                <p >Ayat yang Anda cari tidak ada.</p>

                            </div>
                        </div>
                }
                <ScrollToTop />
            </div>
        </>
    )

}