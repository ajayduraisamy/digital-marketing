"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Testimonials = () => {
    const testimonials = [
        {
            name: "John Doe",
            designation: "Marketing Specialist",
            feedback:
                "This digital marketing course gave me practical skills that I could apply immediately in my job. Highly recommended!",
            avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        },
        {
            name: "Jane Smith",
            designation: "Small Business Owner",
            feedback:
                "Thanks to this course, I now manage my social media campaigns and SEO strategies effectively. Amazing learning experience!",
            avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        },
        {
            name: "Alex Johnson",
            designation: "Freelancer",
            feedback:
                "The course content is well-structured, hands-on, and easy to follow. It boosted my freelance marketing services tremendously!",
            avatar: "https://randomuser.me/api/portraits/men/55.jpg",
        },
        {
            name: "Sara Lee",
            designation: "Entrepreneur",
            feedback:
                "I learned so much from this course. Now I run my marketing campaigns efficiently and confidently!",
            avatar: "https://randomuser.me/api/portraits/women/65.jpg",
        },
        {
            name: "Mike Brown",
            designation: "Digital Marketer",
            feedback:
                "Excellent hands-on experience! The course content is structured and practical for real-world projects.",
            avatar: "https://randomuser.me/api/portraits/men/75.jpg",
        },
    ];

    const TestimonialCard = ({ name, designation, feedback, avatar }) => (
        <motion.div
            className="bg-gradient-to-br from-white/90 to-gray-100/90 dark:from-gray-800/90 dark:to-gray-900/90 p-6 rounded-2xl shadow-2xl flex flex-col items-center text-center space-y-4 min-w-[300px] mx-4 hover:shadow-3xl"
            whileHover={{ scale: 1.05 }}
        >
            <div className="relative w-20 h-20">
                <Image
                    src={avatar}
                    alt={name}
                    fill
                    className="rounded-full object-cover border-4 border-indigo-500"
                />
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">{name}</h3>
            <p className="text-sm text-indigo-600 dark:text-indigo-400">{designation}</p>
            <p className="text-gray-700 dark:text-gray-300">{feedback}</p>
        </motion.div>
    );

    return (
        <section className="py-20 bg-gray-50 dark:bg-gray-900" id="testimonials">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100 text-center mb-12">
                    What Our Students Say
                </h2>

                {/* Horizontal scroll container */}
                <motion.div
                    className="flex overflow-x-auto py-4 no-scrollbar"
                    initial={{ x: 100 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    {testimonials.map((t, index) => (
                        <TestimonialCard
                            key={index}
                            name={t.name}
                            designation={t.designation}
                            feedback={t.feedback}
                            avatar={t.avatar}
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;
