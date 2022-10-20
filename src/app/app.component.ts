import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Artifact } from './shared/abi-models';
import { ABIParserService } from './shared/abi-parser.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('fade', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate(1000, style({ opacity: 1 }))
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate(1000, style({ opacity: 0 }))
      ])
    ])
  ]
})
export class AppComponent {
  title = 'smart-evm-builder';

  artifactJSONInput = new FormControl('', [])

  artifact: Artifact | undefined

  smartEVMManifestForm = new FormGroup({})

  constructor(private abiService: ABIParserService) {
  
  }

  startButtonClicked() {
    const artifactJSON = this.artifactJSONInput.value as string
    const artifact = this.abiService.parseArtifact(artifactJSON)

    this.smartEVMManifestForm = new FormGroup({})

    artifact.abi.forEach(func => {
      const name = func.name === undefined ? "evm_constructor" : func.name!
      const formControl = new FormControl('', [Validators.required])
      this.smartEVMManifestForm.addControl(name, formControl)

      func.inputs.forEach(input => {
        const inputName = `${name}+_+${input.name}`
        const inputFC = new FormControl('', Validators.required)
        this.smartEVMManifestForm.addControl(inputName,inputFC)
      })
      
    })
    this.artifact = artifact
  }
}
