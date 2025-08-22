import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import BackendTechs from "../BackendTechs";

describe("BackendTechs", () => {
	it("Title in BackendTechs", () => {
        render(<BackendTechs/>)
        
        expect(screen.getByText("Backend")).toBeInTheDocument()
    });

	it("Components in BackendTechs", () => {
        render(<BackendTechs/>)
        
        expect(screen.getByText("MySQL")).toBeInTheDocument()
    });
});
