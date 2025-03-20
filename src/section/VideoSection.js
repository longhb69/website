export default function VideoSection() {
    return <section className="bg-[#FFCEBD] w-full h-full py-10">
        <div className="w-[80%] flex items-center mx-auto justify-center">
            <div className="flex-1">
                <iframe 
                    className="w-full h-[500px]" 
                    src="https://www.youtube.com/embed/DZAdVY9kKbc?si=CdzQObKinLchFJdl" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen>
                </iframe>
            </div>
        </div>
    </section>
}