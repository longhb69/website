import { motion } from "framer-motion";

export default function VideoSection() {
    return (
        <section className="bg-[#FFCEBD] w-full py-10">
            <div className="container mx-auto px-4">
                <motion.div 
                    className="max-w-6xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl aspect-video">
                        <iframe 
                            className="absolute top-0 left-0 w-full h-full"
                            src="https://www.youtube.com/embed/DZAdVY9kKbc?si=CdzQObKinLchFJdl" 
                            title="Trải nghiệm học lái xe tại Trung Tâm Đào Tạo Lái Xe Hoà Bình" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            referrerPolicy="strict-origin-when-cross-origin" 
                            allowFullScreen
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}