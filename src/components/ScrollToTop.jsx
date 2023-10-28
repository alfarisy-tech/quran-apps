import { FaArrowAltCircleUp } from 'react-icons/fa'
export default function ScrollToTop() {
    return (
        <>
            <FaArrowAltCircleUp className="fixed bottom-5 right-5 z-50 text-4xl text-accent-focus cursor-pointer" onClick={ () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                });
            } } />
        </>
    )
}