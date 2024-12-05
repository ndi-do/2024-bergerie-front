import { motion } from 'framer-motion';
import './Section.css';

export interface SectionProps {
    title: string;
    content: string;
}

export default function Section({ title, content }: SectionProps) {
    return (
        <motion.div
            className="section"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <h2>{title}</h2>
            <p>{content}</p>
        </motion.div>
    );
}