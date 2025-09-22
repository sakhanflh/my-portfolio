import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
    FaArrowLeft, FaExternalLinkAlt, FaGithub, FaCode, FaStar,
    FaLayerGroup, FaThLarge, FaGlobe, FaBox, FaMicrochip, FaChevronRight
} from "react-icons/fa";

import { projectsData } from "../components/data/ProjectsData";

const TECH_ICONS = {
    React: FaGlobe,
    Tailwind: FaThLarge,
    Express: FaMicrochip,
    Python: FaCode,
    Javascript: FaCode,
    HTML: FaCode,
    CSS: FaCode,
    default: FaBox,
};

const TechBadge = ({ tech }) => {
    const Icon = TECH_ICONS[tech] || TECH_ICONS.default;
    return (
        <div className="group relative overflow-hidden px-3 py-2 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-xl border border-blue-500/10 hover:border-blue-500/30 transition-all duration-300 cursor-default">
            <div className="relative flex items-center gap-2">
                <Icon className="w-4 h-4 text-blue-400 group-hover:text-blue-300 transition-colors" />
                <span className="text-sm font-medium text-blue-300/90 group-hover:text-blue-200 transition-colors">
                    {tech}
                </span>
            </div>
        </div>
    );
};

const FeatureItem = ({ feature }) => (
    <li className="flex items-start space-x-3 p-3 rounded-xl hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/10">
        <div className="relative mt-2">
            <div className="relative w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400" />
        </div>
        <span className="text-base text-gray-300 group-hover:text-white transition-colors">
            {feature}
        </span>
    </li>
);

const ProjectStats = ({ project }) => {
    const techStackCount = project?.tech?.length || 0;
    const featuresCount = project?.features?.length || 0;
    return (
        <div className="grid grid-cols-2 gap-4 p-4 bg-[#0a0a1a] rounded-xl relative">
            <div className="flex items-center space-x-3 bg-white/5 p-3 rounded-lg border border-blue-500/20 hover:border-blue-500/50 hover:scale-105 transition-all duration-300">
                <FaCode className="text-blue-300 w-5 h-5" />
                <div>
                    <div className="text-xl font-semibold text-blue-200">{techStackCount}</div>
                    <div className="text-xs text-gray-400">Total Tech</div>
                </div>
            </div>
            <div className="flex items-center space-x-3 bg-white/5 p-3 rounded-lg border border-purple-500/20 hover:border-purple-500/50 hover:scale-105 transition-all duration-300">
                <FaLayerGroup className="text-purple-300 w-5 h-5" />
                <div>
                    <div className="text-xl font-semibold text-purple-200">{featuresCount}</div>
                    <div className="text-xs text-gray-400">Key Features</div>
                </div>
            </div>
        </div>
    );
};

const ProjectDetailPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [project, setProject] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        const selectedProject = projectsData.find((p) => String(p.id) === id);
        if (selectedProject) {
            setProject({
                ...selectedProject,
                features: selectedProject.features || [],
                tech: selectedProject.tech || [],
                Link: selectedProject.Link || null,
                Github: selectedProject.Github || null,
            });
        }
    }, [id]);
    console.log("Project data:", project);
    if (!project) {
        return (
            <div className="min-h-screen bg-[#030014] flex items-center justify-center">
                <h2 className="text-2xl font-bold text-white">Loading Project...</h2>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#030014] px-4 py-20">
            <div className="flex items-center space-x-2 md:space-x-4 mb-8 md:mb-12 animate-fadeIn">
                <button
                    onClick={() => navigate(-1)}
                    className="group cursor-pointer inline-flex items-center space-x-1.5 md:space-x-2 px-3 md:px-5 py-2 md:py-2.5 bg-white/5 backdrop-blur-xl rounded-xl text-white/90 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20 text-sm md:text-base"
                >
                    <FaArrowLeft className="w-4 h-4 md:w-5 md:h-5 group-hover:-translate-x-1 transition-transform" />
                    <span>Back</span>
                </button>
                <div className="flex items-center space-x-1 md:space-x-2 text-sm md:text-base text-white/50">
                    <span className="cursor-pointer hover:text-white/90 transition-all duration-300">Projects</span>
                    <FaChevronRight className="w-3 h-3 md:w-4 md:h-4" />
                    <span className="text-white/90 truncate">{project.Title}</span>
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-10 md:gap-20">
                <div className="md:w-1/2">
                    <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-200 to-purple-200 inline-block bg-clip-text text-transparent leading-tight mb-4">{project.Title}</h1>
                    <div className="relative h-1 w-16 md:w-24 mb-6">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse" />
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-sm" />
                    </div>
                    <p className="text-gray-300 text-xl mb-6">{project.Description}</p>

                    <ProjectStats project={project} />

                    <div className="flex flex-wrap gap-4 mt-6">
                        {project.Link && (
                            <a
                                href={project.Link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative flex items-center justify-center gap-2 px-4 md:px-8 py-2.5 md:py-4 bg-gradient-to-r from-blue-600/10 to-purple-600/10 hover:from-blue-600/20 hover:to-purple-600/20 text-blue-300 rounded-xl transition-all duration-300 border border-blue-500/20 hover:border-blue-500/40 backdrop-blur-xl overflow-hidden"
                            >
                                {/* Overlay */}
                                <span className="absolute inset-0 translate-y-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 transition-transform duration-300 group-hover:translate-y-0 rounded-xl" />

                                {/* Isi tombol */}
                                <FaExternalLinkAlt className="relative w-4 h-4 md:w-5 md:h-5 group-hover:rotate-12 transition-transform" />
                                <span className="relative font-medium">Live Demo</span>
                            </a>

                        )}
                        {project.Github ? (
                            <a
                                href={project.Github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative flex items-center justify-center gap-2 px-4 md:px-8 py-2.5 md:py-4 bg-gradient-to-r from-purple-600/10 to-pink-600/10 hover:from-purple-600/20 hover:to-pink-600/20 text-purple-300 rounded-xl transition-all duration-300 border border-purple-500/20 hover:border-purple-500/40 backdrop-blur-xl overflow-hidden text-sm md:text-base"
                            >
                                {/* Overlay */}
                                <span className="absolute inset-0 translate-y-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 transition-transform duration-300 group-hover:translate-y-0 rounded-xl" />

                                {/* Isi */}
                                <FaGithub className="relative w-4 h-4 md:w-5 md:h-5 group-hover:rotate-12 transition-transform" />
                                <span className="relative font-medium">Github</span>
                            </a>

                        ) : (
                            <button
                                onClick={() => alert("Maaf, source code untuk proyek ini privat.")}
                                className="group relative inline-flex items-center space-x-1.5 md:space-x-2 px-4 md:px-8 py-2.5 md:py-4 bg-gradient-to-r from-purple-600/10 to-pink-600/10 hover:from-purple-600/20 hover:to-pink-600/20 text-purple-300 rounded-xl transition-all duration-300 border border-purple-500/20 hover:border-purple-500/40 backdrop-blur-xl overflow-hidden text-sm md:text-base"
                            >
                                <FaGithub /> Private
                            </button>
                        )}
                    </div>

                    {/* Tech stack */}
                    <div className="mt-8">
                        <h3 className="text-xl font-semibold text-white mb-3">Technologies Used</h3>
                        {project.tech.length > 0 ? (
                            <div className="flex flex-wrap gap-3">
                                {project.tech.map((item, index) => (
                                    <TechBadge key={index} tech={item.techTitle} />
                                ))}
                            </div>
                        ) : (
                            <p className="text-gray-400">No technologies added.</p>
                        )}
                    </div>

                    {/* Features */}

                </div>

                {/* Gambar + fitur kanan */}
                <div className="md:w-1/2">
                    <div className="h-72 overflow-hidden rounded-lg mb-4 relative group">
                        <img
                            src={project.Img}
                            alt={project.Title}
                            className={`w-full object-cover transition-transform ease-linear
                        ${project.scroll ? "duration-[8000ms] group-hover:-translate-y-[50%]" : ""}`}
                        />
                        {!project.scroll && (
                            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <p className="text-white font-semibold">No scroll animation</p>
                            </div>
                        )}
                    </div>
                    <div className="bg-white/[0.02] backdrop-blur-xl rounded-2xl p-8 border border-white/10 space-y-6 hover:border-white/20 transition-colors duration-300 group">
                        <h3 className="text-xl font-semibold text-white/90 flex items-center gap-3">
                            <FaStar className="w-5 h-5 text-yellow-400 group-hover:rotate-[20deg] transition-transform duration-300" />
                            Key Features
                        </h3>
                        {project.features.length > 0 ? (
                            <ul className="list-none space-y-2">
                                {project.features.map((feature, index) => (
                                    <FeatureItem key={index} feature={feature} />
                                ))}
                            </ul>
                        ) : (
                            <p className="text-gray-400 opacity-50">No features added.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetailPage;
