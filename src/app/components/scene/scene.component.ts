import { Component, CUSTOM_ELEMENTS_SCHEMA, ChangeDetectionStrategy  } from '@angular/core';
import { AmbientLight, BoxGeometry, Mesh, MeshStandardMaterial, PointLight, SpotLight } from 'three';
import { CubeComponent } from '../cube/cube.component';
import { injectStore, extend, NgtArgs } from 'angular-three';
import { OrbitControls } from 'three-stdlib';

extend({ Mesh, MeshStandardMaterial, BoxGeometry, AmbientLight, PointLight, SpotLight });
extend({ OrbitControls });

@Component({
    standalone: true,
    templateUrl: './scene.component.html',
    styleUrl: './scene.component.scss',
    imports: [CubeComponent, NgtArgs],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SceneGraph {
    protected readonly Math = Math;

    private store = injectStore();
    protected camera = this.store.select('camera');
    protected glDomElement = this.store.select('gl', 'domElement');
}
