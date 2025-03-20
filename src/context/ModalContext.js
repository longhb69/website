import {createContext, useContext, useEffect, useRef, useState} from 'react'

const ModalContext = createContext();

export function UseModal() {
    return useContext(ModalContext)
}

export function ModalProvider({ children }) {
    const [modal, setModal] = useState({})
    const nextBtnRef = useRef()
    const prevBtnRef = useRef()

    const rednerComponent = () => {
        return <>
            {modal.modals && modal.modals.length >= 1 &&( 
                <>
                    <div className="backdrop" style={{ backgroundColor: 'rgba(0,0,0,0.64)', backdropFilter: 'blur(0px)' }}></div>
                    <div className="layer_ad">
                        <div className="flex flex-col min-h-[0px] max-w-[100%]" aria-modal="true" role="dialog">
                            <div className="modal_image carouselModal">
                                <div className="absolute top-[60px] bottom-[60px] left-[110px] right-[110px] flex justify-center cursor-zoom-out modalCarouselWrapper">
                                    modal
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    }

    useEffect(() => {
        rednerComponent()
        console.log("modal", modal?.modals?.length)
    }, [modal])

    return (
        <ModalContext.Provider value={{ setModal }}>
            {children}
        </ModalContext.Provider>
    );
}