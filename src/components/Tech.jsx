import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <>
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {/* {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))} */}

    <div className='flex flex-col items-center'>
      <div style={{ fontSize: '54px' }}>SKILLS</div>
      <div style={{ fontSize: '24px' }}>JAVA SE/EE || C ++ || C-PROGRAMMING || C# || PYTHON || JAVASCRIPT || REACT || HTML-CSS-BOOTSTRAP || ASP.NET || .NET CORE/FRAMEWORK || MYSQL-PLSQL || LINUX</div>
    </div>

    <div className='flex flex-col items-center'>
      <div style={{ fontSize: '54px' }}>SKILLS SUMMARY </div>
    </div>
    </div>

      <div style={{ paddingTop: '20px' }}>
      <div style={{ fontSize: '24px' }}>JAVA SE/EE :</div>
      <div style={{ fontSize: '14px' }}>I have a strong foundation in Java SE concepts such as Object-Oriented Programming (OOP) and Java EE concepts including SpringBoot, Hibernate, JDBC, and MVC. I have applied these skills in creating enterprise web pages during my academic projects at CDAC. I handled the backend using the aforementioned technologies and frameworks.</div>
      </div>

      <div style={{ paddingTop: '20px' }}>
      <div style={{ fontSize: '24px' }}>C-PROGRAMMING AND C++ :</div>
      <div style={{ fontSize: '14px' }}>I possess a strong understanding of C and C++ programming languages, augmented by the completion of data structures coursework in both. I have successfully solved numerous coding Questions using these languages</div>
      </div>

      <div style={{ paddingTop: '20px' }}>
      <div style={{ fontSize: '24px' }}>PYTHON :</div>
      <div style={{ fontSize: '14px' }}>I received a certificate from Symbiosis Skill University for attending and successfully passing the Python workshop held during my final year of MSc in Physics. My MSc academic project was based on Python, demonstrating my beginner-level proficiency in the language and its libraries, including Pandas, NumPy,Matplotlib and Scikit Learn.</div>
      </div>

      <div style={{ paddingTop: '20px' }}>
      <div style={{ fontSize: '24px' }}>C # , ASP.NET , .NET CORE/FRAMEWORK :</div>
      <div style={{ fontSize: '14px' }}>Proficient in C # , a powerful and versatile programming language commonly used for developing Windows applications, web applications, and services within the .NET ecosystem. Skilled in ASP.NET, leveraging technologies such as MVC . Experienced in .NET Core/Framework. Capable of utilizing the latest features and advancements in the .NET ecosystem to deliver high-quality software solutions efficiently.</div>
      </div>

      <div style={{ paddingTop: '20px' }}>
      <div style={{ fontSize: '24px' }}>REACT – JAVASCRIPT – HTML – CSS – BOOTSTRAP (WEB-TECHNOLOGIES) :</div>
      <div style={{ fontSize: '14px' }}>Proficient in a suite of web technologies, including React.js, JavaScript, HTML, CSS, and Bootstrap. Experienced in leveraging these tools to develop dynamic and responsive web applications. Implemented these technologies in my CDAC academic project, showcasing a strong understanding and practical application. Additionally, completed various small tasks and projects demonstrating adaptability and continuous learning in web development.</div>
      </div>

      <div style={{ paddingTop: '20px' }}>
      <div style={{ fontSize: '24px' }}>MYSQL and PLSQL (DATABASE TECHNOLOGY) :</div>
      <div style={{ fontSize: '14px' }}>Proficient in MySQL. Skilled in designing, implementing, and optimizing MySQL databases to efficiently store and retrieve data. Understanding in writing complex SQL queries, creating and managing database schemas, and ensuring data integrity and security.</div>
      </div>

      <div style={{ paddingTop: '20px' }}>
      <div style={{ fontSize: '24px' }}>GIT - GIT HUB (VERSION CONTROL) :</div>
      <div style={{ fontSize: '14px' }}>Proficient in utilizing Git and GitHub for version control, ensuring organized and efficient management of all academic project (mentioned above) and personal portfolio projects. Leveraging the power of version control, all projects are meticulously maintained and documented, fostering transparency and accountability throughout development processes. Furthermore, deployment of projects is streamlined through Vercel, ensuring seamless integration and accessibility for end-users.</div>
      </div>

      <div style={{ paddingTop: '20px' }}>
      <div style={{ fontSize: '24px' }}>LINUX (OPERATING SYSYTEM) :</div>
      <div style={{ fontSize: '14px' }}>I am drawn to Linux for its community-driven ethos and vast array of software tools. While currently at a beginner level, I enthusiastically embrace its potential. I utilize tools like Vim to code in Java, Python, and C++, continually expanding my proficiency in this versatile operating system.</div>
      </div>

      <div style={{ paddingTop: '20px' }}>
      <div style={{ fontSize: '24px' }}>IDE's / DEVELOPMENT TOOLS :</div>
      <div style={{ fontSize: '14px' }}>Proficient in utilizing a variety of IDEs and development tools to streamline software development processes. Experienced in Eclipse and IntelliJ IDEA for Java development, Microsoft Visual Studio for .NET applications, and VS Code for versatile code editing. Familiar with VIM for efficient text editing and Dev C++ for C and C++ programming. Additionally, skilled in utilizing Anaconda with Jupiter Notebook for data analysis tasks. Proficient in managing databases using MySQL Command Line. Adaptable to various workspaces, ensuring optimal productivity and seamless collaboration.</div>
      </div>

    </>
  );
};

export default SectionWrapper(Tech, "");
