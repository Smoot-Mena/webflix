import React, { useEffect, useState } from 'react'

function Carousel( {children} ) {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [length, setLength] = useState(children.length);

    useEffect(() => {
        setLength(children.length);
    }, [children])

    const next = () => {
        if (currentIndex < (length - 1)) {
            setCurrentIndex(prevState => prevState + 1);
        }
    }

    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevState => prevState - 1);
        }
    }

    return (
        <section>
            {/* {<button onClick={prev} className="left-arrow">⬅</button>} */}
            {children}
            {/* {<button onClick={next} className="right-arrow">➡</button>} */}
        </section>
    )
}

export default Carousel;