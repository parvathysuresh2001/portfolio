"use client";

import { SearchIcon } from "lucide-react";
import { useState } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { projects } from "@/lib/constants";
import ProjectCards from "./project-cards";

const FilteredProjects = () => {
  const [searchValue, setSearchValue] = useState("");

  // Filter projects based on search input
  const filteredProjects = projects.filter((project) =>
    project.name.toLowerCase().includes(searchValue.toLowerCase()) ||
    project.description.toLowerCase().includes(searchValue.toLowerCase()) ||
    project.detailedDescription.toLowerCase().includes(searchValue.toLowerCase()) ||
    project.techstack.some(tech =>
      tech.toLowerCase().includes(searchValue.toLowerCase())
    )
  );

  return (
    <>
      <div className="relative mb-8">
        <Input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search for a project..."
          aria-label="Search for a project"
          className="w-full pl-12"
          id="search"
        />
        <Label htmlFor="search">
          <SearchIcon className="absolute left-4 top-1/2 size-5 -translate-y-1/2" />
        </Label>
      </div>

      {filteredProjects.length === 0 ? (
        <div className="my-24 text-center text-xl">No projects found.</div>
      ) : (
        <ProjectCards projects={filteredProjects} />
      )}
    </>
  );
};

export default FilteredProjects;