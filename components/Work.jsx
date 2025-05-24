import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function Work({ isDark }) {
  const projectsPerPage = 4;

  const [currentPage, setCurrentPage] = useState(0);

  const startIndex = currentPage * projectsPerPage;
  const endIndex = startIndex + projectsPerPage;

  const projectsToShow = workData.slice(startIndex, endIndex);

  const hasMoreProjects = endIndex < workData.length;

  const hasPrevProjects = currentPage > 0;

  const handleShowMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handleShowPrev = () => {
    setCurrentPage((prevPage) => Math.max(0, prevPage - 1));
  };

  const containerVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      x: -100,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="work"
      className=" w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className=" text-center mb-2 text-lg font-Ovo"
      >
        My Portfolio
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className=" text-center text-5xl font-Ovo"
      >
        My Latest Work
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className=" text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
      >
        This repository showcases my comprehensive full-stack development
        projects, including user authentication, property listing management,
        profile updates, and interactive features built with React, Node.js,
        Express, MongoDB, and Tailwind CSS. It demonstrates my skills in
        building scalable web applications with a focus on clean code,
        responsive design, and seamless user experience. Explore the codebase to
        see practical implementations of authentication flows, CRUD operations,
        and state management with Redux.
      </motion.p>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-10 gap-5 dark:text-black"
        >
          {projectsToShow.map((project, index) => (
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className=" aspect-square bg-no-repeat bg-cover bg-current rounded-lg relative cursor-pointer group"
              key={project.title || index}
              style={{ backgroundImage: `url(${project.bgImage})` }}
            >
              <div className=" bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
                <div>
                  <h2 className=" font-semibold ">{project.title}</h2>
                  <p className=" text-sm text-gray-700">
                    {project.description}
                  </p>
                </div>
                <div className=" border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_black] group-hover:bg-lime-300 transition">
                  <a target="_blank" href={project.link}>
                    <Image
                      src={assets.send_icon}
                      alt="send_icon"
                      className=" w-5"
                    />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      <div className="flex justify-center gap-4">
        {hasPrevProjects && (
          <motion.a
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            onClick={handleShowPrev}
            className=" w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover cursor-pointer"
          >
            <Image
              src={
                isDark ? assets.right_arrow_bold_dark : assets.right_arrow_bold
              }
              alt="left_arrow_bold"
              className=" w-4 rotate-180"
            />
            Show Prev
          </motion.a>
        )}

        {hasMoreProjects && (
          <motion.a
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            onClick={handleShowMore}
            className=" w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover cursor-pointer"
          >
            Show More{" "}
            <Image
              src={
                isDark ? assets.right_arrow_bold_dark : assets.right_arrow_bold
              }
              alt="right_arrow_bold"
              className=" w-4"
            />
          </motion.a>
        )}
      </div>
    </motion.div>
  );
}

export default Work;
