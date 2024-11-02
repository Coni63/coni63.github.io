import { Component, CUSTOM_ELEMENTS_SCHEMA, ChangeDetectionStrategy  } from '@angular/core';
import { AmbientLight, BoxGeometry, Mesh, MeshStandardMaterial, PointLight, SpotLight } from 'three';
import { CubeComponent } from '../cube/cube.component';
// import { StarsComponent } from '../stars/stars.component';
import { injectStore, extend, NgtArgs } from 'angular-three';
import { OrbitControls } from 'three-stdlib';
import { NgtsPointMaterial } from 'angular-three-soba/materials';
import { NgtsPointsBuffer } from 'angular-three-soba/performances';
import e from 'express';
import { StarsComponent } from '../stars/stars.component';

extend({ Mesh, MeshStandardMaterial, BoxGeometry, AmbientLight, PointLight, SpotLight });
extend({ OrbitControls });
extend({ NgtsPointsBuffer });

@Component({
    standalone: true,
    templateUrl: './scene.component.html',
    styleUrl: './scene.component.scss',
    imports: [ 
        CubeComponent, 
        StarsComponent, 
        NgtArgs
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SceneGraph {
    protected readonly Math = Math;

    private store = injectStore();
    protected camera = this.store.select('camera');
    protected glDomElement = this.store.select('gl', 'domElement');
}
