import { PathLike } from "fs";

declare function techSiteEngine(pagesFolder: PathLike): () => void;
export = techSiteEngine;