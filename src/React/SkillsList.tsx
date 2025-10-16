import React, { useState } from "react";

const CategoryIcons = {
  "Web Development": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 text-[var(--sec)] opacity-70"
    >
      <path d="M21 3C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H21ZM20 11H4V19H20V11ZM20 5H4V9H20V5ZM11 6V8H9V6H11ZM7 6V8H5V6H7Z"></path>
    </svg>
  ),
  "Cloud Architecture": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 text-[var(--sec)] opacity-70"
    >
      <path d="M9.5 6C5.91 6 3 8.91 3 12.5C3 16.09 5.91 19 9.5 19H17C19.7614 19 22 16.7614 22 14C22 11.2386 19.7614 9 17 9C16.7495 9 16.5033 9.01842 16.2627 9.05399C15.4712 7.23269 13.6336 6 11.5 6C10.8573 6 10.2424 6.12263 9.67652 6.34696C9.61885 6.23127 9.5583 6.11723 9.495 6.00513C9.00895 5.07458 8.32995 4.31022 7.5 3.77735C6.67005 3.24448 5.69005 3 4.5 3C3.67157 3 3 3.67157 3 4.5C3 5.32843 3.67157 6 4.5 6C5.30995 6 5.98005 6.24448 6.5 6.52765C7.01995 6.81022 7.49105 7.23542 7.755 7.74487C7.90135 8.05283 7.98115 8.40717 8 8.75C8.34342 7.48343 9.31658 6.5 10.5 6C11.0523 6 11.5 6.44772 11.5 7C11.5 7.55228 11.0523 8 10.5 8C9.67157 8 9 8.67157 9 9.5V10C9 10.5523 8.55228 11 8 11H7C5.34315 11 4 12.3431 4 14C4 15.6569 5.34315 17 7 17H17C18.6569 17 20 15.6569 20 14C20 12.3431 18.6569 11 17 11H16C15.4477 11 15 10.5523 15 10C15 8.89543 14.1046 8 13 8H11.5C10.1193 8 9 9.11929 9 10.5C9 11.8807 10.1193 13 11.5 13H17C19.7614 13 22 10.7614 22 8C22 5.23858 19.7614 3 17 3C14.6265 3 12.6446 4.60879 12.1492 6.78133C11.1183 6.28116 9.94189 6 8.5 6H9.5Z"></path>
    </svg>
  ),
  "DevOps": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 text-[var(--sec)] opacity-70"
    >
      <path d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM13 12V17H11V12H8L12 7L16 12H13Z"></path>
    </svg>
  ),
};

const SkillsList = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const skills = {
    "Web Development": [
      "Single Page Applications (SPAs)",
      "Landing pages and business websites",
      "Portfolio websites",
    ],
    "Cloud Architecture": [
      "AWS, Azure, and GCP cloud platforms",
      "Microservices and serverless architecture",
      "Infrastructure as Code (IaC)",
    ],
    "DevOps": [
      "CI/CD pipeline automation",
      "Docker and Kubernetes orchestration",
      "Monitoring and observability",
    ],
  };

  const toggleItem = (item: string) => {
    setOpenItem(openItem === item ? null : item);
  };

  return (
    <div className="text-left pt-3 md:pt-9">
      <h3 className="text-[var(--white)] text-3xl md:text-4xl font-semibold md:mb-6">
        What I do?
      </h3>
      <ul className="space-y-4 mt-4 text-lg">
        {Object.entries(skills).map(([category, items]) => (
          <li key={category} className="w-full">
            <div
              onClick={() => toggleItem(category)}
              className="md:w-[400px] w-full bg-[#1414149c] rounded-2xl text-left hover:bg-opacity-80 transition-all border border-[var(--white-icon-tr)] cursor-pointer overflow-hidden"
            >
              <div className="flex items-center gap-3 p-4">
                {CategoryIcons[category]}
                <div className="flex items-center gap-2 flex-grow justify-between">
                  <div className="min-w-0 max-w-[200px] md:max-w-none overflow-hidden">
                    <span className="block truncate text-[var(--white)] text-lg">
                      {category}
                    </span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={`w-6 h-6 text-[var(--white)] transform transition-transform flex-shrink-0 ${
                      openItem === category ? "rotate-180" : ""
                    }`}
                  >
                    <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
                  </svg>
                </div>
              </div>

              <div
                className={`transition-all duration-300 px-4 ${
                  openItem === category
                    ? "max-h-[500px] pb-4 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <ul className="space-y-2 text-[var(--white-icon)] text-sm">
                  {items.map((item, index) => (
                    <div key={index} className="flex items-center">
                      <span className="pl-1">•</span>
                      <li className="pl-3">{item}</li>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsList;
