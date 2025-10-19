"use client";

import { SearchIcon } from "lucide-react";
import { useState } from "react";
import CertificateCards from "./certificate-cards";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { certificates } from "@/lib/constants";

const FilteredCerts = () => {
  const [searchValue, setSearchValue] = useState("");

  // Filter certs based on search input
  const filteredCerts = certificates.filter((certificate) =>
    certificate.certificateName.toLowerCase().includes(searchValue.toLowerCase()) ||
    certificate.description.toLowerCase().includes(searchValue.toLowerCase()) ||
    certificate.issuer.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <>
      <div className="relative mb-8">
        <Input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search for a certificate..."
          aria-label="Search for a certificate"
          className="w-full pl-12"
          id="search"
        />
        <Label htmlFor="search">
          <SearchIcon className="absolute left-4 top-1/2 size-5 -translate-y-1/2" />
        </Label>
      </div>

      {filteredCerts.length === 0 ? (
        <div className="my-24 text-center text-xl">No certificate found.</div>
      ) : (
        <CertificateCards posts={filteredCerts} />
      )}
    </>
  );
};

export default FilteredCerts;