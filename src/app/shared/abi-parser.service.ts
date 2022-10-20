import { Injectable } from "@angular/core";
import { Artifact } from "./abi-models";

@Injectable({
    providedIn: 'root',
})
export class ABIParserService {

    parseArtifact(input: string): Artifact {
        return JSON.parse(input) as Artifact
    }

}