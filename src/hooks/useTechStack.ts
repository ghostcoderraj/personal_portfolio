import { useState } from "react";
import { Tech } from "@/types";
import { techStack as initialTech } from "@/data/tech";

export function useTechStack() {
    const [techStack] = useState<Tech[]>(initialTech);
    const [loading] = useState(false);

    return {
        techStack,
        loading,
    };
}
