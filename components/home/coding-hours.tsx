"use client";
import { useEffect, useState } from "react";
import { ClockIcon } from "lucide-react";

const CodingHours = () => {
  const [time, setTime] = useState<string>("Counting...");

  useEffect(() => {
    const fetchTime = async () => {
      try {
        const res = await fetch("/api/wakatime");
        const json = await res.json();
        if (json.errorMsg) {
          setTime(json.errorMsg);
        } else {
          setTime(json.WakaTimeResponse?.data?.text ?? "Unavailable");
        }
      } catch (err) {
        console.error("Failed to fetch coding time from WakaTime:", err);
        setTime("Unavailable");
      }
    };

    fetchTime();
  }, []);

  return (
    <div className="shadow-feature-card flex flex-col gap-6 rounded-xl p-4 lg:p-6">
      <div className="flex items-center gap-2">
        <ClockIcon className="size-[18px]" />
        <h2 className="text-sm">Coding hours</h2>
      </div>
      <div className="flex grow items-center justify-center text-4xl font-semibold">
        {time}
      </div>
    </div>
  );
};

export default CodingHours;