import { Injectable } from "@angular/core";
import { AbstractControl, FormGroup } from "@angular/forms";
import { Artifact } from "./abi-models";

@Injectable({
    providedIn: 'root',
})
export class ManifestMakerService {

    createManifest(group: FormGroup, artifact: Artifact) {
        artifact.abi.forEach(func => {
            if(func.type === 'constructor') {

            }
           
        })      
    }
}

interface InterfaceManifestJson {
      name?: string
      description?: string
      eventDecorators: EventDecorator[]
      functionDecorators: FunctionDecorator[]
  }
  
  interface EventDecorator {
      signature: string
      name: string
    description: string
      parameterDecorators: TypeDecorator[]
  }
  
  interface FunctionDecorator {
      signature: string
      name: string
      description: string
      parameterDecorators: TypeDecorator[]
      returnDecorators: TypeDecorator[]
      emittableEvents: string[]
  }
  
  interface TypeDecorator {
      name: string
      description: string
      recommendedTypes: string[]
      parameters?: TypeDecorator[]
  }