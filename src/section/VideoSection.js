import { motion } from "framer-motion";

export default function VideoSection() {
    return (
        <section className="bg-[#FFCEBD] w-full py-10">
            <div className="container h-full mx-auto px-4">
                <motion.div 
                    className="max-w-[95%] h-full mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <div className="relative w-full h-[75%] rounded-2xl overflow-hidden shadow-2xl aspect-video">
                        <video className="w-full" controls autoplay muted loop>
                            <source src="https://downloads.blackmagicdesign.com/videos/products/davinciresolve/landing/hero/20250331-6882b0/hero.hd.720p.mp4" type="video/mp4"/>
                        </video>
                        {/* <iframe 
                            className="absolute top-0 left-0 w-full h-full"
                            src="https://www.youtube.com/embed/DZAdVY9kKbc?si=CdzQObKinLchFJdl" 
                            title="Trải nghiệm học lái xe tại Trung Tâm Đào Tạo Lái Xe Hoà Bình" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            referrerPolicy="strict-origin-when-cross-origin" 
                            allowFullScreen
                        /> */}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}