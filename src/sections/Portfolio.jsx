import React, { useState, useEffect, useCallback } from "react";
import { FaCode, FaAward, FaBoxes } from "react-icons/fa";
import CardProject from "../components/fragments/CardProject";
import { CertificateCard } from "../components/fragments/CertificateCard";
import TechStackIcon from "../components/fragments/TechStackCard";
import { projectsData } from "../components/data/ProjectsData";
import { certificatesData } from "../components/data/CertificatesData";
import { techStacksData } from "../components/data/TechStacksData";



const ToggleButton = ({ onClick, isShowingMore }) => (
    <button
        onClick={onClick}
        className="px-3 py-1.5 text-slate-300 hover:text-white text-sm font-medium transition-all duration-300 ease-in-out flex items-center gap-2 bg-white/5 hover:bg-white/10 rounded-md border border-white/10 hover:border-white/20 backdrop-blur-sm group relative overflow-hidden"
    >
        <span className="relative z-10 flex items-center gap-2">
            {isShowingMore ? "See Less" : "See More"}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`transition-transform duration-300 ${isShowingMore
                    ? "group-hover:-translate-y-0.5"
                    : "group-hover:translate-y-0.5"
                    }`}
            >
                <polyline
                    points={isShowingMore ? "18 15 12 9 6 15" : "6 9 12 15 18 9"}
                ></polyline>
            </svg>
        </span>
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500/50 transition-all duration-300 group-hover:w-full"></span>
    </button>
);

export function Portfolio() {
    const [activeTab, setActiveTab] = useState(0);
    const [showAllProjects, setShowAllProjects] = useState(false);
    const [showAllCertificates, setShowAllCertificates] = useState(false);

    const isMobile = window.innerWidth < 768;
    const initialItems = isMobile ? 3 : 4;


    const displayedProjects = showAllProjects
        ? projectsData
        : projectsData.slice(0, initialItems);

    const displayedCertificates = showAllCertificates
        ? certificatesData
        : certificatesData.slice(0, initialItems);

    return (
        <div
            className="w-full mt-32"
            id="Portfolio"
        >
            {/* Header */}
            <div
                className="text-center pb-10"
            >
                <h2 className="inline-block text-3xl md:text-5xl font-bold text-center mx-auto gradient-text">
                    Portfolio Showcase
                </h2>
                <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base mt-2">
                    Explore my journey through projects, certifications, and technical
                    expertise. Each section represents a milestone in my continuous
                    learning path.
                </p>
            </div>

            {/* Tabs */}
            <div className="flex justify-center md:gap-4 mb-8">
                {[
                    { icon: <FaCode />, label: "Projects" },
                    { icon: <FaAward />, label: "Certificates" },
                    { icon: <FaBoxes />, label: "Tech Stack" },
                ].map((tab, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveTab(index)}
                        className={`flex text-sm md:text-base items-center gap-2 px-4 py-2 md:px-5 md:py-2 rounded-lg font-semibold transition-all duration-300 ${activeTab === index
                            ? "bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-white shadow-lg"
                            : "text-slate-400 hover:text-white hover:bg-white/5"
                            }`}
                    >
                        {tab.icon}
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Tab Panels */}
            {activeTab === 0 && (
                <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
                        {displayedProjects.map((project, index) => (
                            <div
                                key={project.id}
                                data-aos={
                                    index % 3 === 0
                                        ? "fade-up-right"
                                        : index % 3 === 1
                                            ? "fade-up"
                                            : "fade-up-left"
                                }
                                data-aos-duration="1000"
                            >
                                <CardProject {...project} />
                            </div>
                        ))}
                    </div>
                    {projectsData.length > initialItems && (
                        <div className="mt-6 w-full flex justify-start">
                            <ToggleButton
                                onClick={() => setShowAllProjects((prev) => !prev)}
                                isShowingMore={showAllProjects}
                            />
                        </div>
                    )}
                </div>
            )}

            {activeTab === 1 && (
                <div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        {displayedCertificates.map((certificate, index) => (
                            <div
                                key={certificate.id}
                                data-aos={
                                    index % 3 === 0
                                        ? "fade-up-right"
                                        : index % 3 === 1
                                            ? "fade-up"
                                            : "fade-up-left"
                                }
                                data-aos-duration="1000"
                            >
                                <CertificateCard ImgSertif={certificate.Img} />
                            </div>
                        ))}
                    </div>
                    {certificatesData.length > initialItems && (
                        <div className="mt-6 w-full flex justify-start">
                            <ToggleButton
                                onClick={() => setShowAllCertificates((prev) => !prev)}
                                isShowingMore={showAllCertificates}
                            />
                        </div>
                    )}
                </div>
            )}

            {activeTab === 2 && (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
                    {techStacksData.map((stack, index) => (
                        <div
                            key={index}
                            data-aos={
                                index % 3 === 0
                                    ? "fade-up-right"
                                    : index % 3 === 1
                                        ? "fade-up"
                                        : "fade-up-left"
                            }
                            data-aos-duration="1000"
                        >
                            <TechStackIcon {...stack} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
